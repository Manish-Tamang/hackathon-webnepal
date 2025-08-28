"use client"

import { useState, useEffect, useRef } from "react"
import CodeMirror from "@uiw/react-codemirror"
import { html } from "@codemirror/lang-html"
import { css } from "@codemirror/lang-css"
import { javascript } from "@codemirror/lang-javascript"
import { vscodeDark } from "@uiw/codemirror-theme-vscode"
import { xcodeLight } from "@uiw/codemirror-theme-xcode"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Maximize, Minimize } from "lucide-react"

interface CodeEditorProps {
  initialCode: string
  language: "html" | "css" | "javascript"
  onChange: (value: string) => void
}

export default function CodeEditor({ initialCode, language, onChange }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode)
  const { theme } = useTheme()
  const isDarkTheme = theme === "dark"
  const [isFullscreen, setIsFullscreen] = useState(false)
  const editorContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setCode(initialCode)
  }, [initialCode])

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === editorContainerRef.current)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
      if (document.fullscreenElement && document.fullscreenElement === editorContainerRef.current) {
        document.exitFullscreen().catch(error => {
          console.warn("Could not exit fullscreen automatically on unmount:", error)
        })
      }
    }
  }, [])

  const toggleFullscreen = async () => {
    const element = editorContainerRef.current
    if (!element) return

    try {
      if (!document.fullscreenElement) {
        await element.requestFullscreen()
        setIsFullscreen(true)
      } else {
        await document.exitFullscreen()
        setIsFullscreen(false)
      }
    } catch (err) {
      console.error("Fullscreen API error:", err)
      setIsFullscreen(!!document.fullscreenElement)
    }
  }

  const getLanguageExtension = () => {
    switch (language) {
      case "html":
        return html()
      case "css":
        return css()
      case "javascript":
        return javascript()
      default:
        return html()
    }
  }

  const handleChange = (value: string) => {
    setCode(value)
    onChange(value)
  }

  return (
    <div ref={editorContainerRef} className="relative h-full w-full overflow-hidden rounded-md border bg-background">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleFullscreen}
        className="absolute right-2 top-2 z-10 h-7 w-7 text-muted-foreground hover:bg-muted hover:text-foreground"
        aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
      >
        {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
      </Button>

      <CodeMirror
        value={code}
        height="100%"
        theme={isDarkTheme ? vscodeDark : xcodeLight}
        extensions={[getLanguageExtension()]}
        onChange={handleChange}
        basicSetup={{
          lineNumbers: true,
          highlightActiveLineGutter: true,
          highlightSpecialChars: true,
          foldGutter: true,
          dropCursor: true,
          allowMultipleSelections: true,
          indentOnInput: true,
          syntaxHighlighting: true,
          bracketMatching: true,
          closeBrackets: true,
          autocompletion: true,
          rectangularSelection: true,
          crosshairCursor: true,
          highlightActiveLine: true,
          highlightSelectionMatches: true,
          closeBracketsKeymap: true,
          defaultKeymap: true,
          searchKeymap: true,
          historyKeymap: true,
          foldKeymap: true,
          completionKeymap: true,
          lintKeymap: true,
        }}
        className="h-full text-sm"
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  )
}