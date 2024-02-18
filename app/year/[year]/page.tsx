import { GET_MOVIES } from "@/lib/api";
import LoadMoreButton from "@/components/load-more";

export default async function Page({ params }: { params: { year: number } }) {
  const results = await GET_MOVIES();
  return (
    <div className="flex flex-col md:mr-2">
      <div className="grid-area">{results}</div>
      <LoadMoreButton API_FUNC={GET_MOVIES} />
    </div>
  );
}
