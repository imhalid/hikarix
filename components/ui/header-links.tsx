'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const links = [
  {
    name: 'top rated',
    url: '/top-rated'
  },
  {
    name: 'popular',
    url: '/popular'
  },
  {
    name: 'upcoming',
    url: '/upcoming'
  },
  {
    name: 'now playing',
    url: '/now-playing'
  },
]
export default function HeaderLinks() {
  const path = usePathname()
  return (
    <div className="w-full absolute z-1 touch-none bottom-5 gap-2 flex justify-center z-50 left-0 opacity-100">
      {links.map((link, index) => (
        <div key={index} className="w-fit relative h-full overflow-hidden rounded-2xl inline-flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 3,
              delay: 1 + index * 0.2,
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
              className={`text-xs inline-flex items-center justify-center md:text-base shadow-xl rounded-2xl text-neutral-200 relative uppercase px-1 sm:px-2 md:px-3 py-1 transition-all duration-300 ease-in-out ${path === link.url ? 'font-medium' : 'font-light'}`}
            >
              <div>{link.name}</div>
              {path === link.url && (
                <>
                  <div className="bg-slate-300 blur-md w-10 h-5 -bottom-4 md:-bottom-2 absolute"></div>
                  <div className="bg-slate-300 w-5 h-[2px] rounded-full bottom-0 absolute"></div>
                </>
              )}
              <div className="bg-slate-300/30 w-5 h-[2px] rounded-full bottom-0 absolute"></div>
            </Link>
          </motion.div>
        </div>
      ))}
    </div>
  )
} 