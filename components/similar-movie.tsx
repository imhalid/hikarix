import { GET_MOVIE_SIMILAR } from '@/lib/api'
import { MOVIES_TYPE } from '@/lib/types'
import Link from 'next/link'
import Image from 'next/image'
import { blurImage } from '@/lib/blurImage'

export default async function SimilarMovies({ id }: { id: string }) {
 const { results } = await GET_MOVIE_SIMILAR(id)
 const { base64 } = await blurImage(`https://image.tmdb.org/t/p/original/${results[0].backdrop_path}`)
 console.log(results)
 return (
  <div className='mt-10'>
   <div className='flex flex-nowrap overflow-x-auto space-x-3 h-full'>
    {results.map((movie: MOVIES_TYPE) => (
     <div key={movie.id} className='w-1/5 min-w-[20%]'>
      <Link href={`/movie/${movie.id}`} className='h-full'>
       {
        movie.backdrop_path ? (
         <Image className='rounded-xl h-ful object-cover' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} width={1920} height={1080} />
        ) : (
         <div className='animate-pulse h-96 w-full bg-gray-400 rounded-xl'></div>
        )
       }
      </Link>
     </div>
    ))}
   </div>
  </div>
 )
}

export const ImagePlaceHolder = () => {
 return (
  <div className='w-1/5 min-w-[20%]'>
   <div className='animate-pulse h-96 w-full bg-gray-400 rounded-xl'></div>
   <div className='animate-pulse h-5 w-1/2 bg-gray-400 rounded-xl mt-2'></div>
  </div>
 )
}
