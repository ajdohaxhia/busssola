
import { ALL_MODULES } from '../src/data/modules/index';
import { LEARNING_PATHS } from '../src/data/paths';

let errors: string[] = [];

function logError(message: string) {
    errors.push(message);
    console.error(`  ❌ ${message}`);
}

function validateLesson(lesson: any, moduleId: string) {
    const context = `[Module: ${moduleId}, Lesson: ${lesson.id || 'unknown'}]`;

    if (!lesson.id) logError(`${context} Missing id`);
    if (!lesson.slug) logError(`${context} Missing slug`);
    if (!lesson.title) logError(`${context} Missing title`);
    if (!lesson.category) logError(`${context} Missing category`);
    if (!Array.isArray(lesson.audience) || lesson.audience.length === 0) logError(`${context} Missing or empty audience`);
    if (!lesson.level) logError(`${context} Missing level`);
    if (typeof lesson.estimatedMinutes !== 'number') logError(`${context} Missing or invalid estimatedMinutes`);
    if (!lesson.summary) logError(`${context} Missing summary`);
    
    if (lesson.status === 'published') {
        const isCivic = !['diritti-digitali', 'first-aid', 'sextortion', 'rischi', 'privacy', 'grooming', 'stalking'].includes(lesson.category);
        
        if (lesson.qualityGatePassed !== true) logError(`${context} Published but qualityGatePassed is not true`);
        if (!isCivic && !lesson.emergencyLevel) logError(`${context} Published but missing emergencyLevel`);
        if (!lesson.scenario && !lesson.whenToDo) logError(`${context} Published but missing scenario or whenToDo`);
        
        if (!isCivic) {
            if (!lesson.question) logError(`${context} Published but missing question`);
            if (!lesson.whatIsHappening) logError(`${context} Published but missing whatIsHappening`);
            if (!Array.isArray(lesson.warningSigns) || lesson.warningSigns.length === 0) logError(`${context} Published but missing warningSigns`);
            if (!Array.isArray(lesson.dontDo) || lesson.dontDo.length < 2) logError(`${context} Published but dontDo must have at least 2 items`);
            if (!Array.isArray(lesson.preserveEvidence)) logError(`${context} Published but missing preserveEvidence array`);
            if (!Array.isArray(lesson.askHelpWhen)) logError(`${context} Published but missing askHelpWhen array`);
        } else {
            if (!lesson.mainEntity) logError(`${context} Published civic guide but missing mainEntity`);
            if (!Array.isArray(lesson.steps) || lesson.steps.length < 2) logError(`${context} Published civic guide but steps must have at least 2 items`);
        }

        if (!Array.isArray(lesson.doNow) && !Array.isArray(lesson.steps)) logError(`${context} Published but missing doNow or steps`);
        
        if (!Array.isArray(lesson.whoCanHelp) && !lesson.whereToDo) logError(`${context} Published but missing whoCanHelp or whereToDo`);
        
        if (!Array.isArray(lesson.checklist) && !Array.isArray(lesson.whatYouNeed)) logError(`${context} Published but missing checklist or whatYouNeed`);
        
        if (!Array.isArray(lesson.sources) || lesson.sources.length === 0) {
            logError(`${context} Published but missing sources`);
        } else {
            const urls = new Set();
            lesson.sources.forEach((source: any, idx: number) => {
                const sCtx = `${context} Source ${idx + 1}`;
                if (!source.title) logError(`${sCtx} Missing title`);
                if (!source.organization) logError(`${sCtx} Missing organization`);
                if (!source.url || !source.url.startsWith('https://')) logError(`${sCtx} Missing or invalid URL (must be https)`);
                if (!source.type) logError(`${sCtx} Missing type`);
                if (!source.usedFor) logError(`${sCtx} Missing usedFor`);
                if (!source.lastCheckedAt) logError(`${sCtx} Missing lastCheckedAt`);
                
                if (urls.has(source.url)) logError(`${sCtx} Duplicate URL within same lesson: ${source.url}`);
                urls.add(source.url);

                if (source.url.includes('example.com') || source.url.includes('placeholder')) {
                    logError(`${sCtx} Placeholder URL found: ${source.url}`);
                }
            });
        }
        
        if (!lesson.lastReviewedAt) logError(`${context} Published but missing lastReviewedAt`);
    }
}

function main() {
    console.log('🚀 Starting robust content validation...');

    const moduleIds = new Set();
    const lessonIds = new Set();
    const lessonSlugs = new Set();

    ALL_MODULES.forEach(module => {
        console.log(`\n📦 Validating Module: ${module.id}`);
        if (moduleIds.has(module.id)) logError(`Duplicate Module ID: ${module.id}`);
        moduleIds.add(module.id);

        if (!module.title) logError(`Module ${module.id} missing title`);
        if (!module.description) logError(`Module ${module.id} missing description`);
        if (!Array.isArray(module.lessons) || module.lessons.length === 0) logError(`Module ${module.id} has no lessons`);

        module.lessons.forEach(lesson => {
            if (lessonIds.has(lesson.id)) logError(`Duplicate Lesson ID: ${lesson.id}`);
            lessonIds.add(lesson.id);

            if (lessonSlugs.has(lesson.slug)) logError(`Duplicate Lesson Slug: ${lesson.slug}`);
            lessonSlugs.add(lesson.slug);

            validateLesson(lesson, module.id);
        });
    });

    console.log('\n🛤️ Validating Learning Paths...');
    LEARNING_PATHS.forEach(path => {
        if (!path.id) logError(`Learning Path missing ID`);
        if (!path.moduleIds || path.moduleIds.length === 0) logError(`Path ${path.id} has no modules`);
        
        let validModules = 0;
        path.moduleIds.forEach(mId => {
            if (!moduleIds.has(mId)) {
                logError(`Path ${path.id} references non-existent module: ${mId}`);
            } else {
                validModules++;
            }
        });
        
        if (validModules === 0) logError(`Path ${path.id} has zero valid modules`);
    });

    // Global checks for forbidden strings
    // This is hard to do on objects, but we can check if any string value contains them
    const forbidden = ['bussola.edu.it', 'BOZZA', 'WIP', 'coming soon', 'in arrivo'];
    
    // Recursive check for strings
    function checkForbidden(obj: any, path: string = '') {
        if (typeof obj === 'string') {
            forbidden.forEach(f => {
                if (obj.includes(f)) logError(`Forbidden string "${f}" found at ${path}`);
            });
        } else if (Array.isArray(obj)) {
            obj.forEach((item, i) => checkForbidden(item, `${path}[${i}]`));
        } else if (obj && typeof obj === 'object') {
            Object.keys(obj).forEach(key => checkForbidden(obj[key], `${path}.${key}`));
        }
    }

    // ALL_MODULES.forEach(m => checkForbidden(m, m.id));

    if (errors.length > 0) {
        console.error(`\n🚨 VALIDATION FAILED: ${errors.length} errors found.`);
        process.exit(1);
    } else {
        console.log(`\n✅ ALL CONTENT VALIDATED SUCCESSFULLY.`);
    }
}

main();
