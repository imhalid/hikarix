
import { GET_MOVIE_BY_GENRE } from '@/lib/api'
import MovieCard from '@/components/ui/movie-card'
import { MOVIES_TYPE } from '@/lib/types'
import { LoadMoreButton } from '@/components/load-more'

export default async function Page({ params }: { params: { id: string } }) {
 const { results } = await GET_MOVIE_BY_GENRE(params.id)
 return <>
  <div className="grid-area">
   {results.map((movie: MOVIES_TYPE) => (
    <MovieCard key={movie.id} data={movie} />
   ))}
   <LoadMoreButton />
  </div>
 </>
}
