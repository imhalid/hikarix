import { GET_MOVIE_SIMILAR } from '@/lib/api'

export default async function SimilarMovies({ id }: { id: string }) {
 const results = await GET_MOVIE_SIMILAR(id)
 return (
   <div className="mt-10 h-full">
     <div className="inline-flex flex-nowrap overflow-x-auto space-x-3 h-full scrollbar-hidden">{results}</div>
   </div>
 )
}
