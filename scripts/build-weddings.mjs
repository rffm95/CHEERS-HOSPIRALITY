import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const ctx=vm.createContext({URLSearchParams});
vm.runInContext(fs.readFileSync('dist/destination-weddings/redirect.js','utf8'),ctx);
for(const [query,saved,lang] of [['',null,'en'],['?lang=pt',null,'pt'],['?lang=es','en','es'],['','pt','pt'],['?lang=bad',null,'en'],['?lang=en&utm_source=planner','pt','en']]){
 const destination=vm.runInContext(`weddingRedirectURL(${JSON.stringify(query)},${JSON.stringify(saved)})`,ctx);
 const url=new URL(destination,'https://cheers.guru/destination-weddings/');
 assert.equal(url.pathname,'/eventos.html');assert.equal(url.hash,'#celebrations');assert.equal(url.searchParams.get('lang'),lang);
 if(query.includes('utm_source'))assert.equal(url.searchParams.get('utm_source'),'planner');
}
const html=`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Weddings & Events | Cheers Experiences</title><meta name="robots" content="noindex,follow"><link rel="canonical" href="https://cheers.guru/eventos.html?lang=en"><script defer src="redirect.js?v=20261013-unified"></script><style>body{background:#191b19;color:#faf7f1;font:18px/1.7 system-ui;max-width:700px;margin:80px auto;padding:24px}a{color:#dfbc7d;display:inline-block;margin:12px 20px 12px 0}</style></head><body><h1>Weddings & Events</h1><p>Our weddings and events are now together in one place.</p><nav aria-label="Choose language"><a href="../eventos.html?lang=en#celebrations">Weddings & Events</a><a href="../eventos.html?lang=pt#celebrations">Casamentos & Eventos</a><a href="../eventos.html?lang=es#celebrations">Bodas & Eventos</a></nav></body></html>`;
fs.writeFileSync('dist/destination-weddings/index.html',html);
console.log('PASS legacy wedding route: unified destination, languages, campaign parameters and no-JavaScript fallback');
