package lise.uebungsprojekt.model

import org.springframework.data.mongodb.core.mapping.Document

@Document
data class Rating(val value: Int, val comment: String)