'use client'
import { useState } from "react"
import { motion } from 'framer-motion'
import { MOVIE_GENRES_TYPE } from "@/lib/types"
import Link from "next/link"

const SearchMenu = ({ genres }: { genres: MOVIE_GENRES_TYPE }) => {
 const [isActive, setIsActive] = useState(false)
 const [selectedGenre, setSelectedGenre] = useState<number>()

 const variants = {
  open: {
   bottom: "-25px",
  },
  close: {
   bottom: "-500px",
  },
 }

 const handleGenreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSelectedGenre(parseInt(event.target.value))
 }

 return (
  <div className="w-[inherit] text-left fixed  z-10 bottom-0 mb-4">
   <motion.div variants={variants} initial="close" animate={isActive ? "open" : "close"} className="grid w-[101%] shadow-2xl border grid-cols-12 grid-rows-[repeat(12,_minmax(0,_1fr))] p-5 pb-10 transform absolute bottom-0 -translate-x-1/2 left-1/2 rounded-xl bg-gray-100">
    <div className={`flex flex-wrap content-between outline-[0.5px] outline-black/30 outline-dashed px-2 py-2 gap-2 rounded-xl col-span-4 row-span-5 transition-all ${isActive ? 'opacity-1' : 'opacity-0'} `} >
     {genres.map((genre: MOVIE_GENRES_TYPE) => (
      <div key={genre.id} className="">
       <input type="radio" className="w-0 h-0 opacity-0" id={genre.id.toString()} name="genre" value={genre.id} checked={selectedGenre === genre.id} onChange={handleGenreChange} />
       <label htmlFor={genre.id.toString()} className={`px-2 py-1 rounded-md hover:outline-[0.1px] hover:outline outline-orange-600 transition-all ${selectedGenre === genre.id ? 'bg-orange-200 text-orange-500' : ''}`}>{genre.name}</label>
      </div>
     ))}
    </div>
   </motion.div>
   <Link href={`/search/q?genre_id=${selectedGenre}`}><button className="px-2 absolute left-1/2 bottom-20 transform -translate-x-1/2  py-1 bg-emerald-400 text-emerald-950 rounded-full">Ara</button></Link>
   {/* <button onClick={() => router.push('/search/asa?a=1&b=2')} className="px-2 absolute left-1/2 bottom-10 transform -translate-x-1/2  py-1 bg-emerald-400 text-emerald-950 rounded-full">Ara</button> */}
   <button onClick={() => setIsActive(!isActive)} className="px-2 absolute left-1/2 bottom-0 transform -translate-x-1/2  py-1 bg-emerald-400 text-emerald-950 rounded-full">Search</button>
  </div>
 )
}

export default SearchMenu
