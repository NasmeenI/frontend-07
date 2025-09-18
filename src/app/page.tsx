import Banner from "@/components/Banner"
import TopMenu from "@/components/TopMenu"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopMenu />
      <Banner />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">ยินดีต้อนรับสู่ระบบจองสถานที่จัดงาน</h2>
          <p className="text-gray-600">คลิกที่ปุ่ม "Select Venue" เพื่อเลือกสถานที่จัดงานที่เหมาะสมกับคุณ</p>
        </div>
      </main>
    </div>
  )
}
