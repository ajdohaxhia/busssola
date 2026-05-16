import { ALL_MODULES } from '../src/data/modules/index';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

async function validateSEO(filePath: string) {
    if (!fs.existsSync(filePath)) return `Missing file: ${filePath}`;
    
    const html = fs.readFileSync(filePath, 'utf-8');
    const dom = new JSDOM(html);
    const document = dom.window.document;

    const errors: string[] = [];

    // Title
    const title = document.querySelector('title')?.textContent;
    if (!title) errors.push('Missing <title>');
    else if (title === 'Busssola' && !filePath.endsWith('index.html')) errors.push(`Generic title: ${title}`);

    // Description
    const description = document.querySelector('meta[name="description"]')?.getAttribute('content');
    if (!description) errors.push('Missing <meta name="description">');

    // H1
    const h1s = document.querySelectorAll('h1');
    if (h1s.length === 0) errors.push('Missing <h1>');
    if (h1s.length > 1) errors.push(`Multiple <h1> (${h1s.length})`);

    // Canonical
    const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href');
    if (!canonical) errors.push('Missing rel="canonical"');

    // OG Tags
    if (!document.querySelector('meta[property="og:title"]')) errors.push('Missing og:title');
    if (!document.querySelector('meta[property="og:description"]')) errors.push('Missing og:description');

    return errors.length > 0 ? errors : null;
}

async function main() {
    console.log('🚀 Validating SEO for key pages...');
    
    const pages = [
        './out/index.html',
        './out/moduli/index.html',
        './out/sos/index.html',
        './out/faq/index.html',
        './out/about/index.html'
    ];

    let failed = false;
    for (const page of pages) {
        const errors = await validateSEO(page);
        if (errors) {
            console.error(`  ❌ SEO errors in ${page}:`);
            if (Array.isArray(errors)) errors.forEach(e => console.error(`     - ${e}`));
            else console.error(`     - ${errors}`);
            failed = true;
        } else {
            console.log(`  ✅ ${page} SEO looks good`);
        }
    }

    if (failed) process.exit(1);
    console.log('\n✅ ALL SEO VALIDATED.');
}

main();
