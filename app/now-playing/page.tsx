import { GET_NOW_PLAYING } from "@/lib/api";

import MovieCard from '@/components/ui/movie-card'
import { MOVIES_TYPE } from '@/lib/types'
import { LoadMoreButton } from "@/components/load-more";
export default async function MoviesGrid(): Promise<JSX.Element> {
  const { results } = await GET_NOW_PLAYING()
  return (
    <div className="grid-area">
      {results.map((movie: MOVIES_TYPE) => (
        <MovieCard key={movie.id} data={movie} />
      ))}
      <LoadMoreButton />
    </div>
  )
}
