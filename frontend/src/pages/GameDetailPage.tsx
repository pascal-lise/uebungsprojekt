import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import { getGameById, postRating } from "api/GamesApi";
import GameDetail from "model/GameDetail";
import Rating from "model/Rating";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './GameDetailPage.sass';
import RatingComponent from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import { useAuth } from "react-oidc-context";


export default function GameDetailPage() {
  const location = useLocation()
  const state: any = location.state

  const [game, setGame] = useState<GameDetail>()
  const [graphics, setGraphics] = useState<number>(1)
  const [sound, setSound] = useState<number>(1)
  const [addiction, setAddiction] = useState<number>(1)
  const [action, setAction] = useState<number>(1)
  const [comment, setComment] = useState<string | null>('')
  const [loginDisabled, setLoginDisabled] = useState<boolean>(false)
  const ratingsCardFontSize: number = 14
  const auth = useAuth()

  function handleRating(event: any) {
    if(game) {
      const user = auth.user!.profile.preferred_username
      const rating: Rating = { gameId: game.id, graphics, sound, addiction, action, comment, ratedBy: user ? user : 'Unknown user' }
      postRating(rating)
      game.ratings.push(rating)
      setLoginDisabled(true)
    }
  }

  useEffect(() => {    
    getGameById(state).then(setGame)
  }, [state])

  useEffect(() => {    
    if(game && auth.user) {
      setLoginDisabled(game?.ratings.some((r) => r.ratedBy === auth.user?.profile.preferred_username))
    }
  }, [game, auth.user])

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
              <Button disabled={loginDisabled || !auth.isAuthenticated} variant="contained" className="game-detail-text-ratings-add" onClick={handleRating}>Submit Rating</Button>
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
                <RatingComponent value={graphics} onChange={(e, val) => setGraphics(val ? val : 0)}/>
                <RatingComponent value={sound} onChange={(e, val) => setSound(val ? val : 0)}/>
                <RatingComponent value={addiction} onChange={(e, val) => setAddiction(val ? val : 0)}/>
                <RatingComponent value={action} onChange={(e, val) => setAction(val ? val : 0)}/>
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
                        <Typography>{rating.ratedBy}</Typography>
                        <Typography fontSize={ratingsCardFontSize}>Graphics:</Typography><RatingComponent value={rating.graphics} readOnly />
                        <Typography fontSize={ratingsCardFontSize}>Sound:</Typography><RatingComponent value={rating.sound} readOnly />
                        <Typography fontSize={ratingsCardFontSize}>Addiction:</Typography><RatingComponent value={rating.addiction} readOnly />
                        <Typography fontSize={ratingsCardFontSize}>Action:</Typography><RatingComponent value={rating.action} readOnly />
                        <Typography fontSize={ratingsCardFontSize}>Comment: {rating.comment}</Typography>
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