import fs from 'node:fs';
const paths=['','/es','/en','/fr'].flatMap(l=>['index','hoteis','eventos','digital'].map(p=>l+'/'+p+'.html'));
const mime={webp:'image/webp',jpg:'image/jpeg',svg:'image/svg+xml',mp4:'video/mp4'};
const asset=file=>`data:${mime[file.split('.').at(-1)]};base64,${fs.readFileSync('dist'+file).toString('base64')}`;
const cache=new Map();
const inline=html=>html.replace(/(src|poster)="(\/(?:images|video)\/[^" ]+)"/g,(_,attr,path)=>{if(!cache.has(path))cache.set(path,asset(path));return `${attr}="${cache.get(path)}"`;});
const pages=Object.fromEntries(paths.map(path=>[path,inline(fs.readFileSync('dist'+path,'utf8').replace(/<script[^>]*src=[^>]+><\/script>/g,''))]));
const embed=file=>fs.readFileSync(file,'utf8').replace(/url\((\/fonts\/[^)]+\.(woff2?))\)/g,(_,f,ext)=>`url(data:font/${ext};base64,${fs.readFileSync('dist'+f).toString('base64')})`);
const css=embed('dist/atelier.css'),rcss=embed('dist/rescue.css'),js=fs.readFileSync('dist/atelier.js','utf8'),rjs=fs.readFileSync('dist/rescue.js','utf8');
const payload=JSON.stringify(pages).replace(/</g,'\\u003c');
// The preview opens on the entry page (rescue skin); both stylesheets are embedded and atelier.js switches them when the page changes skin.
let preview=pages['/index.html'].replace(/<link rel="stylesheet" href="\/rescue\.css[^>]*>/,()=>`<style data-skin="rescue">${rcss}</style><style data-skin="atelier" media="not all">${css}</style>`).replace(/<link rel="preload"[^>]*>/g,'').replace('<link rel="icon" href="/favicon.svg" type="image/svg+xml">','');
if(!preview.includes('<style data-skin="rescue">'))throw Error('preview: stylesheet not embedded');
const safe=x=>x.replace(/<\/script/gi,'<\\/script');
preview=preview.replace('</body>',()=>`<script>window.__cheersPreview=${payload};</script><script>${safe(rjs)}</script><script>${safe(js)}</script></body>`);
fs.writeFileSync('../Cheers-Experiences-Preview.html',preview);
console.log(`Functional standalone preview: sixteen pages, four languages and ${cache.size} embedded images; ${Math.round(Buffer.byteLength(preview)/1024/1024*10)/10} MB. Contact buttons prepare WhatsApp or email messages for visitor confirmation.`);
