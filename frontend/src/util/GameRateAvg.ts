import Game from 'model/Game';

export function getGameRateAvg(game: Game): number {
    const sum: number = game.ratings.reduce((sum: number, current: any) => sum + current.value, 0)       
    const ratings: number =  game.ratings.length
    return ratings !== 0 ? sum / game.ratings.length : 0    
}