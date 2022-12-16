import styled from 'styled-components';
import MovieCard from './components/MovieCard';

export const MovieListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  grid-gap: ${(props) => props.theme.spacing.md};
`;

export const StyledMovieCard = styled(MovieCard)``;
