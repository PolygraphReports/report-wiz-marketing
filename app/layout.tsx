import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import PostHogAnalytics from '@/components/PostHogAnalytics'
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
    default: 'ReportWiz.ai — Turn Sensitive Interviews Into Standardized Reports',
    template: '%s | ReportWiz.ai',
  },
  description:
    'ReportWiz.ai transforms your sensitive conversations into professional, fully customizable reports (transcription included) in minutes with law enforcement-grade security by default.',
  openGraph: {
    title: 'ReportWiz.ai — Turn Sensitive Interviews Into Standardized Reports',
    description:
      'ReportWiz.ai transforms your sensitive conversations into professional, fully customizable reports (transcription included) in minutes with law enforcement-grade security by default.',
    type: 'website',
    siteName: 'ReportWiz.ai',
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
        <PostHogAnalytics />
      </body>
    </html>
  )
}
