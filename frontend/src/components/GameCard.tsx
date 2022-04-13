import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import Game from '../model/Game';
import './GameCard.sass'

export default class GameCard extends React.Component<Game, any> {
  constructor(props: Game) {
    super(props)
    this.state = {
      pic: `/images/${this.props.picName}.jpg`
    }
  }

  render() {
    return (
      <Card className='game-card'>
          <CardMedia component='img' height='135' alt='game pic' image={this.state.pic}/>
          <CardContent>
              <Typography variant='h6'>{this.props.name}</Typography>
              <Typography>Date: {new Date(this.props.releaseDate).toLocaleDateString()}</Typography>
              <Typography>Publisher: {this.props.dev}</Typography>
          </CardContent>
          <CardActions>
          </CardActions>
      </Card>
    );
  }
}
