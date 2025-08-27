import type React from "react"
import { Karla } from "next/font/google"
import "../globals.css"

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
})

export default function LearnLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <main className="w-full mx-auto">{children}</main>
    </>
  )
}