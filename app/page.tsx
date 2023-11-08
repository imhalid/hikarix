import MoviesGrid from '@/app/components/movies-grid'
import SideBar from '@/app/components/sidebar'
export default function Home() {
  return (
    <main className="max-w-5xl mx-auto flex ">
      <SideBar />
      <MoviesGrid />
    </main>
  )
}
