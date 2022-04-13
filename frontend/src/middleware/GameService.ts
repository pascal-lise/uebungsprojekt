export const getGameById = (id: string) => fetch(`http://localhost:8080/game/${id}`).then(res => res.json())
export const getGames = () => fetch('http://localhost:8080/games').then(res => res.json())