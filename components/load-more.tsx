
'use client'
import { GET_MOVIE_BY_GENRE } from '@/lib/api'
import MovieCard from '@/components/ui/movie-card'
import { MOVIES_TYPE } from '@/lib/types'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'



export const LoadMoreButton = ({ apiUrl }: any) => {
 const { ref, inView } = useInView()
 const [results, setResults] = useState<MOVIES_TYPE[]>([])
 useEffect(() => {
  if (inView) {
   alert('Load more')
  }
 }, [inView])
 return (
  <>
   <div className="grid-area">
    {results.map((movie: MOVIES_TYPE) => (
     <MovieCard key={movie.id} data={movie} />
    ))}
   </div>
   <div ref={ref}>
    <button className='flex text-white items-center justify-center w-full h-12 rounded-3xl bg-gradient-to-r from-sky-500 to-sky-400 font-bold text-lg'>
     Load More
    </button>
   </div>
  </>
 )
}
