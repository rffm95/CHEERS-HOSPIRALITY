(() => {
  const page = location.pathname === '/eventos.html' ? '/eventos.html' : '/';
  const key = 'cheers-view:' + page;
  // One count per open tab and page, including a fresh reload.
  if (sessionStorage.getItem(key) === location.href + ':' + performance.timeOrigin) return;
  sessionStorage.setItem(key, location.href + ':' + performance.timeOrigin);
  fetch('https://cheers-visit-counter.cccerjn.chatgpt.site/api/visit', {
    method: 'POST', mode: 'cors', credentials: 'omit', keepalive: true,
    headers: {'Content-Type': 'application/json'}, body: JSON.stringify({page})
  }).catch(() => {});
})();
