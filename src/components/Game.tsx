import { useEffect, useState } from "react"
import NumPad from "./NumPad"
import './Game.scss'

const Game = () => {
    const [questions, setQuestions] = useState([] as Question[])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1)
    const [currentAnswer, setCurrentAnswer] = useState(undefined as number | undefined)
    const [salt, setSalt] = useState(0)
    const setup = () => {
        setSalt(getRandomInt(10))
        setQuestions([...Array(5)].map(() => createRandomQuestion()))   
    }

    useEffect(() => {
        setCurrentQuestionIndex(questions.findIndex((q: Question) => q.answer === undefined))
    }, [questions])
    
    const createRandomQuestion = (): Question => {
        const a = getRandomInt(6)
        const b = getRandomInt(10)
        return {
            a,
            b,
            label: `${a} x ${b} = `,
            correct_answer: a*b,
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
        return `svg/${question.a * 10 + question.b + 1 + salt}.svg`
    }

    const answeredQuestions = questions.filter((q: Question) => q.answer !== undefined)
    return <div id='game'>
        { currentQuestionIndex === -1 && questions.length === 0 && <div className='menu'>
            <div className='button' onClick={setup}>Commencer une partie</div>
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
            <div className='game-result'>{ questions.filter(q => questionStatus(q,0) === 'correct').length} / { questions.length }</div>
            <div className='button' onClick={setup}>Recommencer une partie</div>
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