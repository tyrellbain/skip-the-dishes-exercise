import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  StyledMovieCard,
  MovieListWrapper,
  PageHeader,
  PageTitle,
} from './styles';
import {
  featchList,
  API_RESOURCE,
  MovieListResponse,
} from '../../services/API/swapi';
import {
  mapResponseToState,
  sortByEpisode,
  sortByReleaseDate,
  sortByTitle,
} from './helpers';
import { Movie } from './components/MovieCard';
import SortButton, { SortFunction } from './components/SortButton';
import './i18n';

export default function MoviesPage() {
  const { t } = useTranslation('movies');
  const [movieList, setMovieList] = useState<Movie[]>([]);

  useEffect(() => {
    const getList = async () => {
      console.log(await featchList(API_RESOURCE.Film));
      const { results } = (await featchList(
        API_RESOURCE.Film,
      )) as MovieListResponse;
      setMovieList(mapResponseToState(results));
    };

    getList();
  }, []);

  const sortingOptions: SortFunction[] = useMemo(() => {
    return [
      {
        label: t('sort.releaseDate'),
        cb: () => {
          const sortedList = [...movieList].sort(sortByReleaseDate);
          setMovieList(sortedList);
        },
      },
      {
        label: t('sort.episode'),
        cb: () => {
          const sortedList = [...movieList].sort(sortByEpisode);
          setMovieList(sortedList);
        },
      },
      {
        label: t('sort.title'),
        cb: () => {
          const sortedList = [...movieList].sort(sortByTitle);
          setMovieList(sortedList);
        },
      },
    ];
  }, [movieList, t]);

  return (
    <>
      <PageHeader>
        <PageTitle>{t('title')}</PageTitle>
        <SortButton sorting={sortingOptions} />
      </PageHeader>
      <MovieListWrapper>
        {movieList.map((movie) => (
          <StyledMovieCard key={movie.title} movie={movie} />
        ))}
      </MovieListWrapper>
    </>
  );
}
