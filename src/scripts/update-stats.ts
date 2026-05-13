
import { ALL_MODULES } from '../data/modules';
import { LEARNING_PATHS } from '../data/paths';
import * as fs from 'fs';
import * as path from 'path';

const modules = ALL_MODULES;
const lessons = modules.flatMap(m => m.lessons);
const publishedLessons = lessons.filter(l => l.status === 'published' && l.qualityGatePassed);

const stats = {
    totalModules: modules.length,
    totalLessons: lessons.length,
    publishedLessons: publishedLessons.length,
    draftLessons: lessons.filter(l => l.status === 'draft').length,
    needsSourcesLessons: lessons.filter(l => l.status === 'needs_sources').length,
    needsReviewLessons: lessons.filter(l => l.status === 'needs_review').length,
    learningPaths: LEARNING_PATHS.length,
    categories: [...new Set(modules.map(m => m.category))].length,
    totalSources: lessons.reduce((acc, l) => acc + l.sources.length, 0),
    uniqueOrganizations: [...new Set(lessons.flatMap(l => l.sources.map(s => s.organization)))].length,
    totalChecklistItems: lessons.reduce((acc, l) => acc + l.checklist.length, 0),
    lastUpdatedAt: new Date().toISOString().split('T')[0],
    projectStage: "Core v1"
};

// Update siteStats.ts
const statsFileContent = `/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated on: ${new Date().toISOString()}
 */
export const siteStats = ${JSON.stringify(stats, null, 2)};
`;
fs.writeFileSync(path.join(__dirname, '../data/siteStats.ts'), statsFileContent);

// Update modules-meta.ts
const modulesMeta = modules.map(m => ({
    id: m.id,
    number: m.number || 0,
    title: m.title.replace(/Modulo \d+[b]?:\s*/i, ''),
    description: m.description,
    lessonCount: m.lessons.filter(l => l.status === 'published' && l.qualityGatePassed).length,
    difficulty: m.difficulty || 'base',
    icon: m.icon,
    featuredType: 'curated' as const // Placeholder logic
}));

const metaFileContent = `import { ModuleMetadata } from '@/types';

/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * To update, run: npm run update-stats
 */
export const MODULES_MAP: ModuleMetadata[] = ${JSON.stringify(modulesMeta, null, 2)};
`;
fs.writeFileSync(path.join(__dirname, '../data/modules-meta.ts'), metaFileContent);

console.log('Site stats and modules meta updated successfully.');
