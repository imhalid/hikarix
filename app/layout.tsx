import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideBar from '@/components/sidebar'
import Header from '@/components/header'
import Footer from '@/components/footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hikarix - List of World Movies',
  description: 'List of World Movies',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + " w-3/4 mx-auto flex flex-col justify-center items-center relative"}>
        <SideBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html >
  )
}
