"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { User, Menu, X } from "lucide-react"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"

export function Header() { 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="border-b border-emerald-100 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
               <Image src="/img/2.png" width={100} height={100} alt="" />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/learn" className="text-gray-700 hover:text-emerald-700 transition-colors">
              Learn
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-emerald-700 transition-colors">
              Pricing
            </Link>
            <Link href="/leaderboard" className="text-gray-700 hover:text-emerald-700 transition-colors">
              Leaderboard
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-emerald-700 transition-colors">
              About
            </Link>
          
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 p-0">
                    <Avatar className="h-8 w-8 border border-gray-200">
                      <AvatarFallback className="bg-white text-black font-medium">
                        N
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 border border-gray-200" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium text-black">nux@gmail.com</p>
                      <p className="w-[200px] truncate text-sm text-gray-600">email</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator className="bg-gray-200" />
                  <DropdownMenuItem asChild className="text-black hover:bg-gray-50">
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="text-black hover:bg-gray-50">
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-gray-200" />
                  <DropdownMenuItem className="text-black hover:bg-gray-50">
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
         
              <Button asChild className="bg-emerald-600 text-white hover:bg-emerald-700 rounded-full px-5">
                <Link href="/signup">Sign Up</Link>
              </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-gray-900" />
              ) : (
                <Menu className="h-5 w-5 text-gray-900" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-emerald-100 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/learn"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Learn
              </Link>
              <Link
                href="/pricing"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/leaderboard"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Leaderboard
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

                <>
                  <Link
                    href="/dashboard"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/profile"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                    }}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50"
                  >
                    Log out
                  </button>
                </>
                <Link
                  href="/signup"
                  className="block px-3 py-2 text-base font-medium text-emerald-700 hover:bg-emerald-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
