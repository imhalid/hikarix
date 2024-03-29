import { GET_UPCOMING } from "@/lib/api";

import LoadMoreButton from "@/components/load-more";
export default async function MoviesGrid(): Promise<JSX.Element> {
  const results = await GET_UPCOMING();
  return (
    <div className="flex w-full flex-col md:mr-2">
      <div className="grid-area">{results}</div>
      <LoadMoreButton API_FUNC={GET_UPCOMING} />
    </div>
  );
}
