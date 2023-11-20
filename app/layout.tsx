import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideBar from '@/components/sidebar'
import FilterMenu from '@/components/filter-menu'
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
      <body className={`${inter.className} container mx-auto flex flex-col justify-center bg-neutral-950 items-center relative `}
      >
        <div className='-mx-20' style={{
          backgroundImage: 'url(/noise.png)',
          position: 'absolute',
          zIndex: 1,
          opacity: 0.05,
          backgroundSize: '128px',
          width: '120%',
          height: '120%',
          backgroundRepeat: 'repeat',
          pointerEvents: 'none',
        }}></div>
        <div className='absolute w-[700px] h-48 aspect-video blur-3xl rounded-full bg-violet-500/30 -top-48 pointer-events-none'>
        </div>
        {/* <SideBar /> */}
        <Header />
        <div className='flex gap-2'>
          {children}
          <FilterMenu />
        </div>
        <Footer />
      </body>
    </html >
  )
}
