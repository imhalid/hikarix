'use client'
import Canvas from '@/components/ui/canvas'
import { motion } from 'framer-motion'
import HeaderLinks from '@/components/ui/header-links'
import HeaderSearch from '@/components/ui/header-search'
import Link from 'next/link'
import Options from "@/components/options"
import { Bebas_Neue } from 'next/font/google'

const bebasNeue = Bebas_Neue({
  subsets: ['latin-ext'],
  display: 'swap',
  // preload: true,
  weight: '400'
})

const container = {
  hidden: {
    opacity: 0
  },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.02, delayChildren: i * 0 }
  }),
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.02 }
  }
};

// create for subscribe text effect, when hover button subscribe text y position will be change and font size will be change too y -1px and font size 1.1rem to 1.2rem and when hover out will be back to normal

const subscribe = "Subscribe"

export default function Header() {

  return (
    <div className='w-full'>

      <div className='text-white w-full  flex justify-between items-center'>
        <Link href='/'>
          Home
        </Link>

        <Options />

        <Link href='/'>
          <div className='bg-neutral-900 text-xl whitespace-nowrap border border-neutral-800 px-3 py-2 rounded-xl font-bold subscribe'>
            <p className={bebasNeue.className}>
              {subscribe}
            </p>
          </div>
        </Link>
      </div>
      <div className="w-full lg:h-96 h-52 md:h-72 border overflow-hidden border-neutral-800 relative rounded-2xl my-5 shadow-inner">
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center  opacity-30" style={{
          backgroundImage: "url('/Perspective2.svg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          {/* <motion.div
     initial={{ opacity: 1, y: 0, scale: 3.5 }}
     animate={{ opacity: 1, y: 300, scale: 0 }}
     transition={{
      duration: 5,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
     }}
     className="w-full h-96 rounded-full left-0 bg-black"></motion.div> */}
        </div>

        <div className="w-full h-full absolute z-1 touch-none top-0 left-0 opacity-100" style={{
          background: "radial-gradient(circle, rgba(63,94,251,0) 50%, rgba(0,0,0,1) 100%)",
        }}>
          <div className="w-[700px] h-52 rounded-[100%] bg-neutral-500 absolute -top-32 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[100px]"></div>

        </div>

        <HeaderSearch />
        <HeaderLinks />
        <Canvas />
      </div>
    </div>

  )
}