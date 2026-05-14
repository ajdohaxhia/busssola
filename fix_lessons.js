
const fs = require('fs');
const path = require('path');

const files = [
    'modulo-01-primo-soccorso.ts',
    'modulo-01b-primo-soccorso.ts',
    'modulo-02-account-security.ts',
    'modulo-02b-account-security.ts',
    'modulo-03-truffe-phishing.ts',
    'modulo-03b-truffe-phishing.ts',
    'modulo-04-sextortion-ricatti.ts',
    'modulo-04b-sextortion-ricatti.ts',
    'modulo-05-grooming-minori.ts',
    'modulo-05b-grooming-minori.ts',
    'modulo-08-scuola-famiglia.ts',
    'modulo-08b-scuola-famiglia.ts',
    'modulo-17-immigrazione.ts',
    'modulo-18-consumatori.ts',
    'modulo-19-mobilita.ts',
    'modulo-20-sanita-territoriale.ts',
    'modulo-21-anziani-caregiver.ts',
    'modulo-22-universita-giovani.ts'
];

const baseDir = '/Users/ade/Documents/bussola/src/data/modules';

function getEntity(lessonId, category) {
    if (lessonId.includes('whatsapp')) return 'WhatsApp';
    if (lessonId.includes('instagram')) return 'Instagram';
    if (lessonId.includes('facebook')) return 'Facebook';
    if (lessonId.includes('tiktok')) return 'TikTok';
    if (lessonId.includes('google')) return 'Google';
    if (lessonId.includes('apple')) return 'Apple';
    if (lessonId.includes('vinted')) return 'Vinted';
    
    if (category === 'emergenze') {
        if (lessonId.includes('lost-device')) return 'Polizia di Stato';
        return 'Polizia Postale';
    }
    if (category === 'immigrazione') return "Ministero dell'Interno";
    if (category === 'consumatori') return 'AgCM';
    if (category === 'mobilita') {
        if (lessonId.includes('patente')) return 'Ministero delle Infrastrutture e dei Trasporti';
        if (lessonId.includes('bollo')) return 'ACI';
        if (lessonId.includes('pagare-multa')) return 'PagoPA';
        return 'Comune';
    }
    if (category === 'sanita-territoriale') return 'Regione';
    if (category === 'anziani-caregiver') {
        if (lessonId.includes('truffe')) return 'Polizia di Stato';
        if (lessonId.includes('spid')) return 'AgID';
        return 'INPS';
    }
    if (category === 'universita-giovani') {
        if (lessonId.includes('isee')) return 'INPS';
        if (lessonId.includes('borse')) return 'Regione';
        if (lessonId.includes('cv')) return 'ANPAL';
        return 'MUR';
    }
    if (category === 'account-security') return 'AgID';
    if (category === 'truffe-phishing') return 'Polizia Postale';
    if (category === 'sextortion-ricatti') return 'Polizia Postale';
    if (category === 'grooming-minori') return 'Polizia Postale';
    if (category === 'scuola-famiglia') {
        if (lessonId.includes('cyberbullying')) return 'Garante Privacy';
        if (lessonId.includes('parent')) return 'Polizia Postale';
        return "Ministero dell'Istruzione";
    }
    
    return 'AgID'; // Default
}

