"use client";
import { MOVIES_TYPE } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";
import tinyPlaceholder from "@/public/tiny-placeholder.svg";
import { motion } from "framer-motion";
interface SimilarMoviesProps {
  data: MOVIES_TYPE;
  index: number;
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
      key={data.id}
      className="w-1/5 min-w-[50%] sm:min-w-[30%] lg:min-w-[30%] xl:min-w-[20%]"
    >
      <Link href={`/movie/${data.id}`} className="h-full">
        {data.poster_path ? (
          <Image
            className="h-ful h-full rounded-xl object-cover contrast-75"
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            alt={data.title}
            width={1920}
            height={1080}
          />
        ) : (
          <Image
            className="h-ful h-full rounded-xl object-cover contrast-50 saturate-0 transition-all hover:saturate-50"
            src={tinyPlaceholder}
            alt={data.title}
            width={1920}
            height={1080}
          />
        )}
      </Link>
    </motion.div>
  );
}
