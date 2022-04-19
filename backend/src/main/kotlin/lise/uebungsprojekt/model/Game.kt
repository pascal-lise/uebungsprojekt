package lise.uebungsprojekt.model

import org.springframework.data.mongodb.core.mapping.Document

@Document
data class Game(val name: String, val releaseDate: String, val dev: String, val ratings: List<Rating>?)