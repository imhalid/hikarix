
import { GET_MOVIE_BY_GENRE } from '@/lib/api'
import MovieCard from '@/components/ui/movie-card'
import { MOVIES_TYPE } from '@/lib/types'

export default async function Page({ params }: { params: { id: string } }) {
 const { results } = await GET_MOVIE_BY_GENRE(params.id)

 return <div>
  <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 bg-[#d6d0d3] text-white">
   {results.map((movie: MOVIES_TYPE) => (
    <MovieCard key={movie.id} movie_id={movie.id} title={movie.title} poster_path={movie.poster_path} />
   ))}
  </div>

 </div>
}
