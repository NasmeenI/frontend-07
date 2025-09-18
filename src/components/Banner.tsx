"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const bannerImages = ["/img/cover.jpg", "/img/cover2.jpg", "/img/cover3.jpg", "/img/cover4.jpg"]

export default function Banner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const router = useRouter()

  const handleBannerClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1))
  }

  const handleSelectVenue = () => {
    router.push("/venue")
  }

  return (
    <div
      className="bg-cover bg-center bg-no-repeat text-white py-16 relative cursor-pointer"
      style={{ backgroundImage: `url(${bannerImages[currentImageIndex]})` }}
      onClick={handleBannerClick}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">ค้นพบสถานที่จัดงานที่สวยงาม</h1>
        <p className="text-xl mb-8">เลือกสถานที่ที่เหมาะสมสำหรับงานสำคัญของคุณ</p>
      </div>

      {/* Real image element for accessibility and testing */}
      <img
        src={bannerImages[currentImageIndex]}
        alt="Banner"
        className="sr-only"
      />

      <button
        onClick={(e) => {
          e.stopPropagation()
          handleSelectVenue()
        }}
        className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors z-20"
      >
        Select Venue
      </button>
    </div>
  )
}
