"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import CodeEditor from "@/components/learn/code-editor"
import LivePreview from "@/components/learn/live-preview"
import AIFeedback from "@/components/learn/ai-feedback"
import LessonContent from "@/components/learn/lesson-content"
import { useProgress } from "@/hooks/use-progress"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ArrowLeft, ArrowRight, Code, LightbulbIcon, CheckCircle, Clock } from "lucide-react"
import type { Lesson } from "@/lib/lessons/types"
import Link from "next/link"

interface LearningInterfaceProps {
  lesson: Lesson
  topic: string
  subtopic: string
}

export default function LearningInterface({ lesson, topic, subtopic }: LearningInterfaceProps) {
  const [htmlCode, setHtmlCode] = useState(lesson.initialCode.html || "")
  const [cssCode, setCssCode] = useState(lesson.initialCode.css || "")
  const [jsCode, setJsCode] = useState(lesson.initialCode.javascript || "")
  const [activeTab, setActiveTab] = useState<string>("html")
  const [showSolution, setShowSolution] = useState(false)
  const [sessionStartTime, setSessionStartTime] = useState<number>(Date.now())
  const [isCompleted, setIsCompleted] = useState(false)
  const editorContainerRef = useRef<HTMLDivElement>(null)
  
  const { getProgressForLesson, updateProgress } = useProgress()
  const currentProgress = getProgressForLesson(topic, subtopic)

  useEffect(() => {
    setHtmlCode(lesson.initialCode.html || "")
    setCssCode(lesson.initialCode.css || "")
    setJsCode(lesson.initialCode.javascript || "")
    setShowSolution(false)
    setSessionStartTime(Date.now())
    setIsCompleted(currentProgress?.completed || false)
  }, [lesson, currentProgress])

  const handleCodeChange = (code: string) => {
    switch (activeTab) {
      case "html": setHtmlCode(code); break
      case "css": setCssCode(code); break
      case "javascript": setJsCode(code); break
    }
  }

  const handleShowSolution = () => {
    if (showSolution) {
      setHtmlCode(lesson.initialCode.html || "")
      setCssCode(lesson.initialCode.css || "")
      setJsCode(lesson.initialCode.javascript || "")
    } else {
      setHtmlCode(lesson.solutionCode?.html || lesson.initialCode.html || "")
      setCssCode(lesson.solutionCode?.css || lesson.initialCode.css || "")
      setJsCode(lesson.solutionCode?.javascript || lesson.initialCode.javascript || "")
    }
    setShowSolution(!showSolution)
  }

  const handleMarkComplete = async () => {
    try {
      const timeSpent = Math.floor((Date.now() - sessionStartTime) / 60000)
      await updateProgress(topic, subtopic, true, timeSpent)
      setIsCompleted(true)
    } catch (error) {
      console.error("Error marking lesson complete:", error)
    }
  }


  const getNextLesson = () => lesson.nextLesson ? `/learn/${lesson.nextLesson.topic}/${lesson.nextLesson.subtopic}` : null
  const getPrevLesson = () => lesson.prevLesson ? `/learn/${lesson.prevLesson.topic}/${lesson.prevLesson.subtopic}` : null

  const nextLessonUrl = getNextLesson()
  const prevLessonUrl = getPrevLesson()

  // Topic ra Subtopics lai words haru xuttauna lai
  const formattedTopic = topic.charAt(0).toUpperCase() + topic.slice(1)
  const formattedSubtopic = subtopic.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-col border-b px-4 py-2">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">{lesson.title}</h1>
            {currentProgress?.completed && (
              <Badge className="bg-[#52AF83] rounded-full text-white">
                <CheckCircle className="w-3 h-3" />
                Completed
              </Badge>
            )}
          </div>
          <div className="ml-auto flex gap-2">
            {prevLessonUrl && (
              <Button asChild variant="outline" size="sm" className="rounded-[4px]">
                <Link href={prevLessonUrl}>
                  <ArrowLeft className="mr-1 h-4 w-4" /> Previous
                </Link>
              </Button>
            )}
            {nextLessonUrl && (
              <Button asChild size="sm" className="bg-[#3D8B63] hover:bg-[#3D8B63] rounded-[4px]">
                <Link href={nextLessonUrl}>
                  Next <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between mt-2">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/learn/${topic}`}>{formattedTopic}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/learn/${topic}/${subtopic}`}>{formattedSubtopic}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="flex items-center gap-4 text-sm text-gray-600">
            {currentProgress?.time_spent && currentProgress.time_spent > 0 && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{formatTime(currentProgress.time_spent)}</span>
              </div>
            )}
            {currentProgress?.completed_at && (
              <div className="text-[#52AF83]">
                Completed {new Date(currentProgress.completed_at).toLocaleDateString()}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid flex-1 grid-cols-1 gap-4 p-4 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <Card className="flex-1">
            <ScrollArea className="h-[calc(100vh-12rem)]">
              <div className="p-4">
                <LessonContent content={lesson.content} />
              </div>
            </ScrollArea>
          </Card>
          
          {!currentProgress?.completed && (
            <Alert className="border-[#52AF83]/20 bg-[#52AF83]/5">
              <AlertDescription className="flex items-center justify-between">
                <span>Mark this lesson as complete when you&apos;re done</span>
                <Button 
                  onClick={handleMarkComplete}
                  size="sm"
                  className="bg-[#52AF83] hover:bg-[#3C8A62] rounded-full text-white"
                >
                  <CheckCircle className="w-4 h-4" />
                  Mark Complete
                </Button>
              </AlertDescription>
            </Alert>
          )}
          
          <AIFeedback
            code={activeTab === "html" ? htmlCode : activeTab === "css" ? cssCode : jsCode}
            language={activeTab}
            lessonId={`${topic}-${subtopic}`}
            expectedOutput={lesson.expectedOutput}
          />
        </div>

        <div ref={editorContainerRef} className="sticky top-4 flex flex-col gap-4">
          <Tabs defaultValue="html" className="flex-1" onValueChange={setActiveTab}>
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="html" className="flex items-center gap-1">
                  <Code className="h-4 w-4" /> HTML
                </TabsTrigger>
                {lesson.initialCode.css && (
                  <TabsTrigger value="css" className="flex items-center gap-1">
                    <Code className="h-4 w-4" /> CSS
                  </TabsTrigger>
                )}
                {lesson.initialCode.javascript && (
                  <TabsTrigger value="javascript" className="flex items-center gap-1">
                    <Code className="h-4 w-4" /> JavaScript
                  </TabsTrigger>
                )}
              </TabsList>
              <Button
                onClick={handleShowSolution}
                variant={showSolution ? "default" : "outline"}
                size="sm"
                className="gap-1 rounded-[4px]"
              >
                <LightbulbIcon className="h-4 w-4" />
                {showSolution ? "Hide Solution" : "Show Solution"}
              </Button>
            </div>
            <TabsContent value="html" className="mt-2 h-[400px] data-[state=active]:h-[400px]">
              <CodeEditor initialCode={htmlCode} language="html" onChange={handleCodeChange} />
            </TabsContent>
            {lesson.initialCode.css && (
              <TabsContent value="css" className="mt-2 h-[400px] data-[state=active]:h-[400px]">
                <CodeEditor initialCode={cssCode} language="css" onChange={handleCodeChange} />
              </TabsContent>
            )}
            {lesson.initialCode.javascript && (
              <TabsContent value="javascript" className="mt-2 h-[400px] data-[state=active]:h-[400px]">
                <CodeEditor initialCode={jsCode} language="javascript" onChange={handleCodeChange} />
              </TabsContent>
            )}
          </Tabs>

          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-sm">Live Preview</h3>
            <div className="h-[300px]">
              <LivePreview htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
