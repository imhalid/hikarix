// Genres Selector
// Year Selector
// Rating Selector
// Sorting Selector
// Search Button
// Reset Button

import { GET_GENRES } from "@/lib/api"
import { MOVIE_GENRES_TYPE } from "@/lib/types"
import GenreSelector from "@/components/ui/genres-selector"

export default async function FilterMenu({ classes }: { classes: string }) {
 const { genres }: { genres: MOVIE_GENRES_TYPE } = await GET_GENRES()
 return (
  <div className={`w-80 rounded-xl p-2 bg-neutral-900 border-neutral-800 border ${classes}`}>
   <GenreSelector genres={genres} device='computer' />
  </div>
 )
}