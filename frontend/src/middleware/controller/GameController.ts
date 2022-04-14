import Game from "../../model/Game"
import GameService from '../service/GameService'

export default {
    getGameById: async (id: string) => prepareGame(await GameService.getGameById(id)),
    getGames: async () => (await GameService.getGames()).map((game: Game) => prepareGame(game))
}

function prepareGame(game: Game) {
    game.releaseDate = new Date(game.releaseDate).toLocaleDateString()
    return game
}