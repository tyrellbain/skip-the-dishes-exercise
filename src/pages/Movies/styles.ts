import styled from 'styled-components';
import MovieCard from './components/MovieCard';

export const PageHeader = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.spacing.lg};
  width: 100%;
`;

export const PageTitle = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
`;

export const MovieListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  grid-gap: ${(props) => props.theme.spacing.md};
`;

export const StyledMovieCard = styled(MovieCard)``;
