import { GET_MOVIE } from '@/app/utils/api'
import MovieCard from '@/app/components/ui/movie-card'
import { MOVIE_TYPE } from '@/app/utils/types'
export default async function Home() {
  const { results } = await GET_MOVIE()
  return (
    <div className="grid w-full 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 bg-[#d6d0d3] text-white">
      {results.map((movie: MOVIE_TYPE) => (
        <MovieCard key={movie.title} title={movie.title} poster_path={movie.poster_path} />
      ))}
    </div>
  )
}
