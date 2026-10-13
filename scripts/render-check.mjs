import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
// Render the dependency-free site for initial HTML and validate contact/calculator logic.
const scripts=[...fs.readFileSync('dist/index.html','utf8').matchAll(/<script defer src="([^"]+)"/g)].map(m=>m[1].split('?')[0]);assert(scripts.includes('english.js'));
const source=scripts.map(f=>fs.readFileSync('dist/'+f,'utf8')).join('\n');
const rendered=new Map();
for(const page of ['index.html','eventos.html'])for(const lang of ['es','pt','en']){
 const elements={},isEvent=page==='eventos.html';let clicked='';
 const values={rooms:'100',occupancy:'75',guests:isEvent?'125':'150',penetration:'30',ticket:'12',days:'30',lift:'5',ticketLift:'10',email:'qa@example.com',name:'Ana & João',hotel:'Hotel QA',location:'Viseu',opportunity:'5',message:'Teste & detalhe',type:'0',date:'2027-06-12',place:'Viseu',model:'3',need:'3',period:'Abril 2027',phone:'+351 900 000 000'};
 const el=k=>elements[k]??={innerHTML:'',textContent:'',content:'',hidden:true,value:'',classList:{contains:()=>false,remove(){},toggle(){return true}},elements:{type:{value:'0',addEventListener(n,f){this['on'+n]=f}},guests:{required:true}},setAttribute(){},querySelectorAll:()=>[],reportValidity:()=>true,addEventListener(n,f){this['on'+n]=f},append(){},click(){clicked=this.href},remove(){}};
 const selector=s=>s==='#event-form [name=type]'?el('event-form').elements.type:el(s);
 const document={documentElement:{},querySelectorAll:s=>s==='[data-project]'?[0,7,3].map(i=>Object.assign(el('project-'+i),{dataset:{project:String(i)}})):s==='[data-event-project]'?[0,3,6,7].map(i=>Object.assign(el('event-project-'+i),{dataset:{eventProject:String(i)}})):s==='[data-experience]'?[0,1,2].map(i=>Object.assign(el('experience-'+i),{dataset:{experience:String(i)}})):s==='[data-hotel-option]'?[5,3,6].map(i=>Object.assign(el('hotel-option-'+i),{dataset:{hotelOption:String(i)}})):s==='[data-inquiry]'?[Object.assign(el('audit-cta'),{dataset:{inquiry:'audit'}}),Object.assign(el('group-cta'),{dataset:{inquiry:'group'}})]:[],querySelector:selector,getElementById:el,createElement:()=>el('temporary'),body:el('body')};
 const ctx=vm.createContext({document,location:{search:'?lang='+lang,pathname:'/'+page},URL,URLSearchParams,Date,Intl,encodeURIComponent,FormData:class{get(k){return values[k]}}});vm.runInContext(source,ctx);
 const html=el('app').innerHTML;rendered.set(page+'?lang='+lang,html);assert.equal(document.documentElement.lang,lang==='pt'?'pt-PT':lang);assert(html.includes('data-lang="en"'));if(lang==='en'){assert(html.includes(isEvent?'Your big day.':'A bar that lives up'));assert(!/¿|Não|Solicitar|Su gran día/.test(html));}assert(!html.includes('undefined'));assert.equal((html.match(/<h1>/g)||[]).length,1);
 const ids=[...html.matchAll(/id="([^"]+)"/g)].map(x=>x[1]);assert.equal(ids.length,new Set(ids).size);for(const a of html.matchAll(/href="#([^"]+)"/g))assert(ids.includes(a[1]),'Missing anchor '+a[1]);
 for(const a of html.matchAll(/(?:href|src)="((?:index|eventos)\.html|[^"?]+\.(?:js|css|webp))(?:\?[^"]*)?"/g))assert(fs.existsSync('dist/'+a[1]),'Missing asset '+a[1]);
 assert(html.includes('mailto:sucessomacico@gmail.com'));assert(html.includes('tel:+351927653087'));
 el(isEvent?'event-form':'lead-form').onsubmit({preventDefault(){}});if(isEvent){assert(clicked.startsWith('https://wa.me/351927653087?text='));assert(decodeURIComponent(clicked).includes('Ana & João'));}else{assert(html.includes('action="https://formsubmit.co/sucessomacico@gmail.com" method="POST"'));assert(html.includes('name="_next"'));assert(el('#lead-form [name=_subject]').value.includes('Cheers Experiences'));}
 const email=el(isEvent?'event-email':'whatsapp-link');email.onclick({currentTarget:email});assert(email.href.startsWith(isEvent?'mailto:sucessomacico@gmail.com?subject=':'https://wa.me/351927653087?text='));
 if(isEvent){
  for(const i of [0,3,6,7]){el('event-project-'+i).onclick();assert.equal(el('event-form').elements.type.value,String(i));assert.equal(el('event-form').elements.guests.required,i<6);assert.equal(el('partner-guest-help').hidden,i<6);assert.equal(el('wedding-moment-field').hidden,i!==0);}
  el('event-form').elements.type.value='0';el('event-form').elements.type.onchange();assert.equal(el('event-form').elements.guests.required,true);assert(el('partner-guest-help').hidden);
  assert(html.indexOf('id="event-offers"')<html.indexOf('id="venues"'));assert(html.includes('id="partnership-models"'));assert(decodeURIComponent(email.href).includes('qa@example.com'));
  el('event-form').elements.need={value:''};for(const [i,need] of [0,3,1].entries()){el('experience-'+i).onclick();assert.equal(el('event-form').elements.need.value,String(need));el('event-form').onsubmit({preventDefault(){}});assert(decodeURIComponent(clicked).includes(['Essential Bar','Signature Experience','Full Bar Experience'][i]));}el('#event-form [name=need]').onchange();assert(el('experience-choice').hidden);el('event-form').elements.type.value='6';el('event-form').elements.type.onchange();assert.equal(el('event-form').elements.guests.required,false);el('[data-corporate]').onclick();assert.equal(el('event-form').elements.guests.required,true);assert(el('wedding-moment-field').hidden);assert.equal(selector('#event-form [name=type]').value,'3');assert.equal(el('#event-form [name=need]').value,'4');assert(decodeURIComponent(clicked).includes('Signature Cocktails'));assert(html.includes('id="event-planning"'));assert(html.includes('id="event-faq"'));assert(html.includes('id="corporate"'));assert(html.includes('Gin'));}else{
 assert(html.includes('name="period"'));assert(html.indexOf('id="project-offers"')<html.indexOf('id="first-meeting"'));assert(decodeURIComponent(email.href).includes('Abril 2027'));
 for(const i of [0,7,3]){el('project-'+i).onclick();assert.equal(el('#lead-form select').value,String(i));}
 for(const i of [5,3,6]){el('hotel-option-'+i).onclick();assert.equal(el('#lead-form select').value,String(i));}el('audit-cta').onclick();assert.equal(el('#lead-form select').value,'5');el('group-cta').onclick();assert.equal(el('#lead-form select').value,'6');assert(html.includes('+100%'));assert(html.includes('2021')&&html.includes('2024'));assert(!html.includes('3×'));
 const calc=v=>vm.runInContext(`calculatePotential(${JSON.stringify({...values,...v})})`,ctx);
 assert(Math.abs(calc({}).monthly-4590)<.0001);assert.equal(calc({lift:0,ticketLift:0}).monthly,0);assert.equal(calc({guests:0}).annual,0);assert.equal(calc({days:0}).annual,0);assert.equal(calc({penetration:100,lift:10,ticketLift:0}).monthly,0);assert.equal(calc({guests:-1}),null);assert.equal(calc({ticket:''}),null);assert.equal(calc({days:32}),null);
 }
 const metadata=JSON.parse(el('structured-data').textContent);assert.equal(metadata.telephone,'+351927653087');assert(!metadata.review&&!metadata.aggregateRating);
 if(lang==='es'){
  let base=fs.readFileSync('dist/'+page,'utf8');base=base.slice(0,base.indexOf('<div id="app">'))+'<div id="app">'+html+'</div>\n<noscript><style>.contact-form,.language,.menu-toggle,#calculator-form,#estimate-guests{display:none}.nav{display:flex!important;position:static;flex-wrap:wrap;width:auto;padding:10px}.header{height:auto;position:relative}.header-inner{flex-wrap:wrap}</style></noscript>\n</body></html>\n';
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


// Validate all internal page links and fragments across both real pages, in every language.
for(const [route,html] of rendered){
 const base=new URL(route,'https://cheers.guru/');
 for(const [,href] of html.matchAll(/href="([^" ]*)"/g)){
  const url=new URL(href,base);
  if(url.origin!==base.origin||['mailto:','tel:'].includes(url.protocol))continue;
  const path=url.pathname==='/'?'index.html':url.pathname.slice(1);
  assert(fs.existsSync('dist/'+path),'Missing route '+href);
  if(url.hash){
   const destination=rendered.get(path+'?lang='+(url.searchParams.get('lang')||base.searchParams.get('lang')))||fs.readFileSync('dist/'+path,'utf8');
   assert(destination.includes('id="'+url.hash.slice(1)+'"'),'Missing cross-page fragment '+href);
  }
 }
 const nav=html.match(/<nav class="nav"[\s\S]*?<\/nav>/)[0];
 assert(!nav.includes('destination-weddings'),'Separate wedding link still in main navigation');
 assert(nav.includes('href="#team"'),'Team must be an existing local section');
 assert.equal((html.match(/id="team"/g)||[]).length,1);
 assert(!html.includes('href="/destination-weddings/'),'Active page still links to old wedding route');
}
// Check actual section-navigation behaviour without a network or a browser.
const outer={open:false,parentElement:null},inner={open:false,parentElement:{closest:()=>outer}};
let scrolled=false,prevented=false;
const target={closest:()=>inner,scrollIntoView(){scrolled=true;}};
let listener;
const ctxNav=vm.createContext({document:{getElementById:id=>id==='team'?target:null,querySelectorAll:()=>[{getAttribute:()=> '#team',addEventListener:(event,fn)=>{listener=fn;}}]}});
vm.runInContext(fs.readFileSync('dist/premium.js','utf8'),ctxNav);
vm.runInContext('bindSectionLinks()',ctxNav);listener({preventDefault(){prevented=true;}});
assert(prevented&&scrolled&&inner.open&&outer.open);assert.equal(vm.runInContext('scrollToSection("missing")',ctxNav),false);
console.log('PASS unified navigation, all cross-page targets, team section and nested-detail scrolling');
