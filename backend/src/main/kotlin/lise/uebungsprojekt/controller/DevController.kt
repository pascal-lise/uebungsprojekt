package lise.uebungsprojekt.controller

import lise.uebungsprojekt.model.Dev
import lise.uebungsprojekt.service.DevService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping
class DevController(private val devService: DevService) {
    @GetMapping("/devs")
    fun getDevsByInitial(@RequestParam initial: String): ResponseEntity<List<Dev>> =
        ResponseEntity.ok(devService.getDevsByInitial(initial))
}
