import MoviesGrid from '@/app/components/movies-grid'
import React, { Suspense } from 'react'
import SideBar from './components/sidebar'

// const MoviesGrid = React.lazy(() => import('./components/movies-grid'))
export default function Home() {
  return (
    <main className='w-full relative'>
      <SideBar />
      <MoviesGrid />
    </main>
  )
}

