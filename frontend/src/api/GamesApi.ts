import Game from "model/Game"
import GameDetail from "model/GameDetail"
import Console from 'model/Console'
import Rating from "model/Rating"
import Axios from './Axios'

export async function getGameById (id: string): Promise<GameDetail> {
    try {
        return (await Axios.get(`/game/${id}`)).data
    } catch (e) { 
        console.error(e);
        return { id: '', name: '', developer: '', releaseDate: new Date(), releaseDateView: '', 
        ratings: [], avgGraphicsRating: 0.0, avgSoundRating: 0.0, avgAddictionRating: 0.0, avgActionRating: 0.0, 
        picturePath: '', consoles: [], description: '', trailer: '' }
    }
}

export async function getGames (filterByConsoles: string[] = [], searchBy: string = ""): Promise<Game[]> {
    try {
        return (await Axios.get(`/games?filterByConsoles=${filterByConsoles.join(',')}&searchBy=${searchBy}`)).data
    } catch (e) { 
        console.error(e);
        return []
    }
}

export async function getConsoles (): Promise<Console[]> {
    try {
        return (await Axios.get('/consoles')).data
    } catch (e) { 
        console.error(e);
        return []
    }
} 

export async function postRating (rating: Rating) {    
    try {
        return (await Axios.post('/ratings/add', rating))
    } catch (e) {
        console.error(e);
        return []
    }
} 
