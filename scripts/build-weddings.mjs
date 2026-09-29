import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const ctx=vm.createContext({URLSearchParams,encodeURIComponent,Date});
vm.runInContext(fs.readFileSync('dist/premium.js','utf8')+'\n'+fs.readFileSync('dist/weddings-copy.js','utf8')+'\n'+fs.readFileSync('dist/weddings.js','utf8'),ctx);
const run=s=>vm.runInContext(s,ctx);
const t=run('weddingCopy.en');
const favicon=fs.readFileSync('dist/index.html','utf8').match(/<link rel="icon"[^>]+>/)[0];
const html=`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${t.title}</title><meta name="description" content="${t.description}"><meta name="theme-color" content="#132c28">${favicon}
<link rel="canonical" href="https://cheers.guru/destination-weddings/"><link rel="alternate" hreflang="en" href="https://cheers.guru/destination-weddings/"><link rel="alternate" hreflang="pt" href="https://cheers.guru/destination-weddings/?lang=pt"><link rel="alternate" hreflang="es" href="https://cheers.guru/destination-weddings/?lang=es"><link rel="alternate" hreflang="x-default" href="https://cheers.guru/destination-weddings/">
<meta property="og:type" content="website"><meta property="og:title" content="${t.title}"><meta property="og:description" content="${t.description}"><meta property="og:url" content="https://cheers.guru/destination-weddings/"><meta property="og:locale" content="en_US"><script id="structured-data" type="application/ld+json">${JSON.stringify(run('weddingSchema("en")'))}</script>
<link rel="stylesheet" href="/style.css"><link rel="stylesheet" href="/weddings.css"><link rel="stylesheet" href="/premium.css"><script defer src="/premium.js"></script><script defer src="/weddings-copy.js"></script><script defer src="/weddings.js"></script></head><body class="wedding-page"><div id="wedding-app">${run('weddingMarkup("en")')}</div><noscript><style>.contact-form,.language,.menu-toggle{display:none}.wedding-page .nav{display:flex;position:static;flex-wrap:wrap;width:auto;padding:10px}.wedding-page .header{height:auto}.wedding-page .header-inner{flex-wrap:wrap}</style></noscript></body></html>`;
fs.mkdirSync('dist/destination-weddings',{recursive:true});fs.writeFileSync('dist/destination-weddings/index.html',html);
for(const lang of ['en','pt','es']){
 const page=run(`weddingMarkup('${lang}')`);assert(!page.includes('undefined'));assert.equal((page.match(/<h1>/g)||[]).length,1);
 const ids=[...page.matchAll(/id="([^"]+)"/g)].map(m=>m[1]);assert.equal(ids.length,new Set(ids).size);
 for(const m of page.matchAll(/href="#([^"]+)"/g))assert(ids.includes(m[1]));
 for(const m of page.matchAll(/(?:href|src)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)){const path='dist'+m[1]+(m[1].endsWith('/')?'index.html':'');assert(fs.existsSync(path),'Missing '+path);}
 const message=run(`weddingMessage('${lang}',{get:k=>({name:'Alex & Sam',email:'alex@example.com',phone:'+1 202 555 0100',date:'2027-06-12',venue:'Madeira',guests:'80',moment:'4',message:'No alcohol & citrus'})[k]})`);
 for(const value of ['Alex & Sam','alex@example.com','+1 202 555 0100','2027-06-12','Madeira','80','No alcohol & citrus'])assert(message.includes(value));
 const url=run(`weddingWhatsApp(${JSON.stringify(message)})`);assert.equal(new URL(url).searchParams.get('text'),message);assert.equal(new URL(url).pathname,'/351927653087');
 assert.equal(run(`weddingSchema('${lang}').provider.telephone`),'+351927653087');
 console.log('PASS destination weddings',lang,'content, links, anchors, contact encoding and structured data');
}
for(const [query,saved,expected] of [['',null,'en'],['?lang=pt',null,'pt'],['?lang=es','en','es'],['','pt','pt'],['?lang=bad',null,'en']]){ctx.location={search:query};ctx.localStorage={getItem:()=>saved};assert.equal(run('weddingInitialLanguage()'),expected);}
ctx.localStorage={getItem(){throw Error('blocked')}};assert.equal(run('weddingInitialLanguage()'),'en');
console.log('PASS English landing default, shared manual preference, explicit language links and blocked storage');
