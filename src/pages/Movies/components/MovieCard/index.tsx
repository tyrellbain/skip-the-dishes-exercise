import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  MovieCardAction,
  MovieCardBody,
  MovieCardDetails,
  MovieCardEpisode,
  MovieCardImage,
  MovieCardWrapper,
} from './styles';
import {
  CardDetailsTitle,
  CardDetailsValue,
  CardTitle,
} from '../../../../styles/global';

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
        <CardTitle>{title}</CardTitle>
        <MovieCardEpisode>
          {strings.episode} {episode_id}
        </MovieCardEpisode>
        {isOpen && (
          <MovieCardDetails>
            <CardDetailsTitle>{strings.director}</CardDetailsTitle>
            <CardDetailsValue>{director}</CardDetailsValue>
            <CardDetailsTitle>{strings.producer}</CardDetailsTitle>
            <CardDetailsValue>{producer}</CardDetailsValue>
            <CardDetailsTitle>{strings.released}</CardDetailsTitle>
            <CardDetailsValue>
              {new Date(release_date).toDateString()}
            </CardDetailsValue>
          </MovieCardDetails>
        )}
        <MovieCardAction onClick={() => setIsOpen((open) => !open)}>
          {isOpen ? t('card.hideDetails') : t('card.showDetails')}
        </MovieCardAction>
      </MovieCardBody>
    </MovieCardWrapper>
  );
}
