import { GET_MOVIE_SIMILAR } from "@/lib/api";
import ScrollYAxis from "@/components/ui/scroll-y-axis";
export default async function SimilarMovies({ id }: { id: string }) {
  const results = await GET_MOVIE_SIMILAR(id);

  return <ScrollYAxis>{results}</ScrollYAxis>;
}
