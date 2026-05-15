import { ALL_MODULES } from '../src/data/modules/index';
import { LEARNING_PATHS } from '../src/data/paths';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

async function validateRenderedPage(filePath: string, expectedText: string[]) {
    const html = fs.readFileSync(filePath, 'utf-8');
    const dom = new JSDOM(html);
    const document = dom.window.document;

    if (!document.querySelector('h1')) return `[${filePath}] Missing H1`;
    if (!document.querySelector('main')) return `[${filePath}] Missing main content`;

    for (const text of expectedText) {
        if (!html.includes(text)) return `[${filePath}] Missing expected content: ${text}`;
    }
    return null;
}

async function main() {
    console.log('🚀 Validating rendered static pages...');
    
    // Check key pages
    const checks = [
        { path: './out/moduli/index.html', expect: ['Catalogo Guide'] },
        { path: './out/sos/index.html', expect: ['Pericolo Fisico'] },
        { path: './out/faq/index.html', expect: ['Busssola è davvero gratuita?'] }
    ];

    let failed = false;
    for (const check of checks) {
        if (!fs.existsSync(check.path)) {
            console.error(`  ❌ Missing build file: ${check.path}`);
            failed = true;
            continue;
        }
        const error = await validateRenderedPage(check.path, check.expect);
        if (error) {
            console.error(`  ❌ ${error}`);
            failed = true;
        } else {
            console.log(`  ✅ ${check.path} looks good`);
        }
    }

    if (failed) process.exit(1);
    console.log('\n✅ ALL RENDERED CONTENT VALIDATED.');
}

main();
