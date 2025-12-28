import { ReactNode } from "react";
import { ChatScenario } from "@/components/games/ChatGame";
import { ClassifierItem } from "@/components/games/ClassifierGame";
import { InspectionItem } from "@/components/games/InspectorGame";

export interface Lesson {
    id: string;
    title: string;
    content: ReactNode;
}

export type GameData =
    | { type: 'chat'; data: ChatScenario; objective: string }
    | { type: 'classifier'; data: ClassifierItem[]; objective: string }
    | { type: 'inspector'; data: InspectionItem[]; objective: string };

export interface ModuleContent {
    id: string;
    title: string;
    lessons: Lesson[];
    game: GameData;
}
