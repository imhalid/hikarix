import { GET_NOW_PLAYING } from "@/lib/api";
import LoadMoreButton from "@/components/load-more";

export default async function MoviesGrid(): Promise<JSX.Element> {
  const results = await GET_NOW_PLAYING();
  return (
    <div className="flex w-full flex-col md:mr-2">
      <div className="grid-area">{results}</div>
      <LoadMoreButton API_FUNC={GET_NOW_PLAYING} />
    </div>
  );
}
