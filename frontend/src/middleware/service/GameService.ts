export default {
    getGameById: async (id: string) => await fetch(`${process.env.REACT_APP_API_URL}/game/${id}`).then(res => res.json()),
    getGames: async () => await fetch(`${process.env.REACT_APP_API_URL}/games`).then(res => res.json())
}