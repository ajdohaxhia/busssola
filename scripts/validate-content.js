const fs = require('fs');
const path = require('path');

const MODULES_DIR = path.join(__dirname, '../src/data/modules');
const MIN_MODULES = 12;
const MIN_LESSONS = 400;

console.log('🔍 Validating content requirements...');

if (!fs.existsSync(MODULES_DIR)) {
    console.error(`❌ Modules directory not found: ${MODULES_DIR}`);
    process.exit(1);
}

const files = fs.readdirSync(MODULES_DIR).filter(f => f.endsWith('.ts') && f !== 'index.ts');
const moduleCount = files.length;

let totalLessons = 0;

files.forEach(file => {
    const content = fs.readFileSync(path.join(MODULES_DIR, file), 'utf8');
    // Count lessons by counting "contentMarkdown" occurrences which is unique to lessons
    const lessonMatches = content.match(/contentMarkdown/g);
    const lessonCount = lessonMatches ? lessonMatches.length : 0;
    totalLessons += lessonCount;
    console.log(`  - ${file}: ${lessonCount} lessons`);
});

console.log(`\n📊 Status:`);
console.log(`  Modules: ${moduleCount} (Required: ${MIN_MODULES})`);
console.log(`  Lessons: ${totalLessons} (Required: ${MIN_LESSONS})`);

if (moduleCount < MIN_MODULES) {
    console.error(`❌ FAILED: Not enough modules (${moduleCount}/${MIN_MODULES})`);
    process.exit(1);
}

if (totalLessons < MIN_LESSONS) {
    console.error(`❌ FAILED: Not enough lessons (${totalLessons}/${MIN_LESSONS})`);
    process.exit(1);
}

console.log('✅ Content validation passed!');
process.exit(0);
