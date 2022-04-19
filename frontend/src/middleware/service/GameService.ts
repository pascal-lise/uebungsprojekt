import Game from "../../model/Game";

export default {
    getGameById: async (id: string): Promise<Game> => await fetch(`${process.env.REACT_APP_API_URL}/game/${id}`).then(res => res.json()),
    getGames: async (): Promise<Array<Game>> => await fetch(`${process.env.REACT_APP_API_URL}/games`).then(res => res.json())
}