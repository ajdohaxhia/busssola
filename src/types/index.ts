export type Tier = 'ingenuo' | 'consapevole' | 'informato' | 'esperto' | 'guardian';

export interface ModuleProgress {
    completed: boolean;
    accuracy: number; // 0-100
    completions: number;
    xp: number;
    lastPlayed: string | null; // ISO date
    lessonsViewed: string[];
    gamesCompleted: string[];
}

export interface Achievement {
    id: string;
    name: string;
    description: string;
    icon: string; // lucide icon name
    unlockedAt: string; // ISO date
}

export interface UserProfile {
    id: string;
    createdAt: string;
    totalXP: number;
    tier: Tier;
    modules: Record<string, ModuleProgress>;
    achievements: Achievement[];
    settings: {
        theme: 'dark' | 'light'; // although we default to dark, we support toggle
    };
}

export interface GameState extends UserProfile {
    // Actions
    addXP: (amount: number) => void;
    completeModule: (moduleId: string, accuracy: number, xp: number) => void;
    markLessonViewed: (moduleId: string, lessonId: string) => void;
    completeGame: (moduleId: string, gameId: string, xp: number, accuracy: number) => void;
    unlockAchievement: (achievement: Omit<Achievement, 'unlockedAt'>) => void;
    resetProgress: () => void;
    setTheme: (theme: 'dark' | 'light') => void;
}
