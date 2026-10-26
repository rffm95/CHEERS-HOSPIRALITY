/* Small, dependency-free interaction layer. Static HTML remains usable without JS. */
function calculateRevenue(values){
 const keys=['guests','penetration','ticket','days','lift','ticketLift'];const v={};
 const max={guests:100000,penetration:100,ticket:10000,days:31,lift:100,ticketLift:1000};
 for(const k of keys){if(values[k]===''||values[k]===null||values[k]===undefined)return null;v[k]=Number(values[k]);if(!Number.isFinite(v[k])||v[k]<0||v[k]>max[k])return null;}
 if(!Number.isInteger(v.guests)||!Number.isInteger(v.days))return null;
 const current=v.guests*v.penetration/100*v.ticket*v.days;
 const simulated=v.guests*Math.min(100,v.penetration+v.lift)/100*v.ticket*(1+v.ticketLift/100)*v.days;
 const delta=simulated-current;return {current,simulated,delta,annual:delta*12};
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
if(typeof module!=='undefined'&&module.exports)module.exports={calculateRevenue,enquiryURL,eventFieldState};
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
   let submitting=false;
   form.addEventListener('submit',async ev=>{
    // Native POST stays as the no-JS fallback; enhanced path shows delivery/error states.
    if(!window.fetch)return;ev.preventDefault();if(submitting||!form.reportValidity())return;
    if(window.__cheersPreview){form.querySelector('[data-form-status]').textContent={pt:'Preview: o envio real está desativado. Pode testar a preparação por email ou WhatsApp.',es:'Preview: el envío real está desactivado. Puede probar la preparación por email o WhatsApp.',en:'Preview: live submission is disabled. You can test the email or WhatsApp draft.'}[document.body.dataset.language];return;}
    submitting=true;const button=form.querySelector('button[type="submit"]'),status=form.querySelector('[data-form-status]');button.disabled=true;button.textContent=button.dataset.loading;status.textContent='';form.setAttribute('aria-busy','true');
    const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),20000);
    try{
     const body=new FormData(form);
     // Send the visible option text (not its index) so the email is readable.
     if(typeof body.set==='function')for(const select of form.querySelectorAll('select[name]'))if(!select.disabled)body.set(select.name,select.selectedOptions[0]?.textContent||select.value);
     const response=await fetch('https://formsubmit.co/ajax/info@cheersexperiences.com',{method:'POST',body,headers:{Accept:'application/json'},signal:controller.signal});
     if(!response.ok)throw Error('delivery');const data=await response.json();if(data.success!==true&&data.success!=='true')throw Error('delivery');
     location.assign(form.elements._next.value);
    }catch{status.textContent=status.dataset.error;}
    finally{clearTimeout(timeout);submitting=false;button.disabled=false;button.textContent=button.dataset.normal+' ↗';form.removeAttribute('aria-busy');}
   });
  }
  for(const form of [hotel,event].filter(Boolean))enhanceSubmit(form);
  for(const form of [hotel,event].filter(Boolean))form.querySelectorAll('[data-channel]').forEach(a=>a.addEventListener('click',ev=>{
   if(!form.reportValidity()){ev.preventDefault();return;}
   a.href=enquiryURL(a.dataset.channel,form.dataset.subject,prepareEnquiry(form));form.querySelector('[data-form-status]').textContent=form.querySelector('[data-form-status]').dataset.ready;
  }));
  document.querySelectorAll('[data-carousel]').forEach(track=>{const section=track.closest('section');const controls=section?.querySelector('[data-carousel-controls]');const prev=section?.querySelector('[data-carousel-prev]'),next=section?.querySelector('[data-carousel-next]');if(!controls||!prev||!next)return;controls.hidden=false;const step=()=>{const item=track.querySelector('li');return item?item.getBoundingClientRect().width+20:300;};const sync=()=>{prev.disabled=track.scrollLeft<=4;next.disabled=track.scrollLeft+track.clientWidth>=track.scrollWidth-4;};prev.addEventListener('click',()=>track.scrollBy({left:-step(),behavior:'smooth'}));next.addEventListener('click',()=>track.scrollBy({left:step(),behavior:'smooth'}));track.addEventListener('scroll',sync,{passive:true});sync();});
 document.querySelectorAll('[data-project]').forEach(a=>a.addEventListener('click',()=>{if(hotel)hotel.elements.opportunity.value=a.dataset.project;}));
  document.querySelectorAll('[data-experience]').forEach(a=>a.addEventListener('click',()=>{if(event)event.elements.need.value=a.dataset.experience;}));
  document.querySelectorAll('[data-event-type]').forEach(a=>a.addEventListener('click',()=>{if(event){event.elements.type.value=a.dataset.eventType;event.dispatchEvent(new Event('change'));}}));
  document.querySelectorAll('[data-calculator]').forEach(form=>{
   const update=()=>{const values=Object.fromEntries(new FormData(form));const result=calculateRevenue(values);const status=form.querySelector('[data-calc-status]');status.textContent=result?'':status.dataset.error;const fmt=new Intl.NumberFormat(form.dataset.locale,{style:'currency',currency:'EUR',maximumFractionDigits:0});form.querySelectorAll('[data-output]').forEach((output,i)=>output.textContent=result?fmt.format([result.current,result.simulated,result.delta,result.annual][i]):'—');};
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
