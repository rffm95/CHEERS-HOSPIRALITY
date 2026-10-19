from lxml import html, etree
from pathlib import Path
from urllib.parse import urlsplit,unquote
import json,re
root=Path('dist');pages={}
for lang in ['pt','es','en']:
 for name in ['index.html','eventos.html']:
  path=('/' if lang=='pt' else '/'+lang+'/')+name
  doc=html.fromstring((root/path[1:]).read_text())
  pages[path]=doc
  assert len(doc.xpath('//h1'))==1,path
  assert len(doc.xpath('//main'))==1,path
  assert doc.xpath('//html/@lang')[0]=={'pt':'pt-PT','es':'es-ES','en':'en'}[lang]
  ids=doc.xpath('//@id');assert len(ids)==len(set(ids)),(path,'duplicate ids')
  canonical=doc.xpath('//link[@rel="canonical"]/@href')[0]
  assert canonical=='https://cheersexperiences.com'+path
  assert set(doc.xpath('//link[@rel="alternate"]/@hreflang'))=={'pt','es','en','x-default'}
  assert doc.xpath('//meta[@property="og:image"]/@content')
  schema=json.loads(doc.xpath('//script[@type="application/ld+json"]/text()')[0]);assert not any(x in schema for x in ['review','aggregateRating','award'])
  for field in doc.xpath('//input[not(@type="hidden") and not(@name="_honey")]|//select|//textarea'):
   assert field.xpath('ancestor::label'),(path,field.attrib)
  for image in doc.xpath('//img'):
   assert 'alt' in image.attrib and 'width' in image.attrib and 'height' in image.attrib
  for f in doc.xpath('//form[@data-lead-form]'):
   assert f.get('action')=='https://formsubmit.co/info@cheersexperiences.com' and f.get('method')=='POST'
   assert set(f.xpath('.//input[@required]/@name'))=={'name','hotel','email','location'}
  for f in doc.xpath('//form[@data-event-form]'):
   assert len(f.xpath('.//*[@name="type"]/option'))==8
   assert len(f.xpath('.//*[@name="need"]/option'))==4
   assert f.xpath('.//*[@name="need"]/option[@selected]/@value')==['3']
  text=doc.text_content();assert 'Beatriz Almeida' in text and 'Operations & Events Manager' in text;assert not re.search(r'\+100%|3×|Four Seasons|Rosewood|Mandarin Oriental',text)
for path,doc in pages.items():
 for element in doc.xpath('//*[@href or @src]'):
  address=element.get('href',element.get('src',''));u=urlsplit(address)
  if u.scheme or u.netloc or address.startswith('data:'):continue
  target=u.path or path
  if not target.startswith('/'):target=str(Path(path).parent/target)
  assert (root/target.lstrip('/')).exists(),(path,'missing file',target)
  if u.fragment:
   destination=pages.get(target)
   if destination is None:destination=html.fromstring((root/target.lstrip('/')).read_text())
   assert destination.xpath('//*[@id=$id]',id=unquote(u.fragment)),(path,'missing anchor',address)
 # Heading structure: no jump from h2 directly to h4.
 assert len(doc.xpath('//header//nav/a[not(contains(@class,"button"))]'))==2  # nav: Hotels + Weddings & Events only
 assert doc.xpath('//*[@id="team"]')
for path in pages:
 assert len((root/path[1:]).read_bytes())<70000
css=(root/'atelier.css').read_text();assert '@media(prefers-reduced-motion:reduce)' in css
assert all('@media(max-width:'+str(x)+'px)' in css for x in [1180,900,620,370])
assert css.count('{')==css.count('}')
print('PASS six complete static pages; languages, canonical/hreflang/OG/schema, unique IDs, all internal links and images, labelled forms, existing POST integration, credibility checks, responsive breakpoints and reduced motion declarations.')
print('NOTE no browser rendering, layout measurements, live email delivery or Core Web Vitals measured.')
