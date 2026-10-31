import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
import {document,route,esc} from '../src/template.mjs';
import {editorial} from '../src/editorial.mjs';
const content=JSON.parse(fs.readFileSync('src/content.json','utf8'));
for(const lang of ['pt','es','en']){
 const dir='dist'+(lang==='pt'?'':'/'+lang);fs.mkdirSync(dir,{recursive:true});
 for(const page of [false,true,'digital'])fs.writeFileSync(dir+'/'+(page==='digital'?'digital.html':page?'eventos.html':'index.html'),document(lang,page,content));
 const t=editorial[lang];fs.writeFileSync(dir+'/obrigado.html',`<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${t.thanks} · Cheers Experiences</title><link rel="stylesheet" href="/atelier.css"></head><body><main class="wrap thankyou"><span class="eyebrow">CHEERS EXPERIENCES</span><h1>${t.thanks}</h1><p>${t.thanksText}</p><a class="button" href="https://wa.me/351927653087">WhatsApp ↗</a><a class="button" href="mailto:info@cheersexperiences.com">Email ↗</a><p><a href="${route(lang)}">${t.back}</a></p></main><script>const lang=new URLSearchParams(location.search).get('lang');if(['es','en'].includes(lang)&&!location.pathname.startsWith('/'+lang+'/'))location.replace('/'+lang+'/obrigado.html');</script></body></html>`);
}
fs.copyFileSync('src/atelier.css','dist/atelier.css');fs.copyFileSync('src/atelier.js','dist/atelier.js');
fs.writeFileSync('dist/favicon.svg',`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#111210"/><text x="31" y="46" text-anchor="middle" font-family="Georgia,serif" font-size="46" fill="#d6b77c">C</text></svg>`);
fs.writeFileSync('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${['pt','es','en'].flatMap(l=>[false,true,'digital'].map(e=>`<url><loc>https://cheersexperiences.com${route(l,e)}</loc></url>`)).join('')}</urlset>`);
fs.writeFileSync('dist/robots.txt','User-agent: *\nAllow: /\nDisallow: /counter/\nDisallow: /obrigado.html\nDisallow: /es/obrigado.html\nDisallow: /en/obrigado.html\nSitemap: https://cheersexperiences.com/sitemap.xml\n');
// Preserve old wedding URLs, campaign parameters and equivalent language.
fs.writeFileSync('dist/destination-weddings/redirect.js',`(()=>{const p=new URLSearchParams(location.search);const lang=['pt','es','en'].includes(p.get('lang'))?p.get('lang'):'en';p.delete('lang');const q=p.toString();location.replace((lang==='pt'?'':'/'+lang)+'/eventos.html'+(q?'?'+q:'')+'#celebrations');})();`);
fs.writeFileSync('dist/destination-weddings/index.html',`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Weddings & Events · Cheers Experiences</title><link rel="canonical" href="https://cheersexperiences.com/en/eventos.html"><script defer src="redirect.js"></script></head><body><h1>Weddings & Events</h1><p><a href="/eventos.html#celebrations" lang="pt">Português</a> · <a href="/es/eventos.html#celebrations" lang="es">Español</a> · <a href="/en/eventos.html#celebrations">English</a></p></body></html>`);
execFileSync(process.execPath,['--check','dist/atelier.js'],{stdio:'inherit'});
console.log('Built nine complete PT/ES/EN pages (hotels, events, digital), shared styles and interactions, metadata and legacy wedding route.');
