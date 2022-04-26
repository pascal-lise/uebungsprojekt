package lise.uebungsprojekt.controller

import lise.uebungsprojekt.model.Console
import lise.uebungsprojekt.service.ConsoleService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin
class ConsoleController(private val consoleService: ConsoleService) {
    @GetMapping("/consoles")
    fun getConsoles(): ResponseEntity<List<Console>> = ResponseEntity.ok(consoleService.findAll())
}