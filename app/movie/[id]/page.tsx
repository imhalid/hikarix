import { GET_MOVIE } from '@/lib/api'
import { MOVIES_TYPE } from '@/lib/types'
import Image from 'next/image'
import { getPlaiceholder } from "plaiceholder";
import { blurImage } from '@/lib/blurImage'

export default async function Page({ params }: { params: { id: string } }) {
 const data = await GET_MOVIE(params.id)

 const { color } = await blurImage(data.poster_path);

 return <div>
  <h1>Movie</h1>
  <p>{data.title}</p>
  <div style={{ backgroundColor: color.hex }}>
   <Image src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} width={500} height={750} />
  </div>
  <p>{data.overview}</p>
  <p>{data.vote_average}</p>
  <p>{data.release_date}</p>
  <p>{data.runtime}</p>
  <p>{data.genres.map((genre: { id: number, name: string }) => (
   <span key={genre.id}>{genre.name}</span>
  ))}</p>
  <p>{data.production_companies.map((company: { id: number, name: string }) => (
   <span key={company.id}>{company.name}</span>
  ))}</p>
  <p>{data.production_countries.map((country: { iso_3166_1: string, name: string }) => (
   <span key={country.iso_3166_1}>{country.name}</span>
  ))}</p>
  <p>{data.spoken_languages.map((language: { iso_639_1: string, name: string }) => (
   <span key={language.iso_639_1}>{language.name}</span>
  ))}</p>
  <p>{data.tagline}</p>
  <p>{data.status}</p>
  <p>{data.homepage}</p>
  <p>{data.imdb_id}</p>
  <p>{data.original_language}</p>
  <p>{data.original_title}</p>
  <p>{data.popularity}</p>
  <p>{data.revenue}</p>
 </div>
}
