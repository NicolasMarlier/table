import { useEffect, useState } from "react"
import { getHighscore } from "./StorageHelper"
import _ from 'lodash'

import './HighScores.scss'
import { displayDuration } from "./FormatHelper"
import { Link } from "react-router-dom"

const HighScores = () => {
    const [additionHighScore, setAdditionHighScore] = useState(undefined as undefined | number)
    const [multiplicationHighScore, setMultiplicationHighScore] = useState(undefined as undefined | number)

    useEffect(() => {
        setAdditionHighScore(getHighscore('addition'))
        setMultiplicationHighScore(getHighscore('multiplication'))
    }, [])
    return <div className="highscores">
        <h1>Meilleurs Temps</h1>
        <div className="highscore-line">
            Additions: <span className="highlight">{ additionHighScore ? displayDuration(additionHighScore) : "Pas encore de temps" }</span>
        </div>
        <div className="highscore-line">
            Multiplications: <span className="highlight">{ multiplicationHighScore ? displayDuration(multiplicationHighScore) : "Pas encore de temps" }</span>
        </div>
        <Link className="button" to="/">Retour</Link>
    </div>
}

export default HighScores