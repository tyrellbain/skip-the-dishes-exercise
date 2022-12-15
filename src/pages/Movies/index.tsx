import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  MovieListColumn,
  MovieListWrapper,
  PageHeader,
  PageTitle,
} from './styles';
import { getMovieList } from './api';
import {
  mapResponseToState,
  sortByEpisode,
  sortByReleaseDate,
  sortByTitle,
} from './helpers';
import MovieCard, { Movie } from './components/MovieCard';
import SortButton, { SortFunction } from './components/SortButton';
import './i18n';

export default function MoviesPage() {
  const { t } = useTranslation('movies');
  const [movieList, setMovieList] = useState<Movie[]>([]);

  useEffect(() => {
    getMovieList()
      .then(({ results }) => {
        setMovieList(mapResponseToState(results));
      })
      .catch(console.error);
  }, []);

  const sortingOptions: SortFunction[] = [
    {
      label: t('sort.releaseDate'),
      cb: () => {
        const sortedList = movieList.sort(sortByReleaseDate);
        setMovieList(sortedList);
      },
    },
    {
      label: t('sort.episode'),
      cb: () => {
        const sortedList = movieList.sort(sortByEpisode);
        setMovieList(sortedList);
      },
    },
    {
      label: t('sort.title'),
      cb: () => {
        const sortedList = movieList.sort(sortByTitle);
        setMovieList(sortedList);
      },
    },
  ];

  function mapMovieListToColumns() {
    if (movieList.length === 6) {
      return (
        <>
          <MovieListColumn data-testid="movie-column-01">
            <MovieCard movie={movieList[0]} />
            <MovieCard movie={movieList[1]} />
          </MovieListColumn>
          <MovieListColumn data-testid="movie-column-02">
            <MovieCard movie={movieList[2]} />
            <MovieCard movie={movieList[3]} />
          </MovieListColumn>
          <MovieListColumn data-testid="movie-column-03">
            <MovieCard movie={movieList[4]} />
            <MovieCard movie={movieList[5]} />
          </MovieListColumn>
        </>
      );
    }
  }

  return (
    <>
      <PageHeader>
        <PageTitle>{t('title')}</PageTitle>
        <SortButton sorting={sortingOptions} />
      </PageHeader>
      <MovieListWrapper>{mapMovieListToColumns()}</MovieListWrapper>
    </>
  );
}
