import Game from './Game';

export default interface GameDetail extends Game {
    description: string,
    trailer: string
}