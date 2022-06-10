package lise.uebungsprojekt.service

import lise.uebungsprojekt.model.Console
import lise.uebungsprojekt.model.Game
import lise.uebungsprojekt.model.GameDetail
import lise.uebungsprojekt.repository.GameRepository
import org.bson.types.ObjectId
import org.junit.jupiter.api.Assertions.assertNotNull
import org.junit.jupiter.api.Assertions.assertNull
import org.junit.jupiter.api.Nested
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.TestInstance
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.Mockito
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit.jupiter.SpringExtension
import java.util.*

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@ExtendWith(SpringExtension::class)
@SpringBootTest
class GameServiceTest {

	private val gameRepository: GameRepository = Mockito.mock(GameRepository::class.java)
	private val gameService: GameService = GameService(gameRepository)
	private val games: List<Game> = listOf(
		Game(ObjectId(), "horizon zero dawn", Date(), "", "testDev", listOf(),
			0.0, 0.0, 0.0, 0.0, "", listOf()),
		Game(ObjectId(), "horizon forbidden west", Date(), "", "testDev", listOf(),
			0.0, 0.0, 0.0, 0.0, "", listOf()),
		Game(ObjectId(), "fifa 22", Date(), "", "testDev", listOf(),
			0.0, 0.0, 0.0, 0.0, "", listOf(Console("PS5")))
	)

	@Nested
	inner class GetAllGames {

		@Test
		fun `get all games`() {
			Mockito.`when`(gameRepository.findAll(listOf(), "")).thenReturn(games)
			val games: List<Game> = gameService.findAll(listOf(), "")
			assert(games.isNotEmpty())
			assert(games.size == 3)
		}

		@Test
		fun `get games with existing name`() {
			val name = "horizon"
			Mockito.`when`(gameRepository.findAll(listOf(), name)).thenReturn(listOf(games[0], games[1]))
			val games = gameService.findAll(listOf(), name)
			assertNotNull(games)
			assert(games.isNotEmpty())
			assert(games.size == 2)
			assert(games[0].name.contains(name))
			assert(games[1].name.contains(name))
		}

		@Test
		fun `get games with non existing name`() {
			val name = "loremipsum"
			Mockito.`when`(gameRepository.findAll(listOf(), name)).thenReturn(listOf())
			val games = gameService.findAll(listOf(), name)
			assertNotNull(games)
			assert(games.isEmpty())
		}

		@Test
		fun `get games with console`() {
			val console = "PS5"
			Mockito.`when`(gameRepository.findAll(listOf(console), "")).thenReturn(listOf(games[2]))
			val games = gameService.findAll(listOf(console), "")
			assert(games.isNotEmpty())
			assert(games.size == 1)
		}
	}

	@Nested
	inner class GetOneGame {

		@Test
		fun `get existing game`() {
			val id = ObjectId()
			Mockito.`when`(gameRepository.getGameById(id)).thenReturn(
				GameDetail(ObjectId(), "horizon zero dawn", Date(), "", "testDev", listOf(),
					0.0, 0.0, 0.0, 0.0, "",
					listOf(), "", "")
			)
			val game: GameDetail? = gameService.findById(id)
			assertNotNull(game)
		}

		@Test
		fun `get non existing game`() {
			val id = ObjectId()
			Mockito.`when`(gameRepository.getGameById(id)).thenReturn(null)
			val game: GameDetail? = gameService.findById(id)
			assertNull(game)
		}
	}
}
