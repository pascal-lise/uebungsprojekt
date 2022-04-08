package lise.uebungsprojekt.repository

import lise.uebungsprojekt.model.Rating
import org.bson.types.ObjectId
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface RatingRepository : MongoRepository<Rating, ObjectId>
