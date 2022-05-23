import { render, screen } from '@testing-library/react';
import GameListPage from './GameListPage';
import { games } from '__mocks__/Games'
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { consoles } from '__mocks__/Consoles';

jest.mock("api/GamesApi", () => ({
  getGames: jest.fn().mockImplementation(async () => await games),
  getConsoles: jest.fn().mockImplementation(async () => await consoles),
}));

test('renders list', async () => {
  await act(() => {
    render(<GameListPage />, {wrapper: BrowserRouter});
  })
  const cards = screen.getAllByRole('img')
  expect(cards).toHaveLength(4)
});