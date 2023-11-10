'use client'
import { useState } from "react"
import { motion } from 'framer-motion'
import { MOVIE_GENRES_TYPE } from "@/lib/types"

const SearchMenu = ({ genres }: { genres: MOVIE_GENRES_TYPE }) => {
 const [isActive, setIsActive] = useState(false)
 const [selectedGenre, setSelectedGenre] = useState('')

 const variants = {
  open: {
   width: '100%',
   height: 128,
   bottom: "-10px"

  },
  close: {
   width: 0,
   height: 0,
   bottom: "0px"
  },
 }

 const handleGenreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSelectedGenre(event.target.value)
 }

 return (
  <div className="w-[inherit] text-left fixed  z-10 bottom-0 mb-4">
   <motion.div variants={variants} initial="close" animate={isActive ? "open" : "close"} className="w-full transform absolute bottom-0 -translate-x-1/2 left-1/2 rounded-xl bg-gray-100  h-32">
    <form>
     {genres.map((genre) => (
      <div key={genre.id}>
       <input type="radio" id={genre.name} name="genre" value={genre.name} checked={selectedGenre === genre.name} onChange={handleGenreChange} />
       <label htmlFor={genre.name}>{genre.name}</label>
      </div>
     ))}
    </form>
   </motion.div>
   <button onClick={() => setIsActive(!isActive)} className="px-2 absolute left-1/2 bottom-0 transform -translate-x-1/2  py-1 bg-emerald-400 text-emerald-950 rounded-full">Search</button>
  </div>
 )
}

export default SearchMenu
