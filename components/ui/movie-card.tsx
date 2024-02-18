"use client";
import Image from "next/image";
import Link from "next/link";
import { MOVIES_TYPE } from "@/lib/types";
import WavyText from "./wavy-text";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import movieCard from "@/public/movieCard.svg";

interface MovieCardProps {
  data: MOVIES_TYPE;
  index: number;
}

const MovieCard = ({ data, index }: MovieCardProps) => {
  let [hover, setHover] = useState(false);

  useEffect(() => {
    window.innerWidth > 768 ? setHover(false) : setHover(true);
  }, []);
  const handleMouseLeave = () => {
    // Check if the screen width is greater than 768px
    if (window.innerWidth > 768) {
      setHover(false);
    }
    // If it's less than 768px, do nothing
  };

  const variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.div
      layout
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        type: "anticipate",
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeInOut",
      }}
      exit="hidden"
      className="group relative flex h-full w-fit flex-col items-center overflow-hidden rounded-3xl"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={`/movie/${data.id}`} className="relative h-full">
        {data.poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500/` + data.poster_path}
            className="h-full overflow-hidden rounded-3xl border border-neutral-800 object-cover transition-all"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            width={500}
            height={750}
            alt={data.title}
          />
        ) : (
          <Image
            src={movieCard}
            className="h-full overflow-hidden rounded-3xl border border-neutral-800 object-cover transition-all"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            width={500}
            height={750}
            alt={data.title}
          />
        )}
        <div className="m absolute bottom-0 left-0 h-full w-full  rounded-3xl bg-gradient-to-t from-black from-0% to-transparent to-70% opacity-100  transition-all duration-500 lg:-bottom-72 lg:opacity-0 lg:group-hover:bottom-0 lg:group-hover:opacity-100"></div>
        <div className="absolute bottom-0 h-full w-full p-4 text-white">
          <div className="flex h-full w-full flex-col justify-between">
            <div className="flex items-center justify-between">
              <MovieCardVoteRating hover={hover}>
                <p className="w-fit rounded-full border border-gray-700/10 bg-black/40 px-2 text-xs text-neutral-100">
                  {data.vote_average?.toString().slice(0, 3)}
                </p>
              </MovieCardVoteRating>
              <MovieCardVoteRating hover={hover}>
                <button className="rounded-full border border-gray-700/10 bg-black/40 p-1 hover:text-red-500">
                  <HeartIcon />
                </button>
              </MovieCardVoteRating>
            </div>
            <WavyText
              text={data.title}
              replay={hover}
              className="text-2xl font-bold"
            />
          </div>
          {/* <WavyText text={overview.slice(0, 60) + '...'} className='text-xs text-white/50' replay={hover} /> */}
        </div>
      </Link>
    </motion.div>
  );
};

export default MovieCard;

export const MovieCardVoteRating = ({
  hover,
  children,
}: {
  hover: boolean;
  children: JSX.Element;
}) => {
  const variants = {
    hidden: {
      y: -40,
      opacity: 0,
      transition: {
        type: "spring",
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
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
  );
};

export const HeartIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M0 0h24v24H0z" />
        <path
          fill="currentColor"
          d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037.033l.034-.03a6 6 0 0 1 4.733-1.44l.246.036a6 6 0 0 1 3.364 10.008l-.18.185l-.048.041l-7.45 7.379a1 1 0 0 1-1.313.082l-.094-.082l-7.493-7.422A6 6 0 0 1 6.979 3.074z"
        />
      </g>
    </svg>
  );
};
