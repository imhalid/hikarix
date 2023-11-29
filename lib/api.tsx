'use server'

import MovieCard from "@/components/ui/movie-card"
import { MOVIES_TYPE } from "./types"
import SimilarCard from "@/components/ui/similar-card"

const TOKEN = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    caches: 'no-store',
  },
  // next: {
  //   revalidate: 60 * 60 * 24,
  // },
}

export const GET_MOVIES = async (page: number = 1) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&include_adult=false`, TOKEN)
  const { results } = await res.json()
  console.log(results)
  return results.map((movie: MOVIES_TYPE, index: number) => (
    <MovieCard key={movie.id} data={movie} index={index} />
  ))
}

export const GET_MOVIE = async (movie_id: string) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?language=en-US&include_adult=false`, TOKEN)
  const data = res.json()
  return data
}


export const GET_GENRES = async (language: string = 'en') => {
  const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=${language}&include_adult=false`, TOKEN)
  const data = res.json()
  return data
}

export const GET_POPULAR = async (page: number = 1) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&include_adult=false`, TOKEN)
  const { results } = await res.json()
  return results.map((movie: MOVIES_TYPE, index: number) => (
    <MovieCard key={movie.id} data={movie} index={index} />
  ))
}
export const GET_TOP_RATED = async (page: number = 1) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}&include_adult=false`, TOKEN)
  const { results } = await res.json()
  return results.map((movie: MOVIES_TYPE, index: number) => (
    <MovieCard key={movie.id} data={movie} index={index} />
  ))
}

export const GET_UPCOMING = async (page: number = 1) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}&include_adult=false`, TOKEN)
  const { results } = await res.json()
  return results.map((movie: MOVIES_TYPE, index: number) => (
    <MovieCard key={movie.id} data={movie} index={index} />
  ))
}

export const GET_NOW_PLAYING = async (page: number = 1) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}&include_adult=false`, TOKEN)
  const { results } = await res.json()
  return results.map((movie: MOVIES_TYPE, index: number) => (
    <MovieCard key={movie.id} data={movie} index={index} />
  ))
}

export const GET_MOVIE_TRAILER = async (movie_id: string) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US&include_adult=false`, TOKEN)
  const data = res.json()
  return data
}

export const GET_MOVIE_SIMILAR = async (movie_id: string) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/similar?language=en-US&include_adult=false`, TOKEN)
  const { results } = await res.json()
  return results.map((movie: MOVIES_TYPE, index: number) => (
    <SimilarCard key={movie.id} data={movie} index={index} />
  ))
}

export const GET_MOVIE_RELEASE_DATE = async (movie_id: string) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/release_dates&include_adult=false`, TOKEN)
  const data = res.json()
  return data
}

export const GET_MOVIE_CREDITS = async (movie_id: string) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?language=en-US&include_adult=false`, TOKEN)
  const data = res.json()
  return data
}
export const GET_MOVIE_BY_GENRE = async (page: number = 1, genre_id?: number,) => {
  console.log(genre_id, page)
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre_id}`, TOKEN)
  const { results } = await res.json()
  return results.map((movie: MOVIES_TYPE, index: number) => (
    <MovieCard key={movie.id} data={movie} index={index} />
  ))
}

export const GET_COMPANY = async (company_id: string) => {
  const res = await fetch(`https://api.themoviedb.org/3/company/${company_id}?language=en-US&include_adult=false`, TOKEN)
  const data = res.json()
  return data
}
export const GET_MOVIE_QUERY = async (page: number = 1, query?: string) => {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}&include_adult=false`, TOKEN)
  const { results } = await res.json()
  return results.map((movie: MOVIES_TYPE, index: number) => (
    <MovieCard key={movie.id} data={movie} index={index} />
  ))
}

export const GET_MOVIE_BY_YEAR = async (page: number = 1, year?: number) => {
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?language=en-US&page=${page}&include_adult=false&primary_release_year=${year}`, TOKEN)
  const { results } = await res.json()
  return results.map((movie: MOVIES_TYPE, index: number) => <MovieCard key={movie.id} data={movie} index={index} />)
}


export const GET_DISCOVERY_MOVIE = async (
  { genre_id = '',
    year = '',
    rating = '',
    language = '',
    release_date_gte = '',
    release_date_lte = '',
    sort_by = '',
    keyword = '',
    company = '',
    country = '',
    release_date = '',
    page = '1' }: {
      genre_id?: string,
      year?: string,
      rating?: string,
      language?: string,
      release_date_gte?: string,
      release_date_lte?: string,
      sort_by?: string,
      keyword?: string,
      company?: string,
      country?: string,
      release_date?: string,
      page?: string
    }
) => {
  //https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&with_genres=28
  console.log(genre_id)
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre_id}&page=${page}`
    , TOKEN)
  const data = res.json()
  return data
}


/**
 *   with_genres=${genre_id}&
  page=${page}&
  release_date.gte=${release_date_gte}&
  release_date.lte=${release_date_lte}&
  sort_by=${sort_by}&
  with_keywords=${keyword}&
  with_companies=${company}&
  with_original_language=${language}&
  with_release_type=${release_date}&
  with_watch_providers=${country}&
  primary_release_year=${year}&
  vote_average.gte=${rating}
 */