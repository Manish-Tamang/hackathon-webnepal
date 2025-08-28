"use client";

import { use } from "react";
import { useProgress } from "@/hooks/use-progress";
import { getTopicLessons } from "@/lib/lessons";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, ArrowRight } from "lucide-react";

export default function TopicPage({ params }: { params: Promise<{ topic: string }> }) {
    const { topic } = use(params);
    const topicLessons = getTopicLessons(topic) || {};
    const { getTopicProgress } = useProgress();
    const progress = getTopicProgress(topic);

    const formatTime = (minutes: number) => {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
    };

    const getLessonProgress = (subtopic: string) =>
        progress.find(p => p.subtopic === subtopic);

    const getTechnologies = (lesson: any) => {
        const techs = [];
        if (lesson.initialCode.html) techs.push('HTML');
        if (lesson.initialCode.css) techs.push('CSS');
        if (lesson.initialCode.javascript) techs.push('JS');
        return techs.join(' + ');
    };

    return (
        <div className="container max-w-7xl py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-[#2a6b4a] mb-2 capitalize">
                    {topic} Course
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                    Master {topic} fundamentals and advanced concepts
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {Object.entries(topicLessons).map(([subtopic, lesson]) => {
                    const lessonProgress = getLessonProgress(subtopic);
                    const isCompleted = lessonProgress?.completed;

                    return (
                        <Link key={subtopic} href={`/learn/${topic}/${subtopic}`}>
                            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-lg">{lesson.title}</CardTitle>
                                        {isCompleted && (
                                            <Badge className="bg-[#52AF83] text-white">
                                                <CheckCircle className="w-3 h-3 mr-1" />
                                                Done
                                            </Badge>
                                        )}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 text-sm mb-4">
                                        {lesson.description}
                                    </p>

                                    {lessonProgress && (
                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                            {lessonProgress.time_spent > 0 && (
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{formatTime(lessonProgress.time_spent)}</span>
                                                </div>
                                            )}
                                            {isCompleted && (
                                                <div className="text-[#52AF83] text-sm">
                                                    Completed {new Date(lessonProgress.completed_at!).toLocaleDateString()}
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between mt-4">
                                        <span className="text-sm text-gray-500">
                                            {getTechnologies(lesson)}
                                        </span>
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
