// Genres Selector
// Year Selector
// Rating Selector
// Sorting Selector
// Search Button
// Reset Button

import { GET_GENRES } from "@/lib/api";
import { MOVIE_GENRES_TYPE } from "@/lib/types";
import GenreSelector from "@/components/ui/genres-selector";
import YearSelector from "@/components/ui/year-selector";

export default async function FilterMenu({ classes }: { classes: string }) {
  const { genres }: { genres: MOVIE_GENRES_TYPE } = await GET_GENRES();
  return (
    <div
      className={`w-64 rounded-xl border border-neutral-800 bg-neutral-900 p-2 ${classes}`}
    >
      <GenreSelector genres={genres} device="computer" />
      <YearSelector />
    </div>
  );
}
