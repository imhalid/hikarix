
import { GET_MOVIE_BY_YEAR } from '@/lib/api'
import LoadMoreButton from '@/components/load-more'

export default async function Page({ params }: { params: { year: number } }) {
  const results = await GET_MOVIE_BY_YEAR(1, params.year)
  return (
    <div className="flex flex-col md:mr-2">
      <div className="grid-area">{results}</div>
      <LoadMoreButton YEAR_FUNC={GET_MOVIE_BY_YEAR} year={params.year} />
    </div>
  )
}
