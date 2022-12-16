import { Movie } from '../components/MovieCard';
import { MovieListResponse, MovieResponse } from '../../../services/API/swapi';

export function mockMovie(options: Omit<Movie, 'image'>): MovieResponse {
  return {
    characters: [],
    created: '',
    director: options.director,
    edited: '',
    episode_id: options.episode_id,
    opening_crawl: '',
    planets: [],
    producer: options.producer,
    release_date: options.release_date,
    species: [],
    starships: [],
    title: options.title,
    url: '',
    vehicles: [],
  };
}

export function mockMovies(): MovieResponse[] {
  return [
    mockMovie({
      director: 'Some Guy',
      title: 'A New Hope',
      episode_id: 4,
      producer: 'Someone',
      release_date: new Date('1977-01-01').toISOString(),
    }),
    mockMovie({
      director: 'Some Guy',
      title: 'The Empire Strikes Back',
      episode_id: 5,
      producer: 'Someone',
      release_date: new Date('1980-01-01').toISOString(),
    }),
    mockMovie({
      director: 'Some Guy',
      title: 'Return of the Jedi',
      episode_id: 6,
      producer: 'Someone',
      release_date: new Date('1983-01-01').toISOString(),
    }),
    mockMovie({
      director: 'Some Guy',
      title: 'The Phantom Menace',
      episode_id: 1,
      producer: 'Someone',
      release_date: new Date('1999-01-01').toISOString(),
    }),
    mockMovie({
      director: 'Some Guy',
      title: 'Attack of the Clones',
      episode_id: 2,
      producer: 'Someone',
      release_date: new Date('2002-01-01').toISOString(),
    }),
    mockMovie({
      director: 'Some Guy',
      title: 'Revenge of the Sith',
      episode_id: 3,
      producer: 'Someone',
      release_date: new Date('2005-01-01').toISOString(),
    }),
  ];
}

export function mockMoviesListResponse(): MovieListResponse {
  return {
    count: 6,
    next: null,
    previous: null,
    results: mockMovies(),
  };
}
