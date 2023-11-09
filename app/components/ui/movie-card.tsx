import Image from 'next/image'
import Link from 'next/link'
import { blurImage } from '@/app/utils/blurImage'
import { Suspense } from 'react'
type CardProps = {
  movie_id: string
  title: string
  poster_path: string
}

const MovieCard = async ({ title, poster_path, movie_id }: CardProps) => {
  const { color } = await blurImage(poster_path,)
  return (
    <div>
      <div style={{ backgroundColor: color.hex }} className="group relative border-[#43242550] border-[0.1px] flex flex-col h-full w-full items-center">
        <Link href={`/movie/${movie_id}`} >
          <Suspense>
            <Image
              src={`https://image.tmdb.org/t/p/w500/` + poster_path}
              className="object-contain scale-95 transition-all"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              width={500}
              height={750}
              alt={title}
            />
          </Suspense>
        </Link>
      </div>
    </div>
  )
}

export default MovieCard
