
import { ALL_MODULES } from '../src/data/modules/index';
import { LEARNING_PATHS } from '../src/data/paths';
import { OFFICIAL_SOURCES } from '../src/data/officialSources';
import { CIVIC_TEMPLATES } from '../src/data/templates';
import { CIVIC_NEWS } from '../src/data/news';
import { SOS_CASES } from '../src/data/sos-cases';

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
    
    // SEO Checks
    if (lesson.summary && (lesson.summary.length < 30 || lesson.summary.length > 200)) {
        console.warn(`  ⚠️ ${context} SEO: Summary length (${lesson.summary.length}) is outside recommended range (30-200)`);
    }

    if (lesson.title && lesson.title.length > 70) {
        console.warn(`  ⚠️ ${context} SEO: Title is very long (${lesson.title.length} chars)`);
    }

    if (lesson.faqs) {
        lesson.faqs.forEach((faq: any, idx: number) => {
            if (!faq.q || !faq.a) logError(`${context} FAQ ${idx + 1} missing question or answer`);
        });
    }

    if (lesson.status === 'published') {
        const isEmergency = ['emergenze', 'first-aid', 'sextortion'].includes(lesson.category);
        
        if (lesson.qualityGatePassed !== true) logError(`${context} Published but qualityGatePassed is not true`);
        if (isEmergency && !lesson.emergencyLevel && !moduleId.includes('soccorso')) logError(`${context} Published emergency but missing emergencyLevel`);
        
        if (!isEmergency) {
            if (lesson.mainEntity && typeof lesson.mainEntity !== 'string') logError(`${context} Invalid mainEntity`);
            if (Array.isArray(lesson.steps) && lesson.steps.length < 2) logError(`${context} steps must have at least 2 items`);
        }

        // Official Links V2 validation
        if (lesson.officialLinksV2) {
            lesson.officialLinksV2.forEach((ol: any, idx: number) => {
                const olCtx = `${context} OfficialLinkV2 ${idx + 1}`;
                if (!ol.sourceId) logError(`${olCtx} Missing sourceId`);
                else if (!OFFICIAL_SOURCES[ol.sourceId]) logError(`${olCtx} Invalid sourceId: ${ol.sourceId}`);
                
                if (!ol.useWhen) logError(`${olCtx} Missing useWhen`);
                if (!Array.isArray(ol.beforeOpening)) logError(`${olCtx} Missing or invalid beforeOpening array`);
            });
        }
        
        if (!Array.isArray(lesson.sources) || lesson.sources.length === 0) {
            logError(`${context} Published but missing official sources`);
        } else {
            const urls = new Set();
            lesson.sources.forEach((source: any, idx: number) => {
                const sCtx = `${context} Source ${idx + 1}`;
                if (!source.title) logError(`${sCtx} Missing title`);
                if (!source.organization) logError(`${sCtx} Missing organization`);
                if (!source.url || (!source.url.startsWith('https://') && !source.url.startsWith('tel:'))) logError(`${sCtx} Missing or invalid URL (must be https or tel)`);
                
                if (urls.has(source.url)) logError(`${sCtx} Duplicate URL within same lesson: ${source.url}`);
                urls.add(source.url);
            });
        }
        
        if (!lesson.lastReviewedAt) logError(`${context} Published but missing lastReviewedAt`);
    }
}

function main() {
    console.log('🚀 Starting robust content validation (v2)...');

    const moduleIds = new Set();
    const lessonIds = new Set();
    const lessonSlugs = new Set();

    ALL_MODULES.forEach(module => {
        console.log(`\n📦 Validating Module: ${module.id}`);
        if (moduleIds.has(module.id)) logError(`Duplicate Module ID: ${module.id}`);
        moduleIds.add(module.id);

        if (!module.title) logError(`Module ${module.id} missing title`);
        if (!module.description) logError(`Module ${module.id} missing description`);
        
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
        
        let validModules = 0;
        path.moduleIds?.forEach(mId => {
            if (!moduleIds.has(mId)) {
                logError(`Path ${path.id} references non-existent module: ${mId}`);
            } else {
                validModules++;
            }
        });
    });

    console.log('\n📋 Validating templates and news...');
    const templateSlugs = new Set<string>();
    CIVIC_TEMPLATES.forEach((tpl) => {
        if (!tpl.slug) logError('Template missing slug');
        if (templateSlugs.has(tpl.slug)) logError(`Duplicate template slug: ${tpl.slug}`);
        templateSlugs.add(tpl.slug);
        if (!tpl.sources?.length) logError(`Template ${tpl.slug} missing official sources`);
        tpl.officialLinks?.forEach((id) => {
            if (!OFFICIAL_SOURCES[id]) logError(`Template ${tpl.slug} invalid sourceId ${id}`);
        });
    });
    CIVIC_NEWS.forEach((n) => {
        if (!n.sources?.length) logError(`News ${n.slug} missing official sources`);
        n.sourceIds.forEach((id) => {
            if (!OFFICIAL_SOURCES[id]) logError(`News ${n.slug} invalid sourceId ${id}`);
        });
    });
    SOS_CASES.forEach((c) => {
        if (!c.sources?.length) logError(`SOS case ${c.id} missing official sources`);
    });

    if (errors.length > 0) {
        console.error(`\n🚨 VALIDATION FAILED: ${errors.length} errors found.`);
        process.exit(1); 
    } else {
        console.log(`\n✅ ALL CONTENT VALIDATED SUCCESSFULLY.`);
    }
}

main();
