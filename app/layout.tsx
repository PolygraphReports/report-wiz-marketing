import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: {
    default: 'Report Wiz — Turn Sensitive Interviews Into Standardized Reports',
    template: '%s | Report Wiz',
  },
  description:
    'Report Wiz transforms sensitive recordings into professional, fully customizable reports in minutes — transcript included, with CJIS-compliant, law enforcement-grade security for law everyone.',
  openGraph: {
    title: 'Report Wiz — Turn Sensitive Interviews Into Standardized Reports',
    description:
      'Report Wiz transforms sensitive recordings into professional, fully customizable reports in minutes — transcript included, with CJIS-compliant, law enforcement-grade security for everyone.',
    type: 'website',
    siteName: 'Report Wiz',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-ploy-background-primary font-sans text-ploy-text-primary antialiased">
        {children}
      </body>
    </html>
  )
}
