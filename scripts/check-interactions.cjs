const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const {calculateRevenue,enquiryURL,eventFieldState,prepareEnquiry}=require('../src/atelier.js');
const input={guests:200,penetration:20,ticket:12,days:30,lift:5,ticketLift:10};
assert.deepEqual(calculateRevenue(input),{current:14400,simulated:19800,delta:5400,annual:64800});
assert.equal(calculateRevenue({...input,lift:0,ticketLift:0}).delta,0);
assert.equal(calculateRevenue({...input,guests:0}).delta,0);
assert.equal(calculateRevenue({...input,penetration:100,lift:50,ticketLift:0}).delta,0);
for(const bad of [{days:32},{ticket:''},{guests:-1},{guests:2.5},{lift:NaN},{penetration:101}])assert.equal(calculateRevenue({...input,...bad}),null);
for(const type of ['0','3','5','6','7'])assert.deepEqual(eventFieldState(type),{guestsRequired:Number(type)<6,momentsVisible:type==='0'});
const msg='Olá Rui\nLocal: Jávea & Viseu\nCocktails: 50%';
const mail=new URL(enquiryURL('email','Pedido & evento',msg));assert.equal(mail.searchParams.get('body'),msg);assert.equal(mail.searchParams.get('subject'),'Pedido & evento');
const wa=new URL(enquiryURL('whatsapp','Pedido',msg));assert.equal(wa.searchParams.get('text'),msg);
// Contact text must include readable selected options and omit hidden/disabled fields.
const field=(props)=>({closest(s){return s==='label'?{childNodes:[{textContent:props.label}]}:null;},...props});
const enquiry=prepareEnquiry({dataset:{subject:'Hotel inquiry'},querySelectorAll(){return [
 field({name:'name',tagName:'INPUT',value:' Rui ',label:'Nome *'}),
 field({name:'opportunity',tagName:'SELECT',selectedOptions:[{textContent:'Mystery Guest — 990 €'}],label:'Serviço'}),
 field({name:'message',tagName:'TEXTAREA',value:'Lima & hortelã',label:'Contexto'}),
 field({name:'moment',disabled:true}),field({name:'_honey'}),field({name:'internal',type:'hidden'}),field({name:'period',tagName:'INPUT',value:' ',label:'Data'})
 ];}});
assert.equal(enquiry,'Hotel inquiry\n\nNome: Rui\nServiço: Mystery Guest — 990 €\nContexto: Lima & hortelã');
// Execute actual interaction bindings with a small DOM fixture (no visual browser).
class Node{constructor(props={}){Object.assign(this,{dataset:{},listeners:{},hidden:false,value:'',childNodes:[],...props});}addEventListener(event,fn){(this.listeners[event]??=[]).push(fn);}dispatchEvent(event){for(const fn of this.listeners[event.type]??[])fn(event);}setAttribute(k,v){this[k]=v;}removeAttribute(k){delete this[k];}querySelector(s){return this.queries?.[s]??null;}querySelectorAll(s){return this.queryLists?.[s]??[];}focus(){this.focused=true;}reportValidity(){return true;}}
function setup(eventPage,preview=false,fetchResponse={ok:true,json:async()=>({success:true})}){
 const type=new Node({value:'0'}),guests=new Node({required:true}),moment=new Node({disabled:false}),need=new Node({value:'3'}),opportunity=new Node({value:'0'}),subject=new Node({value:'Enquiry'}),next=new Node({value:'/obrigado.html'});
 const status=new Node({dataset:{ready:'Draft ready',error:'Delivery failed'}}),button=new Node({dataset:{normal:'Send',loading:'Sending',preview:'Preview off'}});
 const required=new Node(),help=new Node(),moments=new Node(),fields=[new Node({name:'name',tagName:'INPUT',value:'QA Name',type:'text',closest(s){return s==='label'?{childNodes:[{textContent:'Name *'}]}:null;}}),new Node({name:'message',tagName:'TEXTAREA',value:'No messages sent',closest(s){return s==='label'?{childNodes:[{textContent:'Context'}]}:null;}})];
 const form=new Node({dataset:{subject:'Enquiry'},elements:{type,guests,moment,need,opportunity,_next:next,_subject:subject},queries:{'[data-form-status]':status,'button[type="submit"]':button,'[data-guest-required]':required,'[data-partner-help]':help,'[data-wedding-moments]':moments},queryLists:{'input[name],select[name],textarea[name]':fields}});
 const offer=new Node({dataset:eventPage?{eventType:'7'}:{project:'5'}}),experience=new Node({dataset:{experience:'1'}});
 let opened=null,assigned=null,fetchCalls=0;
 const document=new Node({body:new Node({dataset:{page:eventPage?'events':'hotels',language:'pt'}}),queries:{'.menu-toggle':null,'[data-lead-form]':eventPage?null:form,'[data-event-form]':eventPage?form:null},queryLists:{'[data-project]':eventPage?[]:[offer],'[data-event-type]':eventPage?[offer]:[],'[data-experience]':eventPage?[experience]:[]}});
 document.getElementById=()=>null;
 const window={fetch:true,addEventListener(){},open(url){opened=url;},__cheersPreview:preview?{}:null};
 const ctx=vm.createContext({document,window,location:{href:'https://cheersexperiences.com/',search:'',hash:'',pathname:'/',assign(url){assigned=url;}},URL,URLSearchParams,FormData:class{},AbortController,setTimeout(){return 1;},clearTimeout(){},Event:class{constructor(type){this.type=type;}},fetch:async()=>{fetchCalls++;return fetchResponse;},module:{exports:{}},requestAnimationFrame:fn=>fn()});
 vm.runInContext(fs.readFileSync('src/atelier.js','utf8'),ctx);
 return {form,type,guests,moment,required,help,moments,opportunity,need,offer,experience,status,button,opened:()=>opened,assigned:()=>assigned,fetchCalls:()=>fetchCalls};
}
(async()=>{
 const event=setup(true);assert(event.guests.required);assert.equal(event.moments.hidden,false);event.offer.dispatchEvent({type:'click'});assert.equal(event.type.value,'7');assert.equal(event.guests.required,false);assert(event.moments.hidden);assert(event.moment.disabled);assert.equal(event.help.hidden,false);event.experience.dispatchEvent({type:'click'});assert.equal(event.need.value,'1');await event.form.listeners.submit[0]({preventDefault(){}});assert.equal(new URL(event.assigned()).hostname,'wa.me');assert.equal(event.fetchCalls(),0);
 const hotel=setup(false);hotel.offer.dispatchEvent({type:'click'});assert.equal(hotel.opportunity.selectedIndex,5);let prevented=false;await hotel.form.listeners.submit[0]({preventDefault(){prevented=true;}});assert.equal(prevented,false);assert.equal(hotel.assigned(),null);assert.equal(hotel.button.textContent,'Sending');assert.equal(hotel.fetchCalls(),0);
 const preview=setup(false,true);let blocked=false;await preview.form.listeners.submit[0]({preventDefault(){blocked=true;}});assert(blocked);assert.equal(preview.fetchCalls(),0);assert.equal(preview.status.textContent,'Preview off');
 const invalid=setup(false);invalid.form.reportValidity=()=>false;let stopped=false;await invalid.form.listeners.submit[0]({preventDefault(){stopped=true;}});assert(stopped);assert.equal(invalid.assigned(),null);
 console.log('PASS revenue maths and limits, URL encoding, event/partnership field states, actual offer selection and draft bindings, hotel email POST left to the browser, event WhatsApp hand-off with complete fields, invalid-input guard and no relay fetch. No external messages sent.');
})();
