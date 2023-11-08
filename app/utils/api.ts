const TOKEN = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    caches: 'no-cache',
  },
  // next: {
  //   revalidate: 60 * 60 * 24,
  // },
}

export const GET_MOVIE = async (page: number = 1) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, TOKEN)
  const data = res.json()
  return data
}

export const GET_GENRES = async (language: string = 'en') => {
  const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=${language}`, TOKEN)
  const data = res.json()
  return data
}
