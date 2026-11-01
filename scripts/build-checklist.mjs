// Generates the 10-leak checklist PDFs (PT/ES/EN/FR) in dist/downloads. Run locally: npm run checklist (needs Playwright + Chromium).
import fs from 'node:fs';import path from 'node:path';import {createRequire} from 'node:module';
import {leaks} from '../src/audit-offer.mjs';import {nextStep} from '../src/next-step.mjs';import '../src/fr.mjs';
const {chromium}=createRequire(import.meta.url)('playwright');
const font=f=>`url(data:font/woff;base64,${fs.readFileSync(path.resolve('dist/fonts',f)).toString('base64')}) format('woff')`;fs.mkdirSync('dist/downloads',{recursive:true});
const browser=await chromium.launch();
for(const lang of ['pt','es','en','fr']){
 const l=leaks[lang],p=nextStep[lang].pdf;
 const html=`<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><style>
@font-face{font-family:Lora;font-weight:400 700;src:${font('lora-var.woff')}}@font-face{font-family:Inter;src:${font('inter-400.woff')}}@font-face{font-family:Inter;font-weight:600;src:${font('inter-600.woff')}}
@page{size:A4;margin:11mm 14mm}*{box-sizing:border-box}body{margin:0;font-family:Inter,Arial,sans-serif;color:#22251e;font-size:8.8pt;line-height:1.38}
.brand{font-family:Lora,serif;font-size:20pt;letter-spacing:-.04em}.brand span{color:#b08a4a}.top{display:flex;justify-content:space-between;align-items:baseline;border-bottom:1px solid #d1d4c8;padding-bottom:8px}.top small{font-size:7pt;letter-spacing:.25em;color:#796037}
h1{font-family:Lora,serif;font-weight:400;font-size:22pt;line-height:1.08;letter-spacing:-.03em;margin:12px 0 4px}.sub{color:#5d6156;margin:0 0 12px}
ol{list-style:none;padding:0;margin:0}li{display:grid;grid-template-columns:26px 1fr 92px;gap:10px;padding:5px 0;border-top:1px solid #d1d4c8;break-inside:avoid}
.n{font-family:Lora,serif;font-size:13pt;color:#796037}h2{font-family:Lora,serif;font-weight:400;font-size:12pt;margin:0 0 2px}p{margin:0}.fix{margin-top:3px;color:#5d6156}.fix b{font-weight:600;color:#796037}
.box{display:flex;gap:6px;align-items:flex-start;font-size:7.5pt;color:#5d6156}.box i{display:inline-block;width:12px;height:12px;border:1.2px solid #22251e;flex:none}
.end{margin-top:10px;background:#22251e;color:#f2f0e8;padding:14px 16px;break-inside:avoid}.end h3{font-family:Lora,serif;font-weight:400;font-size:14pt;margin:0 0 4px;color:#d6b77c}.end p{color:#e6e5dc}.end .c{margin-top:8px;font-weight:600;color:#fff}
</style></head><body><div class="top"><div class="brand">Cheers<span>.</span></div><small>EXPERIENCES · CHECKLIST</small></div>
<h1>${p.title}</h1><p class="sub">${p.sub}</p><ol>${l.items.map((x,i)=>`<li><span class="n">${String(i+1).padStart(2,'0')}</span><div><h2>${x[0]}</h2><p>${x[1]}</p><p class="fix"><b>${p.fix}:</b> ${x[2]}</p></div><span class="box"><i></i>${p.check}</span></li>`).join('')}</ol>
<div class="end"><h3>${p.endTitle}</h3><p>${p.endText}</p><p class="c">${p.contact}</p></div></body></html>`;
 const page=await browser.newPage();await page.setContent(html,{waitUntil:'load'});await page.evaluate(()=>document.fonts.ready);
 await page.pdf({path:`dist/downloads/checklist-10-fugas-${lang}.pdf`,format:'A4',printBackground:true,preferCSSPageSize:true});await page.close();
}
await browser.close();console.log('Built 10-leak checklist PDFs (PT/ES/EN/FR) in dist/downloads.');
