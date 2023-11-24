import { GET_UPCOMING } from '@/lib/api'

import MovieCard from '@/components/ui/movie-card'
import { MOVIES_TYPE } from '@/lib/types'
export default async function MoviesGrid(): Promise<JSX.Element> {
  const { results } = await GET_UPCOMING()
  return (
    <div className="grid-area">
      {results.map((movie: MOVIES_TYPE) => (
        <MovieCard key={movie.id} data={movie} />
      ))}
    </div>
  )
}
