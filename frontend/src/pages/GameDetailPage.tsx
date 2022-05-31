import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import { getGameById, postRating } from "api/GamesApi";
import GameDetail from "model/GameDetail";
import Rating from "model/Rating";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './GameDetailPage.sass';
import RatingComponent from '@mui/material/Rating';
import Divider from '@mui/material/Divider';


export default function GameDetailPage() {
  const location = useLocation()
  const state: any = location.state

  const [game, setGame] = useState<GameDetail>()
  const [graphics, setGraphics] = useState<number | null>(1)
  const [sound, setSound] = useState<number | null>(1)
  const [addiction, setAddiction] = useState<number | null>(1)
  const [action, setAction] = useState<number | null>(1)
  const [comment, setComment] = useState<string | undefined>('')
  const [loginDisabled, setLoginDisabled] = useState<boolean>(false)

  function handleRating(event: any) {
    if(game) {
      const rating: Rating = { gameId: game.id, graphics, sound, addiction, action, comment }
      postRating(rating)
      game.ratings.push(rating)
      setLoginDisabled(true)
    }
  }

  useEffect(() => {    
    getGameById(state).then(setGame)
  }, [state, game?.ratings])

  return (
    <div className='game-detail'>
      <img className="game-detail-img" src={game?.picturePath} alt="game representation"/>
      <p className="game-detail-name">{game?.name}</p>
      <div className="game-detail-text">
        <div className="game-detail-text-description">
          <h3>Description</h3>
          <dd>{game?.description}</dd>
        </div>
        <Divider orientation="vertical" flexItem/>
        <div className="game-detail-text-data">
          <h3>Details</h3>
          <dt>Release date: {game?.releaseDateView}</dt>
          <dt>Developer: {game?.developer}</dt>
          <a href={game?.trailer}><p>Trailer</p></a>
        </div>
        <Divider orientation="vertical" flexItem/>
        <div className="game-detail-text-ratings">
            <div className="game-detail-text-ratings-header">
              <h3>Ratings</h3>
              <Button disabled={loginDisabled} variant="contained" className="game-detail-text-ratings-add" onClick={handleRating}>Submit Rating</Button>
            </div>
            <div className="game-detail-text-ratings-values">
              <div>
                <dt>Graphics:</dt>
                <dt>Sound:</dt>
                <dt>Addiction:</dt>
                <dt>Action:</dt>
              </div>
              <div>
                <RatingComponent value={game?.avgGraphicsRating ?? 0.0} precision={.5}  readOnly />
                <RatingComponent value={game?.avgSoundRating ?? 0.0} precision={.5} readOnly />
                <RatingComponent value={game?.avgAddictionRating ?? 0.0} precision={.5} readOnly />
                <RatingComponent value={game?.avgActionRating ?? 0.0} precision={.5} readOnly />
              </div>
              <div>
                <RatingComponent value={graphics} onChange={(e, val) => setGraphics(val)}/>
                <RatingComponent value={sound} onChange={(e, val) => setSound(val)}/>
                <RatingComponent value={addiction} onChange={(e, val) => setAddiction(val)}/>
                <RatingComponent value={action} onChange={(e, val) => setAction(val)}/>
              </div>
              <TextField label="Comment (optional)" multiline rows={3} onChange={(e) => setComment(e.target.value)}/>
            </div>
            <Grid container spacing={2}>
            {
              game?.ratings.map((rating: Rating, idx: number) => {
                return (
                  <Grid item key={idx} xs={3} className="game-detail-text-ratings-card">
                    <Card>
                      <CardContent>
                        <Typography fontSize={14}>Graphics:</Typography><RatingComponent value={rating.graphics} readOnly />
                        <Typography fontSize={14}>Sound:</Typography><RatingComponent value={rating.sound} readOnly />
                        <Typography fontSize={14}>Addiction:</Typography><RatingComponent value={rating.addiction} readOnly />
                        <Typography fontSize={14}>Action:</Typography><RatingComponent value={rating.action} readOnly />
                        <Typography fontSize={14}>Comment: {rating.comment}</Typography>
                      </CardContent>
                    </Card>
                  </Grid> 
                ) 
              })
            }
            </Grid>
          </div>
        </div>
    </div>
  );
}