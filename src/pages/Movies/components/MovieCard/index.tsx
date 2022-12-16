import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  MovieCardAction,
  MovieCardBody,
  MovieCardDetails,
  MovieCardDetailsItem,
  MovieCardDetailsTitle,
  MovieCardEpisode,
  MovieCardImage,
  MovieCardTitle,
  MovieCardWrapper,
} from './styles';

export type Movie = {
  image: string;
  title: string;
  episode_id: number;
  director: string;
  producer: string;
  release_date: string;
};

type Props = {
  movie: Movie;
};

export default function MovieCard({ movie }: Props) {
  const { t } = useTranslation('movies');
  const [isOpen, setIsOpen] = useState(false);
  const { image, title, episode_id, director, producer, release_date } = movie;

  const strings = useMemo(() => {
    return {
      episode: t('card.episode'),
      director: t('card.director'),
      producer: t('card.producer'),
      released: t('card.released'),
    };
  }, [t]);

  return (
    <MovieCardWrapper data-testid={`movie-card-episode-${episode_id}`}>
      <MovieCardImage src={image} />
      <MovieCardBody>
        <MovieCardTitle>{title}</MovieCardTitle>
        <MovieCardEpisode>
          {strings.episode} {episode_id}
        </MovieCardEpisode>
        {isOpen && (
          <MovieCardDetails>
            <MovieCardDetailsTitle>{strings.director}</MovieCardDetailsTitle>
            <MovieCardDetailsItem>{director}</MovieCardDetailsItem>
            <MovieCardDetailsTitle>{strings.producer}</MovieCardDetailsTitle>
            <MovieCardDetailsItem>{producer}</MovieCardDetailsItem>
            <MovieCardDetailsTitle>{strings.released}</MovieCardDetailsTitle>
            <MovieCardDetailsItem>
              {new Date(release_date).toDateString()}
            </MovieCardDetailsItem>
          </MovieCardDetails>
        )}
        <MovieCardAction onClick={() => setIsOpen((open) => !open)}>
          {isOpen ? t('card.hideDetails') : t('card.showDetails')}
        </MovieCardAction>
      </MovieCardBody>
    </MovieCardWrapper>
  );
}
