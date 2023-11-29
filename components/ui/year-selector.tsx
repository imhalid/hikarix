'use client'
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
export default function YearSelector() {
  const router = useRouter()
  const [year, setYear] = useState<number>(2023)
  const [error, setError] = useState<boolean>(false)
  const enterToGoToYearPage = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (year > 2024 || year < 1900) {
      setError(true)
      
    } else {
      setError(false)
    }
    
    if (e.key === 'Enter' && year <= 2024 && year >= 1900 && !Number.isNaN(year)) {
      router.push(`/year/${year}`)
    }
  }

  useEffect(() => {
    if (year > 2024 || year < 1900) {
      setError(true)
    }
    return () => {
      setError(false)
    }
  }, [year])

 return (
   <input
     onChange={(e) => setYear(parseInt(e.target.value))}
     onKeyDown={enterToGoToYearPage}
     className={`
     ${error ? 'outline outline-1 outline-red-500' : 'outline outline-[1px] outline-neutral-900'}
      bg-neutral-700/50 w-full mt-2 rounded-lg h-9  text-neutral-400 text-sm px-4 pl-3 py-1`}
     placeholder="1900 - 2024"
     max={2024}
     min={1900}
     type='number'
     required
   />
 )
}