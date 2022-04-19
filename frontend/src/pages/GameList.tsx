import { Grid } from '@mui/material';
import React from 'react';
import GameCard from '../components/GameCard';
import Game from '../model/Game';
import Games from '../model/Games';
import './GameList.sass';
import '../middleware/service/GameService'
import compareGames from '../util/SortGames';
import GameController from '../middleware/controller/GameController';

export class GameList extends React.Component<any, Games> {
  constructor(props: any) {
    super(props)
    this.state = {
      games: []
    }
  }

  async componentDidMount() {
    try {
      const games = await GameController.getGames()
      this.setState({ games: games })
    } catch(e) {
      this.setState({})
    }
  }

  render() {
    return (
      <div className='game-list'>
        <Grid container spacing={5}>
          {
            this.state.games
            .sort((a: Game, b: Game) => compareGames(a, b))                          
            .map((game: Game, idx: number) => {
              return (                
                <Grid item key={idx} xs={4}>
                  <GameCard name={game.name} developer={game.developer} releaseDate={game.releaseDate} releaseDateView={game.releaseDateView} ratings={game.ratings} picturePath={game.picturePath}/>
                </Grid>
              )
            }) 
          }
        </Grid>
      </div>
    );
  }
}

export default GameList