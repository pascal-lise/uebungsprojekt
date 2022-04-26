import { getGameRateAvg } from './GameRateAvg'
import Game from 'model/Game';

export default function compareGames(a: Game, b: Game): number {
    const avgA: number = getGameRateAvg(a)
    const avgB: number = getGameRateAvg(b)
    const timeA: number = new Date(a.releaseDate).getTime()
    const timeB: number = new Date(b.releaseDate).getTime()
    if(avgA < avgB) return 1
    if(avgA > avgB) return -1
    if(timeA < timeB) return 1
    if(timeA > timeB) return -1
    return 1
}