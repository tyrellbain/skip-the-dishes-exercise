import styled from 'styled-components';
import { MovieCardWrapper } from './components/MovieCard/styles';
import {BREAKPOINTS} from "../../theme";

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

export const MovieListColumn = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 100%;

  ${MovieCardWrapper} + ${MovieCardWrapper} {
    margin-top: ${(props) => props.theme.spacing.md};
  }
`;

export const MovieListWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: ${BREAKPOINTS.sm + 1}px) {
    ${MovieListColumn} + ${MovieListColumn} {
      margin-left: ${(props) => props.theme.spacing.md};
    }
  }
  
  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    flex-flow: column nowrap;
    
    ${MovieListColumn} {
      margin-bottom: ${props => props.theme.spacing.md};
    }
  }
`;
