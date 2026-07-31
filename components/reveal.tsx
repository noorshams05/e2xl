"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: "div" | "li" | "section"
}

export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const Tag = as as "div"

  return (
    <Tag
      ref={ref}
      className={cn("reveal", inView && "in-view", className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
