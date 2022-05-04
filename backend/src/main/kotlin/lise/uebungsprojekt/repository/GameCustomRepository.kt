package lise.uebungsprojekt.repository

import lise.uebungsprojekt.model.Game
import org.bson.types.ObjectId
import org.springframework.stereotype.Repository

@Repository
interface GameCustomRepository {
    fun getGameById(id: ObjectId): Game?
    fun findAll(filterByConsoles: List<String>, searchBy: String): List<Game>
}
