"use client"

import type { ReactNode } from "react"
import { useState } from "react"

interface InteractiveCardProps {
  children: ReactNode
}

export default function InteractiveCard({ children }: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const baseClasses = "rounded-lg overflow-hidden transition-all duration-300 cursor-pointer"
  const normalClasses = "bg-white shadow-lg"
  const hoverClasses = "bg-neutral-200 shadow-2xl"

  const className = `${baseClasses} ${isHovered ? hoverClasses : normalClasses}`

  return (
    <div className={className} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {children}
    </div>
  )
}
