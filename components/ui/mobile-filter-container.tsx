"use client";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";
import { MOVIE_GENRES_TYPE } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Container({
  genres,
  device,
  children,
}: {
  genres: MOVIE_GENRES_TYPE;
  device: string;
  children: React.ReactNode;
}) {
  const path = usePathname();

  const [expanded, setExpanded] = useState(false);

  const variants: Variants = {
    collapsed: { bottom: -440, backgroundColor: "#17171705", border: "0px" },
    open: { bottom: 0, backgroundColor: "#171717" },
  };

  useEffect(() => {
    if (device === "mobile") {
      setExpanded(false);
    } else if (device === "computer") {
      setExpanded(true);
    }
    return () => {
      setExpanded(false);
    };
  }, [path]);

  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [expanded]);

  return (
    <motion.div
      variants={variants}
      initial={false}
      animate={expanded ? "open" : "collapsed"}
      className={` fixed bottom-0 left-1/2 z-[100] h-auto w-full max-w-xl -translate-x-1/2 rounded-xl border  border-neutral-800 bg-neutral-900 p-2 lg:hidden`}
    >
      <div
        onClick={() => setExpanded(!expanded)}
        className="absolute bottom-0 left-1/2 -z-30 h-[200dvh] w-screen -translate-x-1/2 bg-neutral-950/50 transition-all"
        style={{
          opacity: expanded ? "1" : "0",
          pointerEvents: expanded ? "auto" : "none",
        }}
      ></div>
      <motion.div
        animate={{ paddingBottom: expanded ? "8px" : "30px" }}
        className="relative my-4 flex w-full items-center justify-center pb-2 text-white "
      >
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M3 12H21M3 6H21M3 18H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </motion.div>
      <motion.div
        className="flex h-11 w-full  cursor-pointer items-center justify-between rounded-[6px] border border-neutral-800 px-4 font-bold text-white"
        animate={{
          backgroundColor: expanded ? "#27272795" : "#17171705",
          border: expanded ? "1px solid #272727" : "0px",
        }}
        onClick={() => setExpanded(!expanded)}
      >
        <p>Genres</p>
        <svg
          className={`h-4 w-4 transform transition-all ${expanded ? "rotate-0" : "-rotate-90"}`}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z"
          />
        </svg>
      </motion.div>
      <motion.div className="overflow-hidden p-0.5">
        <Genres genres={genres} />
        {children}
      </motion.div>
    </motion.div>
  );
}

export const Genres = ({ genres }: { genres: MOVIE_GENRES_TYPE }) => {
  const path = usePathname();
  return (
    <motion.div>
      <div
        className={` col-span-4 row-span-5 mt-2 grid grid-cols-2 content-between gap-2 rounded-xl bg-neutral-800/50 py-2 text-center text-xs text-white transition-all `}
      >
        {genres.map((genre: MOVIE_GENRES_TYPE) => (
          <div key={genre.id} className="">
            <Link href={`/category/${genre.id}`}>
              <p
                className={`inline-flex rounded-[4px] px-2 py-1 transition-all hover:text-sky-400 ${path === `/category/${genre.id.toString()}` ? "bg-sky-900 text-sky-300" : ""}`}
              >
                {genre.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
