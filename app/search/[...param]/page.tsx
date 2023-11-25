import { GET_DISCOVERY_MOVIE } from "@/lib/api"
import { MOVIES_TYPE } from "@/lib/types"
import MovieCard from '@/components/ui/movie-card'
import { LoadMoreButton } from "@/components/load-more"
export default async function Page({
 params,
 searchParams,
}: {
 params: { slug: string }
 searchParams: { [key: string]: string }
}) {
 const { results } = await GET_DISCOVERY_MOVIE({ genre_id: searchParams.genre_id })
 return (
  <div className="grid-area bg-[#d6d0d3] text-white">
   {results.map((movie: MOVIES_TYPE) => (
    <MovieCard key={movie.id} data={movie} />
   ))}
   <LoadMoreButton />
  </div>
 )

}