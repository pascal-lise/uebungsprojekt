import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import Game from '../model/Game';

interface GameCardProps {
  game: Game
}

export default function GameCard({game}: GameCardProps) {
  return (
    <Card className='game-card'>
        <CardMedia component='img' height='135' alt='game pic' image={game.picturePath}/>
        <CardContent>
            <Typography variant='h6'>{game.name}</Typography>
            <Typography>Release: {game.releaseDateView}</Typography>
            <Typography>Developer: {game.developer}</Typography>
        </CardContent>
        <CardActions>
        </CardActions>
    </Card>
  );
}
