import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Premium Portfolio - Tech Creator & Developer',
  description: 'Professional portfolio showcasing cutting-edge web development, software engineering, and tech solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
