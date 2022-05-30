import Rating from './Rating';
import Console from './Console';

export default interface Game {
    id: string,
    name: string,
    developer: string,
    releaseDate: Date,
    releaseDateView: string,
    ratings: Rating[],
    picturePath: string,
    consoles: Console[],
}