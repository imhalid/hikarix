import Image from 'next/image'

type CardProps = {
  title: string
  poster_path: string
}
const movieCard = ({ title, poster_path }: CardProps) => {
  return (
    <div className="group relative border-[#43242550] border-[0.1px] flex flex-col h-96 w-full p-4 items-center">
      <Image
        src={`https://image.tmdb.org/t/p/w500/` + poster_path}
        className="object-cover scale-95 transition-all"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
        fill
        alt={title}
      />
    </div>
  )
}

export default movieCard
