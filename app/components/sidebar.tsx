import { GET_GENRES } from "@/app/utils/api"
import { MOVIE_GENRES_TYPE } from "@/app/utils/types"
import Link from "next/link"

const SideBar = async () => {
  const { genres } = await GET_GENRES()
  return (
    <aside className="max-w-6xl text-left bg-gray-100 fixed z-10 bottom-0   h-fit rounded-lg p-1">
      <h1 className="text-2xl font-bold">Categories</h1>
      <div className="flex flex-wrap mt-3">
        {genres.map((item: MOVIE_GENRES_TYPE) => (
          <div key={item.id} className="flex justify-between items-center py-2 px-2 hover:bg-gray-200 rounded-md">
            <Link href={`/category/${item.id}`}>{item.name}</Link>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default SideBar
