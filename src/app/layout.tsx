import type { Metadata, Viewport } from 'next'
import { DM_Sans, Courier_Prime } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const courierPrime = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-courier-prime',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Chor Police — Zepto',
  description: 'Teri craving bhaag rahi hai. Zepto Police tayaar hai.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${dmSans.variable} ${courierPrime.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
