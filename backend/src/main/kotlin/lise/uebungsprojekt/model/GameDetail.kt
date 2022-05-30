package lise.uebungsprojekt.model

import com.fasterxml.jackson.databind.annotation.JsonSerialize
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer
import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.util.Date

@Document
data class GameDetail(@Id @JsonSerialize(using = ToStringSerializer::class) override val id: ObjectId,
                      override val name: String, override val releaseDate: Date, override var releaseDateView: String?,
                      override val developer: String, override var ratings: List<Rating>,
                      override var avgGraphicsRating: Double?, override var avgSoundRating: Double?,
                      override var avgAddictionRating: Double?, override var avgActionRating: Double?,
                      override val picturePath: String, override val consoles: List<Console>, val description: String,
                      val trailer: String) : GameBase()