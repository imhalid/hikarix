'use client'
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion";
import { MOVIE_GENRES_TYPE } from "@/lib/types"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function GenreSelector({ genres, device }: { genres: MOVIE_GENRES_TYPE, device: string }) {
 const path = usePathname()

 const [expanded, setExpanded] = useState(false)

 useEffect(() => {
  if (device === 'mobile') {
   setExpanded(false)
  } else if (device === 'computer') {
   setExpanded(true)
  }
  return () => {
   setExpanded(false)
  }
 }, [path])
 return (
  <>
   <motion.div
    className="w-full h-11 px-4  font-bold flex justify-between border rounded-[6px] text-white border-neutral-800 items-center cursor-pointer"
    initial={false}
    animate={{ backgroundColor: expanded ? "#27272795" : "#17171705" }}
    onClick={() => setExpanded(!expanded)}
   >
    <p>Genres</p>
    <svg
     className={`w-4 h-4 transition-all transform ${expanded ? "rotate-0" : "-rotate-90"}`}
     viewBox="0 0 24 24"
    >
     <path
      fill="currentColor"
      d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z"
     />
    </svg>
   </motion.div>
   <AnimatePresence initial={false}>
    {expanded && (
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
  </>
 )
}

export const Genres = ({ genres }: { genres: MOVIE_GENRES_TYPE }) => {
 const path = usePathname()
 return (
   <motion.div variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }} transition={{ duration: 0.5 }}>
     <div className={` text-xs grid grid-cols-2 content-between mt-2 text-center gap-2 rounded-xl col-span-4 bg-neutral-800/50 py-2 text-white row-span-5 transition-all `}>
       {genres.map((genre: MOVIE_GENRES_TYPE) => (
         <div key={genre.id} className="">
           <Link href={`/category/${genre.id}`}>
             <p className={`px-2 py-1 rounded-[4px] inline-flex hover:text-sky-400 transition-all ${path === `/category/${genre.id.toString()}` ? 'bg-sky-900 text-sky-300' : ''}`}>{genre.name}</p>
           </Link>
         </div>
       ))}
     </div>
   </motion.div>
 )
}