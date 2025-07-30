"use client"

import { useTheme } from "@/contexts/theme-context"
import { ChevronDown, Palette } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const pathname = usePathname()

  const themes = [
    { id: "theme1" as const, name: "Minimalist", description: "Clean & Simple" },
    { id: "theme2" as const, name: "Dark Pro", description: "Professional Dark" },
    { id: "theme3" as const, name: "Colorful", description: "Vibrant & Playful" },
  ]

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <Link href="/" className="logo">
            <Palette className="logo-icon" />
            <span className="logo-text">ThemeSwitch</span>
          </Link>

          <nav className="nav">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${pathname === item.href ? "nav-link-active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="theme-selector">
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="theme-button">
              <span className="theme-button-text">{themes.find((t) => t.id === theme)?.name}</span>
              <ChevronDown className={`theme-button-icon ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {isDropdownOpen && (
              <div className="theme-dropdown">
                {themes.map((themeOption) => (
                  <button
                    key={themeOption.id}
                    onClick={() => {
                      setTheme(themeOption.id)
                      setIsDropdownOpen(false)
                    }}
                    className={`theme-option ${theme === themeOption.id ? "theme-option-active" : ""}`}
                  >
                    <div>
                      <div className="theme-option-name">{themeOption.name}</div>
                      <div className="theme-option-desc">{themeOption.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
