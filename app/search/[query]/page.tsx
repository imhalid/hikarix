import { GET_MOVIE_QUERY } from "@/lib/api"
import { MOVIES_TYPE } from "@/lib/types"
import MovieCard from '@/components/ui/movie-card'
import LoadMoreButton from "@/components/load-more"
export default async function Page({ params }: { params: { query: string } }) {

 const results = await GET_MOVIE_QUERY(1, params.query)

 return (
  <div className='flex flex-col w-full md:mr-2'>
   <div className="grid-area">
    {results}
   </div>
   <LoadMoreButton query={params.query} QUERY_FUNC={GET_MOVIE_QUERY} />
  </div>
 )

}