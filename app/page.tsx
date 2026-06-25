import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />

      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
              Turn recordings and documents into professional reports
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Upload your source material and get polished, client-ready reports in minutes.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
