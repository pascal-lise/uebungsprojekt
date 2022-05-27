import { getGames, getGameById, getConsoles } from 'api/GamesApi';
import { games } from '__mocks__/Games'
import { consoles } from '__mocks__/Consoles'
import Console from 'model/Console';
import GameDetail from 'model/GameDetail';
import Game from 'model/Game';

jest.mock("api/GamesApi", () => ({
  getGameById: jest.fn().mockImplementation(async () => await games[0]),
  getGames: jest.fn().mockImplementation(async () => await games),
  getConsoles: jest.fn().mockImplementation(async () => await consoles),
}))

test('get all games', async () => {
  const result: Game[] = await getGames()
  expect(result).not.toBeNull()
  expect(result.length).toBe(4)
});

test('get game by id', async () => {
  const result: GameDetail = await getGameById('anyId')
  expect(result).not.toBeNull()
  expect(result.name).toBe('testGame')
});

test('get all consoles', async () => {
  const result: Console[] = await getConsoles()
  expect(result).not.toBeNull()
  expect(result.length).toBe(4)
});
