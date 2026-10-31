/* Small, dependency-free interaction layer. Static HTML remains usable without JS. */
function calculateLosses(values){
 const keys=['drinks','overPour','bottleCost','guests','share','price','days','season'];const v={};
 const max={drinks:100000,overPour:70,bottleCost:10000,guests:100000,share:100,price:10000,days:31,season:366};
 for(const k of keys){if(values[k]===''||values[k]===null||values[k]===undefined)return null;v[k]=Number(values[k]);if(!Number.isFinite(v[k])||v[k]<0||v[k]>max[k])return null;}
 if(!Number.isInteger(v.days)||!Number.isInteger(v.season))return null;
 const pourDay=v.drinks*v.overPour/70*v.bottleCost,salesDay=v.guests*v.share/100*v.price;
 return {pour:pourDay*v.days,sales:salesDay*v.days,month:(pourDay+salesDay)*v.days,season:(pourDay+salesDay)*v.season};
}
function prepareEnquiry(form){
 const lines=[];
 for(const field of form.querySelectorAll('input[name],select[name],textarea[name]')){
  if(field.name.startsWith('_')||field.type==='hidden'||field.disabled||field.closest('[hidden]'))continue;
  const value=field.tagName==='SELECT'?field.selectedOptions[0]?.textContent:field.value.trim();
  if(!value)continue;const label=field.closest('label')?.childNodes[0]?.textContent?.trim()||field.name;
  lines.push(`${label.replace(/\s*\*\s*$/,'')}: ${value}`);
 }
 return `${form.dataset.subject||'Cheers Experiences'}\n\n${lines.join('\n')}`;
}
function enquiryURL(channel,subject,message){return channel==='email'?'mailto:info@cheersexperiences.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(message):'https://wa.me/351927653087?text='+encodeURIComponent(message);}
function eventFieldState(type){return {guestsRequired:Number(type)<6,momentsVisible:String(type)==='0'};}
if(typeof module!=='undefined'&&module.exports)module.exports={calculateLosses,enquiryURL,eventFieldState,prepareEnquiry};
if(typeof document!=='undefined')(()=>{
 const supported=['pt','es','en'];let inNavigation=false;
 const baseURL=()=>window.__cheersPreview?'https://cheersexperiences.com/':location.href;
 function updateHistory(method,url){try{history[method]({},'',url);}catch{}}
 const pageRoute=(language,event)=>`${language==='pt'?'':`/${language}`}/${event?'eventos.html':'index.html'}`;
 function openTarget(hash){
  const aliases={'first-meeting':'contact','hotel':'hotel','event-planning':'method','partnership-models':'venues','opportunity':'project-offers','project-options':'project-offers','case-study':'team','contact':'contact','calculator':'calculator'};
  const id=decodeURIComponent(hash.replace(/^#/,''));const target=document.getElementById(id)||document.getElementById(aliases[id]);if(!target)return false;
  if(target.tagName==='DETAILS')target.open=true;for(let p=target.parentElement;p;p=p.parentElement)if(p.tagName==='DETAILS')p.open=true;
  target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});return true;
 }
 async function navigate(raw,{replace=false,preserve=false}={}){
  const url=new URL(raw,baseURL());const requested=url.pathname;let html;
  if(inNavigation)return;inNavigation=true;
  const previous=preserve?Object.fromEntries([...document.querySelectorAll('.contact-form [name]')].filter(e=>!e.name.startsWith('_')).map(e=>[e.name,e.value])):{};
  try{
   if(window.__cheersPreview)html=window.__cheersPreview[requested];
   else{const response=await fetch(requested,{credentials:'same-origin'});if(!response.ok)throw Error('navigation');html=await response.text();}
   if(!html)throw Error('page');
   const next=new DOMParser().parseFromString(html,'text/html');
   if(!next.body.dataset.language)throw Error('document');
   document.title=next.title;document.documentElement.lang=next.documentElement.lang;
   for(const selector of ['meta[name="description"]','link[rel="canonical"]','meta[property^="og:"]','link[rel="alternate"]','script[type="application/ld+json"]']){
    document.head.querySelectorAll(selector).forEach(n=>n.remove());next.head.querySelectorAll(selector).forEach(n=>document.head.append(n.cloneNode(true)));
   }
   document.body.innerHTML=next.body.innerHTML;document.body.dataset.page=next.body.dataset.page;document.body.dataset.language=next.body.dataset.language;
   if(!window.__cheersPreview)updateHistory(replace?'replaceState':'pushState',url.pathname+url.search+url.hash);
   else updateHistory('replaceState',location.pathname+location.search+url.hash);
   bind();window.cheersTrackPage?.();for(const [name,value]of Object.entries(previous)){const field=document.querySelector(`.contact-form [name="${name}"]`);if(field)field.value=value;}
   const ef=document.querySelector('[data-event-form]');if(ef)ef.dispatchEvent(new Event('change'));
   if(url.hash)openTarget(url.hash);else window.scrollTo({top:0,behavior:'instant'});
   if(!preserve&&!url.hash)document.getElementById('main')?.focus({preventScroll:true});
   if(preserve)document.querySelector(`[data-language="${document.body.dataset.language}"]`)?.focus({preventScroll:true});
  }catch{
   if(!window.__cheersPreview)location.assign(raw);
  }finally{inNavigation=false;}
 }
 function closeMenu(refocus=false){const toggle=document.querySelector('.menu-toggle'),nav=document.getElementById('navigation');nav?.classList.remove('open');toggle?.setAttribute('aria-expanded','false');if(toggle)toggle.childNodes[0].textContent=toggle.dataset.menu;if(refocus)toggle?.focus();}
 function bind(){
  const toggle=document.querySelector('.menu-toggle'),nav=document.getElementById('navigation');
  toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.childNodes[0].textContent=open?toggle.dataset.close:toggle.dataset.menu;});
  const hotel=document.querySelector('[data-lead-form]'),event=document.querySelector('[data-event-form]');
  if(event){
   function update(){const s=eventFieldState(event.elements.type.value);event.elements.guests.required=s.guestsRequired;event.querySelector('[data-guest-required]').hidden=!s.guestsRequired;event.querySelector('[data-partner-help]').hidden=s.guestsRequired;event.querySelector('[data-wedding-moments]').hidden=!s.momentsVisible;event.elements.moment.disabled=!s.momentsVisible;}
   event.addEventListener('change',update);update();
  }
  function enhanceSubmit(form){
   form.addEventListener('submit',ev=>{
    ev.preventDefault();if(!form.reportValidity())return;
    const status=form.querySelector('[data-form-status]');
    status.textContent=status.dataset.ready;
    // A direct hand-off avoids depending on an unavailable form relay.
    // Preparing a message is not confirmation that the visitor sent it.
    location.assign(enquiryURL('whatsapp',form.dataset.subject,prepareEnquiry(form)));
   });
  }
  // Hotel requests post straight to info@ through FormSubmit (native POST, no fetch); events keep the WhatsApp hand-off.
  if(hotel)hotel.addEventListener('submit',ev=>{
   if(!hotel.reportValidity()){ev.preventDefault();return;}
   const button=hotel.querySelector('button[type="submit"]');
   if(window.__cheersPreview){ev.preventDefault();hotel.querySelector('[data-form-status]').textContent=button.dataset.preview;return;}
   button.textContent=button.dataset.loading;
  });
  if(event)enhanceSubmit(event);
  for(const form of [hotel,event].filter(Boolean))form.querySelectorAll('[data-channel]').forEach(a=>a.addEventListener('click',ev=>{
   if(!form.reportValidity()){ev.preventDefault();return;}
   a.href=enquiryURL(a.dataset.channel,form.dataset.subject,prepareEnquiry(form));form.querySelector('[data-form-status]').textContent=form.querySelector('[data-form-status]').dataset.ready;
  }));
  document.querySelectorAll('[data-carousel]').forEach(track=>{const section=track.closest('section');const controls=section?.querySelector('[data-carousel-controls]');const prev=section?.querySelector('[data-carousel-prev]'),next=section?.querySelector('[data-carousel-next]');if(!controls||!prev||!next)return;controls.hidden=false;const step=()=>{const item=track.querySelector('li');return item?item.getBoundingClientRect().width+20:300;};const sync=()=>{prev.disabled=track.scrollLeft<=4;next.disabled=track.scrollLeft+track.clientWidth>=track.scrollWidth-4;};prev.addEventListener('click',()=>track.scrollBy({left:-step(),behavior:'smooth'}));next.addEventListener('click',()=>track.scrollBy({left:step(),behavior:'smooth'}));track.addEventListener('scroll',sync,{passive:true});sync();});
 document.querySelectorAll('[data-project]').forEach(a=>a.addEventListener('click',()=>{if(hotel)hotel.elements.opportunity.selectedIndex=Number(a.dataset.project);}));
  document.querySelectorAll('[data-experience]').forEach(a=>a.addEventListener('click',()=>{if(event)event.elements.need.value=a.dataset.experience;}));
  document.querySelectorAll('[data-event-type]').forEach(a=>a.addEventListener('click',()=>{if(event){event.elements.type.value=a.dataset.eventType;event.dispatchEvent(new Event('change'));}}));
  document.querySelectorAll('[data-calculator]').forEach(form=>{
   const update=()=>{const values=Object.fromEntries(new FormData(form));const result=calculateLosses(values);const status=form.querySelector('[data-calc-status]');status.textContent=result?'':status.dataset.error;const fmt=new Intl.NumberFormat(form.dataset.locale,{style:'currency',currency:'EUR',maximumFractionDigits:0});form.querySelectorAll('[data-output]').forEach((output,i)=>output.textContent=result?fmt.format([result.pour,result.sales,result.month,result.season][i]):'—');};
   form.addEventListener('input',update);form.addEventListener('submit',e=>e.preventDefault());update();
  });
 }
 document.addEventListener('click',event=>{
  const a=event.target.closest('a[href]');if(!a||event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||a.target==='_blank'||a.hasAttribute('download'))return;
  const href=a.getAttribute('href');if(href.startsWith('#')){if(openTarget(href)){event.preventDefault();updateHistory('replaceState',location.pathname+location.search+href);}closeMenu();return;}
  const url=new URL(href,baseURL());
  if((url.origin===location.origin||window.__cheersPreview)&&/^(?:\/(?:pt|es|en))?\/(?:index|eventos)\.html$/.test(url.pathname)){
   event.preventDefault();const targetLang=a.dataset.language;if(targetLang){try{localStorage.setItem('cheers-lang',targetLang);}catch{}url.hash=location.hash;const campaign=new URLSearchParams(location.search);campaign.delete('lang');url.search=campaign.toString();}
   navigate(url.pathname+url.search+url.hash,{preserve:!!targetLang});
  }
 });
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&document.getElementById('navigation')?.classList.contains('open'))closeMenu(true);});
 window.addEventListener('popstate',()=>{if(!window.__cheersPreview)navigate(location.href,{replace:true});});
 // Legacy ?lang= links remain valid. New links point to complete language-specific HTML.
 const explicit=new URLSearchParams(location.search).get('lang');
 if(supported.includes(explicit)&&explicit!==document.body.dataset.language){const campaign=new URLSearchParams(location.search);campaign.delete('lang');const q=campaign.toString();navigate(pageRoute(explicit,document.body.dataset.page==='events')+(q?'?'+q:'')+location.hash,{replace:true});}
 else{bind();if(location.hash)requestAnimationFrame(()=>openTarget(location.hash));}
})();
