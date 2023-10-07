import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/styles.sass'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pedro Barbeitos',
  description: 'My personal webpage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
