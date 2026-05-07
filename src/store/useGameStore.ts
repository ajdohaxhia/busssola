import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface ModuleProgress {
    completed: boolean
    lastPlayed: string | null
    lessonsViewed: string[]
}

interface GameState {
    userId: string
    createdAt: string
    modules: Record<string, ModuleProgress>
    theme: 'dark' | 'light'

    // Actions
    ensureUserId: () => void
    completeModule: (moduleId: string) => void
    completeLesson: (moduleId: string, lessonId: string) => void
    setTheme: (theme: 'dark' | 'light') => void
    resetProgress: () => void
    exportProgress: () => string
    importProgress: (json: string) => void
}

const createUserId = () => {
    if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
        return crypto.randomUUID()
    }

    return `local-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

const initialState = {
    userId: '',
    createdAt: '',
    modules: {},
    theme: 'light' as const,
}

export const useGameStore = create<GameState>()(
    persist(
        (set, get) => ({
            ...initialState,

            ensureUserId: () =>
                set((state) => {
                    if (state.userId) return state

                    return {
                        userId: createUserId(),
                        createdAt: new Date().toISOString(),
                    }
                }),

            completeModule: (moduleId) =>
                set((state) => {
                    const currentMod = state.modules[moduleId] || {
                        completed: false,
                        lastPlayed: null,
                        lessonsViewed: [],
                    }
                    return {
                        modules: {
                            ...state.modules,
                            [moduleId]: {
                                ...currentMod,
                                completed: true,
                                lastPlayed: new Date().toISOString(),
                            },
                        },
                    }
                }),

            completeLesson: (moduleId, lessonId) =>
                set((state) => {
                    const currentMod = state.modules[moduleId] || {
                        completed: false,
                        lastPlayed: null,
                        lessonsViewed: [],
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
                    }
                }),

            setTheme: (theme) => set({ theme }),

            resetProgress: () =>
                set({
                    ...initialState,
                    userId: createUserId(),
                    createdAt: new Date().toISOString(),
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
