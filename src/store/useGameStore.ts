import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface ModuleProgress {
    completed: boolean
    accuracy: number
    completions: number
    xp: number
    lastPlayed: string | null
    lessonsViewed: string[]
    gamesCompleted: string[]
}

interface GameState {
    userId: string
    createdAt: string
    totalXP: number
    tier: 'ingenuo' | 'consapevole' | 'informato' | 'esperto' | 'guardian'
    modules: Record<string, ModuleProgress>
    achievements: string[]
    theme: 'dark' | 'light'

    // Actions
    addXP: (amount: number) => void
    completeModule: (moduleId: string, accuracy: number, xp: number) => void
    completeLesson: (moduleId: string, lessonId: string) => void
    completeGame: (moduleId: string, gameId: string, xp: number, accuracy: number) => void
    unlockAchievement: (badgeId: string) => void
    setTheme: (theme: 'dark' | 'light') => void
    resetProgress: () => void
    exportProgress: () => string
    importProgress: (json: string) => void
}

const initialState = {
    userId: typeof window !== 'undefined' ? localStorage.getItem('userId') || crypto.randomUUID() : crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    totalXP: 0,
    tier: 'ingenuo' as const,
    modules: {},
    achievements: [],
    theme: 'dark' as const,
}

export const useGameStore = create<GameState>()(
    persist(
        (set, get) => ({
            ...initialState,

            addXP: (amount) =>
                set((state) => {
                    const newXP = state.totalXP + amount
                    const tier = calculateTier(newXP)
                    return { totalXP: newXP, tier }
                }),

            completeModule: (moduleId, accuracy, xp) =>
                set((state) => {
                    const currentMod = state.modules[moduleId] || {
                        completed: false,
                        accuracy: 0,
                        completions: 0,
                        xp: 0,
                        lastPlayed: null,
                        lessonsViewed: [],
                        gamesCompleted: [],
                    }
                    const newXP = state.totalXP + xp
                    return {
                        modules: {
                            ...state.modules,
                            [moduleId]: {
                                ...currentMod,
                                completed: true,
                                accuracy: Math.max(currentMod.accuracy, accuracy),
                                completions: currentMod.completions + 1,
                                xp: currentMod.xp + xp,
                                lastPlayed: new Date().toISOString(),
                            },
                        },
                        totalXP: newXP,
                        tier: calculateTier(newXP)
                    }
                }),

            completeLesson: (moduleId, lessonId) =>
                set((state) => {
                    const currentMod = state.modules[moduleId] || {
                        completed: false,
                        accuracy: 0,
                        completions: 0,
                        xp: 0,
                        lastPlayed: null,
                        lessonsViewed: [],
                        gamesCompleted: [],
                    }
                    if (currentMod.lessonsViewed.includes(lessonId)) return state

                    return {
                        modules: {
                            ...state.modules,
                            [moduleId]: {
                                ...currentMod,
                                lessonsViewed: [...currentMod.lessonsViewed, lessonId],
                            },
                        },
                        totalXP: state.totalXP + 10,
                        tier: calculateTier(state.totalXP + 10)
                    }
                }),

            completeGame: (moduleId, gameId, xp, accuracy) =>
                set((state) => {
                    const currentMod = state.modules[moduleId] || {
                        completed: false,
                        accuracy: 0,
                        completions: 0,
                        xp: 0,
                        lastPlayed: null,
                        lessonsViewed: [],
                        gamesCompleted: [],
                    }
                    const newXP = state.totalXP + xp
                    return {
                        modules: {
                            ...state.modules,
                            [moduleId]: {
                                ...currentMod,
                                gamesCompleted: [...new Set([...currentMod.gamesCompleted, gameId])],
                                xp: currentMod.xp + xp,
                                accuracy: Math.max(currentMod.accuracy, accuracy),
                            },
                        },
                        totalXP: newXP,
                        tier: calculateTier(newXP)
                    }
                }),

            unlockAchievement: (badgeId) =>
                set((state) => {
                    if (state.achievements.includes(badgeId)) return state
                    const newXP = state.totalXP + 200
                    return {
                        achievements: [...state.achievements, badgeId],
                        totalXP: newXP,
                        tier: calculateTier(newXP)
                    }
                }),

            setTheme: (theme) => set({ theme }),

            resetProgress: () =>
                set({
                    ...initialState,
                    userId: crypto.randomUUID(),
                }),

            exportProgress: () =>
                JSON.stringify(get()),

            importProgress: (json: string) => {
                try {
                    const imported = JSON.parse(json)
                    set(imported)
                } catch {
                    console.error('Invalid progress file')
                }
            },
        }),
        {
            name: 'bussola-progress',
            storage: createJSONStorage(() => localStorage),
        }
    )
)

function calculateTier(xp: number): GameState['tier'] {
    if (xp < 500) return 'ingenuo'
    if (xp < 1500) return 'consapevole'
    if (xp < 3500) return 'informato'
    if (xp < 7000) return 'esperto'
    return 'guardian'
}
