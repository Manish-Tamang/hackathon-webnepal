"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Send, Lightbulb, AlertCircle, Heart, Copy, Check } from "lucide-react"
import { GeminiAIService } from "@/lib/gemini-ai"

interface AIFeedbackProps {
  code: string
  language: string
  lessonId: string
  expectedOutput?: string
}

interface FeedbackData {
  compliments: string[]
  suggestions: string[]
  errors: string[]
  improvements: string[]
}

export default function AIFeedback({ code, language, lessonId, expectedOutput }: AIFeedbackProps) {
  const [question, setQuestion] = useState("")
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)
  const [feedback, setFeedback] = useState<FeedbackData | null>(null)
  const [copied, setCopied] = useState(false)

  const createMockLesson = () => ({
    title: `Lesson ${lessonId}`,
    content: `Practice ${language} coding`,
    code: expectedOutput || "",
    duration: "15 minutes"
  })

  const handleAskQuestion = async () => {
    if (!question.trim()) return
    
    setLoading(true)
    try {
      const aiResponse = await GeminiAIService.generateResponse(question, createMockLesson(), code)
      setResponse(aiResponse)
    } catch (error) {
      setResponse("Sorry, I'm having trouble processing your question. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleGetFeedback = async () => {
    setLoading(true)
    try {
      const analysis = await GeminiAIService.analyzeCode(createMockLesson(), code)
      setFeedback(analysis)
    } catch (error) {
      setFeedback({
        compliments: ["Keep coding and experimenting!"],
        suggestions: ["Try to implement the lesson requirements"],
        errors: [],
        improvements: ["Practice regularly"]
      })
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const renderFeedback = (type: string, data: string[], icon: React.ReactNode, badgeVariant: "secondary" | "destructive", badgeText: string) => 
    data.length > 0 && (
      <div className="flex items-start gap-2">
        {icon}
        <div className="text-sm">
          <Badge variant={badgeVariant} className="mb-1">{badgeText}</Badge>
          <p className="text-gray-700">{data[0]}</p>
        </div>
      </div>
    )

  const formatResponse = (text: string) => {
    // Simple markdown to HTML conversion
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
      .replace(/\*(.*?)\*/g, '<em>$1</em>') // Italic
      .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">$1</code>') // Inline code
      .replace(/\n/g, '<br>') // Line breaks
      .replace(/^### (.*$)/gim, '<h3 class="text-lg font-semibold mt-4 mb-2">$1</h3>') // H3
      .replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold mt-4 mb-2">$1</h2>') // H2
      .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold mt-4 mb-2">$1</h1>') // H1
      .replace(/^- (.*$)/gim, '<li class="ml-4">$1</li>') // List items
      .replace(/(<li.*<\/li>)/g, '<ul class="list-disc ml-4 mb-2">$1</ul>') // Wrap lists
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5" />
          AI Learning Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button 
          onClick={handleGetFeedback} 
          disabled={loading}
          variant="outline" 
          size="sm"
          className="w-full"
        >
          <Lightbulb className="w-4 h-4 mr-2" />
          Get Feedback
        </Button>

        {feedback && (
          <div className="space-y-3 p-3 bg-gray-50 rounded-lg">
            {renderFeedback('compliments', feedback.compliments, 
              <Heart className="w-4 h-4 text-green-600 mt-0.5" />, 
              'secondary', 'Good Job!')}
            
            {renderFeedback('suggestions', feedback.suggestions, 
              <Lightbulb className="w-4 h-4 text-blue-600 mt-0.5" />, 
              'secondary', 'Suggestion')}
            
            {renderFeedback('errors', feedback.errors, 
              <AlertCircle className="w-4 h-4 text-red-600 mt-0.5" />, 
              'destructive', 'Fix This')}
          </div>
        )}

        <div className="space-y-2">
          <Textarea
            placeholder="Ask me anything about your code or this lesson..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows={2}
          />
          <Button 
            onClick={handleAskQuestion} 
            disabled={loading || !question.trim()}
            size="sm"
            className="w-full"
          >
            <Send className="w-4 h-4 mr-2" />
            {loading ? "Thinking..." : "Ask Question"}
          </Button>
        </div>

        {response && (
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-blue-900">AI Response</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(response)}
                className="h-6 w-6 p-0"
              >
                {copied ? (
                  <Check className="w-3 h-3 text-green-600" />
                ) : (
                  <Copy className="w-3 h-3 text-blue-600" />
                )}
              </Button>
            </div>
            <div 
              className="text-sm text-gray-800 prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: formatResponse(response) }}
            />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
