'use client'
import { Canvas } from "@react-three/fiber"
import HeaderText from '@/components/ui/header-text'
import { motion } from 'framer-motion'
import { PerspectiveLine } from "@/components/ui/perspective-line"
export default function Header() {

 const variants = {
  hidden: {
   scale: 0,
   opacity: 0,
  },
  visible: {
   scale: 10,
   opacity: 1,
   transition: {
    duration: 10000,
    ease: "easeInOut",
    delay: 0.5,
   }
  }
 }

 return (
  <div className="w-full h-96 border overflow-hidden border-neutral-800 relative rounded-2xl my-5 shadow-inner">

   <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center  opacity-30" style={{
    backgroundImage: "url('/Perspective.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
   }}>
    <motion.div
     initial={{ opacity: 1, y: 0, scale: 3.5 }}
     animate={{ opacity: 1, y: 300, scale: 0 }}
     transition={{
      duration: 5,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
     }}
     className="w-full h-96 rounded-full left-0 bg-black"></motion.div>
   </div>

   {/* radial-gradient(circle, rgba(63,94,251,0) 50%, rgba(0,0,0,1) 100%); */}
   <div className="w-full h-full absolute z-1 touch-none top-0 left-0 opacity-100" style={{
    background: "radial-gradient(circle, rgba(63,94,251,0) 50%, rgba(0,0,0,1) 100%)",
   }}>
   </div>

   <Canvas
    shadows
    className="touch-none"
    camera={{ position: [0, 0, 1.3] }}

   // In order for two dom nodes to be able to receive events they must share
   // the same source. By re-connecting the canvas to a parent that contains the
   // text content as well as the canvas we do just that.
   >
    <HeaderText />
   </Canvas>
  </div>
 )
}