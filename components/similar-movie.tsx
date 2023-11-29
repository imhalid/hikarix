import { GET_MOVIE_SIMILAR } from '@/lib/api'
import ScrollYAxis from '@/components/ui/scroll-y-axis'
export default async function SimilarMovies({ id }: { id: string }) {
 const results = await GET_MOVIE_SIMILAR(id)

 function handleWheel(event: any ) {
  const container = event.currentTarget;
  const containerScrollPosition = container.scrollLeft;

  container.scrollTo({
    top: 0,
    left: containerScrollPosition + event.deltaY,
    behaviour: 'smooth' // Opsiyonel olarak yumuşak bir kaydırma efekti ekleyebilirsiniz
  });
}

 return (
  <ScrollYAxis>
       {results}
  </ScrollYAxis>
 )
}
