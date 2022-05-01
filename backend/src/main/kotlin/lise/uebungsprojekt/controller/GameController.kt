package lise.uebungsprojekt.controller

import lise.uebungsprojekt.model.*
import lise.uebungsprojekt.service.GameService
import org.bson.types.ObjectId
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.text.SimpleDateFormat
import java.util.*


@RestController
@RequestMapping
@CrossOrigin
class GameController(private val gameService: GameService) {

    @GetMapping("/games")
    fun getGames(@RequestParam(required = false) filterByConsoles: List<String>? = ArrayList(),
                 @RequestParam(required = false) searchBy: String? = ""): ResponseEntity<List<Game>> {
        return ResponseEntity.ok(this.prepareGames(filterByConsoles, searchBy))
    }

    @GetMapping("/game/{id}")
    fun getGameById(@PathVariable("id") id: String): ResponseEntity<GameDetail>? {
        if(ObjectId.isValid(id)) {
            val game : GameDetail? = this.prepareGame(gameService.findById(ObjectId(id)))
            return ResponseEntity.ok(game)
        }
        return null
    }

    @PostMapping("/game/add")
    fun addGame(@RequestBody game: Game): ResponseEntity<String> {
        gameService.addGame(game)
        return ResponseEntity.status(HttpStatus.CREATED).build()
    }

    @GetMapping("/games/count")
    fun getGamesCount(): ResponseEntity<Long> = ResponseEntity.ok(gameService.getGamesCount())

    @GetMapping("/game")
    fun getGameByInitial(@RequestParam(required = true) initial: String): ResponseEntity<Game>? =
        ResponseEntity.ok(gameService.getGameByInitial(initial))

    private fun prepareGame(game: GameDetail?): GameDetail? {
        if (game != null) {
            this.setAverageRating(game)
            this.setReleaseDateView(game)
        }
        return game
    }

    private fun prepareGames(filterByConsoles: List<String>?, searchBy: String?): List<Game> {
        var games: List<Game> = gameService.findAll()
        games.forEach { this.setReleaseDateView(it) }
        if(searchBy !== null && searchBy !== "") {
            games = games.filter { it.name.lowercase().contains(searchBy.lowercase()) }
        }
        if (filterByConsoles != null && filterByConsoles.isNotEmpty()) {
            games = games.filter {
                it.consoles.any { console: Console -> filterByConsoles.contains(console.name) }
            }
        }
        return this.sortGames(games)
    }

    private fun sortGames(games: List<Game>): List<Game> {
        games.forEach {
            this.setAverageRating(it)
        }
        return games.sortedByDescending { game: Game -> game.averageRating }
    }

    private fun setAverageRating(game: GameBase): GameBase {
        val ratings: List<Rating> = game.ratings
        val sum: Double = ratings.sumOf { it.value }.toDouble()
        if (ratings.isNotEmpty()) {
            game.averageRating = sum / ratings.size
        } else {
            game.averageRating = 0.0
        }
        return game
    }

    private fun setReleaseDateView(game: GameBase): GameBase {
        game.releaseDateView = SimpleDateFormat("yyyy-MM-dd").format(game.releaseDate)
        return game
    }
}
