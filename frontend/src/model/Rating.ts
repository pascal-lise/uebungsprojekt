export default interface Rating {
    gameId: string,
    graphics: number | null,
    sound: number | null,
    addiction: number | null,
    action: number | null,
    comment: string | undefined,
    ratedBy: string | undefined
}