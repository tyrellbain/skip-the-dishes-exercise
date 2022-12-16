import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  CharacterCardDetail,
  CharacterCardDetails,
  CharacterCardWrapper,
  StyledCardTitle,
} from './styles';
import { CardDetailsTitle, CardDetailsValue } from '../../../../styles/global';

export type Character = {
  name: string;
  gender: 'Male' | 'Female' | 'unknown' | 'n/a';
  height: number;
  weight: number;
  hairColor: string;
  eyeColor: string;
  birthYear: string;
  numOfMovies: number;
};

type Props = {
  character: Character;
  className?: string;
};

export default function CharacterCard({ character, className }: Props) {
  const { t } = useTranslation('characters');
  const {
    name,
    gender,
    height,
    weight,
    hairColor,
    eyeColor,
    birthYear,
    numOfMovies,
  } = character;

  const strings = useMemo(() => {
    return {
      height: t('card.height'),
      weight: t('card.weight'),
      hairColor: t('card.hairColor'),
      eyeColor: t('card.eyeColor'),
      birthYear: t('card.birthYear'),
      numberMovies: t('card.numberMovies'),
    };
  }, [t]);

  return (
    <CharacterCardWrapper className={className}>
      <StyledCardTitle>{name}</StyledCardTitle>
      <CharacterCardDetails>
        <CharacterCardDetail>
          <CardDetailsTitle>{strings.height}</CardDetailsTitle>
          <CardDetailsValue>{`${height}cm`}</CardDetailsValue>
        </CharacterCardDetail>
        <CharacterCardDetail>
          <CardDetailsTitle>{strings.weight}</CardDetailsTitle>
          <CardDetailsValue>{`${weight}kg`}</CardDetailsValue>
        </CharacterCardDetail>
        <CharacterCardDetail>
          <CardDetailsTitle>{strings.hairColor}</CardDetailsTitle>
          <CardDetailsValue>{hairColor}</CardDetailsValue>
        </CharacterCardDetail>
        <CharacterCardDetail>
          <CardDetailsTitle>{strings.eyeColor}</CardDetailsTitle>
          <CardDetailsValue>{eyeColor}</CardDetailsValue>
        </CharacterCardDetail>
        <CharacterCardDetail>
          <CardDetailsTitle>{strings.birthYear}</CardDetailsTitle>
          <CardDetailsValue>{birthYear}</CardDetailsValue>
        </CharacterCardDetail>
        <CharacterCardDetail>
          <CardDetailsTitle>{strings.numberMovies}</CardDetailsTitle>
          <CardDetailsValue>{numOfMovies}</CardDetailsValue>
        </CharacterCardDetail>
      </CharacterCardDetails>
    </CharacterCardWrapper>
  );
}
