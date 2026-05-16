const fs = require('fs');
const path = require('path');

const dir = '/Users/ade/Documents/bussola/src/data/modules/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Split by lesson id to isolate objects
    const lessonParts = content.split(/^\s*id:/m);
    
    lessonParts.forEach((part, index) => {
        if (index === 0) return;
        
        // Find all lines that look like "  key: value,"
        const keyRegex = /^\s*([a-zA-Z0-9_]+):/gm;
        let match;
        const keys = [];
        while ((match = keyRegex.exec(part)) !== null) {
            keys.push(match[1]);
        }
        
        const counts = {};
        keys.forEach(key => {
            counts[key] = (counts[key] || 0) + 1;
        });
        
        Object.keys(counts).forEach(key => {
            if (counts[key] > 1) {
                // Some keys are expected to be repeated in nested objects (like sources, steps if they have objects)
                // but keys at the top level of the lesson should not be repeated.
                // This script is simple and might have false positives if keys are repeated in nested objects.
                // However, steps and checklist are just arrays of strings usually.
                // sources and officialLinksV2 are arrays of objects.
                
                // Let's filter out keys that are likely to be in nested objects if we want to be less noisy,
                // but actually, top-level keys in a lesson object like 'id', 'title', etc. should be unique.
                
                // If the key is 'title', 'url', 'organization' etc. it's likely in 'sources'.
                const commonNestedKeys = ['title', 'organization', 'url', 'type', 'usedFor', 'lastCheckedAt', 'sourceId', 'useWhen', 'beforeOpening', 'label'];
                if (!commonNestedKeys.includes(key)) {
                    console.log(`Duplicate key '${key}' found in ${file} in lesson starting with id:${part.split(',')[0].trim()}`);
                }
            }
        });
    });
});
