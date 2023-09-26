import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spotify Tailwind',
  description: 'Clone do Spotify para treinar conhecimentos adquiridos em Tailwind de design, criação e resposividade',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-zinc-900 text-zinc-50'>{children}</body>
    </html>
  )
}
