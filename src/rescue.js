/* Motion layer for the "after-hours" skin (rescue.css). Dependency-free; everything here is decoration.
   The page is complete without it, and it switches itself off under prefers-reduced-motion.
   atelier.js calls cheersFx.init() again after an in-page navigation. */
(()=>{
 const root=document.documentElement;
 const still=matchMedia('(prefers-reduced-motion: reduce)');
 const fine=matchMedia('(hover:hover) and (pointer:fine)');
 let observer=null,parallax=[],ticking=false;

 // Split a headline into words inside masks; words on the same visual line share a delay (line-by-line reveal).
 function splitLines(el){
  if(el.classList.contains('is-split'))return;
  const walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
  for(const node of nodes){
   const frag=document.createDocumentFragment();
   for(const part of node.textContent.split(/( +)/)){
    if(!part)continue;
    if(/^ +$/.test(part)){frag.append(' ');continue;}
    const w=document.createElement('span');w.className='w';const inner=document.createElement('span');inner.textContent=part;w.append(inner);frag.append(w);
   }
   node.replaceWith(frag);
  }
  const words=[...el.querySelectorAll('.w')];const tops=[...new Set(words.map(w=>Math.round(w.getBoundingClientRect().top)))].sort((a,b)=>a-b);
  for(const w of words)w.style.setProperty('--l',tops.indexOf(Math.round(w.getBoundingClientRect().top)));
  el.dataset.lineCount=tops.length;el.classList.add('is-split');
 }
 function playLines(el){
  requestAnimationFrame(()=>requestAnimationFrame(()=>el.classList.add('is-in')));
  setTimeout(()=>el.classList.add('is-done'),1400+130*Number(el.dataset.lineCount||1));
 }

 // Numbers that already exist in the copy count up once when they scroll into view.
 function wrapNumbers(el){
  if(el.querySelector('.cnt'))return;
  const walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
  for(const node of nodes){
   if(!/\d/.test(node.textContent))continue;const frag=document.createDocumentFragment();
   for(const part of node.textContent.split(/(\d+)/)){
    if(/^\d+$/.test(part)){const s=document.createElement('span');s.className='cnt';s.dataset.to=part;s.textContent=part;frag.append(s);}else if(part)frag.append(part);
   }
   node.replaceWith(frag);
  }
 }
 function count(el){
  const to=Number(el.dataset.to);if(!to||still.matches)return;
  el.style.minWidth=el.getBoundingClientRect().width+'px';
  const t0=performance.now(),dur=900+Math.min(to,20)*45;
  const step=now=>{const p=Math.min(1,(now-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=String(Math.round(to*e));if(p<1)requestAnimationFrame(step);else el.textContent=el.dataset.to;};
  el.textContent='0';requestAnimationFrame(step);
 }

 // Infinite marquee from the existing "where we work" line (copies are hidden from assistive tech).
 function marquee(p){
  if(p.classList.contains('mq')||still.matches)return;
  const text=p.textContent.trim();p.setAttribute('aria-label',text);p.textContent='';p.classList.add('mq');
  const track=document.createElement('span');track.className='mq-track';
  for(let i=0;i<4;i++){const s=document.createElement('span');s.textContent=text;s.setAttribute('aria-hidden','true');track.append(s);}
  p.append(track);
  track.style.setProperty('--mq-t',Math.max(36,Math.round(track.scrollWidth/2/38))+'s');
 }

 function onScroll(){
  if(ticking)return;ticking=true;
  requestAnimationFrame(()=>{
   const vh=innerHeight;
   for(const [el,k] of parallax){const r=el.parentElement.getBoundingClientRect();if(r.bottom<-80||r.top>vh+80)continue;el.style.transform=`translate3d(0,${((r.top+r.height/2-vh/2)*k).toFixed(1)}px,0)`;}
   ticking=false;
  });
 }
 function magnetic(button){
  if(button.dataset.mag)return;button.dataset.mag='1';
  button.addEventListener('pointermove',e=>{const r=button.getBoundingClientRect();button.style.transform=`translate(${((e.clientX-r.left-r.width/2)*.14).toFixed(1)}px,${((e.clientY-r.top-r.height/2)*.28).toFixed(1)}px)`;});
  button.addEventListener('pointerleave',()=>{button.style.transform='';});
 }

 // Hero film (Spanish hotels page): starts muted so browsers allow autoplay; the button turns the sound on.
 // Hero film (Spanish hotels page): starts muted so browsers allow autoplay; the button turns the sound on.
 // Browsers sometimes refuse or interrupt the first play() (slow network, tab in background, battery saver),
 // so it retries when data arrives, when the video is on screen, when the tab comes back and on the first touch, scroll or key.
 let films=[];
 const kick=()=>films.forEach(f=>f());
 addEventListener('visibilitychange',()=>{if(!document.hidden)kick();});
 for(const e of ['pointerdown','touchstart','keydown','scroll'])addEventListener(e,kick,{passive:true});
 function film(fig){
  const v=fig.querySelector('video'),b=fig.querySelector('.video-sound');if(!v||!b||b.dataset.ready)return;b.dataset.ready='1';
  v.muted=true;b.hidden=false;
  // Rui asked for autoplay, so it also starts with "reduce motion" on (Windows "Animation effects" off); there it plays once instead of looping.
  if(still.matches)v.loop=false;
  let done=false;
  const tryPlay=()=>{if(done||!v.isConnected||!v.paused||v.ended)return;if(!b.matches('[aria-pressed=true]'))v.muted=true;const p=v.play();p&&p.catch(()=>{});};
  v.addEventListener('playing',()=>{fig.classList.remove('needs-tap');v.controls=false;});
  v.addEventListener('ended',()=>{done=true;});
  for(const e of ['loadedmetadata','loadeddata','canplay','canplaythrough'])v.addEventListener(e,tryPlay);
  fig.addEventListener('click',e=>{if(e.target===b)return;if(v.paused){done=false;v.play().catch(()=>{});}});
  new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting))tryPlay();},{threshold:.2}).observe(v);
  films.push(tryPlay);
  tryPlay();
  // last resort (e.g. iPhone in low power mode, which blocks every autoplay): show the native play button
  setTimeout(()=>{if(v.paused&&!done){fig.classList.add('needs-tap');v.controls=true;}},4000);
  b.addEventListener('click',()=>{v.muted=!v.muted;if(!v.muted){done=false;v.currentTime=0;v.play().catch(()=>{});}b.setAttribute('aria-pressed',String(!v.muted));b.textContent=v.muted?b.dataset.off:b.dataset.on;});
 }
 function init(){
  observer?.disconnect();parallax=[];films=[];
  if(document.body.dataset.skin!=='rescue'){root.classList.remove('fx');return;}
  root.classList.add('fx');
  const entry=document.body.dataset.page==='entry';
  // scroll reveals, staggered inside each group
  const groups=[['.section>.wrap>.eyebrow,.section>.wrap>h2,.section>.wrap>div>.eyebrow,.section>.wrap>div>h2,.section>.wrap>div>.lead,.section-head .eyebrow,.section-head h2,.section-head .lead,.value2-head>*',null],
   ['.value2-grid article',null],['.method2-steps li',null],['.method2-note',null],['.report-card',null],['.services2-grid article',null],['.services2-guarantee,.services2 .fine',null],
   ['.person-photo','left'],['.person-body',null],['.founder-path>.eyebrow,.timeline article,.founder-path .fine',null],['.contact-form',null],['.accordion details',null],
   ['.contact .lead,.contact-primary,.contact-checklist',null],['.footer-main>*',null],['.hero .eyebrow,.hero-lead,.hero-actions,.event-hero-price,.hero-proof,.digital-micro,.digital-jump',null],['.offer-grid>article',null],['.event-how>h3,.event-steps li',null],['.event-cta-box',null],['.event-types-photo,.partners-photo,.editorial-photo','left'],['.event-type',null],['.wedding-benefits article',null],['.signature-text .fine,.signature-text .accordion',null],['.corporate-brand,.corporate-list',null],['.partnership-grid>article',null],['.scope-layout>div:first-child>*',null],['.digital-package-grid>article',null],['.digital-scope,.screens-only',null],['.work-item',null],['.screen-example',null],['.digital-steps li',null],['.digital-faq>h3',null],['.tags,.context-grid article',null],['.contact-links,.contact-person',null],['.door .eyebrow,.door>p,.door-actions',null]];
  const reveal=[];
  for(const [selector,kind] of groups){
   const byParent=new Map();
   document.querySelectorAll(selector).forEach(el=>{if(el.dataset.rv!==undefined)return;const key=el.closest('.door,.person,.event-how,.event-type-grid,.partnership-grid,.digital-faq,.context-grid,.section,.hero,footer')||document.body;const i=byParent.get(key)||0;byParent.set(key,i+1);el.dataset.rv=kind||'';el.style.setProperty('--i',Math.min(i,6));reveal.push(el);});
  }
  // hero and door headlines start a little later so the mask reveal leads
  document.querySelectorAll('.hero .hero-lead,.hero .hero-actions,.door>p,.door-actions').forEach(el=>el.style.setProperty('--i',6));
  const lines=[...document.querySelectorAll(entry?'.door h2':'.hero h1')];
  lines.forEach(el=>{el.dataset.lines='';});
  const numbers=[...document.querySelectorAll('.method2-steps .eyebrow,#report h2,#checklist h2,.services2 .fine')];
  numbers.forEach(wrapNumbers);
  document.querySelectorAll('.hero-regions p').forEach(marquee);
  document.querySelectorAll('.hero2-video').forEach(film);
  const start=()=>{lines.forEach(el=>{splitLines(el);playLines(el);});};
  if(still.matches){reveal.forEach(el=>el.classList.add('in'));lines.forEach(el=>el.classList.add('is-split','is-in','is-done'));return;}
  (document.fonts?.ready||Promise.resolve()).then(start,start);
  observer=new IntersectionObserver(entries=>{
   for(const e of entries){
    if(!e.isIntersecting)continue;const el=e.target;observer.unobserve(el);
    if(el.classList.contains('cnt')){count(el);continue;}
    el.classList.add('in');
    // once revealed, drop the reveal attributes so hover transitions are not delayed by the stagger
    if(!el.matches('.contact h2'))setTimeout(()=>{delete el.dataset.rv;el.classList.remove('in');el.style.removeProperty('--i');},1400+110*Number(el.style.getPropertyValue('--i')||0));
   }
  },{rootMargin:'0px 0px -8% 0px',threshold:.08});
  reveal.forEach(el=>observer.observe(el));
  document.querySelectorAll('.cnt').forEach(el=>observer.observe(el));
  if(fine.matches){
   document.querySelectorAll('.button:not(.door .button)').forEach(magnetic);
   parallax=[...document.querySelectorAll('.hero2-visual img,.hero-visual img')].map(el=>[el,-.09]);
   onScroll();
  }
 }
 addEventListener('scroll',onScroll,{passive:true});
 window.cheersFx={init};
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
