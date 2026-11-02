// Hotel page, error 5 of the Oct 2026 review (Voss / Blount):
// an accusation audit before the offer, and a low-commitment step (the 10-leak checklist PDF in exchange for an email).
// The checklist form posts to FormSubmit (like the hotel form) and redirects to /checklist.html, which links the PDF.
export const nextStep = {
 pt:{
  objLabel:'ANTES DE DECIDIR', objTitle:'Provavelmente está a pensar nisto.<br><em>É justo.</em>',
  objections:[
   ['Já recebeu consultores que vieram, deixaram um PDF e desapareceram.','No fim da visita apresentamos as primeiras conclusões à direção. Em 7 dias recebe o relatório, com cada oportunidade em euros e o que fazer primeiro.'],
   ['Receia que a equipa se sinta vigiada.','Observamos processos, não pessoas. O relatório vai só para a direção, que decide o que partilhar.'],
   ['Não sabe se a auditoria se paga.','Se não identificarmos pelo menos 990 € por mês em vendas perdidas ou desperdício, devolvemos o valor da auditoria.'],
   ['Não quer mais um fornecedor a insistir.','Fale connosco quando quiser, por escrito. Sem chamadas de venda.']
  ],
  clLabel:'AINDA NÃO É O MOMENTO?', clTitle:'Leve a checklist<br><em>das 10 fugas de margem.</em>',
  clText:'As 10 fugas numa folha, com o que verificar em cada uma. Percorra o seu bar em 20 minutos e veja quantas encontra.',
  clEmail:'Email', clHotel:'Hotel', clSubmit:'Enviar-me a checklist', clSubject:'Checklist 10 fugas — novo contacto',
  clNote:'Recebe o PDF logo a seguir, na página seguinte. Ao pedir a checklist aceita receber emails da Cheers Experiences com ideias para o bar. Pode cancelar a qualquer momento.',
  clContact:'Ainda não está pronto? Leve a checklist das 10 fugas',
  dlTitle:'A sua checklist está pronta.', dlText:'Descarregue o PDF, percorra o bar e conte quantas fugas encontra. Se encontrar duas ou mais, vale a pena pôr-lhes números.',
  dlButton:'Descarregar a checklist (PDF)',
  pdf:{title:'As 10 fugas de margem<br>do bar de hotel',sub:'Checklist Cheers Experiences · Percorra o bar em 20 minutos e assinale o que encontra.',check:'Acontece no meu bar',fix:'Como corrigir',endTitle:'Encontrou duas ou mais?',endText:'O Mystery Guest Bar Audit põe-lhes um valor em euros e diz-lhe o que corrigir primeiro. Desde 990 € + deslocação, conforme o país (em Portugal acresce IVA). Se não identificarmos pelo menos 990 € por mês em vendas perdidas ou desperdício, devolvemos o valor da auditoria.',contact:'WhatsApp +351 927 653 087 · info@cheersexperiences.com · cheersexperiences.com'},
  privacy:' Se pedir a checklist das 10 fugas, usamos o seu email para lhe enviar ideias para o bar e propostas da Cheers Experiences; pode cancelar a qualquer momento respondendo a qualquer email.'
 },
 es:{
  objLabel:'ANTES DE DECIDIR', objTitle:'Probablemente esté pensando en esto.<br><em>Es lógico.</em>',
  objections:[
   ['Ya ha recibido consultores que vinieron, dejaron un PDF y desaparecieron.','Al final de la visita presentamos las primeras conclusiones a la dirección. En 7 días recibe el informe, con cada oportunidad en euros y qué hacer primero.'],
   ['Le preocupa que el equipo se sienta vigilado.','Observamos procesos, no personas. El informe va solo a la dirección, que decide qué compartir.'],
   ['No sabe si la auditoría se amortiza.','Si no identificamos al menos 990 € al mes en ventas perdidas o desperdicio, le devolvemos el importe de la auditoría.'],
   ['No quiere otro proveedor insistiendo.','Escríbanos cuando quiera. Sin llamadas comerciales.']
  ],
  clLabel:'¿TODAVÍA NO ES EL MOMENTO?', clTitle:'Llévese la checklist<br><em>de las 10 fugas de margen.</em>',
  clText:'Las 10 fugas en una hoja, con qué revisar en cada una. Recorra su bar en 20 minutos y vea cuántas encuentra.',
  clEmail:'Email', clHotel:'Hotel', clSubmit:'Enviarme la checklist', clSubject:'Checklist 10 fugas — nuevo contacto',
  clNote:'Recibe el PDF justo después, en la página siguiente. Al pedir la checklist acepta recibir emails de Cheers Experiences con ideas para el bar. Puede darse de baja en cualquier momento.',
  clContact:'¿Todavía no está listo? Llévese la checklist de las 10 fugas',
  dlTitle:'Su checklist está lista.', dlText:'Descargue el PDF, recorra el bar y cuente cuántas fugas encuentra. Si encuentra dos o más, merece la pena ponerles cifras.',
  dlButton:'Descargar la checklist (PDF)',
  pdf:{title:'Las 10 fugas de margen<br>del bar de hotel',sub:'Checklist Cheers Experiences · Recorra el bar en 20 minutos y marque lo que encuentre.',check:'Ocurre en mi bar',fix:'Cómo corregirlo',endTitle:'¿Ha encontrado dos o más?',endText:'El Mystery Guest Bar Audit les pone una cifra en euros y le dice qué corregir primero. Desde 990 € + desplazamiento, según el país (en Portugal se añade el IVA). Si no identificamos al menos 990 € al mes en ventas perdidas o desperdicio, le devolvemos el importe de la auditoría.',contact:'WhatsApp +351 927 653 087 · info@cheersexperiences.com · cheersexperiences.com'},
  privacy:' Si pide la checklist de las 10 fugas, usamos su email para enviarle ideas para el bar y propuestas de Cheers Experiences; puede darse de baja en cualquier momento respondiendo a cualquier email.'
 },
 en:{
  objLabel:'BEFORE YOU DECIDE', objTitle:'You are probably thinking this.<br><em>That is fair.</em>',
  objections:[
   ['You have had consultants who came, left a PDF and disappeared.','At the end of the visit we present the first findings to management. Within 7 days you get the report, with every opportunity in euros and what to do first.'],
   ['You worry the team will feel watched.','We observe processes, not people. The report goes only to management, who decide what to share.'],
   ['You are not sure the audit pays for itself.','If we do not identify at least €990 a month in lost sales or waste, we refund the audit fee.'],
   ['You do not want another supplier chasing you.','Write to us when it suits you. No sales calls.']
  ],
  clLabel:'NOT THE RIGHT TIME YET?', clTitle:'Take the checklist<br><em>of 10 margin leaks.</em>',
  clText:'The 10 leaks on one page, with what to check for each. Walk your bar in 20 minutes and see how many you find.',
  clEmail:'Email', clHotel:'Hotel', clSubmit:'Send me the checklist', clSubject:'10-leak checklist — new contact',
  clNote:'You get the PDF straight away, on the next page. By requesting the checklist you agree to receive emails from Cheers Experiences with ideas for your bar. You can unsubscribe at any time.',
  clContact:'Not ready yet? Take the 10-leak checklist',
  dlTitle:'Your checklist is ready.', dlText:'Download the PDF, walk the bar and count how many leaks you find. If you find two or more, they are worth putting numbers on.',
  dlButton:'Download the checklist (PDF)',
  pdf:{title:'The 10 margin leaks<br>of a hotel bar',sub:'Cheers Experiences checklist · Walk the bar in 20 minutes and tick what you find.',check:'Happens in my bar',fix:'How to fix it',endTitle:'Found two or more?',endText:'The Mystery Guest Bar Audit puts a euro figure on them and tells you what to fix first. From €990 + travel depending on the country (plus VAT in Portugal). If we do not identify at least €990 a month in lost sales or waste, we refund the audit fee.',contact:'WhatsApp +351 927 653 087 · info@cheersexperiences.com · cheersexperiences.com'},
  privacy:' If you request the 10-leak checklist, we use your email to send you ideas for your bar and proposals from Cheers Experiences; you can unsubscribe at any time by replying to any email.'
 }
};
