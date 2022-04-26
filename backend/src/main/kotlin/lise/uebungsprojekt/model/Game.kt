package lise.uebungsprojekt.model

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.util.Date

@Document
data class Game(@Id val id: ObjectId, val name: String, val releaseDate: Date, val developer: String, var ratings: List<Rating>?, val picturePath: String?, val consoles: List<Console>)