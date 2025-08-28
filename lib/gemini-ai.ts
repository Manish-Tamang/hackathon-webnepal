/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoogleGenAI } from "@google/genai";

// Initialize with proper error handling
const getAI = () => {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "AIzaSyDAC4FdhE95RN-KR3zgZlZj914DBwyTiYI";
  if (!apiKey) {
    throw new Error("NEXT_PUBLIC_GEMINI_API_KEY is not configured");
  }
  return new GoogleGenAI({ apiKey });
};

type CourseLesson = {
  title: any;
  duration: any;
  content: any;
  code: string;
};

export interface Lesson {
  id: string;
  title: string;
  description: string;
  code: string;
  language: string;
  difficulty: string;
  duration: string;
}

export interface CodeAnalysis {
  compliments: string[];
  suggestions: string[];
  errors: string[];
  improvements: string[];
}

export interface ExecutionResult {
  success: boolean;
  output: string;
  errors: string[];
  executionTime: number;
}

export interface ContextualFeedback {
  type: "tip" | "feedback" | "encouragement";
  message: string;
  priority: "low" | "medium" | "high";
}

export class GeminiAIService {
  private static getSystemPrompt(lesson: CourseLesson): string {
    return `You are an expert coding instructor and mentor for web development. You're helping a student learn web development through hands-on coding exercises.

CONTEXT:
- Lesson: ${lesson.title}
- Description: ${lesson.content}
- Expected Code: ${lesson.code || "No expected code provided"}
- Duration: ${lesson.duration}

YOUR ROLE:
1. Provide helpful, encouraging feedback
2. Give specific, actionable suggestions
3. Explain concepts clearly and simply
4. Help debug issues without giving away complete solutions
5. Encourage good coding practices
6. Be supportive and patient

RESPONSE GUIDELINES:
- Keep responses concise but informative
- Use code examples when helpful
- Focus on learning and understanding
- Be encouraging and positive
- Provide step-by-step guidance when needed
- Explain the "why" behind suggestions`;
  }

  private static getCodeAnalysisPrompt(
    lesson: CourseLesson,
    currentCode: string
  ): string {
    return `${this.getSystemPrompt(lesson)}

TASK: Analyze the student's current code and provide constructive feedback.

STUDENT'S CODE:
\`\`\`
${currentCode}
\`\`\`

EXPECTED CODE:
\`\`\`
${lesson.code || "No expected code provided"}
\`\`\`

Please analyze the code and provide feedback. You MUST respond with valid JSON in exactly this format:
{
  "compliments": ["positive feedback points"],
  "suggestions": ["specific improvement suggestions"],
  "errors": ["any errors or issues"],
  "improvements": ["general improvement areas"]
}

Ensure your response is valid JSON only, no additional text before or after.`;
  }

  private static getHintPrompt(
    lesson: CourseLesson,
    currentCode: string
  ): string {
    return `${this.getSystemPrompt(lesson)}

TASK: Provide a helpful hint to guide the student without giving away the complete solution.

STUDENT'S CURRENT CODE:
\`\`\`
${currentCode}
\`\`\`

EXPECTED CODE:
\`\`\`
${lesson.code || "No expected code provided"}
\`\`\`

Provide a specific, actionable hint that will help the student progress. The hint should:
- Be specific to what they're currently working on
- Guide them toward the next step
- Not give away the complete solution
- Be encouraging and supportive

Respond with only the hint text, keep it concise (1-2 sentences maximum).`;
  }

  private static getResponsePrompt(
    lesson: CourseLesson,
    userQuestion: string,
    currentCode: string
  ): string {
    return `${this.getSystemPrompt(lesson)}

TASK: Answer the student's question about their code or the lesson.

STUDENT'S QUESTION: ${userQuestion}

STUDENT'S CURRENT CODE:
\`\`\`
${currentCode}
\`\`\`

EXPECTED CODE:
\`\`\`
${lesson.code || "No expected code provided"}
\`\`\`

Provide a helpful, educational response that:
- Directly addresses their question
- Uses their current code as context
- Explains concepts clearly
- Provides examples when helpful
- Encourages learning and experimentation

Keep the response conversational and supportive.`;
  }

  private static async generateContent(prompt: string): Promise<string> {
    try {
      const ai = getAI();

      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
      });

