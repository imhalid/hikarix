'use client'
import { useState } from "react"
import { useSearchParams, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
export default function YearSelector() {
  const [error, setError] = useState<boolean>(false)

  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(`Searching... ${term}`)

    if (term && term.length === 4 && parseInt(term) >= 1900 && parseInt(term) <= 2024) {
      setError(false)
    }
    else {
      setError(true)
      return
    }

    if (term) {
      replace(`/year/${term}`)
    } else {
      replace(`/`)
    }
  }, 500)

  return (
    <input
      defaultValue={searchParams.get('year')?.toString()}
      onChange={(e) => handleSearch(e.target.value)}
      className={`
     ${error ? 'outline outline-1 outline-red-500' : 'outline outline-[1px] outline-neutral-900'}
      bg-neutral-700/50 w-full mt-2 rounded-lg h-9  text-neutral-400 text-sm px-4 pl-3 py-1`}
      placeholder="Year / 1900 - 2024"
      max={2024}
      min={1900}
      type="number"
      required
    />
  )
}