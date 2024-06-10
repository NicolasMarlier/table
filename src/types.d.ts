interface Question {
    a: number,
    b: number,
    label: string,
    correct_answer: number,
    answer: number | undefined
}

type GameMode = 'addition' | 'multiplication'

type Game = {
    mode: GameMode,
    questions: questions,
    duration: number
}