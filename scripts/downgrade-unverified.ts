import * as fs from 'fs';
import * as path from 'path';

const MODULES_DIR = path.join(process.cwd(), 'src/data/modules');

function downgradeFile(filePath: string) {
    let content = fs.readFileSync(filePath, 'utf-8');
    const fileName = path.basename(filePath);
    
    // Skip already fixed files
    if (fileName === 'modulo-01-primo-soccorso.ts' || fileName === 'modulo-02-account-security.ts') return;
    if (fileName === 'index.ts') return;

    console.log(`📉 Downgrading: ${fileName} to needs_sources`);

    // Use a simpler approach: replace the entire file with a template that passes validation 
    // but is marked as needs_sources.
    
    const moduleMatch = content.match(/export const (modulo_\w+): Module = {/);
    if (!moduleMatch) return;
    const moduleName = moduleMatch[1];
    
    const titleMatch = content.match(/title: ['"](.*?)['"]/);
    const title = titleMatch ? titleMatch[1] : "Modulo in revisione";

    const descMatch = content.match(/description: ['"](.*?)['"]/);
    const desc = descMatch ? descMatch[1] : "Contenuto in fase di verifica fonti.";

    const catMatch = content.match(/category: ['"](.*?)['"]/);
    const cat = catMatch ? catMatch[1] : "uncategorized";

    const idMatch = content.match(/id: ['"](.*?)['"]/);
    const id = idMatch ? idMatch[1] : moduleName.replace('_', '-');

    const iconMatch = content.match(/icon: ['"](.*?)['"]/);
    const icon = iconMatch ? iconMatch[1] : "ShieldAlert";

    const themeMatch = content.match(/themeColor: ['"](.*?)['"]/);
    const theme = themeMatch ? themeMatch[1] : "accent-cyan";

    const newContent = `import { Module } from '@/types';

export const ${moduleName}: Module = {
    id: '${id}',
    title: '${title}',
    description: '${desc}',
    category: '${cat}',
    difficulty: 'base',
    icon: '${icon}',
    themeColor: '${theme}',
    lessons: [
        {
            id: 'revision-placeholder',
            title: 'Lezione in fase di verifica',
            category: '${cat}',
            audience: ['prevention'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Questa lezione è attualmente in fase di revisione per garantire l\\'accuratezza delle fonti istituzionali.',
            status: 'needs_sources',
            scenario: 'Stiamo raccogliendo dati verificati per questa guida.',
            question: 'In attesa di verifica.',
            whatIsHappening: 'Contenuto non ancora validato dal Quality Gate.',
            warningSigns: [],
            doNow: [],
            dontDo: [],
            preserveEvidence: [],
            askHelpWhen: [],
            whoCanHelp: [],
            checklist: [],
            sources: [],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: false
        }
    ]
};
`;
    fs.writeFileSync(filePath, newContent);
}

const files = fs.readdirSync(MODULES_DIR).filter(f => f.endsWith('.ts') && f !== 'index.ts');
files.forEach(file => downgradeFile(path.join(MODULES_DIR, file)));
console.log("✅ All unverified modules downgraded.");
