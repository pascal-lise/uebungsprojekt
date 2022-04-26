package lise.uebungsprojekt.service

import lise.uebungsprojekt.model.Game
import lise.uebungsprojekt.repository.GameRepository
import org.bson.types.ObjectId
import org.springframework.stereotype.Service

@Service
class GameService(private val gameRepository: GameRepository) {
    fun findAll(): List<Game> = gameRepository.findAll()
    fun findById(id: ObjectId): Game? = gameRepository.getGameById(id)
    fun addGame(game: Game): Game = gameRepository.insert(game)
    fun getGamesCount(): Long = gameRepository.count()
    fun getGameByInitial(initial: String): Game? = gameRepository.getGameByInitial(initial)
}