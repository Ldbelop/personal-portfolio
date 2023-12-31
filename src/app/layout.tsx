import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'David Barón',
  description: 'Portfolio of David Barón',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/db-logo-invert.png" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
