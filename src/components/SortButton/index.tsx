import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  SortButtonIconWrapper,
  SortButtonText,
  SortButtonWrapper,
} from './styles';
import { ReactComponent as SortIcon } from '../icons/svg/sort.svg';

export type SortFunction = {
  label: string;
  cb: () => void;
};

type Props = {
  sorting: SortFunction[];
};

export default function SortButton(props: Props) {
  const { t } = useTranslation('common');
  const [sorting, setSorting] = useState(0);
  const maxSorting = props.sorting.length;

  if (maxSorting === 0) {
    throw new Error(`Sorting is missing properties`);
  }

  const changeSorting = useCallback(() => {
    const nextSorting = sorting + 1 >= maxSorting ? 0 : sorting + 1;
    setSorting(nextSorting);
    const curSorting = props.sorting[nextSorting];
    console.log('curSorting', curSorting.cb);
    console.log(props.sorting[0]);

    curSorting.cb();
  }, [maxSorting, props.sorting, sorting]);

  return (
    <SortButtonWrapper
      onClick={() => changeSorting()}
      data-testid="sort-button-wrapper"
    >
      <SortButtonIconWrapper>
        <SortIcon />
      </SortButtonIconWrapper>
      <SortButtonText>
        <span>{t('sort.sortBy')} </span>
        <b data-testid="sort-button-current-sorting">
          {props.sorting[sorting].label}
        </b>
      </SortButtonText>
    </SortButtonWrapper>
  );
}
