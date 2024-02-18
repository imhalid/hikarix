"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "top rated",
    url: "/top-rated",
  },
  {
    name: "popular",
    url: "/popular",
  },
  {
    name: "upcoming",
    url: "/upcoming",
  },
  {
    name: "now playing",
    url: "/now-playing",
  },
];
export default function HeaderLinks() {
  const path = usePathname();
  return (
    <div className="z-1 absolute bottom-5 left-0 z-50 flex w-full touch-none justify-center gap-2 opacity-100">
      {links.map((link, index) => (
        <div
          key={index}
          className="relative inline-flex h-full w-fit  items-center justify-center overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5 + index * 0.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="h-full"
          >
            {/* <div
             //  style={{
             //    boxShadow: path === `${link.url}` ? '0px 0px 5px 2px #3B81F4' : '',
             //  }}
             className="w-full h-full bg-gradient-to-tr from-neutral-950 via-neutral-950 to-neutral-600 rounded-2xl z-0 left-0 absolute top-0"
           ></div> */}
            {/* <div className=" bg-neutral-950 inset-[1px] rounded-2xl z-0 absolute"></div> */}

            <Link
              href={link.url}
              className={`relative inline-flex items-center justify-center px-1 py-1  text-xs uppercase text-neutral-200 shadow-xl transition-all duration-300 ease-in-out sm:px-2 md:px-3 md:text-base ${path === link.url ? "font-medium" : "font-light"}`}
            >
              <div>{link.name}</div>
              {path === link.url && (
                <>
                  <div className="absolute -bottom-4 h-5 w-10 bg-slate-300 blur-md md:-bottom-2"></div>
                  <div className="absolute bottom-0 h-[2px] w-5 rounded-full bg-slate-300"></div>
                </>
              )}
              <div className="absolute bottom-0 h-[2px] w-5 rounded-full bg-slate-300/30"></div>
            </Link>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
