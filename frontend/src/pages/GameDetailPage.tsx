import { getGameById } from "api/GamesApi";
import GameDetail from "model/GameDetail";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './GameDetailPage.sass';

export default function GameDetailPage() {
  const location = useLocation()
  const state: any = location.state

  const [game, setGame] = useState<GameDetail>()

  useEffect(() => {    
    getGameById(state).then(setGame)
  }, [])

  return (
    <div className='game-detail'>
      <img className="game-detail-img" src={game?.picturePath}/>
      <p className="game-detail-name">{game?.name}</p>
      <div className="game-detail-text">
        <div className="game-detail-text-data">
          <p>Release date: {game?.releaseDateView}</p>
          <p>Developer: {game?.developer}</p>
          <p>Rating: {game?.averageRating}* ({game?.ratings.length} ratings)</p>
          <a href={game?.trailer}><p>Trailer</p></a>
        </div>
        <div className="game-detail-text-description">
          <p>{game?.description}</p>
        </div>
      </div>
    </div>
  );
}