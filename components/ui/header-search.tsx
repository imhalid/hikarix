"use client";
import { motion, Variants } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
export default function SearchMovie() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  //  const enterToGoToSearchPage = () => {
  //    debounce(() => {
  //     router.push(`/search/${search}`)
  //    }
  //     , 1000)()
  //  }

  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(`Searching... ${term}`);

    if (term) {
      replace(`/search/${term}`);
    } else {
      replace(`/`);
    }
  }, 500);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="z-1 absolute top-5 z-50 flex w-full justify-center gap-2  opacity-100"
    >
      <div
        style={{
          boxShadow: "0px 0px 20px 1px #1A1A1A",
        }}
        className="relative rounded-xl"
      >
        <input
          defaultValue={searchParams.get("search")?.toString()}
          onChange={(e) => handleSearch(e.target.value)}
          type="text"
          className="h-9 w-80 rounded-xl bg-neutral-700/50 px-4 py-1 pl-9 text-sm text-neutral-400 outline outline-[1px] outline-neutral-900 focus:outline-none"
          placeholder="Search movie..."
        />
        <div className="absolute top-0">
          <svg
            className="m-[6px] fill-neutral-700"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
