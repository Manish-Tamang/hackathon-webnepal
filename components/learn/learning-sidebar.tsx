"use client"

import { useProgress } from "@/hooks/use-progress"
import { getLessons } from "@/lib/lessons"
import Link from "next/link"
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { CheckCircle } from "lucide-react"
import { useParams } from "next/navigation"

export default function LearningSidebar() {
  const params = useParams()
  const currentTopic = params.topic as string
  const currentSubtopic = params.subtopic as string
  
  const lessons = getLessons()
  const { getProgressForLesson, getTopicProgress } = useProgress()
  
  if (!currentTopic) return null
  
  const topicLessons = lessons[currentTopic] || {}
  const progress = getTopicProgress(currentTopic)
  const totalLessons = Object.keys(topicLessons).length
  const completedLessons = progress.filter(p => p.completed).length

  const formatTitle = (text: string) => {
    return text
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  return (
    <>
      <SidebarHeader className="border-b px-4 py-3">
        <h2 className="text-base font-medium capitalize">{currentTopic} Course</h2>
        <p className="text-sm text-muted-foreground mt-1">
          {completedLessons} of {totalLessons} lessons completed
        </p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-3 py-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Lessons
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {Object.entries(topicLessons).map(([subtopic, lesson]) => {
                const href = `/learn/${currentTopic}/${subtopic}`
                const isActive = currentSubtopic === subtopic
                const progress = getProgressForLesson(currentTopic, subtopic)
                const isCompleted = progress?.completed

                return (
                  <SidebarMenuItem key={subtopic}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link href={href} className="flex items-center justify-between w-full px-3 py-2 text-sm">
                        <span className="truncate">{lesson.title}</span>
                        {isCompleted && (
                          <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </>
  )
}
