"use client"

import { useEffect, useState } from "react"
import { Logo } from "@/components/logo"

export function SiteHeader({ onIntake }: { onIntake: () => void }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "glass border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <a href="#top" aria-label="E2XL Telehealth home">
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#process" className="transition-colors hover:text-foreground">
            Process
          </a>
          <a href="#protocols" className="transition-colors hover:text-foreground">
            Protocols
          </a>
          <a href="#compliance" className="transition-colors hover:text-foreground">
            Compliance
          </a>
        </nav>
        <button
          type="button"
          onClick={onIntake}
          className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110"
        >
          Begin Intake
        </button>
      </div>
    </header>
  )
}