function escapeSingleQuote(str) {
    return str.replace(/'/g, "\\'");
}

function findClosingBracket(str, openIdx) {
    let count = 0;
    for (let i = openIdx; i < str.length; i++) {
        if (str[i] === '[') count++;
        else if (str[i] === ']') {
            count--;
            if (count === 0) return i;
        }
    }
    return -1;
}

// Robust function to find the array content for doNow
function getArrayContent(block, key) {
    const keyIndex = block.indexOf(key + ':');
    if (keyIndex === -1) return null;
    
    const openBracket = block.indexOf('[', keyIndex);
    if (openBracket === -1) return null;
    
    let bracketCount = 0;
    let i = openBracket;
    let inString = false;
    let stringChar = '';
    
    while (i < block.length) {
        const char = block[i];
        
        if (!inString) {
            if (char === "'" || char === '"' || char === '`') {
                inString = true;
                stringChar = char;
            } else if (char === '[') {
                bracketCount++;
            } else if (char === ']') {
                bracketCount--;
                if (bracketCount === 0) {
                    return block.substring(openBracket + 1, i);
                }
            }
        } else {
            if (char === stringChar && block[i-1] !== '\\') {
                inString = false;
            }
        }
        i++;
    }
    return null;
}

files.forEach(file => {
    const filePath = path.join(baseDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find category of the module for defaults
    const moduleCategoryMatch = content.match(/category:\s*'([^']*)'/);
    const moduleCategory = moduleCategoryMatch ? moduleCategoryMatch[1] : '';

    const lessonsStart = content.indexOf('lessons: [');
    const lessonsEnd = content.lastIndexOf(']');
    
    const prefix = content.substring(0, lessonsStart + 10);
    const suffix = content.substring(lessonsEnd);
    const lessonsBody = content.substring(lessonsStart + 10, lessonsEnd);
    
    let resultBody = '';
    let i = 0;
    let bracketCount = 0;
    
    while (i < lessonsBody.length) {
        if (lessonsBody[i] === '{') {
            if (bracketCount === 0) {
                let j = i;
                let bCount = 0;
                let lessonBlock = '';
                let inS = false;
                let sC = '';
                while (j < lessonsBody.length) {
                    const char = lessonsBody[j];
                    if (!inS) {
                        if (char === "'" || char === '"' || char === '`') {
                            inS = true;
                            sC = char;
                        } else if (char === '{') bCount++;
                        else if (char === '}') bCount--;
                    } else {
                        if (char === sC && lessonsBody[j-1] !== '\\') inS = false;
                    }
                    lessonBlock += char;
                    if (bCount === 0) break;
                    j++;
                }
                
                // Process lessonBlock
                let updatedBlock = lessonBlock;
                const idMatch = updatedBlock.match(/id:\s*'([^']*)'/);
                const categoryMatch = updatedBlock.match(/category:\s*'([^']*)'/);
                const id = idMatch ? idMatch[1] : '';
                const category = categoryMatch ? categoryMatch[1] : moduleCategory;
                
                const hasMainEntity = updatedBlock.includes('mainEntity:');
                const hasSteps = updatedBlock.includes('steps:');
                
                if (!hasMainEntity) {
                    const entity = getEntity(id, category);
                    updatedBlock = updatedBlock.replace(/title:\s*'([^']*)',/, `title: '$1',\n            mainEntity: '${escapeSingleQuote(entity)}',`);
                }
                
                if (!hasSteps) {
                    const doNowContent = getArrayContent(updatedBlock, 'doNow');
                    if (doNowContent) {
                        // Find the end of doNow: [...]
                        const doNowIndex = updatedBlock.indexOf('doNow:');
                        const openB = updatedBlock.indexOf('[', doNowIndex);
                        let bC = 0;
                        let k = openB;
                        let inStr = false;
                        let strC = '';
                        while (k < updatedBlock.length) {
                            const char = updatedBlock[k];
                            if (!inStr) {
                                if (char === "'" || char === '"' || char === '`') {
                                    inStr = true;
                                    strC = char;
                                } else if (char === '[') bC++;
                                else if (char === ']') {
                                    bC--;
                                    if (bC === 0) break;
                                }
                            } else {
                                if (char === strC && updatedBlock[k-1] !== '\\') inStr = false;
                            }
                            k++;
                        }
                        
                        const doNowFull = updatedBlock.substring(doNowIndex, k + 1);
                        updatedBlock = updatedBlock.replace(doNowFull, `${doNowFull},\n            steps: [${doNowContent}]`);
                    }
                }
                
                resultBody += updatedBlock;
                i = j + 1;
            } else {
                resultBody += lessonsBody[i];
                i++;
            }
        } else {
            resultBody += lessonsBody[i];
            i++;
        }
    }
    
    fs.writeFileSync(filePath, prefix + resultBody + suffix);
});
