'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
export default function SearchMovie() {
 let [search, setSearch] = useState('')
 const router = useRouter()

 const enterToGoToSearchPage = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Enter') {
   router.push(`/search/${search}`)
  }
 }
 return (
   <div className="w-full absolute z-1 touch-none top-5 gap-2 flex justify-center z-50 left-1/2 -translate-x-1/2 opacity-100">
     <div
       style={{
         boxShadow: '0px 0px 20px 1px #1A1A1A',
       }}
       className="relative rounded-xl"
     >
       <input
         onChange={(e) => setSearch(e.target.value)}
         onKeyDown={enterToGoToSearchPage}
         type="text"
         className="bg-neutral-700/50 rounded-xl h-9 outline outline-[1px] outline-neutral-900 text-neutral-400 text-sm w-80 px-4 pl-9 py-1 focus:outline-none"
         placeholder="Search movie..."
       />
       <div className="absolute top-0">
         <svg className="m-[6px] fill-neutral-700" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
           <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6" />
         </svg>
       </div>
     </div>
   </div>
 )
}