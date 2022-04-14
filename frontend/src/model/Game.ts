import Rating from "./Rating";

export default interface Game {
    name: string;
    developer: string,
    releaseDate: string,
    ratings: Array<Rating>,
    picturePath: string
}