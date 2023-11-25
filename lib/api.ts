'use server'
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

export const GET_MOVIES = async (page: string = '1') => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, TOKEN)
  const data = res.json()
  return data
}

export const GET_MOVIE = async (movie_id: string) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`, TOKEN)
  const data = res.json()
  return data
}


export const GET_GENRES = async (language: string = 'en') => {
  const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=${language}`, TOKEN)
  const data = res.json()
  return data
}

export const GET_POPULAR = async (page: string = '1') => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, TOKEN)
  const data = res.json()
  return data
}
export const GET_TOP_RATED = async (page: string = '1') => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`, TOKEN)
  const data = res.json()
  return data
}

export const GET_UPCOMING = async (page: string = '1') => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`, TOKEN)
  const data = res.json()
  return data
}

export const GET_NOW_PLAYING = async (page: string = '1') => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`, TOKEN)
  const data = res.json()
  return data
}

export const GET_MOVIE_TRAILER = async (movie_id: string) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`, TOKEN)
  const data = res.json()
  return data
}

export const GET_MOVIE_SIMILAR = async (movie_id: string) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/similar?language=en-US`, TOKEN)
  const data = res.json()
  return data
}

export const GET_MOVIE_RELEASE_DATE = async (movie_id: string) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/release_dates`, TOKEN)
  const data = res.json()
  return data
}

export const GET_MOVIE_CREDITS = async (movie_id: string) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?language=en-US`, TOKEN)
  const data = res.json()
  return data
}

export const GET_MOVIE_BY_GENRE = async (genre_id: string, page: string = '1') => {
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre_id}&page=${page}`, TOKEN)
  const data = res.json()
  return data
}

export const GET_COMPANY = async (company_id: string) => {
  const res = await fetch(`https://api.themoviedb.org/3/company/${company_id}?language=en-US`, TOKEN)
  const data = res.json()
  return data
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