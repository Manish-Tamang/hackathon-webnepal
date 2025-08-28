import { useState, useEffect, useCallback } from "react";

export interface Progress {
  id: string;
  user_id: string;
  topic: string;
  subtopic: string;
  completed: boolean;
  time_spent: number;
  completed_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface ProgressStats {
  totalLessons: number;
  completedLessons: number;
  totalTimeSpent: number;
  completionRate: number;
}

const STORAGE_KEY = "learning-progress";

export function useProgress() {
  const [progress, setProgress] = useState<Progress[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load progress from localStorage
  const loadProgressFromStorage = useCallback(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored) as Progress[];
      }
    } catch (err) {
      console.error("Error loading progress from localStorage:", err);
    }
    return [];
  }, []);

  // Save progress to localStorage
  const saveProgressToStorage = useCallback((progressData: Progress[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progressData));
    } catch (err) {
      console.error("Error saving progress to localStorage:", err);
      setError("Failed to save progress locally");
    }
  }, []);

  const fetchProgress = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const storedProgress = loadProgressFromStorage();
      setProgress(storedProgress);
    } catch (err) {
      console.error("Error fetching progress:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch progress");
    } finally {
      setLoading(false);
    }
  }, [loadProgressFromStorage]);

  const updateProgress = useCallback(
    async (
      topic: string,
      subtopic: string,
      completed?: boolean,
      timeSpent?: number
    ) => {
      try {
        const now = new Date().toISOString();
        const userId = "local-user";

        // local storage lai update garxa
        setProgress((prev) => {
          const existingIndex = prev.findIndex(
            (p) => p.topic === topic && p.subtopic === subtopic
          );

          let updatedProgress: Progress;

          if (existingIndex >= 0) {
            // Update garxa progress lai
            updatedProgress = {
              ...prev[existingIndex],
              completed: completed ?? prev[existingIndex].completed,
              time_spent: (timeSpent ?? 0) + prev[existingIndex].time_spent,
              completed_at: completed ? now : prev[existingIndex].completed_at,
              updated_at: now,
            };

            const newProgress = [...prev];
            newProgress[existingIndex] = updatedProgress;
            saveProgressToStorage(newProgress);
            return newProgress;
          } else {
            // Create new progress entry
            updatedProgress = {
              id: `${topic}-${subtopic}-${Date.now()}`,
              user_id: userId,
              topic,
              subtopic,
              completed: completed ?? false,
              time_spent: timeSpent ?? 0,
              completed_at: completed ? now : null,
              created_at: now,
              updated_at: now,
            };

            const newProgress = [...prev, updatedProgress];
            saveProgressToStorage(newProgress);
            return newProgress;
          }
        });

        return { success: true };
      } catch (err) {
        console.error("Error updating progress:", err);
        setError(
          err instanceof Error ? err.message : "Failed to update progress"
        );
        throw err;
      }
    },
    [saveProgressToStorage]
  );

  const getProgressForLesson = useCallback(
    (topic: string, subtopic: string) => {
      return (
        progress.find((p) => p.topic === topic && p.subtopic === subtopic) ||
        null
      );
    },
    [progress]
  );

  const getProgressStats = useCallback((): ProgressStats => {
    const totalLessons = progress.length;
    const completedLessons = progress.filter((p) => p.completed).length;
    const totalTimeSpent = progress.reduce((sum, p) => sum + p.time_spent, 0);
    const completionRate =
      totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

    return {
      totalLessons,
      completedLessons,
      totalTimeSpent,
      completionRate,
    };
  }, [progress]);

  const getTopicProgress = useCallback(
    (topic: string) => {
      return progress.filter((p) => p.topic === topic);
    },
    [progress]
  );

  const clearProgress = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      setProgress([]);
    } catch (err) {
      console.error("Error clearing progress:", err);
      setError("Failed to clear progress");
    }
  }, []);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  return {
    progress,
    loading,
    error,
    fetchProgress,
    updateProgress,
    getProgressForLesson,
    getProgressStats,
    getTopicProgress,
    clearProgress,
  };
}
