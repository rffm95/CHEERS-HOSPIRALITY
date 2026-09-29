/* Shared presentation and contact paths. No new service or outcome claims. */
const premiumLabels={
 pt:{hotels:'Hotéis',events:'Eventos',weddings:'Casamentos',hotelCTA:'Falar do meu hotel',quote:'Pedir orçamento',hotelForm:'Vamos conhecer o seu hotel',eventForm:'Conte-nos o que vai celebrar',hotelHint:'Partilhe o hotel, a localização e o que gostaria de melhorar. Começamos por aí.',retry:'Abrir novamente no WhatsApp',imageNote:'Imagens ilustrativas de ambiente; não são um portefólio de eventos realizados.',overview:'Encontrar o bar certo',weddingCard:'Casamentos & celebrações',weddingDesc:'Um bar à medida do vosso dia.',corporateCard:'Eventos empresariais',corporateDesc:'Hospitalidade com a identidade da sua marca.',formatsCard:'Escolher a experiência',formatsDesc:'Cocktail Bar, Gin Bar ou serviço completo.',open:'Explorar',contact:'Contactos',hotelMessage:'Olá! Gostaria de falar sobre o bar do meu hotel.',eventMessage:'Olá! Gostaria de pedir uma proposta de bar para um evento.',weddingMessage:'Olá! Estamos a organizar um casamento e gostaríamos de falar sobre o serviço de bar.'},
 es:{hotels:'Hoteles',events:'Eventos',weddings:'Bodas',hotelCTA:'Hablar de mi hotel',quote:'Pedir presupuesto',hotelForm:'Conozcamos su hotel',eventForm:'Cuéntenos qué va a celebrar',hotelHint:'Comparta el hotel, la ubicación y lo que le gustaría mejorar. Empezamos por ahí.',retry:'Abrir de nuevo en WhatsApp',imageNote:'Imágenes de ambiente ilustrativas; no son un portafolio de eventos realizados.',overview:'Encuentre el bar adecuado',weddingCard:'Bodas & celebraciones',weddingDesc:'Un bar a la altura de vuestro día.',corporateCard:'Eventos de empresa',corporateDesc:'Hospitalidad con la identidad de su marca.',formatsCard:'Elegir la experiencia',formatsDesc:'Cocktail Bar, Gin Bar o servicio completo.',open:'Explorar',contact:'Contacto',hotelMessage:'¡Hola! Me gustaría hablar del bar de mi hotel.',eventMessage:'¡Hola! Me gustaría pedir una propuesta de bar para un evento.',weddingMessage:'¡Hola! Estamos organizando una boda y nos gustaría hablar del servicio de bar.'},
 en:{hotels:'Hotels',events:'Events',weddings:'Weddings',hotelCTA:'Discuss my hotel',quote:'Request a quote',hotelForm:'Tell us about your hotel',eventForm:'Tell us what you are celebrating',hotelHint:'Share your hotel, location and what you would like to improve. We will start there.',retry:'Open WhatsApp again',imageNote:'Illustrative atmosphere images; not a portfolio of completed events.',overview:'Find your kind of bar',weddingCard:'Weddings & celebrations',weddingDesc:'A bar that feels like your day.',corporateCard:'Corporate events',corporateDesc:'Hospitality with your brand’s personality.',formatsCard:'Choose your experience',formatsDesc:'Cocktail Bar, Gin Bar or a complete service.',open:'Explore',contact:'Contact',hotelMessage:'Hello! I would like to discuss my hotel bar.',eventMessage:'Hello! I would like a bar proposal for an event.',weddingMessage:'Hello! We are planning a wedding and would like to discuss the bar service.'}
};
function applyPremiumCopy(copy,events){
 for(const lang of ['pt','es','en']){
  copy[lang].cta=premiumLabels[lang].hotelCTA;
  events[lang].cta=premiumLabels[lang].quote;
  events[lang].imageNote=premiumLabels[lang].imageNote;
 }
 copy.pt.contactNote='Para proprietários, direção geral, operações e responsáveis de F&B. Atendimento em português, espanhol e inglês.';
 copy.es.contactNote='Para propietarios, dirección general, operaciones y responsables de F&B. Atención en portugués, español e inglés.';
}
function premiumImage(name,cls='',priority=false){
 const landscape=name==='events-hero';
 return `<img class="${cls}" src="/images/${name}-1280.webp" srcset="/images/${name}-640.webp 640w, /images/${name}-1280.webp 1280w" sizes="${landscape?'100vw':'(max-width: 760px) 100vw, 45vw'}" width="${landscape?1280:900}" height="${landscape?720:1600}" alt="" ${priority?'fetchpriority="high"':'loading="lazy"'} decoding="async">`;
}
function premiumContact(lang,kind){
 const t=premiumLabels[lang],hotel=kind==='hotel',wedding=kind==='weddings';
 const anchor=hotel?'contact':wedding?'wedding-contact':'event-contact';
 const message=hotel?t.hotelMessage:wedding?t.weddingMessage:t.eventMessage;
 return `<aside class="quick-contact" aria-label="${t.contact}"><a class="quick-whatsapp" href="https://wa.me/351927653087?text=${encodeURIComponent(message)}" target="_blank" rel="noopener noreferrer">WhatsApp <span aria-hidden="true">↗</span></a><a class="btn" href="#${anchor}">${hotel?t.hotelCTA:t.quote} <span aria-hidden="true">↗</span></a></aside>`;
}
function eventIntroLinks(lang){const t=premiumLabels[lang];return `<nav class="wrap event-paths" aria-label="${t.overview}">${[[t.weddingCard,t.weddingDesc,'celebrations'],[t.corporateCard,t.corporateDesc,'corporate'],[t.formatsCard,t.formatsDesc,'experiences']].map((x,i)=>`<a href="#${x[2]}"><span class="path-number">0${i+1}</span><strong>${x[0]}</strong><span>${x[1]}</span><b aria-hidden="true">↗</b></a>`).join('')}</nav>`;}
let contactObserver;
function bindPremiumContact(){
 if(typeof IntersectionObserver==='undefined')return;
 if(contactObserver)contactObserver.disconnect();
 const form=document.querySelector('.contact-form'),dock=document.querySelector('.quick-contact');
 if(form&&dock){contactObserver=new IntersectionObserver(entries=>{const entry=entries[0];dock.classList.toggle('is-hidden',entry.isIntersecting);dock.inert=entry.isIntersecting;},{threshold:0});contactObserver.observe(form);}
}
