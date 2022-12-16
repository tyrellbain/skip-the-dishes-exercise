import styled from 'styled-components';
import { BREAKPOINTS } from '../../theme';

export const CharacterListWrapper = styled.div`
  @media (min-width: ${BREAKPOINTS.md}px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    grid-gap: ${(props) => props.theme.spacing.md};
  }

  @media (min-width: ${BREAKPOINTS.lg + 1}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
