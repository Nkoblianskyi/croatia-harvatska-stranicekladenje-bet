"use client"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-card sticky top-0 left-0 right-0 z-50 border-b border-border shadow-sm">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center h-16 md:h-20">
          <Link href="/" className="flex items-center group">
            <img src="/favicon.ico" alt="Logo" className="h-8 w-8 md:h-10 md:w-10 mr-2" />
            <div className="text-xl md:text-2xl font-serif font-bold text-red-800 tracking-tight uppercase">
              stranice<span className="text-blue-800">kladenje</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}
