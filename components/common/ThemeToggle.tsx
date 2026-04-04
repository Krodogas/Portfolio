"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-between w-16 h-8 px-1 rounded-full transition-all duration-300 bg-gray-300 dark:bg-gray-600 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      aria-label="Toggle theme"
    >
      {/* Animated background */}
      <div
        className={`absolute inset-0 rounded-full transition-all duration-300 ease-in-out ${
          isDark ? "bg-gray-700" : "bg-yellow-200"
        }`}
      />
      
      {/* Toggle circle */}
      <div
        className={`relative w-6 h-6 rounded-full bg-white shadow-md transition-all duration-300 ease-in-out flex items-center justify-center z-10 ${
          isDark ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-gray-800" />
        ) : (
          <Sun className="w-4 h-4 text-yellow-500" />
        )}
      </div>

      {/* Icon indicators */}
      <div className="relative z-0 w-full h-full flex items-center justify-between px-2 pointer-events-none">
        <Sun className={`w-4 h-4 transition-opacity duration-300 ${isDark ? "opacity-30" : "opacity-70"}`} />
        <Moon className={`w-4 h-4 transition-opacity duration-300 ${isDark ? "opacity-70" : "opacity-30"}`} />
      </div>
    </button>
  )
}