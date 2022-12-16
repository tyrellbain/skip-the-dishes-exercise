import axios from 'axios';

export enum API_RESOURCE {
  Film = 'https://swapi.dev/api/films',
  People = 'https://swapi.dev/api/people',
}

type APIResponse = MovieListResponse | CharacterListResonse;

export type CharacterResonse = {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: 'Male' | 'Female' | 'unknown' | 'n/a';
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
  created: string;
  edited: string;
};

export type CharacterListResonse = {
  count: number;
  next: number | null;
  previous: number | null;
  results: CharacterResonse[];
};

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
};

export type MovieListResponse = {
  count: number;
  next: number | null;
  previous: number | null;
  results: MovieResponse[];
};

export async function featchList<T extends APIResponse>(
  resource: API_RESOURCE,
): Promise<T> {
  try {
    const response = await axios.get<T>(resource);
    return response.data;
  } catch (e) {
    throw e;
  }
}

// export async function getMovieList() {
//   try {
//     const response = await axios.get<MovieListResponse>(
//       'https://swapi.dev/api/films',
//     );
//     return response.data;
//   } catch (e) {
//     throw e;
//   }
// }

// export async function getCharaterList() {
//   try {
//     const response = await axios.get<CharacterListResonse>(
//       'https://swapi.dev/api/people',
//     );
//     return response.data;
//   } catch (e) {
//     throw e;
//   }
// }
