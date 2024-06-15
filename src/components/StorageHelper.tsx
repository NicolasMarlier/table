import _ from "lodash"

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
}