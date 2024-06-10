const localStorageKey = (gameMode: GameMode) => `games-${gameMode}`

const saveGameStats = (game: Game) => {
    window.localStorage.setItem(localStorageKey(game.mode), JSON.stringify([
        ...loadGameStats(game.mode),
        ...[game],
    ]))
}
const loadGameStats = (gameMode: GameMode) => JSON.parse(
    window.localStorage.getItem(localStorageKey(gameMode)) || '[]'
)

export {
    loadGameStats,
    saveGameStats,
}