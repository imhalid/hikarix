'use client'
import Canvas from '@/components/ui/canvas'
import { motion } from 'framer-motion'
import HeaderLinks from '@/components/ui/header-links'

export default function Header() {

  return (
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


      <HeaderLinks />
      <Canvas />
    </div>
  )
}