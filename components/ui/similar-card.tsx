'use client'
import { MOVIES_TYPE } from '@/lib/types'
import Link from 'next/link'
import Image from 'next/image'
import tinyPlaceholder from '@/public/tiny-placeholder.svg'
import { motion } from 'framer-motion'
interface SimilarMoviesProps {
 data: MOVIES_TYPE
 index: number
}

export default function SimilarCard({ data, index }: SimilarMoviesProps) {

 const variants = {
  hidden: {
   opacity: 0,
   x: 40,
  },
  visible: {
   opacity: 1,
   x: 0,

  },
 }
 return (

  <motion.div
   layout
   variants={variants}
   initial="hidden"
   animate="visible"
   transition={{
    type: 'anticipate',
    duration: 0.5,
    delay: index * 0.10,
    ease: 'easeInOut',
   }}
   exit="hidden"
   key={data.id} className='w-1/5 xl:min-w-[20%] lg:min-w-[30%] sm:min-w-[30%] min-w-[50%]'>
   <Link href={`/movie/${data.id}`} className='h-full'>
    {
     data.poster_path ? (
      <Image className='rounded-xl h-ful contrast-75 object-cover h-full' src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt={data.title} width={1920} height={1080} />
     ) : (
      <Image className='rounded-xl h-ful object-cover h-full saturate-0 contrast-50 hover:saturate-50 transition-all' src={tinyPlaceholder} alt={data.title} width={1920} height={1080} />
     )
    }
   </Link>
  </motion.div>

 )
}
