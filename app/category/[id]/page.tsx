
import { GET_MOVIE_BY_GENRE } from '@/lib/api'
import MovieCard from '@/components/ui/movie-card'
import { MOVIES_TYPE } from '@/lib/types'
import LoadMoreButton from '@/components/load-more'

export default async function Page({ params }: { params: { id: number } }) {
 const { results } = await GET_MOVIE_BY_GENRE(1, params.id)

 return (
  <div className='flex flex-col w-full md:mr-2'>

   <div className="grid-area">
    {results.map((movie: MOVIES_TYPE) => (
     <MovieCard key={movie.id} data={movie} />
    ))}
   </div>
   <LoadMoreButton API_FUNC={GET_MOVIE_BY_GENRE} genre_id={params.id} />
  </div>
 )
}
