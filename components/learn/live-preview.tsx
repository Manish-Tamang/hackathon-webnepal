"use client"

import { useMemo, useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Maximize, Minimize } from "lucide-react"

interface LivePreviewProps {
  htmlCode: string
  cssCode?: string
  jsCode?: string
}

export default function LivePreview({ htmlCode, cssCode = "", jsCode = "" }: LivePreviewProps) {
  const preview = useMemo(() => {
    if (htmlCode.includes("<!DOCTYPE html>") || htmlCode.includes("<html")) {
      return htmlCode
    } else {
      return `
        <!DOCTYPE html>
        <html>
          <head>
            <style>${cssCode}</style>
          </head>
          <body>
            ${htmlCode}
            <script>${jsCode}</script>
          </body>
        </html>
      `
    }
  }, [htmlCode, cssCode, jsCode])

  const [isFullscreen, setIsFullscreen] = useState(false)
  const previewContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === previewContainerRef.current)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
      if (document.fullscreenElement && document.fullscreenElement === previewContainerRef.current) {
        document.exitFullscreen().catch(error => {
          console.warn("Could not exit fullscreen automatically on unmount:", error)
        })
      }
    }
  }, [])

  const openInNewTab = () => {
    const blob = new Blob([preview], { type: "text/html" })
    const url = URL.createObjectURL(blob)
    window.open(url, "_blank")
    URL.revokeObjectURL(url)
  }

  const toggleFullscreen = async () => {
    const element = previewContainerRef.current
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

  return (
    <div ref={previewContainerRef} className="h-full w-full overflow-hidden rounded-md border bg-white relative">
      <div className="absolute right-2 top-2 z-10 flex gap-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={openInNewTab}
          className="h-7 w-7 text-muted-foreground hover:bg-muted hover:text-foreground"
          aria-label="Open in new tab"
        >
          <ExternalLink className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleFullscreen}
          className="h-7 w-7 text-muted-foreground hover:bg-muted hover:text-foreground"
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
        </Button>
      </div>
      <iframe srcDoc={preview} title="preview" className="w-full h-full border-0" sandbox="allow-scripts" />
    </div>
  )
}