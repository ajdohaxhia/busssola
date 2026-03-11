import { ModuleMetadata, Module } from "../types";
import { ALL_MODULES } from "./modules/index";

export const MODULES_MAP: ModuleMetadata[] = (ALL_MODULES as Module[]).map((m: Module, index: number) => {
    // Extract module number from ID or title, fallback to index + 1
    const numMatch = m.title.match(/Modulo (\d+)/i) || m.id.match(/\d+/);
    const num = numMatch ? parseInt(numMatch[1] || numMatch[0], 10) : index + 1;

    return {
        id: m.id,
        number: num,
        title: m.title.replace(/Modulo \d+:\s*/i, ''),
        subtitle: (m as any).subtitle || m.description.split('.')[0] + '.',
        description: m.description,
        difficulty: (m as any).difficulty || 'base',
        themeColor: (m as any).themeColor || 'accent-cyan',
        icon: (m as any).icon || 'Compass',
        lessonCount: m.lessons ? m.lessons.length : 20
    };
});
