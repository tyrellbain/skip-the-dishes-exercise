import styled, { createGlobalStyle } from 'styled-components';
import {WithTheme} from "../../theme";

export const GlobalStyle = createGlobalStyle<WithTheme>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${props => props.theme.colors.background};
  }
`;

export const PageWrapper = styled.div<WithTheme>`
  display: flex;
  padding: ${props => props.theme.spacing.xl};
  
  main {
    width: 100%;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex-direction: column;
  }
`;
