import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import theme from './theme';
import MoviesPage from './pages/Movies';
import Header from './components/Header';
import Navigation from './components/Navigation';
import { PageWrapper, GlobalStyle } from './components/globals/styles';
import './i18n';
import CharactersPage from './pages/Characters';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <PageWrapper>
          <Navigation />
          <main>
            <Routes>
              <Route element={<MoviesPage />} path="/" />
              <Route element={<CharactersPage />} path="characters" />
            </Routes>
          </main>
        </PageWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
