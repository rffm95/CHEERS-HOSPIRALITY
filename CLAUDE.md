# Cheers Experiences — cheersexperiences.com

Site estático (sem frameworks) da Cheers Experiences: consultoria de bar para hotéis e bar para casamentos/eventos, em Portugal e Espanha. Dono: Rui Monteiro.

## Regras importantes

- **Cada push para `main` publica o site automaticamente** (GitHub Actions → GitHub Pages, domínio cheersexperiences.com). Trabalhar num ramo e só fazer merge/push para `main` depois de o Rui aprovar a preview.
- Mostrar sempre uma preview (`npm run preview`) antes de qualquer commit.
- Quatro idiomas: qualquer alteração de texto é feita em PT (pt-PT), ES (es-ES, "usted" nos hotéis, "vosotros" nos casamentos), EN (britânico) e FR (fr-FR, "vous"). O francês está em `src/fr.json` (ligado por `src/fr.mjs`); uma chave em falta cai para o inglês.
- Mercado: hotéis de luxo 4 e 5 estrelas do Sul da Europa (Portugal, Espanha, Andorra, Côte d'Azur e Mónaco, Suíça, Itália). Sem preços publicados em lado nenhum do site (decisão do Rui em 09/11/2026): o Mystery Guest, a Auditoria Completa e os eventos são todos "sob orçamento", confirmado por escrito antes de marcar. A garantia não usa números: se o relatório não identificar, por mês, oportunidades de valor superior ao investimento no diagnóstico, devolve-se o valor pago.
- Não inventar testemunhos, clientes, logótipos, números de vendas ou prémios. O percurso do Rui (Cheers O Bar desde 2014, Grande Real Santa Eulália 2017) é experiência profissional, não clientes de consultoria.
- Vídeos: a regra era não ter vídeos no site. Exceção pedida pelo Rui em 10/11/2026: o vídeo em espanhol no topo da página de hotéis, só na versão ES (`dist/video/hoteis-es.mp4`, em `src/template.mjs` → `hotelVideoES`). Arranca sozinho sem som (os browsers só deixam autoplay em silêncio) e tem o botão "Activar sonido". Arranca também com "reduzir movimento" ligado no sistema (no computador do Rui está ligado), mas aí só toca uma vez em vez de repetir. Se o browser recusar o arranque, o `rescue.js` volta a tentar (quando há dados, quando o vídeo aparece no ecrã, ao voltar ao separador e ao primeiro toque ou scroll); se nada resultar em 4 s, mostra o botão de play nativo. O ficheiro está a 576 px e ~1 MB (10/11/2026). Não pôr vídeos noutras páginas ou idiomas sem ele pedir.
- IVA: o site não fala em IVA.
- Linguagem: falar em "oportunidades de faturação", não em "vendas perdidas" (o diretor não se deve sentir acusado). Os 11.880 € não entram na promessa principal; ficam na garantia e nas contas mais abaixo (06/11/2026).

## Redesign de 09/11/2026 (aprovado pelo Rui)

- `index.html` é agora uma página de entrada com duas portas: Hotéis (contacto Rui) e Casamentos & Eventos (contacto Beatriz). A página de hotéis passou para `hoteis.html`; links antigos com `#âncora` para a raiz são reencaminhados para `hoteis.html`.
- Todas as páginas têm no topo o seletor de área "Hotéis | Casamentos & Eventos".
- Página de hotéis nova e mais curta (`src/hotels.mjs`, 4 línguas): topo sem preço, valor (3 pilares), método (dia 1, dia 2, 7 dias), exemplo do relatório (ilustrativo, desde 11/11/2026 com a conta hipotética dos cocktails de assinatura: 4 hóspedes × (12 € − 8 €) × 30 noites = 480 €, e o teste de 2 semanas), serviços (Passo 1 e Passo 2, sob orçamento), equipa, checklist, perguntas, contacto. CTA principal: WhatsApp. As secções antigas (situações, objeções, cartazes, 10 fugas, contas/calculadora, tabela da visita) deixaram de aparecer; o código continua em `src/` caso se queira recuperar alguma.
- Eventos: contacto da Beatriz (foto, WhatsApp que acaba em 11, beatriz@cheersexperiences.com no email), topo claro com fotografia. Pacotes sem preço, "sob orçamento".
- Links curtos (gerados em `scripts/build.mjs`): /hotels, /hotel, /hoteles, /hotéis → página de hotéis; /events, /evenements, /weddings, /casamentos, /bodas, /mariages → página de eventos. Abrem no idioma do telemóvel (pt, es, fr; outro → en), salvo se a pessoa já escolheu um idioma no site. Mantêm utm e #âncoras.
- Fonte dos títulos: Cormorant Garamond (em `dist/fonts/cormorant-*.woff`, licença OFL). Os ficheiros foram corrigidos com `scripts/fix-cormorant-circumflex.py` porque a fonte original desenha â ê î ô û com o acento torto. O PDF da checklist continua com Lora.

## Novo visual "after-hours" (aprovado pelo Rui e publicado em 10/11/2026)

- Pedido do Rui: redesenhar só a camada visual (sem mexer em textos, estrutura ou links). Aprovou a entrada + hotéis e pediu o mesmo no resto do site.
- Todas as páginas (entrada, hotéis, eventos, digital, checklist e obrigado) usam `src/rescue.css` + `src/rescue.js`, ligados em `src/template.mjs` por `data-skin="rescue"`. `atelier.css` continua a ser copiado para `dist/` (os testes leem-no) mas já não é ligado por nenhuma página; `atelier.js` continua a tratar da navegação, formulários e idiomas.
- Direção: preto quente (#0E0D0C), texto off-white, âmbar/whisky (#C8893B), vermelho néon só em números e detalhes; títulos em Cormorant Garamond desde 10/11/2026 (antes Anton), texto em Manrope (`dist/fonts/manrope-var.woff2`, licença OFL); grão de filme, fotos em duotone (ganham cor ao passar o rato). Secções claras "papel" (`.ivory`) alternam com as escuras. Os exemplos reais da página digital (menu QR, ecrãs) ficam a cores.
- Letra e logotipo (10/11/2026, a Beatriz achou o Anton pouco "chique"): os títulos passaram para Cormorant Garamond (minúsculas, itálico âmbar no `em`; ficheiros `dist/fonts/cormorant-*.woff`, já corrigidos para os acentos). O Anton deixou de ser usado; o texto continua em Manrope. No topo esquerdo de todas as páginas está o logotipo (`dist/images/logo-cheers.webp`: copo dourado + CHEERS creme + EXPERIENCES dourado, recortado do logotipo original com fundo creme). O rodapé mantém "CHEERS." em texto, na mesma letra.
- Secções numeradas automaticamente só na página de hotéis (eventos e digital já têm números nos textos).
- Rodapé: o "CHEERS" grande é preenchido num tom escuro visível e acende ao passar o rato (a versão só com contorno ficava invisível no browser do Rui).
- Desempenho (10/11/2026): o brilho dos títulos já não fica em animação contínua (só "aquece" uma vez), o grão está numa camada própria, no telemóvel o cabeçalho não usa desfoque e as fontes Cormorant estão em woff2. Não voltar a pôr animações infinitas em sombras ou fundos grandes: faziam a página dar solavancos ao fazer scroll.
- Movimento sem bibliotecas (JS próprio): título revelado linha a linha, néon a "aquecer", reveals ao scroll, contadores nos números que já existem no texto, faixa "Onde trabalhamos" em movimento, botões magnéticos. Tudo desligado com `prefers-reduced-motion` e a página funciona sem JS.
- Não há testemunhos nem números de resultados no site (e não se inventam): a faixa em movimento usa a linha "Onde trabalhamos" e os contadores usam só números do texto (dia 1, 2, 7, 10 minutos, 10 fugas, 4 auditorias).

## Estrutura

- `src/hotels.mjs` — textos da página de hotéis (desde 09/11/2026), da página de entrada e do contacto da Beatriz, em PT/ES/EN/FR.
- `src/audit-offer.mjs` — textos antigos da oferta de hotéis. Ainda se usam daqui: mensagem de WhatsApp (`waText`), faixa "Onde trabalhamos", texto do Passo 2 e a nota das imagens; o resto (com preços de 990 €) já não aparece no site. As páginas PT redirecionam na 1.ª visita para ES/EN/FR conforme o fuso horário e o idioma do browser, salvo escolha manual guardada.
- `src/audit-trust.mjs` — secções antigas de apoio da página de hotéis (já não aparecem desde 09/11/2026).
- `src/weddings.mjs` — página de casamentos e eventos: três pacotes (Clássicos, Premium, Experiência à Medida), todos sob orçamento, sem preços.
- `src/editorial.mjs` — textos partilhados (menu, contactos, FAQ gerais, formulários).
- `src/content.json` — conteúdos de apoio (serviços, método, eventos, calculadora).
- `src/template.mjs` — HTML das páginas.
- `src/rescue.css` / `src/rescue.js` — design e movimento atuais (Cormorant Garamond + Manrope). `src/atelier.js` — navegação, formulários, idiomas. `src/atelier.css` — design anterior (já não ligado).
- `dist/` — site gerado e publicado (imagens em `dist/images`).

## Comandos

- `npm run build` — gera as 16 páginas (entrada, hotéis, eventos e digital × 4 idiomas) em `dist/`.
- `npm test` — testes (Python com lxml + Node).
- `npm run preview` — cria `../Cheers-Experiences-Preview.html`, um ficheiro único para rever o site sem o publicar.

O formulário de hotéis ("Pedir uma proposta") envia por FormSubmit (POST normal, sem fetch) diretamente para info@cheersexperiences.com, a pedido do Rui em 30/10/2026; o envio por fetch/AJAX tinha falhado nesse dia. Tem WhatsApp como alternativa. O formulário de eventos prepara o pedido no WhatsApp, com alternativa por email.
