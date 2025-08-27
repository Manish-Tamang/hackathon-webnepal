import { NextResponse } from "next/server"
import { GeminiAIService } from "@/lib/gemini-ai"

export async function GET() {
  try {
    if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY not configured" },
        { status: 500 }
      )
    }

    const testLesson = {
      id: "test",
      title: "Test Lesson",
      content: "This is a test lesson for AI integration",
      code: "<h1>Hello World</h1>",
      duration: "5 min",
      completed: false
    }

    const testCode = "<h1>Hello</h1>"
    
    const hint = await GeminiAIService.generateHint(testLesson, testCode)
    
    return NextResponse.json({
      success: true,
      hint,
      message: "Gemini AI integration is working!"
    })
  } catch (error) {
    console.error("AI test error:", error)
    return NextResponse.json(
      { error: "Failed to test AI integration", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    )
  }
}
