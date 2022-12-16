import styled from 'styled-components';
import { BREAKPOINTS } from '../../theme';
import CharacterCard from './components/CharacterCard';

export const CharacterListWrapper = styled.div`
  @media (min-width: ${BREAKPOINTS.md}px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    grid-gap: ${(props) => props.theme.spacing.md};
  }

  @media (min-width: ${BREAKPOINTS.lg}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const StyledCharacterCard = styled(CharacterCard)`
  :not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing.lg};
  }

  @media (min-width: ${BREAKPOINTS.md}px) {
    :not(:last-child) {
      margin-bottom: 0;
    }
  } ;
`;
