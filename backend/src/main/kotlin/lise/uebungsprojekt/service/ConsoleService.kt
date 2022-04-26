package lise.uebungsprojekt.service

import lise.uebungsprojekt.model.Console
import lise.uebungsprojekt.repository.ConsoleRepository
import org.springframework.stereotype.Service

@Service
class ConsoleService(private val consoleRepository: ConsoleRepository) {
    fun findAll(): List<Console> = consoleRepository.findAll()
}