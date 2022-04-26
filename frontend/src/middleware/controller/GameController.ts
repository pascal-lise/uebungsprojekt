import Game from "../../model/Game"
import GameService from '../service/GameService'

export default {
    getGameById: async (id: string): Promise<Game> => prepareGame(await GameService.getGameById(id)),
    getGames: async (): Promise<Game[]> => (await GameService.getGames()).map((game: Game) => prepareGame(game)),
}

function prepareGame(game: Game) {
    game.releaseDateView = new Date(game.releaseDate).toLocaleDateString()
    return game
}