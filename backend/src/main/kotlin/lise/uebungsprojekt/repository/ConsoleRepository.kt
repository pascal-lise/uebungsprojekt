package lise.uebungsprojekt.repository

import lise.uebungsprojekt.model.Console
import org.bson.types.ObjectId
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface ConsoleRepository : MongoRepository<Console, ObjectId>
