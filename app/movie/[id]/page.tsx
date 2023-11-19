import { GET_MOVIE, GET_MOVIE_TRAILER } from '@/lib/api'
import { MOVIES_TYPE, PRODUCTION_COMPANY, PRODUCTION_COUNTRY } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import SimilarMovies from '@/components/similar-movie'
type GENRE = {
 id: number;
 name: string;
}

export default async function Page({ params }: { params: { id: string } }) {
 const data: MOVIES_TYPE = await GET_MOVIE(params.id)
 const video = await GET_MOVIE_TRAILER(params.id)

 return (
  <div className='flex flex-col max-w-[1070px]'>
   <Ambient />
   <div className='relative rounded-xl'>
    {data.backdrop_path ? (
     <Image className='rounded-xl' src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt={data.title} width={1920} height={1080}
      style={{ filter: 'url(#ambilight)' }}
     />
    ) : (
     <ImagePlaceHolder />

    )
    }
    {/* <div className='absolute w-full h-full top-0 rounded-xl' style={{ boxShadow: `0px 0px 46px 3px rgb(${color.r}, ${color.g}, ${color.b}, 0.30)` }}></div> */}
    <div className='absolute bg-gradient-to-r rounded-xl from-neutral-950 to-transparent blur-xl inset-0'></div>
    <div className='absolute bottom-0 left-5 text-white p-4 mb-10'>
     <h1 className='text-5xl font-bold mt-4 md:mt-0'>{data.title}</h1>
     <p className='text-gray-400'>{data.tagline}</p>
     <div className='flex items-center my-4'>
      <span className='bg-yellow-400 text-gray-900 rounded-full px-2 py-1 text-xs font-semibold mr-2'>{data.vote_average?.toString().slice(0, 3)}</span>
      <span className='text-gray-400'>{data.release_date?.split('-')[0]}</span>
     </div>
     <p className='w-2/3'>{data.overview}</p>
     <div className='flex flex-wrap mt-2'>
      {data.genres?.map((genre: GENRE) => (
       <Link href={`/category/${genre.id}`} key={genre.id} className='mr-1 mt-1 hover:bg-white hover:text-black transition-all duration-500 border border-neutral-800 backdrop-blur rounded px-3 py-1 text-sm'>{genre.name}</Link>
      ))}
     </div>

     {video.results?.length > 0 && (
      <div key={video.results[0].id} className='mt-5 relative inline-block group rounded-full overflow-hidden scale-100 active:scale-[.99] translate-y-0 active:translate-y-1 transition-all'>
       <Link href={`https://www.youtube.com/watch?v=${video.results[0].key}`}
        className='bg-gradient-to-r from-neutral-900 to-neutral-800 text-white rounded-full px-4 py-2 border border-neutral-600 inline-flex'
       >{video.results[0].name}
        <PlayIcon className='ml-2' />
        <div className='h-10 w-36 absolute bg-gradient-to-t from-transparent via-white/50 to-transparent -rotate-45 -translate-x-32 group-hover:translate-x-96 duration-1000 delay-100 transition-all'></div>
       </Link>
      </div>
     )}
    </div>
   </div>
   <SimilarMovies id={params.id} />
  </div>
 )
}

export const PlayIcon = ({ ...props }) => {
 return (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path fill="currentColor" d="M5.669 4.76a1.469 1.469 0 0 1 2.04-1.177c1.062.454 3.442 1.533 6.462 3.276c3.021 1.744 5.146 3.267 6.069 3.958c.788.591.79 1.763.001 2.356c-.914.687-3.013 2.19-6.07 3.956c-3.06 1.766-5.412 2.832-6.464 3.28c-.906.387-1.92-.2-2.038-1.177c-.138-1.142-.396-3.735-.396-7.237c0-3.5.257-6.092.396-7.235Z" /></g></svg>
 )
}

export const Ambient = () => {
 return (
  <svg width="0" height="0"><filter id="ambilight" width="300%" height="300%" x="-0.75" y="-0.75" colorInterpolationFilters="sRGB"><feOffset in="SourceGraphic" result="source-copy"></feOffset><feColorMatrix in="source-copy" type="saturate" values="1" result="saturated-copy"></feColorMatrix><feColorMatrix in="saturated-copy" type="matrix" values="1 0 0 0 0
                     0 1 0 0 0
                     0 0 1 0 0
                     33 33 33 101 -100" result="bright-colors"></feColorMatrix><feMorphology in="bright-colors" operator="dilate" radius="0" result="spread"></feMorphology><feGaussianBlur in="spread" stdDeviation="17" result="ambilight-light"></feGaussianBlur><feOffset in="SourceGraphic" result="source"></feOffset><feComposite in="source" in2="ambilight-light" operator="over"></feComposite></filter></svg>
 )
}

export const ImagePlaceHolder = () => {
 return (
  <div className=''>
   <div className='animate-pulse h-full w-full bg-gray-400 rounded-xl'></div>
  </div>
 )
}
