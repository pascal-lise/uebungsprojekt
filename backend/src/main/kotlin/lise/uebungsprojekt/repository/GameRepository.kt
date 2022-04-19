package lise.uebungsprojekt.repository

import lise.uebungsprojekt.model.Game
import org.bson.types.ObjectId
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.Query
import org.springframework.stereotype.Repository

@Repository
interface GameRepository : MongoRepository<Game, ObjectId>, GameCustomRepository {
    @Query(sort="{ 'name': 1 }", value="{ 'name' : /^?0/ }")
    fun getGameByInitial(initial: String): Game?
}
