import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Report Wiz
          </Link>
          <button className="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}
