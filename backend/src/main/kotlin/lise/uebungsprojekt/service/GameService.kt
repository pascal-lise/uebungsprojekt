package lise.uebungsprojekt.service

import lise.uebungsprojekt.model.Game
import lise.uebungsprojekt.model.GameBase
import lise.uebungsprojekt.model.GameDetail
import lise.uebungsprojekt.repository.GameRepository
import org.bson.types.ObjectId
import org.springframework.stereotype.Service
import java.text.SimpleDateFormat

@Service
class GameService(private val gameRepository: GameRepository) {
    fun findAll(filterByConsoles: List<String>, searchBy: String): List<Game> = 
        this.prepareGames(filterByConsoles, searchBy)
    fun findById(id: ObjectId): GameDetail? = this.prepareGame(gameRepository.getGameById(id))
    fun addGame(game: Game): Game = gameRepository.insert(game)
    fun getGamesCount(): Long = gameRepository.count()
    fun getGameByInitial(initial: String): Game? = gameRepository.getGameByInitial(initial)

    private fun prepareGame(game: GameDetail?): GameDetail? {
        if (game != null) {
            this.setReleaseDateView(game)
        }
        return game
    }

    private fun prepareGames(filterByConsoles: List<String>, searchBy: String): List<Game> {
        val games: List<Game> = gameRepository.findAll(filterByConsoles, searchBy)
        games.forEach { this.setReleaseDateView(it) }
        return games
    }

    private fun setReleaseDateView(game: GameBase): GameBase {
        game.releaseDateView = SimpleDateFormat("dd.MM.yyyy").format(game.releaseDate)
        return game
    }
}