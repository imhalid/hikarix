
import { GET_MOVIE_BY_GENRE } from '@/lib/api'
import LoadMoreButton from '@/components/load-more'

export default async function Page({ params }: { params: { id: number } }) {
 const results = await GET_MOVIE_BY_GENRE(1, params.id)

 return (
  <div className='flex flex-col md:mr-2'>

   <div className="grid-area">
    {results}
   </div>
   <LoadMoreButton API_FUNC={GET_MOVIE_BY_GENRE} genre_id={params.id} />
  </div>
 )
}
