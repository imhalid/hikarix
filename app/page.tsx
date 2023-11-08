import MoviesGrid from '@/app/components/movies-grid'
import React, { Suspense } from 'react'

// const MoviesGrid = React.lazy(() => import('./components/movies-grid'))
export default function Home() {
  return (
    <main className=' w-full'>
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-expect-error Server Component */}
        <MoviesGrid />
      </Suspense>
    </main>
  )
}
