import {existsSync, readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
for (const file of ['index.html', 'eventos.html', 'events.js', 'strategy.js', 'english.js', 'app.js', 'style.css', 'hero.webp']) {
  if (!existsSync(`dist/${file}`)) throw new Error(`Missing site asset: ${file}`);
}
execFileSync(process.execPath, ['--check', 'dist/app.js']);
execFileSync(process.execPath, ['--check', 'dist/english.js']);
execFileSync(process.execPath, ['--check', 'dist/events.js']);
execFileSync(process.execPath, ['--check', 'dist/strategy.js']);
execFileSync(process.execPath, ['scripts/render-check.mjs'], {stdio:'inherit'});
const html = readFileSync('dist/index.html', 'utf8');
if (!html.includes('sucessomacico@gmail.com') || !html.includes('https://wa.me/351927653087')) throw new Error('Contact details are missing');
console.log('Static site validated: dist/ is ready to deploy.');
