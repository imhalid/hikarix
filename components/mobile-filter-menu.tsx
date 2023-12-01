import { GET_GENRES } from "@/lib/api"
import { MOVIE_GENRES_TYPE } from "@/lib/types"
import GenreSelector from "@/components/ui/genres-selector"
import YearSelector from "./ui/year-selector"
import Container from "./ui/mobile-filter-container"
export default async function MobileFilterMenu({ classes }: { classes: string }) {
 const { genres }: { genres: MOVIE_GENRES_TYPE } = await GET_GENRES()
 return (
  <Container genres={genres} device='mobile'>
   <YearSelector />
  </Container>
 )
}

