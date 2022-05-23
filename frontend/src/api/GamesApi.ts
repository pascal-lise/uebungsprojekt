import Game from "model/Game"
import GameDetail from "model/GameDetail"
import Console from 'model/Console';

export async function getGameById (id: string): Promise<GameDetail> {
    try {
        return (await fetch(`${process.env.REACT_APP_API_URL}/game/${id}`)).json()
    } catch (e) { 
        console.error(e);
        return { id: '', name: '', developer: '', releaseDate: new Date(), releaseDateView: '', 
        ratings: [], averageRating: 0.0, picturePath: '', consoles: [], description: '', trailer: '' }
    }
}
export async function getGames (filterByConsoles: string[] = [], searchBy: string = ""): Promise<Game[]> {
    try {
        return (await fetch(`${process.env.REACT_APP_API_URL}/games?filterByConsoles=${filterByConsoles.join(',')}&searchBy=${searchBy}`)).json()
    } catch (e) { 
        console.error(e);
        return []
    }
}
export async function getConsoles (): Promise<Console[]> {
    try {
        return (await fetch(`${process.env.REACT_APP_API_URL}/consoles`)).json()
    } catch (e) {
        console.error(e);
        return []
    }
} 
