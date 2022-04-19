package lise.uebungsprojekt.service

import lise.uebungsprojekt.model.Rating
import lise.uebungsprojekt.repository.RatingRepository
import org.springframework.stereotype.Service

@Service
class RatingService(private val ratingRepository: RatingRepository) {
    fun addRating(rating: Rating): Rating = ratingRepository.insert(rating)
}
