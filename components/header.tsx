"use client"

import { BookOpen, Moon, Sun, User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Header() {
  const [isDark, setIsDark] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <header className="bg-primary border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-accent" />
            <span className="text-xl font-bold text-primary-foreground font-mono">AH Saiful</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link href="/" className="text-accent font-medium hover:text-accent/80 transition-colors">
              Home
            </Link>
            <Link href="/stories" className="text-primary-foreground hover:text-accent transition-colors">
              Stories
            </Link>
            <Link href="/e-books" className="text-primary-foreground hover:text-accent transition-colors">
              E-Books
            </Link>
            <Link href="/categories" className="text-primary-foreground hover:text-accent transition-colors">
              Categories
            </Link>
            <Link href="/authors" className="text-primary-foreground hover:text-accent transition-colors">
              Authors
            </Link>
            <Link href="/news" className="text-primary-foreground hover:text-accent transition-colors">
              News & Update
            </Link>
            <Link href="/about" className="text-primary-foreground hover:text-accent transition-colors">
              About
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:text-accent"
              onClick={toggleDarkMode}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 hidden sm:flex">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 sm:hidden" size="icon">
              <User className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-primary-foreground hover:text-accent"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <nav className="py-4 space-y-2">
              <Link
                href="/"
                className="block px-4 py-2 text-accent font-medium hover:bg-accent/10 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/stories"
                className="block px-4 py-2 text-primary-foreground hover:bg-accent/10 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Stories
              </Link>
              <Link
                href="/e-books"
                className="block px-4 py-2 text-primary-foreground hover:bg-accent/10 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                E-Books
              </Link>
              <Link
                href="/categories"
                className="block px-4 py-2 text-primary-foreground hover:bg-accent/10 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                href="/authors"
                className="block px-4 py-2 text-primary-foreground hover:bg-accent/10 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Authors
              </Link>
              <Link
                href="/news"
                className="block px-4 py-2 text-primary-foreground hover:bg-accent/10 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                News & Update
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-primary-foreground hover:bg-accent/10 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
