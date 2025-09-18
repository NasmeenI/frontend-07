import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock venue data with vid as key
const venueDetails = new Map([
  [
    "001",
    {
      vid: "001",
      name: "The Bloom Pavilion",
      imgSrc: "/img/bloom.jpg",
      description: "สถานที่จัดงานที่สวยงามท่ามกลางธรรมชาติ เหมาะสำหรับงานแต่งงานและงานเลี้ยงสังสรรค์",
      capacity: "200-300 คน",
      facilities: ["ที่จอดรถ", "ระบบเสียง", "แอร์", "ห้องแต่งตัว"],
    },
  ],
  [
    "002",
    {
      vid: "002",
      name: "Spark Space",
      imgSrc: "/img/sparkspace.jpg",
      description: "พื้นที่จัดงานสมัยใหม่ เหมาะสำหรับงานสัมมนาและงานเลี้ยงบริษัท",
      capacity: "100-150 คน",
      facilities: ["โปรเจคเตอร์", "ไมโครโฟน", "Wi-Fi", "เครื่องดื่ม"],
    },
  ],
  [
    "003",
    {
      vid: "003",
      name: "The Grand Table",
      imgSrc: "/img/grandtable.jpg",
      description: "ห้องจัดงานหรูหราสำหรับงานเลี้ยงสำคัญและงานประชุมใหญ่",
      capacity: "300-500 คน",
      facilities: ["ระบบเสียงครบชุด", "เวที", "ไฟแสดง", "ห้องครัว"],
    },
  ],
])

interface VenueDetailPageParams {
  vid: string
}

interface VenueDetailPageProps {
  params: Promise<VenueDetailPageParams>
}

export default async function VenueDetailPage({ params }: VenueDetailPageProps) {
  const resolvedParams = await Promise.resolve(params)
  const venue = venueDetails.get(resolvedParams.vid)

  if (!venue) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/venue" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          ← กลับไปยังรายการสถานที่
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64 md:h-96">
            <Image src={venue.imgSrc || "/placeholder.svg"} alt={venue.name} fill className="object-cover" />
          </div>

          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{venue.name}</h1>
            <p className="text-gray-600 text-lg mb-6">{venue.description}</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">ความจุ</h3>
                <p className="text-gray-700">{venue.capacity}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">สิ่งอำนวยความสะดวก</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {venue.facilities.map((facility, index) => (
                    <li key={index}>{facility}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
