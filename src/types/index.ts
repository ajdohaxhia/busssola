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
    audienceTag?: string
    moduleTag?: string
    sosTag?: string
    learningGoals: string[]
    contentMarkdown: string
    callouts?: {
        type: 'tip' | 'warning' | 'legal' | 'case-study'
        content: string
    }[]
    microExercise?: MicroExercise
    miniQuiz?: MiniQuiz[]
    reflectionPrompt?: string
    resources?: Resource[]
}

export interface ModuleMetadata {
    id: string
    number: number
    title: string
    subtitle?: string
    description: string
    difficulty: Difficulty
    themeColor?: string
    icon?: string
    category?: string
    coverImage?: string
    progress?: number
    lessonCount: number
    featuredType?: 'start' | 'curated' | 'situational' | 'none'
}

export interface Module extends Omit<ModuleMetadata, 'lessonCount' | 'number' | 'difficulty'> {
    number?: number
    difficulty?: Difficulty
    durationHours?: number
    lessons: Lesson[]
    tips?: string[]
    resources?: Resource[]
}

export interface LearningPath {
    id: string
    title: string
    description: string
    audience: string
    moduleIds: string[]
    estimatedDuration: string
    cta: string
    relatedPathIds: string[]
    type: 'onboarding' | 'security' | 'relational' | 'emergency' | 'audience'
    level: Difficulty
}
