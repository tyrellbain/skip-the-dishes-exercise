import React from 'react';
import { Wrapper, Menu } from './styles';
import MoviesIcon from '../icons/MoviesIcon';
import CharactersIcon from '../icons/CharactersIcon';
import PlanetsIcon from '../icons/PlanetsIcon';
import StarshipIcon from '../icons/StarshipIcon';
import VehicleIcon from '../icons/VehicleIcon';
import SpeciesIcon from '../icons/SpeciesIcon';
import NavigationItem from './NavigationItem';
import { useTranslation } from 'react-i18next';

export default function Navigation() {
  const { t } = useTranslation('common');
  const menuItems = [
    {
      label: t('navigation.movies'),
      path: '/',
      icon: <MoviesIcon />,
    },
    {
      label: t('navigation.characters'),
      path: '/characters',
      icon: <CharactersIcon />,
    },
    {
      label: t('navigation.planets'),
      path: '/planets',
      icon: <PlanetsIcon />,
      disabled: true,
    },
    {
      label: t('navigation.starships'),
      path: '/starships',
      icon: <StarshipIcon />,
      disabled: true,
    },
    {
      label: t('navigation.vehicles'),
      path: '/vehicles',
      icon: <VehicleIcon />,
      disabled: true,
    },
    {
      label: t('navigation.species'),
      path: '/species',
      icon: <SpeciesIcon />,
      disabled: true,
    },
  ];

  return (
    <div>
      <Wrapper>
        <Menu>
          {menuItems.map((item) => (
            <NavigationItem
              key={item.label}
              to={item.path}
              label={item.label}
              icon={item.icon}
              disabled={item.disabled}
            />
          ))}
        </Menu>
      </Wrapper>
    </div>
  );
}
