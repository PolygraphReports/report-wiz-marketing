import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Report Wiz - Professional Reports from Recordings & Documents',
    template: '%s | Report Wiz',
  },
  description:
    'Turn recordings and documents into professional reports in minutes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  )
}
