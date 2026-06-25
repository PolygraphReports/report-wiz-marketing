export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-400">
          <p className="mb-2 text-lg font-semibold text-white">Report Wiz</p>
          <p>&copy; {new Date().getFullYear()} Report Wiz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
