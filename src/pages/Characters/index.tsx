import React, { useEffect, useMemo, useState } from 'react';
import { PageTitle, PageHeader } from '../../styles/global';
import { useTranslation } from 'react-i18next';
import { Character } from './components/CharacterCard';
import './i18n';
import {
  API_RESOURCE,
  CharacterListResonse,
  featchList,
} from '../../services/API/swapi';
import {
  mapResponseToState,
  sortByName,
  sortByNumOfMovies,
  sortByHeight,
} from './helpers';
import { CharacterListWrapper, StyledCharacterCard } from './styles';
import SortButton, { SortFunction } from '../../components/SortButton';

export default function CharactersPage() {
  const { t } = useTranslation('characters');
  const [characterList, setCharacterList] = useState<Character[]>([]);

  useEffect(() => {
    const getList = async () => {
      const { results } = await featchList<CharacterListResonse>(
        API_RESOURCE.People,
      );
      setCharacterList(mapResponseToState(results).sort(sortByName));
      console.log(sortingOptions[0].cb);
      // sortingOptions[0].cb();
    };

    getList();
  }, []);

  const sortingOptions: SortFunction[] = useMemo(() => {
    return [
      {
        label: t('sort.name'),
        cb: () => {
          const sortedList = [...characterList].sort(sortByName);
          setCharacterList(sortedList);
        },
      },
      {
        label: t('sort.numberMovies'),
        cb: () => {
          const sortedList = [...characterList].sort(sortByNumOfMovies);
          setCharacterList(sortedList);
        },
      },
      {
        label: t('sort.height'),
        cb: () => {
          const sortedList = [...characterList].sort(sortByHeight);
          setCharacterList(sortedList);
        },
      },
    ];
  }, [characterList, t]);

  return (
    <>
      <PageHeader>
        <PageTitle>{t('title')}</PageTitle>
        <SortButton sorting={sortingOptions} />
      </PageHeader>
      <CharacterListWrapper>
        {characterList.map((character) => (
          <StyledCharacterCard key={character.name} character={character} />
        ))}
      </CharacterListWrapper>
    </>
  );
}
