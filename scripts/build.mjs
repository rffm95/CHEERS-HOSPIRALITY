import {existsSync, readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
for (const file of ['index.html', 'app.js', 'style.css', 'hero.webp']) {
  if (!existsSync(`dist/${file}`)) throw new Error(`Missing site asset: ${file}`);
}
execFileSync(process.execPath, ['--check', 'dist/app.js']);
const html = readFileSync('dist/index.html', 'utf8');
if (!html.includes('sucessomacico@gmail.com') || !html.includes('https://wa.me/351927653087')) throw new Error('Contact details are missing');
console.log('Static site validated: dist/ is ready to deploy.');
