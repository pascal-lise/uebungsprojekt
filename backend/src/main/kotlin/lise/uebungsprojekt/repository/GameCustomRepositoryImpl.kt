package lise.uebungsprojekt.repository

import lise.uebungsprojekt.model.Game
import org.bson.types.ObjectId
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.mongodb.core.MongoTemplate
import org.springframework.data.mongodb.core.aggregation.Aggregation
import org.springframework.data.mongodb.core.aggregation.LookupOperation
import org.springframework.data.mongodb.core.query.Criteria
import org.springframework.stereotype.Repository

@Repository
class GameCustomRepositoryImpl(@Autowired val mongoTemplate: MongoTemplate): GameCustomRepository {
    override fun getGameById(id: ObjectId): Game? {
        val results: List<Game> = this.getResult(id)
        if(results.isNotEmpty())
            return results[0]
        return null
    }

    override fun findAll(): List<Game> {
        return this.getResult()
    }

    private fun getResult(id: ObjectId? = null): List<Game> {
        val ratingsLookup: LookupOperation =
            Aggregation.lookup("rating", "_id", "gameId", "ratings")
        val consoleLookup: LookupOperation =
            Aggregation.lookup("console", "consoles", "_id", "consoles")
        val agg: Aggregation = if (id != null)
            Aggregation.newAggregation(Aggregation.match(Criteria("_id").`is`(id)), consoleLookup, ratingsLookup)
        else Aggregation.newAggregation(consoleLookup, ratingsLookup)
        return mongoTemplate.aggregate(agg, "game", Game::class.java).mappedResults
    }
}
