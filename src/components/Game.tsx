import { useEffect, useState } from "react"
import NumPad from "./NumPad"
import './Game.scss'

type GameMode = undefined | '+' | 'x'

const Game = () => {
    const [questions, setQuestions] = useState([] as Question[])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1)
    const [currentAnswer, setCurrentAnswer] = useState(undefined as number | undefined)
    const [currentGameMode, setCurrentGameMode] = useState(undefined as GameMode)
    const [startedAt, setStartedAt] = useState(undefined as number | undefined)
    const [endedAt, setEndedAt] = useState(undefined as number | undefined)
    const [salt, setSalt] = useState(0)
    const setup = (gameMode?: GameMode) => {
        if(gameMode) {
            setCurrentGameMode(gameMode)
        }
        setSalt(salt + 1 + getRandomInt(10))
        
    }

    useEffect(() => {
        if(currentGameMode === 'x') {
            setQuestions([...Array(6)].map(() => createRandomMultiplicationQuestion()))   
            setStartedAt(Date.now())
        }
        else if(currentGameMode === '+') {
            setQuestions([...Array(6)].map(() => createRandomAdditionQuestion()))   
            setStartedAt(Date.now())
        }
    }, [salt])


    useEffect(() => {
        setCurrentQuestionIndex(questions.findIndex((q: Question) => q.answer === undefined))
    }, [questions])

    useEffect(() => {
        if(currentQuestionIndex == -1) {
            setEndedAt(Date.now())
        }
    }, [currentQuestionIndex])
    
    const createRandomMultiplicationQuestion = (): Question => {
        const a = getRandomInt(4) + 2
        const b = getRandomInt(10)
        return {
            a,
            b,
            label: `${a} x ${b} = `,
            correct_answer: a*b,
            answer: undefined
        }
    }

    const createRandomAdditionQuestion = (): Question => {
        const a = getRandomInt(5) + 1
        const b = getRandomInt(10)
        return {
            a,
            b,
            label: `${a} + ${b} = `,
            correct_answer: a+b,
            answer: undefined
        }
    }

    const getRandomInt = (max: number) => {
        return Math.floor(Math.random() * max)
    }

    const answer = (value: number) => {
        setQuestions([
            ...questions.slice(0, currentQuestionIndex),
            ...[{
                ...questions[currentQuestionIndex],
                ...{
                    answer: value
                }
            }],
            ...questions.slice(currentQuestionIndex + 1)
            ]
        )
        setCurrentAnswer(undefined)
    }    

    const questionStatus = ({answer, correct_answer}: Question, index: number) => {
        if(index == currentQuestionIndex) {
            return 'current'   
        }
        if(answer !== undefined && answer === correct_answer) {
            return 'correct'
        }
        if(answer !== undefined && answer !== correct_answer) {
            return 'incorrect'
        }
        return 'unanswered'
    }

    const getSvg = (question: Question) => {
        return `svg/${(question.a * 10 + question.b + 1 + salt) % 150 + 1}.svg`
    }

    const answeredQuestions = questions.filter((q: Question) => q.answer !== undefined)
    return <div id='game'>
        { currentQuestionIndex === -1 && questions.length === 0 && <div className='menu'>
            <div className='button' onClick={() => setup('+')}>TABLES D'ADDITION</div>
            <div className='button' onClick={() => setup('x')}>TABLES DE MULTIPLICATIONS</div>
        </div>
        }
        { currentQuestionIndex === -1 && questions.length > 0 && <div className='menu'>
            <div className="top">
                <div className='results'>
                    { questions.map((q, i) => <div
                        className={`result ${questionStatus(q, i)}`}>
                            <img src={getSvg(q)}/>
                        </div>) }
                </div>
            </div>
            <div className='game-result'>{ questions.filter(q => questionStatus(q,0) === 'correct').length} / { questions.length } | {endedAt && startedAt ? Math.round((endedAt - startedAt) / 100) / 10 : '?'}''</div>
            <div className='button' onClick={() => setup()}>Recommencer une partie</div>
        </div>
        }
        { currentQuestionIndex > -1 && <div className='game-mode'>
            <div className="top">
                <div className='results'>
                    { questions.map((q, i) => <div
                        className={`result ${questionStatus(q, i)}`}>
                            <img src={getSvg(q)}/>
                        </div>) }
                </div>
                <div className='image'>
                    <img src={getSvg(questions[currentQuestionIndex])}/>
                </div>
                <div className="question">
                    {questions[currentQuestionIndex].label}
                    { currentAnswer != undefined && <span className='answer'>{ currentAnswer }</span>}
                </div>
            </div>
            <NumPad onSubmit={answer} onValueChanged={setCurrentAnswer}/>
        </div>}
    </div>
}
export default Game;