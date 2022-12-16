import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { StyledMovieCard, MovieListWrapper } from './styles';
import { PageTitle, PageHeader } from '../../styles/global';
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
import SortButton, { SortFunction } from '../../components/SortButton';
import './i18n';

export default function MoviesPage() {
  const { t } = useTranslation('movies');
  const [movieList, setMovieList] = useState<Movie[]>([]);

  useEffect(() => {
    const getList = async () => {
      const { results } = await featchList<MovieListResponse>(
        API_RESOURCE.Film,
      );
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
