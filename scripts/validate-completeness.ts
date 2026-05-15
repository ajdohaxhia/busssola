import { ALL_MODULES } from '../src/data/modules/index';
import { LEARNING_PATHS } from '../src/data/paths';
import { OFFICIAL_SOURCES } from '../src/data/officialSources';

let errors: string[] = [];

function logError(message: string) {
    errors.push(message);
    console.error(`  ❌ ${message}`);
}

function validateLesson(lesson: any, moduleId: string) {
    const context = `[Module: ${moduleId}, Lesson: ${lesson.id || 'unknown'}]`;

    if (!lesson.title || lesson.title.includes('PLACEHOLDER')) logError(`${context} Invalid or placeholder title`);
    
    // Checklist/Source/Steps requirements
    if (lesson.status === 'published') {
        if (!Array.isArray(lesson.steps) || lesson.steps.length < 2) logError(`${context} Needs at least 2 steps`);
        if (!Array.isArray(lesson.checklist) || lesson.checklist.length < 2) logError(`${context} Needs at least 2 checklist items`);
        if (!Array.isArray(lesson.sources) || lesson.sources.length < 1) logError(`${context} Needs at least 1 source`);
    }
}

function main() {
    console.log('🚀 Starting content completeness audit...');

    ALL_MODULES.forEach(module => {
        if (module.lessons.length < 1) logError(`Module ${module.id} has no lessons`);
        
        // Count published items
        const publishedLessons = module.lessons.filter(l => l.status === 'published');
        if (publishedLessons.length < 1 && module.id !== 'drafts') {
            console.warn(`  ⚠️ Module ${module.id} has no published lessons. Mark as draft.`);
        }

        module.lessons.forEach(lesson => validateLesson(lesson, module.id));
    });

    if (errors.length > 0) {
        console.error(`\n🚨 AUDIT FAILED: ${errors.length} incompleteness errors found.`);
        process.exit(1); 
    } else {
        console.log(`\n✅ ALL CONTENT COMPLETE.`);
    }
}

main();
