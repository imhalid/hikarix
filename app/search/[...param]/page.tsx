import { GET_DISCOVERY_MOVIE } from "@/lib/api"
import { MOVIES_TYPE } from "@/lib/types"
import MovieCard from '@/components/ui/movie-card'
export default async function Page({
 params,
 searchParams,
}: {
 params: { slug: string }
 searchParams: { [key: string]: string }
}) {
 const { results } = await GET_DISCOVERY_MOVIE({ genre_id: searchParams.genre_id })
 return (
  <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 bg-[#d6d0d3] text-white">
   {results.map((movie: MOVIES_TYPE) => (
    <MovieCard key={movie.id} data={movie} />
   ))}
  </div>
 )

}