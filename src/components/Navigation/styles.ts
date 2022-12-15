import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.nav`
  background: white;
  width: 256px;
  margin-right: 64px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.divider};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin: -32px;
    margin-bottom: 32px;
    width: 100vw;
    padding: 8px;
    overflow-y: scroll;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
    border-radius: 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 0;
  }
`;

export const Menu = styled.ul`
  list-style: none;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: flex;
    min-width: 550px;
    justify-content: space-between;
    align-items: center;
  }
`;

export const MenuItem = styled.li<{ disabled?: boolean; active: boolean }>`
  margin: 8px;
  opacity: 0.6;
  padding: 8px;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.3;

      &:hover {
        opacity: 0.3;
      }
    `}

  ${({ active, disabled }) =>
    active &&
    !disabled &&
    css`
      opacity: 1;
    `}
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
`;

export const MenuItemText = styled.span`
  margin-left: 8px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
`;
