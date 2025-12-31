export type Difficulty = 'base' | 'intermedia' | 'avanzata'

export interface Resource {
    title: string
    url: string
    description: string
}

export interface MiniQuiz {
    question: string
    options: string[]
    correctIndex: number
    explanation: string
}

export interface MicroExercise {
    id: string
    title: string
    instruction: string
    task: string
}

export interface Lesson {
    id: string
    title: string
    minutes: number
    difficulty: Difficulty
    learningGoals: string[]
    contentMarkdown: string
    callouts: {
        type: 'tip' | 'warning' | 'legal' | 'case-study'
        content: string
    }[]
    microExercise: MicroExercise
    miniQuiz: MiniQuiz[]
    reflectionPrompt: string
    resources: Resource[]
}

export interface Game {
    id: string
    title: string
    description: string
    type: 'scenario' | 'chatbot' | 'analyzer' | 'detector' | 'recognizer' | 'quiz' | 'classifier' | 'inspector' | 'malware' | 'mood' | 'phishing'
}

export interface Module {
    id: string
    number: number
    title: string
    subtitle: string
    description: string
    difficulty: Difficulty
    durationHours: number
    themeColor: string // Tailwind color token
    icon: string // Lucide icon name
    lessons: Lesson[]
    games: Game[]
    tips: string[]
    resources: Resource[]
}
