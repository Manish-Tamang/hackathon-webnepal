"use client"

import { useParams } from "next/navigation"
import { SidebarProvider, Sidebar, SidebarInset } from "@/components/ui/sidebar"
import LearningSidebar from "@/components/learn/learning-sidebar"
import { Header } from "@/components/layout/header"

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const params = useParams()
  const hasSubtopic = params.topic && params.subtopic

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SidebarProvider defaultOpen={true}>
        <div className="flex flex-1">
          {hasSubtopic && (
            <Sidebar>
              <LearningSidebar />
            </Sidebar>
          )}
          <SidebarInset className="flex-1">
            {children}
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}