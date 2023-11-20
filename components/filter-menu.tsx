// Genres Selector
// Year Selector
// Rating Selector
// Sorting Selector
// Search Button
// Reset Button

import { GET_GENRES } from "@/lib/api"
import { MOVIE_GENRES_TYPE } from "@/lib/types"
import GenreSelector from "@/components/ui/genres-selector"

export default async function FilterMenu() {
 const { genres }: { genres: MOVIE_GENRES_TYPE } = await GET_GENRES()
 return (
  <div className="w-80 rounded-md p-2 bg-neutral-900 border-neutral-800 border">
   <GenreSelector genres={genres} />
  </div>
 )
}