'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const links = [
 {
  name: 'top rated',
  url: '/top-rated'
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
  const path = usePathname()
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
             ease: [0, 0.71, 0.2, 1.01],
           }}
           className=" h-full inline-flex items-center justify-center"
         >
           <Link href={link.url} className="text-base shadow-xl rounded-full font-bold text-neutral-200 relative uppercase px-3 py-1 transition-all duration-300 ease-in-out">
             <div>{link.name}</div>
             <div
               style={{
                 boxShadow: path === `${link.url}` ? '0px 0px 5px 2px #3B81F4' : '',
               }}
               className="w-full h-full outline outline-1 rounded-full  outline-blue-500 z-0 left-0 absolute top-0"
             ></div>
           </Link>
         </motion.div>
       </div>
     ))}
   </div>
 )
} 