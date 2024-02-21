import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Context from '../components/Context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Icons | Bucket Media',
  description:
    'A preview of icons available in @bm-js/icons. Icons created by John Itebu for moja UI.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <Context>
        <body className={inter.className}>{children}</body>
      </Context>
    </html>
  )
}
