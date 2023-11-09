import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideBar from '@/app/components/sidebar'
import Header from '@/app/components/header'
import Footer from '@/app/components/footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hikarix - List of World Movies',
  description: 'List of World Movies',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + " max-w-6xl mx-auto flex flex-col relative"}>
        <SideBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html >
  )
}
