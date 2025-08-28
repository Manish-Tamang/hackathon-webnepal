"use client"

import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus, vs } from "react-syntax-highlighter/dist/esm/styles/prism"
import { useTheme } from "next-themes"
import { useState, useCallback } from "react"
import { Copy, Check } from "lucide-react"

interface LessonContentProps {
  content: string
}

export default function LessonContent({ content }: LessonContentProps) {
  const { theme } = useTheme()
  const isDarkTheme = theme === "dark"

  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 mt-6 first:mt-0">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-5">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2 mt-4">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-4 space-y-1 text-gray-700 dark:text-gray-300">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-4 space-y-1 text-gray-700 dark:text-gray-300">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-gray-700 dark:text-gray-300">
              {children}
            </li>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-gray-900 dark:text-gray-100">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-gray-800 dark:text-gray-200">
              {children}
            </em>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic text-gray-600 dark:text-gray-400 mb-4">
              {children}
            </blockquote>
          ),
          code({ className, children, ...props }: React.ComponentProps<'code'>) {
            const match = /language-(\w+)/.exec(className || "")
            return match ? (
              <CodeBlock
                language={match[1]}
                isDarkTheme={isDarkTheme}
                code={String(children).replace(/\n$/, "")}
              />
            ) : (
              <code
                className={`${className} px-1 py-0.5 rounded bg-gray-100 dark:bg-gray-700 text-sm font-mono`}
                {...props}
              >
                {children}
              </code>
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

interface CodeBlockProps {
  language: string
  isDarkTheme: boolean
  code: string
}

function CodeBlock({ language, isDarkTheme, code }: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }, [code])

  return (
    <div className="relative my-4 rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-gray-600">
      <div className="flex items-center justify-between px-3 py-2 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
        <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
          {language.toUpperCase()}
        </span>
        <button
          onClick={handleCopy}
          className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          title="Copy code"
        >
          {isCopied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>
      <div className="overflow-x-auto">
        <SyntaxHighlighter
          style={isDarkTheme ? vscDarkPlus : vs}
          language={language}
          PreTag="div"
          customStyle={{
            margin: 0,
            padding: "1rem",
            background: isDarkTheme ? "#2d2d2d" : "#ffffff",
            borderRadius: "0 0 0.5rem 0.5rem",
          }}
          codeTagProps={{
            className: "text-sm",
          }}
          wrapLines={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}