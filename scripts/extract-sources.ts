
import { ALL_MODULES } from '../src/data/modules/index';
import * as fs from 'fs';
import * as path from 'path';

const sources = ALL_MODULES.flatMap(m => m.lessons.flatMap(l => l.sources));
const uniqueOrgs = Array.from(new Set(sources.map(s => s.organization)));

const orgDetails = uniqueOrgs.map(org => {
    const orgSources = sources.filter(s => s.organization === org);
    const latestReview = orgSources.map(s => s.lastCheckedAt).sort().reverse()[0];
    const types = Array.from(new Set(orgSources.map(s => s.type)));
    const categories = Array.from(new Set(orgSources.flatMap(s => {
        const lesson = ALL_MODULES.flatMap(m => m.lessons).find(l => l.sources.includes(s));
        return lesson ? [lesson.category] : [];
    })));
    const lessonCount = ALL_MODULES.flatMap(m => m.lessons).filter(l => l.sources.some(s => s.organization === org)).length;
    
    return {
        name: org,
        types,
        lessonCount,
        categories,
        url: orgSources[0].url,
        lastChecked: latestReview
    };
});

console.log(JSON.stringify(orgDetails, null, 2));
