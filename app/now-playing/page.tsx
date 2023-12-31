import { GET_NOW_PLAYING } from "@/lib/api";

import LoadMoreButton from "@/components/load-more";
export default async function MoviesGrid(): Promise<JSX.Element> {
  const results = await GET_NOW_PLAYING()
  return (
    <div className='flex flex-col w-full md:mr-2'>
      <div className="grid-area">
        {results}
      </div>
      <LoadMoreButton API_FUNC={GET_NOW_PLAYING} />
    </div>
  )
}
