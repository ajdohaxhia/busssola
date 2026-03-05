import { ReactNode } from 'react';
export interface Lesson {
    id: string;
    title: string;
    content: ReactNode;
}

export interface ModuleContent {
    id: string;
    title: string;
    lessons: Lesson[];
    // Removed game property
}
