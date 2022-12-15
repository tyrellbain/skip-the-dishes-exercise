import React, { useEffect, useState } from 'react';
import {useTranslation} from "react-i18next";
import {
  SortButtonIconWrapper,
  SortButtonText,
  SortButtonWrapper,
} from './styles';
import { ReactComponent as SortIcon } from '../../../../components/icons/svg/sort.svg';

export type SortFunction = {
  label: string;
  cb: () => void;
};

type Props = {
  sorting: SortFunction[];
};

export default function SortButton(props: Props) {
  const {t} = useTranslation('movies');
  const [sorting, setSorting] = useState(0);
  const maxSorting = props.sorting.length;

  if (maxSorting === 0) {
    throw new Error(`Sorting is missing properties`);
  }

  const curSorting = props.sorting[sorting];

  useEffect(() => {
    curSorting.cb();
  }, [curSorting]);

  function changeSorting() {
    const nextSorting = sorting + 1;

    if (nextSorting >= maxSorting) {
      setSorting(0);
      return;
    }

    setSorting(nextSorting);
  }

  return (
    <SortButtonWrapper onClick={changeSorting} data-testid="sort-button-wrapper">
      <SortButtonIconWrapper>
        <SortIcon />
      </SortButtonIconWrapper>
      <SortButtonText>
        <span>{t('sort.sortBy')} </span>
        <b data-testid="sort-button-current-sorting">{curSorting.label}</b>
      </SortButtonText>
    </SortButtonWrapper>
  );
}
