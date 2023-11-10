import { GET_GENRES } from "@/lib/api"
import { MOVIE_GENRES_TYPE } from "@/lib/types"
import Link from "next/link"
import SearchMenu from "@/components/ui/search-menu"

const SideBar = async () => {
  const { genres }: { genres: MOVIE_GENRES_TYPE } = await GET_GENRES()
  return (
    <SearchMenu genres={genres} />
  )
}

export default SideBar
