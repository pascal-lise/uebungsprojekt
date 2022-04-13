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
class GameCustomRepositoryImpl(@Autowired val mongoTemplate: MongoTemplate) : GameCustomRepository {

    override fun getGameAndRatingsById(id: ObjectId): Game? {
        return this.getRatingsByGameId(id)
    }

    override fun findAll(): List<Game> {
        val games: List<Game> = mongoTemplate.findAll(Game::class.java)
        for(game in games) {
            val gameWithRatings: Game? = this.getGameAndRatingsById(game.id)
            if (gameWithRatings != null) {
                game.ratings = gameWithRatings.ratings
            }
        }
        return games
    }

    private fun getRatingsByGameId(gameId: ObjectId): Game? {
        val lookup: LookupOperation = Aggregation.lookup("ratings","_id","gameId","ratings")
        val agg: Aggregation = Aggregation.newAggregation(Aggregation.match(Criteria.where("_id").`is`(gameId)), lookup)
        val results: List<Game> = mongoTemplate.aggregate(agg, "game", Game::class.java).mappedResults
        if(results.isNotEmpty())
            return results[0]
        return null
    }
}
