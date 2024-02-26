import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Context from '../components/Context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'React SVG Icons',
  description:
    'A preview of icons available in @hellberg/react-svg-icons. Icons created by John Itebu for moja UI.',
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
