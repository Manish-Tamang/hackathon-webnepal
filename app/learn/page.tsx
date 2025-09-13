"use client";

import { useProgress } from "@/hooks/use-progress";
import { getLessons, getTopicCount, getCompletedCount } from "@/lib/lessons";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, BookOpen, ArrowRight } from "lucide-react";

export default function LearnPage() {
  const lessons = getLessons();
  const { getTopicProgress } = useProgress();

  const getTopicStats = (topic: string) => {
    const topicProgress = getTopicProgress(topic);
    const total = getTopicCount(topic);
    const completed = getCompletedCount(topic, topicProgress);
    const timeSpent = topicProgress.reduce((sum, p) => sum + p.time_spent, 0);

    return { total, completed, timeSpent };
  };

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  return (
    <div className="container max-w-5xl py-8">
      <div className="text-center mb-20">
        <h1 className="text-3xl font-bold text-[#2a6b4a] mb-2">
          Learning Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Track your progress and continue your learning journey
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 justify-center">
        {Object.entries(lessons).map(([topic, topicLessons]) => {
          const stats = getTopicStats(topic);
          const progress = (stats.completed / stats.total) * 100;

          return (
            <Link key={topic} href={`/learn/${topic}`}>
              <Card className="border rounded-[4px]  transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl capitalize">
                      {topic}
                    </CardTitle>
                    <BookOpen className="w-5 h-5 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600 mb-2">
                    {stats.completed}/{stats.total} lessons
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div
                      className="bg-[#52AF83] h-2 rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500">
                    {Math.round(progress)}% complete
                  </div>

                  <div className="flex mt-2 items-center justify-between">
                    <div className="flex items-center gap-2">
                      {stats.completed > 0 && (
                        <Badge className="bg-[#52AF83] rounded-full text-white">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {stats.completed} completed
                        </Badge>
                      )}
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
