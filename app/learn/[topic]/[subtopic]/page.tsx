"use client";

import { use } from "react";
import { getLessonContent } from "@/lib/lessons";
import LearningInterface from "@/components/learn/learning-interface";
import { notFound } from "next/navigation";

export default function LessonPage({ params }: { params: Promise<{ topic: string; subtopic: string }> }) {
  const { topic, subtopic } = use(params);
  const lesson = getLessonContent(topic, subtopic);

  if (!lesson) {
    return (
      <div>
        <p>Not found Courses</p>
      </div>
    )
  }

  return <LearningInterface lesson={lesson} topic={topic} subtopic={subtopic} />;
}
