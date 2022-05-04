package lise.uebungsprojekt.model

import com.fasterxml.jackson.databind.annotation.JsonSerialize
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer
import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.util.Date

abstract class GameBase {
    abstract val id: ObjectId
    abstract val name: String
    abstract val releaseDate: Date
    abstract var releaseDateView: String?
    abstract val developer: String
    abstract var ratings: List<Rating>
    abstract var averageRating: Double?
    abstract val picturePath: String?
    abstract val consoles: List<Console>
}