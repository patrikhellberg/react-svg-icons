import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

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
      <body className={inter.className}>
        <Header />
        <div className='min-h-screen'>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
