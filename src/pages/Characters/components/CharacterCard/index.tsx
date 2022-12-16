import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

export type Character = {
  name: string;
  gender: 'Male' | 'Female' | 'unknown' | 'n/a';
  height: number;
  weight: number;
  hair_color: string;
  eye_color: string;
  birth_year: string;
  num_of_movies: number;
};

type Props = {
  character: Character;
};

export default function CharacterCard({ character }: Props) {
  return <div>{character.name}</div>;
}
