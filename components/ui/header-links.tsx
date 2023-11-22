import Link from 'next/link'
import { motion } from 'framer-motion'
const links = [
 {
  name: 'top rated',
  url: '/category/16'
 },
 {
  name: 'popular',
  url: '/popular'
 },
 {
  name: 'upcoming',
  url: '/upcoming'
 },
 {
  name: 'now playing',
  url: '/now-playing'
 },
]
export default function HeaderLinks() {
 return (
  <div className="w-full absolute z-1 touch-none bottom-5 gap-2 flex justify-center z-50 left-0 opacity-100">
   {links.map((link, index) => (
    <div key={index} className="w-fit h-full inline-flex items-center justify-center">
     <motion.div
      initial={{ opacity: 0, y: 0, scale: 1 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
       duration: 1,
       delay: 0.5 + index * 0.2,
       ease: [0, 0.71, 0.2, 1.01]
      }}
      className=" h-full inline-flex items-center justify-center">
      <Link href={link.url} className="text-lg font-bold text-white uppercase px-3 py-1 rounded-md hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
       {link.name}
      </Link>
     </motion.div>
    </div>
   )
   )}
  </div>
 )
} 