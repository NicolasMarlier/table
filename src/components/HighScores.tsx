import { useEffect, useState } from "react"
import { loadGameStats } from "./StorageHelper"
import _ from 'lodash'

import './HighScores.scss'
import { displayDuration } from "./FormatHelper"
import { Link } from "react-router-dom"

const HighScores = () => {
    const [additionHighScore, setAdditionHighScore] = useState(undefined as undefined | number)
    const [multiplicationHighScore, setMultiplicationHighScore] = useState(undefined as undefined | number)

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
    useEffect(() => {
        setAdditionHighScore(computeHighScore(loadGameStats('addition')))
        setMultiplicationHighScore(computeHighScore(loadGameStats('multiplication')))
    }, [])
    return <div className="highscores">
        <h1>Meilleurs Temps</h1>
        <div className="highscore-line">
            Addition: { additionHighScore ? displayDuration(additionHighScore) : "Pas encore de temps" }
        </div>
        <div className="highscore-line">
            Multiplication: { multiplicationHighScore ? displayDuration(multiplicationHighScore) : "Pas encore de temps" }
        </div>
        <Link className="button" to="/">Retour</Link>
    </div>
}

export default HighScores