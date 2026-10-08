# Cheers Experiences

Website de consultoria de bares para hotéis e grupos em Espanha e Portugal, em espanhol e português.

## Publicação

O site é estático e completo em `dist/`. Não precisa de dependências nem de serviços externos para funcionar. `npm run build` valida os ficheiros e a sintaxe JavaScript. O workflow de GitHub Pages publica `dist/` após cada push para `main`. O domínio existente é `cheers.guru`; a configuração de DNS não é alterada por este projeto.

## Edição

- `dist/app.js`: textos ES/PT, navegação, formulário e contactos.
- `dist/style.css`: apresentação e estilos responsivos.
- `dist/index.html`: versão inicial em espanhol, disponível antes do JavaScript.
- `dist/images/`: fotografias fornecidas pelo titular, otimizadas em WebP.

Ao alterar os textos, executar `npm run build` para atualizar o HTML inicial e verificar a coerência.

## Contactos e privacidade

Email: sucessomacico@gmail.com. Telefone: +351927653087. Todos os destinos WhatsApp utilizam `https://wa.me/351927653087`. O formulário prepara uma mensagem para o visitante rever e enviar no WhatsApp; não envia automaticamente, não guarda dados e não necessita de credenciais. A alternativa por email prepara uma mensagem no cliente de email do visitante.

## Conteúdo comercial

Menus digitais por QR code, adaptação a todos os idiomas necessários e animações para ecrãs/TV complementam cartas, serviço, formação, operações e compras. O resultado superior a 100% é histórico do Cheers O Bar entre 2021 e 2024, fornecido pela gestão, e não é uma garantia para hotéis. A calculadora é apenas uma simulação de faturação, sem dedução de custos ou investimento.

## Eventos

A área `dist/eventos.html` apresenta casamentos, batizados, aniversários, eventos empresariais, parcerias com catering e exploração temporária de bares. Os textos ES/PT e o formulário de proposta estão em `dist/events.js`. O formulário permite escolher bar aberto, venda no local ou modelo misto e prepara um pedido por WhatsApp ou email.

## Conteúdo e validação

`dist/strategy.js` contém o posicionamento B2B, Mystery Guest Audit, caso histórico, percurso profissional e calculadora. `dist/events.js` contém a área de celebrações e corporate, os formatos e os pedidos de proposta. Mantêm-se os URLs `index.html` e `eventos.html` com `?lang=pt` ou `?lang=es`.

`npm run build` verifica a sintaxe, testa os formulários/contactos e os limites matemáticos da calculadora, e atualiza automaticamente o HTML inicial e metadata em espanhol. A renderização PT/ES usa as mesmas fontes de conteúdo. Sem base de dados, analytics ou envio automático de mensagens.

### Calculadora

Faturação mensal = hóspedes por dia × percentagem que utiliza o bar × ticket diário por utilizador × dias de operação por mês. A melhoria de utilização é aditiva em pontos percentuais e limitada a 100%; a do ticket é relativa. O incremento anual assume 12 meses iguais. Quartos e ocupação apenas estimam hóspedes através do botão explicitamente identificado com 2 pessoas por quarto ocupado. O utilizador pode substituir esse valor; não se multiplicam hóspedes e quartos no cálculo de faturação.

### Revisão de 23/09/2026

- ES/PT em ambas as áreas, com dados de formulário preservados ao mudar idioma.
- Renderização em larguras de 320, 390, 768 e desktop; ausência de overflow horizontal nos elementos verificados.
- Menu móvel, calculadora, estimativa de hóspedes e validação de limites testados no navegador.
- CTAs específicos de audit, grupos e corporate, destinos e conteúdos WhatsApp/email, âncoras e recursos locais verificados nos testes de lógica.
- O navegador de testes bloqueou uma navegação por fragmento; não foi efetuado envio real de mensagens.
- Conteúdo histórico e percurso profissional baseados exclusivamente nos dados fornecidos pelo titular. Sem clientes, testemunhos ou certificações inventados.

`npm run dev` disponibiliza uma pré-visualização local e a rota de QA responsiva, que não é incluída em `dist/` nem publicada.

## Languages
Both areas support PT, ES and EN. An explicit `?lang=` link takes priority, followed by a saved manual preference, then the primary device language (PT/ES/EN). Other device languages use English. Restricted browser storage does not prevent rendering. Language changes preserve the equivalent page and entered form values.

## Destination Weddings
`/destination-weddings/` is the dedicated international wedding landing page. English is the first-visit default, with explicit `?lang=pt|es|en` and the existing `cheers-language` manual preference taking priority. `weddings-copy.js` holds translations; `weddings.js` renders the page; `weddings.css` extends the brand. The build emits complete English HTML for no-JavaScript readers and crawlers.

WhatsApp links use +351927653087. The form requires name, guest count, location and either email or phone; date is optional. It prepares a WhatsApp or email draft for visitor review, without storing enquiries or sending automatically. Values survive language changes. The page uses supplied cocktail photography without claiming wedding portfolio work.


## Reunião inicial e pedidos de contacto
A página de hotéis oferece uma primeira reunião presencial sem honorários e sem compromisso, sujeita a disponibilidade e localização. Qualquer deslocação é acordada previamente. Auditoria detalhada, relatório e implementação são serviços pagos separados.

O formulário de hotéis envia um POST para FormSubmit e redireciona para `obrigado.html` após aceitação. Requer uma única ativação pelo titular através do email de confirmação do FormSubmit; um teste efetuado em 08/10/2026 confirmou que a ativação estava pendente. Enquanto não for ativado, os pedidos diretos podem não chegar. WhatsApp, telefone e email continuam disponíveis. O formulário informa o visitante de que FormSubmit processa o pedido. Os formulários de eventos e casamentos mantêm os respetivos caminhos de contacto.

`acquisition.js` contém a oferta PT/ES/EN e a reunião inicial. A fotografia real do ecrã no Cheers O Bar foi autorizada pelo titular para publicação no repositório público e no site. Não se atribui a este ecrã um aumento comprovado de vendas.
