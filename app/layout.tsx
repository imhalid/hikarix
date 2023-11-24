import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
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
      <body className={`${inter.className} bg-neutral-950 relative`}
      >
        <div className='' style={{
          backgroundImage: 'url(/noise.png)',
          position: 'absolute',
          zIndex: 1,
          opacity: 0.05,
          backgroundSize: '128px',
          width: '100%',
          height: '100%',
          backgroundRepeat: 'repeat',
          pointerEvents: 'none',
        }}></div>
        {/* <div className='absolute top-0 right-0 z-10 left-0 h-[400px] overflow-hidden pointer-events-none'>
          <div className='absolute w-[700px] h-48 aspect-video blur-[100px] rounded-[100%] bg-rose-700/30 -top-36 right-1/2 '></div>
          <div className='absolute w-[700px] h-48 aspect-video blur-[100px] rounded-[100%] bg-rose-700/30 -top-36 left-1/3 '></div>
          <div className='absolute w-[700px] h-48 aspect-video blur-[100px]  rounded-[100%] bg-rose-500/30 -top-36 right-0 '></div>
        </div> */}
        <div className='container mx-auto flex flex-col justify-center  items-center relative'>

          <Header />
          <div className='flex gap-2'>
            {children}
            <FilterMenu />
          </div>
          <Footer />
        </div>
      </body>
    </html >
  )
}
