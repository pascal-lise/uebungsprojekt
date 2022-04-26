import Game from 'model/Game';

export default {
    getGameById: async (id: string): Promise<Game> => {
        try {
            return (await fetch(`${process.env.REACT_APP_API_URL}/game/${id}`)).json()
        } catch (e) { 
            return await { name: '', developer: '', releaseDate: new Date(), releaseDateView: '', ratings: [], picturePath: '', consoles: [] }
        }
    },
    getGames: async (): Promise<Game[]> => {
        try {
            return (await fetch(`${process.env.REACT_APP_API_URL}/games`)).json()
        } catch (e) { 
            return await []
        }
    }, 
}