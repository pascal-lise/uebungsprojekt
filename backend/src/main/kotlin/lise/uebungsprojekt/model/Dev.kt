package lise.uebungsprojekt.model

import org.springframework.data.mongodb.core.mapping.Document

@Document
data class Dev(val name: String)