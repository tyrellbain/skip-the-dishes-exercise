import React from 'react';
import { useMatch } from 'react-router-dom';
import { MenuItem, MenuItemText, MenuLink } from './styles';

type MenuItemProps = {
  to: string;
  label: string;
  icon: React.ReactNode;
  disabled?: boolean;
};

export default function NavigationItem({
  to,
  label,
  icon,
  disabled,
}: MenuItemProps) {
  let match = useMatch({
    path: to,
  });

  const linkContent = (
    <>
      {icon} <MenuItemText>{label}</MenuItemText>
    </>
  );

  return (
    <MenuItem active={Boolean(match)} disabled={disabled}>
      {disabled ? (
        <MenuLink as="span">{linkContent}</MenuLink>
      ) : (
        <MenuLink to={to}>{linkContent}</MenuLink>
      )}
    </MenuItem>
  );
}
