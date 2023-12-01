'use client'
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react"
import { MOVIE_GENRES_TYPE } from "@/lib/types"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Container({ genres, device, children }: { genres: MOVIE_GENRES_TYPE, device: string, children: React.ReactNode }) {
 const path = usePathname()

 const [expanded, setExpanded] = useState(false)

 const variants: Variants = {
  collapsed: { bottom: -440, backgroundColor: "#17171705", border: "0px" },
  open: { bottom: 0, backgroundColor: "#070707" }
 }

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

 useEffect(() => {
  if (expanded) {
   document.body.style.overflow = 'hidden'
  } else {
   document.body.style.overflow = 'auto'
  }
  return () => {
   document.body.style.overflow = 'auto'
  }
 }, [expanded])

 return (
  <motion.div
   variants={variants}
   initial={false}
   animate={expanded ? "open" : "collapsed"}
   className={` h-auto p-2 bg-neutral-900 border-neutral-800 border w-full z-[100] bottom-0 left-1/2 -translate-x-1/2  max-w-xl rounded-xl lg:hidden fixed`}>
   <div className="absolute w-full h-[200dvh] -z-30 left-0 bg-neutral-950/50 bottom-0 transition-all"
    style={{
     opacity: expanded ? "1" : "0",
     pointerEvents: expanded ? "auto" : "none",
    }}
   ></div>
   <motion.div
    animate={{ paddingBottom: expanded ? "8px" : "30px" }}
    className="text-white flex w-full items-center justify-center relative pb-2 ">
    <button
     onClick={() => setExpanded(!expanded)}
     className="w-8 h-8 bg-blue-500 rounded-full flex justify-center items-center">
     <svg className="w-6 h-6" viewBox="0 0 24 24">
      <path
       fill="currentColor"
       d="M3 12H21M3 6H21M3 18H21"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
      />
     </svg>
    </button>
   </motion.div>
   <motion.div
    className="w-full h-11 px-4  font-bold flex justify-between border rounded-[6px] text-white border-neutral-800 items-center cursor-pointer"
    animate={{ backgroundColor: expanded ? "#27272795" : "#17171705", border: expanded ? "1px solid #272727" : "0px" }}
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
   <motion.div
    className="overflow-hidden p-0.5"
   >
    <Genres genres={genres} />
    {children}
   </motion.div>
  </motion.div>
 )
}

export const Genres = ({ genres }: { genres: MOVIE_GENRES_TYPE }) => {
 const path = usePathname()
 return (
  <motion.div>
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