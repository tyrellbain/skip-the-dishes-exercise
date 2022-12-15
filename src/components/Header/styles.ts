import styled from 'styled-components';
import { BREAKPOINTS, WithTheme } from '../../theme';
import logo from '../../assets/logo.svg';
import account from '../../components/icons/svg/account.svg';

export const Wrapper = styled.header<WithTheme>`
  align-items: center;
  background: ${(props) => props.theme.colors.white};
  border-bottom: 1px solid ${(props) => props.theme.colors.divider};
  display: flex;
  flex-flow: row nowrap;
  height: 96px;
  justify-content: space-between;
  padding: ${(props) => `${props.theme.spacing.lg} ${props.theme.spacing.xl}`};

  @media screen and (max-width: ${BREAKPOINTS.md}px) {
    height: 64px;
  }

  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    height: 112px;
    flex-flow: row wrap;
    padding: 0;
  }
`;

export const Logo = styled.img.attrs({ src: logo })`
  max-height: 48px;
  order: 0;

  @media screen and (max-width: ${BREAKPOINTS.md}px) {
    max-height: 32px;
  }

  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    order: 0;
    margin: ${(props) => `${props.theme.spacing.sm} ${props.theme.spacing.md}`};
  }
`;

export const SearchWrapper = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  box-shadow: ${(props) => props.theme.shadows.base};
  margin: 0 ${(props) => props.theme.spacing.max};
  max-width: 512px;
  padding: 0;
  position: relative;
  width: 100%;
  order: 1;

  @media screen and (max-width: ${BREAKPOINTS.md}px) {
    max-width: 312px;
  }

  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    border-top: 1px solid ${(props) => props.theme.colors.divider};
    box-shadow: none;
    max-width: 100%;
    order: 2;
    width: 100%;
    margin: 0;
    height: 48px;
  }
`;

export const SearchIconWrapper = styled.span`
  position: absolute;
  left: 16px;
  top: calc(50% - 8px);
`;

export const SearchField = styled.input`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.colors.text};
  height: 50px;
  margin-left: ${(props) => props.theme.spacing.md};
  outline: none;
  padding: ${(props) => `0 ${props.theme.spacing.xl}`};
  width: 100%;

  @media screen and (max-width: ${BREAKPOINTS.md}px) {
    height: 40px;
  }

  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    height: 48px;
    margin-left: 0;
    padding-left: ${props => props.theme.spacing.xxl};
  }
`;

export const UserArea = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  order: 2;
  min-width: 64px;

  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    order: 1;
    margin: ${(props) => props.theme.spacing.md};
  }
`;

export const LanguageSelection = styled.div`
  font-size: 12px;
  font-weight: 600;
  line-height: 12px;
  margin-right: ${(props) => props.theme.spacing.md};
`;

export const Language = styled.button<{ active: boolean }>`
  background: transparent;
  border: none;
  color: ${(props) =>
    props.active ? props.theme.colors.text : props.theme.colors.secondaryText};
  cursor: pointer;
  margin: 0;
  outline: none;
  padding: ${(props) => `${props.theme.spacing.xs} ${props.theme.spacing.sm}`};
`;

export const Divider = styled.span`
  background: ${(props) => props.theme.colors.divider};
  height: 100%;
  padding-left: 1px;
`;

export const AccountIcon = styled.img.attrs({ src: account })`
  height: 24px;
  width: 24px;
`;
