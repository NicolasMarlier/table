import _ from "lodash"

const localStorageKey = (gameMode: GameMode) => `games-${gameMode}`



const setLocalStorage = (key: string, value: any) => {
    window.localStorage.setItem(key, JSON.stringify(value))
}

const getLocalStorage = (key: string) => {
    const value = window.localStorage.getItem(key)
    return value ? JSON.parse(value) : undefined
}

const saveGameStats = (game: Game) => setLocalStorage(
    localStorageKey(game.mode),
    [
        ...loadGameStats(game.mode),
        ...[game],
    ]
)

const loadGameStats = (gameMode: GameMode) => getLocalStorage(
    localStorageKey(gameMode)
) || []


const computeHighScore = (games: Game[]) => _.min(
    _.map(
        _.filter(
            games,
            (game: Game) => _.every(
                game.questions,
                (q: { answer: any; correct_answer: any }) => q.answer == q.correct_answer
            )
        ),
        'duration'
    )
)

const getHighscore = (gameMode: GameMode) => computeHighScore(loadGameStats(gameMode))


export {
    getHighscore,
    saveGameStats,
    getLocalStorage,
    setLocalStorage,
}