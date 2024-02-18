import { GET_MOVIE_QUERY } from "@/lib/api";
import LoadMoreButton from "@/components/load-more";
export default async function Page({ params }: { params: { query: string } }) {
  const results = await GET_MOVIE_QUERY(1, params.query);

  return (
    <div className="flex w-full flex-col md:mr-2">
      <div className="grid-area">{results}</div>
      <LoadMoreButton query={params.query} QUERY_FUNC={GET_MOVIE_QUERY} />
    </div>
  );
}
