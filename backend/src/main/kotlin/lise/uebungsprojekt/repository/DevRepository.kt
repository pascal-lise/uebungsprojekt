package lise.uebungsprojekt.repository

import lise.uebungsprojekt.model.Dev
import org.bson.types.ObjectId
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.Query
import org.springframework.stereotype.Repository

@Repository
interface DevRepository : MongoRepository<Dev, ObjectId> {
    @Query(value="{ 'name' : /^?0/ }", fields="{name : 1, _id : 0}")
    fun getDevsByInitial(initial: String): List<Dev>
}
