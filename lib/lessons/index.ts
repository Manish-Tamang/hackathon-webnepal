import type { Lesson, LessonMap } from "./types"
import { htmlLessons } from "./html"
import { cssLessons } from "./css"
import { tailwindLessons } from "./tailwind"
import { javascriptLessons } from "./javascript"

// Ekmusta parnu lai banako
const allLessons: LessonMap = {
  html: htmlLessons,
  css: cssLessons,
  tailwind: tailwindLessons,
  javascript: javascriptLessons
}

export const lessons: LessonMap = allLessons

// Helper functions
export function getLessons(): LessonMap {
  return allLessons
}

export function getLessonContent(topic: string, subtopic: string): Lesson | null {
  return allLessons[topic]?.[subtopic] || null
}

export function getAllTopics(): string[] {
  return Object.keys(allLessons)
}

export function getTopicLessons(topic: string): Record<string, Lesson> | null {
  return allLessons[topic] || null
}

export function getTopicCount(topic: string): number {
  return Object.keys(allLessons[topic] || {}).length
}

export function getCompletedCount(topic: string, progress: any[]): number {
  return progress.filter(p => p.topic === topic && p.completed).length
}
