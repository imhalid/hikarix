'use client'
import Image from 'next/image'
import Link from 'next/link'
import { MOVIES_TYPE } from '@/lib/types'
import WavyText from './wavy-text'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MovieCard = ({ data }: { data: MOVIES_TYPE }) => {
  let [hover, setHover] = useState(false)



  return (
    <div className="group relative p-1 flex flex-col h-full w-fit rounded-3xl overflow-hidden items-center" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <Link href={`/movie/${data.id}`} className='relative h-full'>
        <Image
          src={`https://image.tmdb.org/t/p/w500/` + data.poster_path}
          className="transition-all overflow-hidden border border-neutral-800 h-full object-cover rounded-3xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          width={500}
          height={750}
          alt={data.title}
        />
        <div className='group-hover:opacity-100 absolute transition-all -bottom-72 rounded-3xl duration-500 group-hover:bottom-0 opacity-0 left-0 m bg-gradient-to-t  from-black from-0% to-transparent to-70% w-full h-full'>
        </div>
        <div className='absolute bottom-0 p-4 h-full w-full text-white'>
          <div className='flex justify-between flex-col h-full w-full'>
            <div className='flex justify-between items-center'>

              <MovieCardVoteRating hover={hover}>
                <p className='rounded-full text-xs bg-black/40 border border-gray-700/10 text-neutral-100 w-fit px-2'>{data.vote_average?.toString().slice(0, 3)}</p>
              </MovieCardVoteRating>
              <MovieCardVoteRating hover={hover}>
                <button className='bg-black/40 border border-gray-700/10 p-1 rounded-full'>
                  <HeartIcon />
                </button>
              </MovieCardVoteRating>
            </div>
            <WavyText text={data.title} replay={hover} className='text-2xl font-bold' />
          </div>
          {/* <WavyText text={overview.slice(0, 60) + '...'} className='text-xs text-white/50' replay={hover} /> */}
        </div>
      </Link>
    </div>
  )
}

export default MovieCard


export const MovieCardVoteRating = ({ hover, children }: {
  hover: boolean
  children: JSX.Element
}) => {
  const variants = {
    hidden: {
      y: -40,
      opacity: 0,
      transition: {
        type: 'spring',
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  }

  return (

    <>
      <AnimatePresence>
        {hover && (
          <motion.div
            layout
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export const HeartIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M0 0h24v24H0z" /><path fill="currentColor" d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037.033l.034-.03a6 6 0 0 1 4.733-1.44l.246.036a6 6 0 0 1 3.364 10.008l-.18.185l-.048.041l-7.45 7.379a1 1 0 0 1-1.313.082l-.094-.082l-7.493-7.422A6 6 0 0 1 6.979 3.074z" /></g></svg>
  )
}