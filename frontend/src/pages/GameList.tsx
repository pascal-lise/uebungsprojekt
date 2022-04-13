import { Grid } from '@mui/material';
import React from 'react';
import GameCard from '../components/GameCard';
import Game from '../model/Game';
import Games from '../model/Games';
import './GameList.sass';
import '../middleware/GameService'
import compareGames from '../util/SortGames';
import { getGames } from '../middleware/GameService';

export class GameList extends React.Component<any, Games> {
  constructor(props: any) {
    super(props)
    this.state = {
      games: []
    }
  }

  componentDidMount() {
    getGames().then(
      result => this.setState({ games: result }),
      e => this.setState({})
    )
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
                  <GameCard name={game.name} dev={game.dev} releaseDate={game.releaseDate} ratings={game.ratings} picName={game.picName}/>
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