import { GET_MOVIES } from '@/lib/api'
import MovieCard from '@/components/ui/movie-card'
import { MOVIES_TYPE } from '@/lib/types'
import LoadMoreButton from './load-more'
export default async function MoviesGrid() {
  const { results } = await GET_MOVIES()
  return (
    <div className="grid-area">
      {results.map((movie: MOVIES_TYPE) => (
        <MovieCard key={movie.id} data={movie} />
      ))}
      <LoadMoreButton />
    </div>
  )
}
