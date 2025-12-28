import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import { GameState, Tier, ModuleProgress } from '../types';

const INITIAL_STATE = {
    totalXP: 0,
    tier: 'ingenuo' as Tier,
    modules: {},
    achievements: [],
    settings: { theme: 'dark' as const },
};

export const useGameStore = create<GameState>()(
    persist(
        (set, get) => ({
            id: '', // Will be set on hydration if empty
            createdAt: new Date().toISOString(),
            ...INITIAL_STATE,

            addXP: (amount) => set((state) => {
                const newXP = state.totalXP + amount;
                // Calculate new tier
                let newTier: Tier = state.tier;
                const modulesCompleted = Object.values(state.modules).filter(m => m.completed).length;

                if (modulesCompleted >= 12) newTier = 'guardian';
                else if (modulesCompleted >= 8) newTier = 'esperto';
                else if (modulesCompleted >= 4) newTier = 'informato';
                else if (modulesCompleted >= 2) newTier = 'consapevole';

                return { totalXP: newXP, tier: newTier };
            }),

            completeModule: (moduleId, accuracy, xp) => set((state) => {
                const currentModule = state.modules[moduleId] || {
                    completed: false, accuracy: 0, completions: 0, xp: 0,
                    lastPlayed: null, lessonsViewed: [], gamesCompleted: []
                };

                return {
                    modules: {
                        ...state.modules,
                        [moduleId]: {
                            ...currentModule,
                            completed: true,
                            accuracy: Math.max(currentModule.accuracy, accuracy),
                            completions: currentModule.completions + 1,
                            xp: currentModule.xp + xp,
                            lastPlayed: new Date().toISOString(),
                        }
                    }
                };
            }),

            markLessonViewed: (moduleId, lessonId) => set((state) => {
                const currentModule = state.modules[moduleId] || {
                    completed: false, accuracy: 0, completions: 0, xp: 0,
                    lastPlayed: null, lessonsViewed: [], gamesCompleted: []
                };

                if (currentModule.lessonsViewed.includes(lessonId)) return {};

                return {
                    modules: {
                        ...state.modules,
                        [moduleId]: {
                            ...currentModule,
                            lessonsViewed: [...currentModule.lessonsViewed, lessonId]
                        }
                    }
                };
            }),

            completeGame: (moduleId, gameId, xp, accuracy) => set((state) => {
                const currentModule = state.modules[moduleId] || {
                    completed: false, accuracy: 0, completions: 0, xp: 0,
                    lastPlayed: null, lessonsViewed: [], gamesCompleted: []
                };

                const isReplay = currentModule.gamesCompleted.includes(gameId);
                // Only award full XP first time? Or always? Let's say always for engagement but maybe reduced?
                // For now simple addition.

                return {
                    totalXP: state.totalXP + xp,
                    modules: {
                        ...state.modules,
                        [moduleId]: {
                            ...currentModule,
                            gamesCompleted: isReplay ? currentModule.gamesCompleted : [...currentModule.gamesCompleted, gameId],
                            lastPlayed: new Date().toISOString()
                        }
                    }
                };
            }),

            unlockAchievement: (achievement) => set((state) => {
                if (state.achievements.some(a => a.id === achievement.id)) return {};
                return {
                    achievements: [...state.achievements, { ...achievement, unlockedAt: new Date().toISOString() }]
                };
            }),

            resetProgress: () => set({ ...INITIAL_STATE, id: uuidv4(), createdAt: new Date().toISOString() }),

            setTheme: (theme) => set((state) => ({ settings: { ...state.settings, theme } })),

        }),
        {
            name: 'bussola-storage',
            storage: createJSONStorage(() => localStorage),
            onRehydrateStorage: () => (state) => {
                if (state && !state.id) {
                    state.id = uuidv4();
                }
            }
        }
    )
);
