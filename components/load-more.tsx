
'use client'
import MovieCard from '@/components/ui/movie-card'
import { MOVIES_TYPE } from '@/lib/types'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface LoadMoreButtonProps {
 API_FUNC?: (page: number, genre_id?: number, query?: string) => Promise<any>;
 genre_id?: number;
 query?: string;
 QUERY_FUNC?: (page: number, query: string) => Promise<any>;
}
let page = 2
export default function LoadMoreButton({
 API_FUNC,
 genre_id,
 query,
 QUERY_FUNC
}: LoadMoreButtonProps) {

 const { ref, inView } = useInView()
 const [results, setResults] = useState<MOVIES_TYPE[]>([])
 useEffect(() => {

  if (inView && QUERY_FUNC && query) {
   QUERY_FUNC(page, query).then((res: any) => {
    setResults((prev) => [...prev, ...res.results])
    page++
   }
   )
   console.log('with query')
   return
  }

  if (inView && API_FUNC && genre_id) {
   API_FUNC(page, genre_id).then((res: any) => {
    setResults((prev) => [...prev, ...res.results])
    page++
   }
   )
   console.log('with category')
   return
  }

  if (inView && API_FUNC) {
   API_FUNC(page).then((res: any) => {
    setResults((prev) => [...prev, ...res.results])
    page++
   }
   )
   console.log('normal')
  }
 }, [inView, results])
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

