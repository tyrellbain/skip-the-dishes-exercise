import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../../components/globals/styles';
import theme from '../../../theme';
import { render, waitFor, getByText, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MoviePage from '../index';

import { mockMoviesListResponse } from '../__mocks__/movies';

const request = new MockAdapter(axios);

describe('The Movies Page', () => {
  const getMovies = request.onGet('https://swapi.dev/api/films');
  const mockedMovies = mockMoviesListResponse();

  function renderMovies() {
    return render(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MoviePage />
      </ThemeProvider>,
    );
  }

  afterEach(() => {
    request.reset();
  });

  it('should render all cards when loaded', async () => {
    const { getByText } = renderMovies();
    expect(request.history.get.length).toBe(0);
    getMovies.reply(200, mockedMovies);

    await waitFor(() => {
      expect(request.history.get.length).toBe(1);
    });

    expect(getByText('A New Hope'));
    expect(getByText('Episode 2'));
    expect(getByText('Return of the Jedi'));
    expect(getByText('Episode 4'));
  });

  it('should sort cards by episode when the sort button is clicked once', async () => {
    renderMovies();
    expect(request.history.get.length).toBe(0);
    getMovies.reply(200, mockedMovies);

    await waitFor(() => {
      expect(request.history.get.length).toBe(1);
    });

    expect(screen.getByTestId('sort-button-current-sorting')).toHaveTextContent(
      'Release Date',
    );
    const firstColumn = screen.getByTestId('movie-column-01');
    expect(getByText(firstColumn, 'Episode 4'));
    expect(getByText(firstColumn, 'Episode 1'));

    await userEvent.click(screen.getByTestId('sort-button-wrapper'));

    expect(screen.getByTestId('sort-button-current-sorting')).toHaveTextContent(
      'Episode',
    );
    expect(getByText(firstColumn, 'Episode 1'));
    expect(getByText(firstColumn, 'Episode 4'));
  });

  it('should show the details when clicking in Show Details', async () => {
    renderMovies();
    expect(request.history.get.length).toBe(0);
    getMovies.reply(200, mockedMovies);

    await waitFor(() => {
      expect(request.history.get.length).toBe(1);
    });

    const episodeOneCard = screen.getByTestId('movie-card-episode-1');
    await userEvent.click(getByText(episodeOneCard, 'Show Details'));

    expect(getByText(episodeOneCard, 'Director'));
    expect(getByText(episodeOneCard, 'Producer'));
    expect(getByText(episodeOneCard, 'Released'));

    expect(getByText(episodeOneCard, 'Some Guy'));
  });

  it('should properly change all key strings to French', async () => {
    renderMovies();
    expect(request.history.get.length).toBe(0);
    getMovies.reply(200, mockedMovies);

    await waitFor(() => {
      expect(request.history.get.length).toBe(1);
    });

    const episodeOneCard = screen.getByTestId('movie-card-episode-1');
    await userEvent.click(getByText(episodeOneCard, 'Show Details'));

    expect(getByText(episodeOneCard, 'Hide Details'));
    expect(getByText(episodeOneCard, 'Director'));
    expect(getByText(episodeOneCard, 'Producer'));
    expect(getByText(episodeOneCard, 'Released'));

    await userEvent.click(screen.getByTestId('language-fr-ca'));

    expect(getByText(episodeOneCard, 'Cacher les détails'));
    expect(getByText(episodeOneCard, 'Réalisateur'));
    expect(getByText(episodeOneCard, 'Producteur'));
    expect(getByText(episodeOneCard, 'Date de publication'));
  });
});
