import { Grid, SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';
import GameCard from 'components/GameCard';
import Game from 'model/Game';
import Console from 'model/Console';
import './GameList.sass';
import compareGames from 'util/SortGames';
import ConsoleFilter from 'components/ConsoleFilter';
import GameController from 'middleware/controller/GameController';
import ConsoleController from 'middleware/controller/ConsoleController';

export default function GameList() {
  const [consoles, setConsoles] = useState<Console[]>([])
  const [selectedConsoles, setSelectedConsoles] = useState<string[]>([])
  const [games, setGames] = useState<Game[]>([])

  function handleConsoleFilterChange (event: SelectChangeEvent<typeof selectedConsoles>) {
    setSelectedConsoles(event.target.value as string[])
  }

  useEffect(() => { 
    ConsoleController.getConsoles().then(setConsoles)    
    GameController.getGames().then(setGames)
  }, [])

  return (
    <div className='game-list'>
      <div className='game-list-settings'>
        <ConsoleFilter consoles={consoles} selectedConsoles={selectedConsoles} handleChange={handleConsoleFilterChange}/>
      </div>
      <div className='game-list-grid'>
        <Grid container spacing={5}>
          {
            games
            .sort((a: Game, b: Game) => compareGames(a, b))
            .filter((game: Game) => game.consoles.some((c: Console) => selectedConsoles.includes(c.name) || selectedConsoles.length === 0))
            .map((game: Game, idx: number) => {
              return (                
                <Grid item key={idx} xs={4}>
                  <GameCard game={game}/>
                </Grid>
              )
            })
          }
        </Grid>
      </div>
    </div>
  );
}
