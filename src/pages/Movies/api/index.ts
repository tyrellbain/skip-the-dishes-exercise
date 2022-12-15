import axios from 'axios';

export type MovieResponse = {
  characters: string[];
  created: string;
  director: string;
  edited: string;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  title: string;
  url: string;
  vehicles: string[];
}

export type MovieListResponse = {
  count: number;
  next: number | null;
  previous: number | null;
  results: MovieResponse[];
}

export async function getMovieList() {
  try {
    const response = await axios.get<MovieListResponse>('https://swapi.dev/api/films');
    return response.data;
  } catch (e) {
    throw e;
  }
}