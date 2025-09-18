"use client"

import type React from "react"
import { Rating } from "@mui/material"
import InteractiveCard from "./InteractiveCard"

interface CardProps {
  venueName: string
  imgSrc: string
  rating: number
  onRatingChange: (venueName: string, rating: number) => void
}

export default function Card({ venueName, imgSrc, rating, onRatingChange }: CardProps) {
  const handleRatingChange = (event: React.SyntheticEvent, newValue: number | null) => {
    if (newValue !== null) {
      onRatingChange(venueName, newValue)
    }
  }

  return (
    <InteractiveCard>
      <img className="w-full h-48 object-cover" src={imgSrc || "/placeholder.svg"} alt={venueName} />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{venueName}</h2>
        <p className="text-gray-600 mb-4">สถานที่จัดงานที่สวยงามและพร้อมให้บริการสำหรับทุกโอกาส</p>

        <div
          onClick={(event) => event.stopPropagation()}
          onMouseDown={(event) => event.stopPropagation()}
          onTouchStart={(event) => event.stopPropagation()}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.stopPropagation()
            }
          }}
       >
          <Rating
            id={`${venueName} Rating`}
            name={`${venueName} Rating`}
            data-testid={`${venueName} Rating`}
            value={rating}
            onChange={handleRatingChange}
            size="large"
          />
        </div>
      </div>
    </InteractiveCard>
  )
}
