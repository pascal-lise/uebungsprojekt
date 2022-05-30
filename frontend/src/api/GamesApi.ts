import Game from "model/Game"
import GameDetail from "model/GameDetail"
import Console from 'model/Console'
import Rating from "model/Rating"
import axios from 'axios'

export async function getGameById (id: string): Promise<GameDetail> {
    try {
        return (await axios.get(`${process.env.REACT_APP_API_URL}/game/${id}`)).data
    } catch (e) { 
        console.error(e);
        return { id: '', name: '', developer: '', releaseDate: new Date(), releaseDateView: '', 
        ratings: [], avgGraphicsRating: 0.0, avgSoundRating: 0.0, avgAddictionRating: 0.0, avgActionRating: 0.0, 
        picturePath: '', consoles: [], description: '', trailer: '' }
    }
}

export async function getGames (filterByConsoles: string[] = [], searchBy: string = ""): Promise<Game[]> {
    try {
        return (await axios.get(`${process.env.REACT_APP_API_URL}/games?filterByConsoles=${filterByConsoles.join(',')}&searchBy=${searchBy}`)).data
    } catch (e) { 
        console.error(e);
        return []
    }
}

export async function getConsoles (): Promise<Console[]> {
    try {
        return (await axios.get(`${process.env.REACT_APP_API_URL}/consoles`)).data
    } catch (e) { 
        console.error(e);
        return []
    }
} 

export async function postRating (rating: Rating) {    
    try {
        return (await axios.post(`${process.env.REACT_APP_API_URL}/ratings/add`, rating))
    } catch (e) {
        console.error(e);
        return []
    }
} 
