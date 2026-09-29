import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {resolve,extname,relative,isAbsolute,sep} from 'node:path';
const args=process.argv.slice(2),arg=(k,d)=>args.includes(k)?args[args.indexOf(k)+1]:d;
const root=resolve('dist'),types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.webp':'image/webp','.xml':'application/xml','.txt':'text/plain'};
http.createServer(async(req,res)=>{try{
 const u=new URL(req.url,'http://localhost');
 if(u.pathname==='/__qa'){const page=u.searchParams.get('page')==='weddings'?'destination-weddings/':u.searchParams.get('page')==='events'?'eventos.html':'index.html',lang=['pt','es','en'].includes(u.searchParams.get('lang'))?u.searchParams.get('lang'):'en',width=Math.max(320,Math.min(1440,Number(u.searchParams.get('width'))||390));res.setHeader('Content-Type','text/html');res.end(`<html><head><title>Responsive QA</title></head><body style="margin:0;background:#ddd"><iframe title="Responsive site" style="border:0;width:${width}px;height:900px" src="/${page}?lang=${lang}"></iframe></body></html>`);return;}
 let path=resolve(root,'.'+decodeURIComponent(u.pathname));const rel=relative(root,path);
 if(rel==='..'||rel.startsWith('..'+sep)||isAbsolute(rel)){res.writeHead(403).end();return;}
 if((await stat(path)).isDirectory()){if(!u.pathname.endsWith('/')){res.writeHead(301,{Location:u.pathname+'/'+u.search}).end();return;}path=resolve(path,'index.html');}
 const body=await readFile(path);res.setHeader('Content-Type',types[extname(path)]||'application/octet-stream');res.setHeader('Cache-Control','no-store');res.end(body);
 }catch{res.writeHead(404).end('Not found');}
}).listen(Number(arg('--port','4173')),arg('--host','127.0.0.1'));
