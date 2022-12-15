import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  AccountIcon,
  Divider,
  Language,
  LanguageSelection,
  Logo,
  SearchField,
  SearchIconWrapper,
  SearchWrapper,
  UserArea,
  Wrapper,
} from './styles';
import { shortenLanguage } from './helpers';
import { Languages } from '../../i18n';
import useWindowWidth from '../../hooks/useWindowWidth';
import SearchIcon from '../../components/icons/SearchIcon';

export default function Header() {
  const { t, i18n } = useTranslation('common');
  const width = useWindowWidth();

  function changeLanguage(language: Languages) {
    return () => i18n.changeLanguage(language);
  }

  const placeholder = t('header.search');

  return (
    <Wrapper>
      <Logo alt="SkipTheDishes Challenge" />
      <SearchWrapper>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <SearchField type="text" placeholder={placeholder} />
      </SearchWrapper>
      <UserArea>
        <LanguageSelection>
          <Language
            active={i18n.language === 'en_CA'}
            onClick={changeLanguage('en_CA')}
            data-testid="language-en-ca"
          >
            {shortenLanguage(t('header.english'), width)}
          </Language>
          <Divider />
          <Language
            active={i18n.language === 'fr_CA'}
            onClick={changeLanguage('fr_CA')}
            data-testid="language-fr-ca"
          >
            {shortenLanguage(t('header.french'), width)}
          </Language>
        </LanguageSelection>
        <AccountIcon alt="User" />
      </UserArea>
    </Wrapper>
  );
}
