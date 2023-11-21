import { GET_MOVIE_SIMILAR } from '@/lib/api'
import { MOVIES_TYPE } from '@/lib/types'
import Link from 'next/link'
import Image from 'next/image'
import tinyPlaceholder from '@/public/tiny-placeholder.svg'

export default async function SimilarMovies({ id }: { id: string }) {
 const { results } = await GET_MOVIE_SIMILAR(id)
 console.log(results)
 return (
  <div className='mt-10'>
   <div className='flex flex-nowrap overflow-x-auto space-x-3 h-full'>
    {results.map((movie: MOVIES_TYPE) => (
     <div key={movie.id} className='w-1/5 min-w-[20%]'>
      <Link href={`/movie/${movie.id}`} className='h-full'>
       {
        movie.poster_path ? (
         <Image className='rounded-xl h-ful contrast-75 object-cover h-full' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} width={1920} height={1080} />
        ) : (
         <Image className='rounded-xl h-ful object-cover h-full saturate-0 contrast-50 hover:saturate-50 transition-all' src={tinyPlaceholder} alt={movie.title} width={1920} height={1080} />
        )
       }
      </Link>
     </div>
    ))}
   </div>
  </div>
 )
}
