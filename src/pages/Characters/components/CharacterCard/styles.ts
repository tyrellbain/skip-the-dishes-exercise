import styled from 'styled-components';
import { CardTitle } from '../../../../styles/global';

export const CharacterCardWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border: ${(props) => `1px solid ${props.theme.colors.divider}`};
  padding: ${(props) => props.theme.spacing.md};
`;

export const StyledCardTitle = styled(CardTitle)`
  padding-bottom: ${(props) => props.theme.spacing.md};
`;

export const CharacterCardDetails = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${(props) => props.theme.spacing.md};
`;

export const CharacterCardDetail = styled.li`
  display: flex;
  flex-direction: column;
`;
