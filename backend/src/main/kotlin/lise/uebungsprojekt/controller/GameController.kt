package lise.uebungsprojekt.controller

import lise.uebungsprojekt.model.Game
import lise.uebungsprojekt.service.GameService
import org.bson.types.ObjectId
import org.springframework.http.ResponseEntity
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping
@CrossOrigin
class GameController(private val gameService: GameService) {

    @GetMapping("/games")
    fun getGames(): ResponseEntity<List<Game>> = ResponseEntity.ok(gameService.findAll())

    @GetMapping("/game/{id}")
    fun getGameById(@PathVariable("id") id: String): ResponseEntity<Game>? {
        if(ObjectId.isValid(id))
            return ResponseEntity.ok(gameService.findById(ObjectId(id)))
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
