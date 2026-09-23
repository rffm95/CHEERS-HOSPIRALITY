const endpoint = 'https://cheers-visit-counter.cccerjn.chatgpt.site/api/stats';
const names = {PT:'Portugal',ES:'Espanha',FR:'França',GB:'Reino Unido',US:'Estados Unidos',DE:'Alemanha',BR:'Brasil',IT:'Itália',NL:'Países Baixos',XX:'Desconhecido'};
let data = [], selected = 1;
const $ = id => document.getElementById(id);
const format = n => new Intl.NumberFormat('pt-PT').format(n);
function renderList(id, entries) {
  const parent = $(id); parent.replaceChildren();
  if (!entries.length) { const p = document.createElement('p'); p.className='empty'; p.textContent='Ainda não há visitas neste período.'; parent.append(p); return; }
  const max = Math.max(...entries.map(([,n]) => n));
  for (const [label, count] of entries) {
    const row=document.createElement('div'); row.className='row';
    const title=document.createElement('span'); title.textContent=label; title.title=label;
    const track=document.createElement('div'); track.className='track';
    const fill=document.createElement('div'); fill.className='fill'; fill.style.width=`${count/max*100}%`; track.append(fill);
    const value=document.createElement('b'); value.textContent=format(count);
    row.append(title,track,value); parent.append(row);
  }
}
function localDay(offset=0) {const d=new Date();d.setDate(d.getDate()-offset);return new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Lisbon',year:'numeric',month:'2-digit',day:'2-digit'}).format(d)}
function render() {
  const cutoff=selected ? localDay(selected-1) : '';
  const rows=data.filter(x=>!cutoff || x.day>=cutoff);
  const total=rows.reduce((n,x)=>n+x.views,0);
  const aggregate=key=>Object.entries(rows.reduce((out,row)=>(out[row[key]]=(out[row[key]]||0)+row.views,out),{})).sort((a,b)=>b[1]-a[1]);
  const countries=aggregate('country'), pages=aggregate('page');
  $('views').textContent=format(total); $('countries').textContent=format(countries.length); $('pages').textContent=format(pages.length);
  renderList('countries-list',countries.map(([c,n])=>[names[c]||c,n]));
  renderList('pages-list',pages.map(([p,n])=>[p==='/'?'Consultoria · Página inicial':'Eventos',n]));
  renderList('days-list',aggregate('day').slice(0,30));
}
document.querySelectorAll('[data-days]').forEach(button=>button.addEventListener('click',()=>{
  selected=Number(button.dataset.days); document.querySelectorAll('[data-days]').forEach(b=>b.setAttribute('aria-pressed',String(b===button))); render();
}));
fetch(endpoint,{credentials:'omit',cache:'no-store'}).then(r=>{if(!r.ok)throw Error();return r.json()}).then(rows=>{data=rows;$('status').textContent='Dados atualizados agora. A contagem começa após a publicação desta versão.';render()}).catch(()=>$('status').textContent='Não foi possível carregar as estatísticas. Tenta novamente mais tarde.');
