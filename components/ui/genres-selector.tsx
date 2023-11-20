'use client'
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion";
import { MOVIE_GENRES_TYPE } from "@/lib/types"
import Link from "next/link"
import { usePathname } from "next/navigation";

export default function GenreSelector({ genres }: { genres: MOVIE_GENRES_TYPE }) {
 const [expanded, setExpanded] = useState(false)
 const isOpen = expanded === true

 return (
  <div>
   <motion.div
    className="w-full h-8 p-5 font-bold flex justify-between border rounded text-white border-neutral-800 items-center cursor-pointer"
    initial={false}
    animate={{ backgroundColor: isOpen ? "#27272795" : "#17171705" }}
    onClick={() => setExpanded(isOpen ? false : true)}
   >
    <p>Genres</p>
    <svg
     className={`w-4 h-4 transition-all transform ${isOpen ? "rotate-0" : "-rotate-90"
      }`}
     viewBox="0 0 24 24"
    >
     <path
      fill="currentColor"
      d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z"
     />
    </svg>
   </motion.div>
   <AnimatePresence initial={false}>
    {isOpen && (
     <motion.div
      initial="collapsed"
      animate="open"
      exit="collapsed"
      className="overflow-hidden"
      variants={{
       open: { opacity: 1, height: "auto" },
       collapsed: { opacity: 0, height: 0 }
      }}
      transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
     >
      <Genres genres={genres} />
     </motion.div>
    )}
   </AnimatePresence>
  </div>
 )
}

export const Genres = ({ genres }: { genres: MOVIE_GENRES_TYPE }) => {
 const path = usePathname()
 return (
  <motion.div variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
   transition={{ duration: 0.5 }}>
   <div
    className={` text-xs grid grid-cols-2 content-between mt-4 gap-2 rounded-xl col-span-4 text-white row-span-5 transition-all `} >
    {genres.map((genre: MOVIE_GENRES_TYPE) => (
     <div key={genre.id} className="">
      <Link href={`/category/${genre.id}`}>
       <button className={`px-2 py-1 rounded-md hover:text-sky-400 transition-all ${path === `/category/${genre.id.toString()}` ? 'bg-sky-900 text-sky-300' : ''}`}>{genre.name}</button>
      </Link>
     </div>
    ))}
   </div>
  </motion.div>
 )
}