import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '@/styles/styles.sass'

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['100', '300', '400', '700','900'] 
})

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
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
