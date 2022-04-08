package lise.uebungsprojekt.service

import lise.uebungsprojekt.model.Dev
import lise.uebungsprojekt.repository.DevRepository
import org.springframework.stereotype.Service

@Service
class DevService(private val devRepository: DevRepository) {
    fun getDevsByInitial(initial: String): List<Dev> = devRepository.getDevsByInitial(initial)
}