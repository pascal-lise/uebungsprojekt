package lise.uebungsprojekt.controller

import lise.uebungsprojekt.model.*
import lise.uebungsprojekt.service.GameService
import org.bson.types.ObjectId
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping
@CrossOrigin
class GameController(private val gameService: GameService) {

    @GetMapping("/games")
    fun getGames(@RequestParam(required = false, defaultValue = "") filterByConsoles: List<String>,
                 @RequestParam(required = false, defaultValue = "") searchBy: String): ResponseEntity<List<Game>> {
        return ResponseEntity.ok(gameService.findAll(filterByConsoles, searchBy))
    }

    @GetMapping("/game/{id}")
    fun getGameById(@PathVariable("id") id: String): ResponseEntity<GameDetail>? {
        if(ObjectId.isValid(id)) {
            return ResponseEntity.ok(gameService.findById(ObjectId(id)))
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
}
