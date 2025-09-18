import TopMenuItem from "./TopMenuItem"

export default function TopMenu() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-16">
          <div className="flex items-center space-x-8">
            <TopMenuItem href="/booking" label="Booking" />
            <img className="h-8 w-auto" src="/img/logo.png" alt="Venue Explorer Logo" />
          </div>
        </div>
      </div>
    </nav>
  )
}
