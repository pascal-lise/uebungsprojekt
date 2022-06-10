import Game from './Game';

export default interface GameDetail extends Game {
    avgGraphicsRating: number,
    avgSoundRating: number,
    avgAddictionRating: number,
    avgActionRating: number,
    description: string,
    trailer: string,
}