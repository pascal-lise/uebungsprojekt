package lise.uebungsprojekt.model

import org.bson.types.ObjectId
import java.util.Date

abstract class GameBase {
    abstract val id: ObjectId
    abstract val name: String
    abstract val releaseDate: Date
    abstract var releaseDateView: String?
    abstract val developer: String
    abstract var ratings: List<Rating>
    abstract var avgGraphicsRating: Double?
    abstract var avgSoundRating: Double?
    abstract var avgAddictionRating: Double?
    abstract var avgActionRating: Double?
    abstract val picturePath: String
    abstract val consoles: List<Console>
}