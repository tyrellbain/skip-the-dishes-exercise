import { MovieResponse } from '../api';
import { Movie } from '../components/MovieCard';

import episode_1 from "../assets/episode_1.png";
import episode_2 from "../assets/episode_2.png";
import episode_3 from "../assets/episode_3.png";
import episode_4 from "../assets/episode_4.png";
import episode_5 from "../assets/episode_5.png";
import episode_6 from "../assets/episode_6.png";

const episodeImages: Record<number, string> = {
  1: episode_1,
  2: episode_2,
  3: episode_3,
  4: episode_4,
  5: episode_5,
  6: episode_6,
}

export function mapResponseToState(
  movieListResponse: MovieResponse[],
): Movie[] {
  return movieListResponse.map((movie) => ({
    image: episodeImages[movie.episode_id],
    title: movie.title,
    episode_id: movie.episode_id,
    director: movie.director,
    producer: movie.producer,
    release_date: movie.release_date,
  }));
}

export function sortByReleaseDate(a: Movie, b: Movie): number {
  const [yearA] = a.release_date.split('-');
  const [yearB] = b.release_date.split('-');

  if (Number(yearA) > Number(yearB)) {
    return 1;
  }

  return -1;
}

export function sortByEpisode(a: Movie, b: Movie): number {
  if (a.episode_id > b.episode_id) {
    return 1;
  }
  return -1;
}

export function sortByTitle(a: Movie, b: Movie): number {
  const titleA = a.title.toUpperCase();
  const titleB = b.title.toUpperCase();

  if (titleA < titleB) {
    return -1;
  }

  return 1;
}