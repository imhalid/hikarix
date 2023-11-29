'use client'
import Canvas from '@/components/ui/canvas'
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
    <div className='w-full mt-3'>

      <div className='text-white w-full  flex justify-between items-center'>
        <Link href='/' className='flex items-baseline gap-2 hover:text-white text-neutral-400 transition-all font-extralight tracking-widerx'>
          <svg width="25" height="25" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M224 115.55V208a16 16 0 0 1-16 16h-40a16 16 0 0 1-16-16v-40a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8v40a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-92.45a16 16 0 0 1 5.17-11.78l80-75.48l.11-.11a16 16 0 0 1 21.53 0a1.14 1.14 0 0 0 .11.11l80 75.48a16 16 0 0 1 5.08 11.78Z" /></svg>
          <span className='relative bottom-[3px]'>Hikarix</span>
        </Link>
        <div className='flex justify-between gap-3 h-full items-center'>
          <Options />
          <div className='w-0.5 h-10 bg-gradient-to-t from-transparent via-neutral-300 to-transparent'></div>
          <Link href='#'>
            <div className='bg-neutral-900 subscribeButton text-xl whitespace-nowrap overflow- border relative border-neutral-800 px-3 py-2 rounded-xl font-bold'>
              <p className={bebasNeue.className}>
                <span className='z-10 relative'>
                  {subscribe}
                </span>
              </p>
              <div className='absolute w-full rounded-xl subscribe h-full'></div>
            </div>
          </Link>
        </div>

      </div>
      <div className="w-full lg:h-96 h-52 md:h-72 border overflow-hidden border-neutral-800 relative rounded-2xl mb-5 mt-3 shadow-inner">
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