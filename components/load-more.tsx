
'use client'
import MovieCard from '@/components/ui/movie-card'
import { MOVIES_TYPE } from '@/lib/types'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import useStore from '@/zustand/useStore'
import { useOptionsStore, OptionsValues } from '@/zustand/useOptionsStore'

export type MovieCard = JSX.Element

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
 const infinity = useStore(useOptionsStore, (state: OptionsValues) => state.infinity)
 const [infinityValue, setInfinityValue] = useState<Boolean>()
 useEffect(() => {
  const item = localStorage.getItem('infinity-scroll');
  if (item) {
   const parsedItem = JSON.parse(item);
   const infinityValue = parsedItem.state.infinity;
   setInfinityValue(infinityValue)
  }
 }, [infinity])

 const { ref, inView } = useInView()
 const [results, setResults] = useState<MovieCard[]>([])

 const loadMoreData = () => {
  if (QUERY_FUNC && query) {
   QUERY_FUNC(page, query).then((res: any) => {
    setResults((prev) => [...prev, ...res])
    page++
   });
   return;
  }

  if (API_FUNC && genre_id) {
   API_FUNC(page, genre_id).then((res: any) => {
    setResults((prev) => [...prev, ...res])
    page++
   });
   return;
  }

  if (API_FUNC) {
   API_FUNC(page).then((res: any) => {
    console.log(res)
    setResults((prev) => [...prev, ...res])
    page++
   });
  }
 };

 useEffect(() => {
  if (inView && infinityValue) {
   loadMoreData();
  }
 }, [inView, infinityValue])

 const handleClick = () => {
  if (!infinityValue) {
   loadMoreData();
  }
 };
 return (
  <>
   <div className="grid-area mt-2">
    {results}
   </div>
   <div ref={ref} className='w-full flex justify-center items-center mt-7'>
    <button
     onClick={handleClick}
     className='flex text-white items-center justify-center w-fit h-12 rounded-full px-5 bg-gradient-to-r from-sky-500 to-violet-400 font-bold text-lg'>
     Load More
    </button>
   </div>
  </>
 )
}

