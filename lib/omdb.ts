import { Movie } from '../types/movie'

const BASE = 'http://www.omdbapi.com/'
const KEY = process.env.OMDB_API_KEY

const MOCK_MOVIE: Movie = {
  imdbID: 'tt0111161',
  Title: 'Mock Movie',
  Year: '1994',
  Poster: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg',
  Plot: 'This is a mock movie used when no OMDB key is provided.',
  Released: '1994-09-23',
  imdbRating: '9.3',
}

async function safeFetch(url: string) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`OMDB fetch failed: ${res.status}`)
  return res.json()
}

export async function fetchPopular(): Promise<{ Search: Movie[] }> {
  if (!KEY) return { Search: [MOCK_MOVIE] }
  const data = await safeFetch(`${BASE}?s=batman&type=movie&apikey=${KEY}&page=1`)
  return { Search: data.Search || [] }
}

export async function fetchTopRated(): Promise<{ Search: Movie[] }> {
  if (!KEY) return { Search: [MOCK_MOVIE] }
  const data = await safeFetch(`${BASE}?s=superman&type=movie&apikey=${KEY}&page=1`)
  return { Search: data.Search || [] }
}

export async function fetchNowPlaying(): Promise<{ Search: Movie[] }> {
  if (!KEY) return { Search: [MOCK_MOVIE] }
  const data = await safeFetch(`${BASE}?s=avengers&type=movie&apikey=${KEY}&page=1`)
  return { Search: data.Search || [] }
}

export async function fetchMovieById(id: string): Promise<Movie> {
  if (!KEY) return MOCK_MOVIE
  return safeFetch(`${BASE}?i=${id}&apikey=${KEY}`)
}
