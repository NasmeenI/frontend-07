"use client"

import { useReducer } from "react"
import Link from "next/link"
import Card from "./Card"
import { ratingReducer, initialRatingState } from "./ratingReducer"

const venues = [
  { vid: "001", name: "The Bloom Pavilion", imgSrc: "/img/bloom.jpg" },
  { vid: "002", name: "Spark Space", imgSrc: "/img/sparkspace.jpg" },
  { vid: "003", name: "The Grand Table", imgSrc: "/img/grandtable.jpg" },
]

export default function CardPanel() {
  const [ratings, dispatch] = useReducer(ratingReducer, initialRatingState)

  const handleRatingChange = (venueName: string, rating: number) => {
    dispatch({ type: "SET_RATING", venueName, rating })
  }

  const handleVenueClick = (venueName: string) => {
    dispatch({ type: "REMOVE_VENUE", venueName })
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {venues.map((venue) => (
          <Link key={venue.vid} href={`/venue/${venue.vid}`}>
            <Card
              venueName={venue.name}
              imgSrc={venue.imgSrc}
              rating={ratings.get(venue.name) || 0}
              onRatingChange={handleRatingChange}
            />
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-6">รายการสถานที่และคะแนน</h3>
        <div className="space-y-3">
          {Array.from(ratings.entries()).map(([venueName, rating]) => (
            <div
              key={venueName}
              data-testid={venueName}
              onClick={() => handleVenueClick(venueName)}
              className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium">{venueName}</span>
              <span className="text-yellow-500 font-semibold">{rating} ดาว</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
