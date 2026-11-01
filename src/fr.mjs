// French (fr-FR) copy for the whole site. Texts live in fr.json; any key missing there falls back to English,
// so a new EN/ES/PT field never breaks the FR build (but should be translated in fr.json).
import fs from 'node:fs';
import {auditOffer,leaks} from './audit-offer.mjs';
import {auditTrust} from './audit-trust.mjs';
import {digital} from './digital.mjs';
import {editorial,teamCopy} from './editorial.mjs';
import {money} from './money.mjs';
import {nextStep} from './next-step.mjs';
import {weddings} from './weddings.mjs';
export const LANGS=['pt','es','en','fr'];
export const htmlLang={pt:'pt-PT',es:'es-ES',en:'en',fr:'fr-FR'};
export const fr=JSON.parse(fs.readFileSync(new URL('./fr.json',import.meta.url),'utf8'));
export function withFallback(en,tr){
 if(Array.isArray(en))return tr??en;
 if(en&&typeof en==='object'){const o={};for(const k of Object.keys(en))o[k]=withFallback(en[k],tr?.[k]);for(const k of Object.keys(tr||{}))if(!(k in o))o[k]=tr[k];return o;}
 return tr??en;
}
for(const [key,obj] of Object.entries({auditOffer,leaks,auditTrust,digital,editorial,teamCopy,money,nextStep,weddings}))obj.fr=withFallback(obj.en,fr[key]);
Object.assign(editorial.fr,fr.contactDelivery);
