import CardPanel from "@/components/CardPanel"

export default function VenuePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">เลือกสถานที่จัดงาน</h1>
        <CardPanel />
      </main>
    </div>
  )
}
