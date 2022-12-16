import styled from 'styled-components';
import { darken } from 'polished';
import { BREAKPOINTS } from '../../theme';

export const SortButtonWrapper = styled.button`
  align-items: center;
  background: transparent;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  outline: none;
  padding: ${(props) => props.theme.spacing.md};
  transition: all 100ms ease-in-out;

  :hover {
    background: ${(props) => darken(0.03, props.theme.colors.background)};
  }
`;

export const SortButtonIconWrapper = styled.span`
  height: 16px;
  margin-right: ${(props) => props.theme.spacing.sm};
  width: 16px;

  svg {
    fill: ${(props) => props.theme.colors.text};
  }
`;

export const SortButtonText = styled.span`
  color: ${(props) => props.theme.colors.text};
  height: 16px;

  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    span {
      display: none;
    }
  }
`;
