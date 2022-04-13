import Rating from "./Rating";

export default interface Game {
    name: string;
    dev: string,
    releaseDate: Date,
    ratings: Array<Rating>,
    picName: string
}