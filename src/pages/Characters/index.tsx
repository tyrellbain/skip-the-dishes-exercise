import React, { useEffect, useState } from 'react';
import { PageTitle, PageHeader } from '../../styles/global';
import { useTranslation } from 'react-i18next';
import CharacterCard, { Character } from './components/CharacterCard';
import './i18n';
import {
  API_RESOURCE,
  CharacterListResonse,
  featchList,
} from '../../services/API/swapi';
import { mapResponseToState } from './helpers';
import { CharacterListWrapper } from './styles';

export default function CharactersPage() {
  const { t } = useTranslation('characters');
  const [characterList, setCharacterList] = useState<Character[]>([]);

  useEffect(() => {
    const getList = async () => {
      const { results } = await featchList<CharacterListResonse>(
        API_RESOURCE.People,
      );
      console.log(results);
      setCharacterList(mapResponseToState(results));
    };

    getList();
  }, []);

  return (
    <>
      <PageHeader>
        <PageTitle>{t('title')}</PageTitle>
      </PageHeader>
      <CharacterListWrapper>
        {characterList.map((character) => (
          <CharacterCard key={character.name} character={character} />
        ))}
      </CharacterListWrapper>
    </>
  );
}
