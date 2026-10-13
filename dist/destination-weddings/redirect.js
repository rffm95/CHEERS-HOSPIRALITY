/* Preserve existing wedding links while using one events and weddings page. */
function weddingRedirectURL(search, saved = '') {
 const params = new URLSearchParams(search);
 const explicit = params.get('lang');
 const lang = ['pt','es','en'].includes(explicit) ? explicit : ['pt','es','en'].includes(saved) ? saved : 'en';
 params.set('lang', lang);
 return '../eventos.html?' + params.toString() + '#celebrations';
}
if (typeof window !== 'undefined') {
 let saved = '';
 try { saved = localStorage.getItem('cheers-language') || ''; } catch {}
 window.location.replace(weddingRedirectURL(window.location.search, saved));
}
