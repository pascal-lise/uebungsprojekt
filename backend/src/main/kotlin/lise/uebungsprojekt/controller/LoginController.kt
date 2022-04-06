package lise.uebungsprojekt.controller

import lise.uebungsprojekt.model.Credentials
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import kotlin.random.Random

@RestController
class LoginController {

    @PostMapping("/login")
    fun login(@RequestBody credentials: Credentials): Boolean {
        return Random.nextInt(0, 1) == 0
    }
}