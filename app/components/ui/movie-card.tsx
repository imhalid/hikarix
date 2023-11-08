import Image from 'next/image'
import Link from 'next/link'
import { blurImage } from '@/app/utils/blurImage'
type CardProps = {
  movie_id: string
  title: string
  poster_path: string
}

const MovieCard = async ({ title, poster_path, movie_id }: CardProps) => {

  const { color } = await blurImage(poster_path)

  return (
    <Link href={`/movie/${movie_id}`}>
      <div style={{ backgroundColor: color.hex }} className="group relative border-[#43242550] border-[0.1px] flex flex-col h-96 w-full p-4 items-center">
        <Image
          src={`https://image.tmdb.org/t/p/w500/` + poster_path}
          className="object-cover scale-95 transition-all"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          fill
          alt={title}
        />
      </div>
    </Link>
  )
}

export default MovieCard
