package lise.uebungsprojekt.controller

import lise.uebungsprojekt.model.Rating
import lise.uebungsprojekt.service.RatingService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import javax.validation.Valid

@RestController
@CrossOrigin
class RatingController(private val ratingService: RatingService) {
    @PostMapping("/ratings/add")
    @PreAuthorize("hasRole('user')")
    fun addRating(@Valid @RequestBody rating: Rating): ResponseEntity<String> {
        ratingService.addRating(rating)
        return ResponseEntity.status(HttpStatus.CREATED).build()
    }
}