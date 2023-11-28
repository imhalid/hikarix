import MoviesGrid from '@/components/movies-grid'
import React, { Suspense } from 'react'

// const MoviesGrid = React.lazy(() => import('./components/movies-grid'))
export default function Home() {
  return (
    <MoviesGrid />
  )
}

