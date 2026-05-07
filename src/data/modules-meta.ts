import { ModuleMetadata, Module } from "../types";
import { ALL_MODULES } from "./modules/index";

export const MODULES_MAP: ModuleMetadata[] = (ALL_MODULES as Module[]).map((m: Module, index: number) => {
    // Extract module number from ID or title, fallback to index + 1
    const numMatch = m.title.match(/Modulo (\d+)/i) || m.id.match(/\d+/);
    const num = numMatch ? parseInt(numMatch[1] || numMatch[0], 10) : index + 1;

    let featuredType: 'start' | 'curated' | 'situational' | 'none' = 'none';
    if (['modulo-02-privacy-digitale', 'modulo-03-password', 'modulo-19-phishing'].includes(m.id)) {
        featuredType = 'start';
    } else if (['modulo-13-grooming', 'modulo-08-social-media', 'modulo-24-emergenze'].includes(m.id)) {
        featuredType = 'curated';
    } else if (['modulo-37-genitori-panico', 'modulo-40-policy-scuole', 'modulo-18-truffe-ragazzi', 'modulo-41-minori-legge'].includes(m.id)) {
        featuredType = 'situational';
    }

    return {
        id: m.id,
        number: num,
        title: m.title.replace(/Modulo \d+:\s*/i, ''),
        subtitle: m.subtitle || m.description.split('.')[0] + '.',
        description: m.description,
        difficulty: m.difficulty || 'base',
        themeColor: m.themeColor || 'accent-cyan',
        icon: m.icon || 'Compass',
        lessonCount: m.lessons ? m.lessons.length : 20,
        featuredType
    };
});
