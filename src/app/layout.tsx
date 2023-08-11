import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'I am José Almiro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`overflow-y-scroll scrollbar ${inter.className}`} style={{background: "#000", color: "#FFF"}}>{children}</body>
    </html>
  )
}
