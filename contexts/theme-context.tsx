"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

export type Theme = "theme1" | "theme2" | "theme3"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  isLoading: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("theme1")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem("app-theme") as Theme
    if (savedTheme && ["theme1", "theme2", "theme3"].includes(savedTheme)) {
      setThemeState(savedTheme)
    }
    setIsLoading(false)
  }, [])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem("app-theme", newTheme)

    // Add theme class to document
    document.documentElement.className = `theme-${newTheme}`
  }

  useEffect(() => {
    if (!isLoading) {
      document.documentElement.className = `theme-${theme}`
    }
  }, [theme, isLoading])

  return <ThemeContext.Provider value={{ theme, setTheme, isLoading }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
