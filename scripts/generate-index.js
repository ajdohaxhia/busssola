const fs = require('fs');
const path = require('path');

const modulesDir = path.join(__dirname, '../src/data/modules');
const files = fs.readdirSync(modulesDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let imports = [];
let exportsList = [];

files.forEach(file => {
  const content = fs.readFileSync(path.join(modulesDir, file), 'utf8');
  let match = content.match(/export const (\w+)\s*:/);
  if (match) {
    const exportName = match[1];
    const moduleName = file.replace(/\.ts$/, '');
    imports.push(`import { ${exportName} } from './${moduleName}';`);
    exportsList.push(exportName);
  } else {
      // try to catch export const MODULO_1 : Module
      match = content.match(/export const (\w+)\s*(?:=|:)/);
      if(match) {
        const exportName = match[1];
        const moduleName = file.replace(/\.ts$/, '');
        imports.push(`import { ${exportName} } from './${moduleName}';`);
        exportsList.push(exportName);
      }
  }
});

const indexContent = `${imports.join('\n')}

export const MODULES_DATA = [
${exportsList.map(e => `    ${e},`).join('\n')}
];

export const ALL_MODULES = MODULES_DATA;

export function getModuleById(id: string) {
    return ALL_MODULES.find(m => m.id === id);
}
`;

fs.writeFileSync(path.join(modulesDir, 'index.ts'), indexContent);
console.log('index.ts successfully generated with ' + exportsList.length + ' modules.');
