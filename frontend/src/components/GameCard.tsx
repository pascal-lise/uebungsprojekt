import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import Game from '../model/Game';
import './GameCard.sass'

export default class GameCard extends React.Component<Game, any> {
  constructor(props: Game) {
    super(props)
    this.state = {
      picturePath: this.props.picturePath
    }
  }

  render() {
    return (
      <Card className='game-card'>
          <CardMedia component='img' height='135' alt='game pic' image={this.state.picturePath}/>
          <CardContent>
              <Typography variant='h6'>{this.props.name}</Typography>
              <Typography>Release: {this.props.releaseDateView}</Typography>
              <Typography>Developer: {this.props.developer}</Typography>
          </CardContent>
          <CardActions>
          </CardActions>
      </Card>
    );
  }
}
