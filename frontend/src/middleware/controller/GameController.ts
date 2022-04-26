import Game from "../../model/Game"
import compareGames from "../../util/SortGames"
import GameService from '../service/GameService'
import Console from '../../model/Console';

export default {
    getGameById: async (id: string): Promise<Game> => prepareGame(await GameService.getGameById(id)),
    getGames: async (): Promise<Game[]> => (await GameService.getGames()).map((game: Game) => prepareGame(game)),
    sortGames: (games: Game[]): Game[] => games.sort((a: Game, b: Game) => compareGames(a, b)),
    filterByConsoles: (games: Game[], consoles: string[]): Game[] => games.filter((game: Game) => 
        game.consoles.some((c: Console) => consoles.includes(c.name) || consoles.length === 0))
}

function prepareGame(game: Game) {
    game.releaseDateView = new Date(game.releaseDate).toLocaleDateString()
    return game
}