      return response.text || "";
    } catch (error) {
      console.error("Gemini AI generation error:", error);
      throw error;
    }
  }

  static async analyzeCode(
    lesson: CourseLesson,
    currentCode: string
  ): Promise<CodeAnalysis> {
    try {
      const prompt = this.getCodeAnalysisPrompt(lesson, currentCode);
      const result = await this.generateContent(prompt);

      try {
        // Clean the result to ensure it's valid JSON
        const cleanResult = result
          .trim()
          .replace(/```json\n?/g, "")
          .replace(/```\n?/g, "");
        const analysis = JSON.parse(cleanResult);

        return {
          compliments: Array.isArray(analysis.compliments)
            ? analysis.compliments
            : [],
          suggestions: Array.isArray(analysis.suggestions)
            ? analysis.suggestions
            : [],
          errors: Array.isArray(analysis.errors) ? analysis.errors : [],
          improvements: Array.isArray(analysis.improvements)
            ? analysis.improvements
            : [],
        };
      } catch (parseError) {
        console.warn("Failed to parse JSON response:", parseError);
        // Fallback analysis with more detailed feedback
        return this.createFallbackAnalysis(currentCode, lesson);
      }
    } catch (error) {
      console.error("Gemini AI analysis error:", error);
      return this.createFallbackAnalysis(currentCode, lesson);
    }
  }

  private static createFallbackAnalysis(
    currentCode: string,
    lesson: CourseLesson
  ): CodeAnalysis {
    const codeLength = currentCode.trim().length;
    const hasCode = codeLength > 0;

    return {
      compliments: hasCode
        ? [
            "Great job getting started with coding!",
            "You're taking the right approach by writing code",
          ]
        : ["Ready to start coding - that's the first step!"],
      suggestions: hasCode
        ? [
            "Try breaking down the problem into smaller steps",
            "Consider adding comments to explain your logic",
          ]
        : [
            "Start by writing some basic code structure",
            "Think about what the lesson is asking you to accomplish",
          ],
      errors: [],
      improvements: hasCode
        ? [
            "Focus on code readability",
            "Test your code frequently as you build",
          ]
        : ["Begin with the fundamentals covered in the lesson"],
    };
  }

  static async generateHint(
    lesson: CourseLesson,
    currentCode: string
  ): Promise<string> {
    try {
      const prompt = this.getHintPrompt(lesson, currentCode);
      const result = await this.generateContent(prompt);
      return result.trim();
    } catch (error) {
      console.error("Gemini AI hint error:", error);
      return this.createFallbackHint(currentCode);
    }
  }

  private static createFallbackHint(currentCode: string): string {
    if (currentCode.trim().length === 0) {
      return "Start by writing a basic structure for your code. What's the first step you need to accomplish?";
    }
    return "Try experimenting with different approaches and don't be afraid to make mistakes - that's how we learn!";
  }

  static async generateResponse(
    userQuestion: string,
    lesson: CourseLesson,
    currentCode: string
  ): Promise<string> {
    try {
      const prompt = this.getResponsePrompt(lesson, userQuestion, currentCode);
      const result = await this.generateContent(prompt);
      return result.trim();
    } catch (error) {
      console.error("Gemini AI response error:", error);
      return `I'm having trouble processing your question right now. Here's what I can tell you: ${lesson.title} focuses on ${lesson.content}. Try breaking down your question into smaller parts and ask again!`;
    }
  }

  static async generateContextualFeedback(
    lesson: CourseLesson,
    currentCode: string
  ): Promise<ContextualFeedback[]> {
    try {
      const analysis = await this.analyzeCode(lesson, currentCode);
      const feedback: ContextualFeedback[] = [];

      // Add compliments as encouragement (low priority)
      if (analysis.compliments.length > 0) {
        feedback.push({
          type: "encouragement",
          message: analysis.compliments[0],
          priority: "low",
        });
      }

      // Add errors as high priority feedback
      if (analysis.errors.length > 0) {
        feedback.push({
          type: "feedback",
          message: analysis.errors[0],
          priority: "high",
        });
      }

      // Add suggestions as tips (medium priority)
      if (analysis.suggestions.length > 0) {
        feedback.push({
          type: "tip",
          message: analysis.suggestions[0],
          priority: "medium",
        });
      }

      return feedback;
    } catch (error) {
      console.error("Gemini AI contextual feedback error:", error);
      return [
        {
          type: "encouragement",
          message: "Keep coding and experimenting!",
          priority: "low",
        },
      ];
    }
  }

  static async compileAndRunCode(
    code: string,
    language: string
  ): Promise<ExecutionResult> {
    try {
      const prompt = `You are a code execution simulator. Analyze the following ${language} code and simulate its execution.

CODE TO ANALYZE:
\`\`\`${language}
${code}
\`\`\`

Please:
1. Check for syntax errors
2. Simulate the code execution
3. Provide the expected output
4. List any errors or warnings

You MUST respond with valid JSON in exactly this format:
{
  "success": true,
  "output": "expected output or result",
  "errors": [],
  "executionTime": 50
}

Ensure your response is valid JSON only, no additional text.`;

      const result = await this.generateContent(prompt);

      try {
        const cleanResult = result
          .trim()
          .replace(/```json\n?/g, "")
          .replace(/```\n?/g, "");
        const execution = JSON.parse(cleanResult);

        return {
          success: Boolean(execution.success),
          output: String(execution.output || "No output generated"),
          errors: Array.isArray(execution.errors) ? execution.errors : [],
          executionTime: Number(execution.executionTime) || 0,
        };
      } catch (parseError) {
        console.warn("Failed to parse execution result:", parseError);
        return this.createFallbackExecution(code, language);
      }
    } catch (error) {
      console.error("Code execution error:", error);
      return {
        success: false,
        output: "Execution failed due to service error",
        errors: [
          error instanceof Error ? error.message : "Unknown error occurred",
        ],
        executionTime: 0,
      };
    }
  }

  private static createFallbackExecution(
    code: string,
    language: string
  ): ExecutionResult {
    const hasCode = code.trim().length > 0;

    return {
      success: hasCode,
      output: hasCode
        ? `Code appears to be ${language} syntax. Output simulation unavailable.`
        : "No code to execute",
      errors: hasCode ? [] : ["No code provided for execution"],
      executionTime: 0,
    };
  }

  static async getSolution(lesson: CourseLesson): Promise<string> {
    try {
      const prompt = `You are a coding instructor providing a complete solution for a lesson.

LESSON: ${lesson.title}
DESCRIPTION: ${lesson.content}
EXPECTED CODE: ${lesson.code || "No expected code provided"}

Please provide:
1. A complete, working solution with code examples
2. Explanation of key concepts used
3. Best practices demonstrated
4. Common mistakes students should avoid

Format your response with clear headings and code blocks where appropriate.`;

      const result = await this.generateContent(prompt);
      return result.trim();
    } catch (error) {
      console.error("Solution generation error:", error);
      return `## Solution for ${lesson.title}

I'm unable to generate a detailed solution right now, but here's what you should focus on:

**Key Concepts:**
- ${lesson.content}

**Expected Approach:**
${
  lesson.code
    ? `\`\`\`\n${lesson.code}\n\`\`\``
    : "Review the lesson materials and practice the concepts step by step."
}

**Tips:**
- Break the problem into smaller parts
- Test your code frequently
- Don't hesitate to experiment and make mistakes

Try working through the problem step by step, and ask specific questions if you get stuck!`;
    }
  }
}

// --- Server-evaluated placeholder for quick feedback ---
// If you intend to use this as a Server Action, consider moving this
// to a separate file marked with "use server" at the top to avoid
// making this entire module server-only for Client Components.
export async function evaluateCode(
  code: string,
  language: string,
  lessonId: string,
  expectedOutput?: string,
): Promise<string> {
  if (!code.trim()) {
    return "Your code is empty. Try writing some code first!";
  }

  if (language === "html") {
    if (expectedOutput && !code.includes(expectedOutput)) {
      return `I don't see "${expectedOutput}" in your code. Make sure you've included it as required by the lesson.`;
    }

    if (code.includes("<h1>") && code.includes("<p>")) {
      return "Great job using heading and paragraph elements! Your HTML structure looks good. Try adding some more elements to make your page more interesting.";
    } else if (!code.includes("<h1>")) {
      return "I notice you haven't used an <h1> heading element yet. Headings are important for page structure and accessibility.";
    } else if (!code.includes("<p>")) {
      return "Consider adding paragraph <p> elements to structure your content better.";
    }
  }

  if (language === "css") {
    if (code.includes("color") && code.includes("padding")) {
      return "Good use of color and padding properties! Consider exploring other properties like margin, border, or font-size to enhance your design.";
    } else if (!code.includes("color")) {
      return "Try adding some color properties to make your design more visually appealing.";
    }
  }

  return "Your code looks good! Keep experimenting and try implementing all the requirements from the lesson.";
}
