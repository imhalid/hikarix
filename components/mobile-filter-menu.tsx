// Genres Selector
// Year Selector
// Rating Selector
// Sorting Selector
// Search Button
// Reset Button
import { GET_GENRES } from "@/lib/api"
import { MOVIE_GENRES_TYPE } from "@/lib/types"
import GenreSelector from "@/components/ui/genres-selector"
export default async function MobileFilterMenu({ classes }: { classes: string }) {
 const { genres }: { genres: MOVIE_GENRES_TYPE } = await GET_GENRES()
 return (
  <div className={`rounded-xl max-h-[100dvh] overflow-y-auto p-2 bg-neutral-900 border-neutral-800 border ${classes}`}>
   <GenreSelector genres={genres} device='mobile' />
  </div>
 )
}

