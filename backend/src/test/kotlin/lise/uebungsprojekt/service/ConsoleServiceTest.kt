package lise.uebungsprojekt.service

import lise.uebungsprojekt.model.Console
import lise.uebungsprojekt.repository.ConsoleRepository
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.TestInstance
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.Mockito
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit.jupiter.SpringExtension

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@ExtendWith(SpringExtension::class)
@SpringBootTest
class ConsoleServiceTest {

	private val consoleRepository: ConsoleRepository = Mockito.mock(ConsoleRepository::class.java)
	private val consoleService: ConsoleService = ConsoleService(consoleRepository)
	private val consoles: List<Console> = listOf(
		Console("PS5"),
		Console("PS4"),
		Console("Xbox One X")
	)

	@Test
	fun `get all games`() {
		Mockito.`when`(consoleRepository.findAll()).thenReturn(consoles)
		val consoles: List<Console> = consoleService.findAll()
		assert(consoles.isNotEmpty())
		assert(consoles.size == 3)
	}
}
