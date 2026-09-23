import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
// Render the dependency-free site for initial HTML and validate contact/calculator logic.
const scripts=[...fs.readFileSync('dist/index.html','utf8').matchAll(/<script defer src="([^"]+)"/g)].map(m=>m[1]);assert(scripts.includes('english.js'));
const source=scripts.map(f=>fs.readFileSync('dist/'+f,'utf8')).join('\n');
for(const page of ['index.html','eventos.html'])for(const lang of ['es','pt','en']){
 const elements={},isEvent=page==='eventos.html';let clicked='';
 const values={rooms:'100',occupancy:'75',guests:isEvent?'125':'150',penetration:'30',ticket:'12',days:'30',lift:'5',ticketLift:'10',name:'Ana & João',hotel:'Hotel QA',location:'Viseu',opportunity:'5',message:'Teste & detalhe',type:'0',date:'2027-06-12',place:'Viseu',model:'3',need:'3'};
 const el=k=>elements[k]??={innerHTML:'',textContent:'',content:'',hidden:true,value:'',classList:{contains:()=>false,remove(){},toggle(){return true}},elements:{},setAttribute(){},querySelectorAll:()=>[],reportValidity:()=>true,addEventListener(n,f){this['on'+n]=f},append(){},click(){clicked=this.href},remove(){}};
 const document={documentElement:{},querySelectorAll:s=>s==='[data-experience]'?[0,1,2].map(i=>Object.assign(el('experience-'+i),{dataset:{experience:String(i)}})):s==='[data-hotel-option]'?[5,3,6].map(i=>Object.assign(el('hotel-option-'+i),{dataset:{hotelOption:String(i)}})):s==='[data-inquiry]'?[Object.assign(el('audit-cta'),{dataset:{inquiry:'audit'}}),Object.assign(el('group-cta'),{dataset:{inquiry:'group'}})]:[],querySelector:el,getElementById:el,createElement:()=>el('temporary'),body:el('body')};
 const ctx=vm.createContext({document,location:{search:'?lang='+lang,pathname:'/'+page},URL,URLSearchParams,Date,Intl,encodeURIComponent,FormData:class{get(k){return values[k]}}});vm.runInContext(source,ctx);
 const html=el('app').innerHTML;assert.equal(document.documentElement.lang,lang==='pt'?'pt-PT':lang);assert(html.includes('data-lang="en"'));if(lang==='en'){assert(html.includes(isEvent?'Your big day.':'Your guests are already there.'));assert(!/¿|Não|Solicitar|Su gran día/.test(html));}assert(!html.includes('undefined'));assert.equal((html.match(/<h1>/g)||[]).length,1);
 const ids=[...html.matchAll(/id="([^"]+)"/g)].map(x=>x[1]);assert.equal(ids.length,new Set(ids).size);for(const a of html.matchAll(/href="#([^"]+)"/g))assert(ids.includes(a[1]),'Missing anchor '+a[1]);
 for(const a of html.matchAll(/(?:href|src)="((?:index|eventos)\.html|[^"?]+\.(?:js|css|webp))(?:\?[^"]*)?"/g))assert(fs.existsSync('dist/'+a[1]),'Missing asset '+a[1]);
 assert(html.includes('mailto:sucessomacico@gmail.com'));assert(html.includes('tel:+351927653087'));
 el(isEvent?'event-form':'lead-form').onsubmit({preventDefault(){}});assert(clicked.startsWith('https://wa.me/351927653087?text='));assert(decodeURIComponent(clicked).includes('Ana & João'));
 const email=el(isEvent?'event-email':'email-link');email.onclick({currentTarget:email});assert(email.href.startsWith('mailto:sucessomacico@gmail.com?subject='));
 if(isEvent){el('event-form').elements.need={value:''};for(const [i,need] of [0,3,1].entries()){el('experience-'+i).onclick();assert.equal(el('event-form').elements.need.value,String(need));el('event-form').onsubmit({preventDefault(){}});assert(decodeURIComponent(clicked).includes(['Essential Bar','Signature Experience','Full Bar Experience'][i]));}el('#event-form [name=need]').onchange();assert(el('experience-choice').hidden);el('[data-corporate]').onclick();assert.equal(el('#event-form [name=type]').value,'3');assert.equal(el('#event-form [name=need]').value,'4');assert(decodeURIComponent(clicked).includes('Signature Cocktails'));assert(html.includes('id="event-planning"'));assert(html.includes('id="event-faq"'));assert(html.includes('Corporate Events'));assert(html.includes('Gin'));}else{
 for(const i of [5,3,6]){el('hotel-option-'+i).onclick();assert.equal(el('#lead-form select').value,String(i));}el('audit-cta').onclick();assert.equal(el('#lead-form select').value,'5');el('group-cta').onclick();assert.equal(el('#lead-form select').value,'6');assert(html.includes('+100%'));assert(html.includes('2021')&&html.includes('2024'));assert(!html.includes('3×'));
 const calc=v=>vm.runInContext(`calculatePotential(${JSON.stringify({...values,...v})})`,ctx);
 assert(Math.abs(calc({}).monthly-4590)<.0001);assert.equal(calc({lift:0,ticketLift:0}).monthly,0);assert.equal(calc({guests:0}).annual,0);assert.equal(calc({days:0}).annual,0);assert.equal(calc({penetration:100,lift:10,ticketLift:0}).monthly,0);assert.equal(calc({guests:-1}),null);assert.equal(calc({ticket:''}),null);assert.equal(calc({days:32}),null);
 }
 const metadata=JSON.parse(el('structured-data').textContent);assert.equal(metadata.telephone,'+351927653087');assert(!metadata.review&&!metadata.aggregateRating);
 if(lang==='es'){
  let base=fs.readFileSync('dist/'+page,'utf8');base=base.slice(0,base.indexOf('<div id="app">'))+'<div id="app">'+html+'</div>\n<noscript><style>.contact-form,.language,.menu-toggle,#calculator-form,#estimate-guests{display:none}</style></noscript>\n</body></html>\n';
  base=base.replace(/<title>.*?<\/title>/,`<title>${document.title}</title>`).replace(/(<meta name="description" content=")[^"]*/, '$1'+el('meta[name="description"]').content);
  for(const prop of ['og:title','og:description','og:url','og:locale'])base=base.replace(new RegExp(`(<meta property="${prop}" content=")[^"]*`),'$1'+el(`meta[property="${prop}"]`).content);
  base=base.replace(/(<script id="structured-data" type="application\/ld\+json">)[\s\S]*?<\/script>/,'$1'+el('structured-data').textContent+'</script>');fs.writeFileSync('dist/'+page,base);
 }
 console.log('PASS',page,lang,'contact forms, links, metadata, render'+(!isEvent?', calculator and historical-result boundaries':''));
}

// First-visit device selection, explicit links, saved preference and blocked storage.
const locales=fs.readFileSync('dist/english.js','utf8');
for(const [search,device,saved,expected] of [['','pt-PT',null,'pt'],['','pt-BR',null,'pt'],['','es-ES',null,'es'],['','en-US',null,'en'],['','fr-FR',null,'en'],['?lang=en','pt-PT',null,'en'],['?lang=invalid','es-ES',null,'es'],['','es-ES','pt','pt'],['?lang=es','pt-PT','en','es']]){
 const ctx=vm.createContext({location:{search},URLSearchParams,navigator:{languages:[device],language:device},localStorage:{getItem:()=>saved}});vm.runInContext(locales,ctx);assert.equal(vm.runInContext('initialLanguage()',ctx),expected);
}
const blocked=vm.createContext({location:{search:''},URLSearchParams,navigator:{language:'pt-PT'},localStorage:{getItem(){throw Error('blocked')}}});vm.runInContext(locales,blocked);assert.equal(vm.runInContext('initialLanguage()',blocked),'pt');console.log('PASS device locale, explicit URLs, manual preference, unsupported locales and restricted storage');
