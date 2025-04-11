import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import character from '../characters/eldor.character.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputPath = path.join(__dirname, '../characters/eldor.character.json');
fs.writeFileSync(outputPath, JSON.stringify(character, null, 2));
console.log('✅ Wrote', outputPath);
