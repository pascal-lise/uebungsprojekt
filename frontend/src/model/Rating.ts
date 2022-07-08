export default interface Rating {
    gameId: string,
    graphics: number,
    sound: number,
    addiction: number,
    action: number,
    comment: string | null,
    ratedBy: string
}