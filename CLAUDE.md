# Cheers Experiences — cheersexperiences.com

Site estático (sem frameworks) da Cheers Experiences: consultoria de bar para hotéis e bar para casamentos/eventos, em Portugal e Espanha. Dono: Rui Monteiro.

## Regras importantes

- **Cada push para `main` publica o site automaticamente** (GitHub Actions → GitHub Pages, domínio cheersexperiences.com). Trabalhar num ramo e só fazer merge/push para `main` depois de o Rui aprovar a preview.
- Mostrar sempre uma preview (`npm run preview`) antes de qualquer commit.
- Quatro idiomas: qualquer alteração de texto é feita em PT (pt-PT), ES (es-ES, "usted" nos hotéis, "vosotros" nos casamentos), EN (britânico) e FR (fr-FR, "vous"). O francês está em `src/fr.json` (ligado por `src/fr.mjs`); uma chave em falta cai para o inglês.
- Mercado: hotéis de luxo 4 e 5 estrelas do Sul da Europa (Portugal, Espanha, Andorra, Côte d'Azur e Mónaco, Suíça, Itália). Sem preços publicados em lado nenhum do site (decisão do Rui em 09/11/2026): o Mystery Guest, a Auditoria Completa e os eventos são todos "sob orçamento", confirmado por escrito antes de marcar. A garantia não usa números: se o relatório não identificar, por mês, oportunidades de valor superior ao investimento no diagnóstico, devolve-se o valor pago.
- Não inventar testemunhos, clientes, logótipos, números de vendas ou prémios. O percurso do Rui (Cheers O Bar desde 2014, Grande Real Santa Eulália 2017) é experiência profissional, não clientes de consultoria.
- O Rui não quer vídeos no site.
- IVA: o site não fala em IVA.
- Linguagem: falar em "oportunidades de faturação", não em "vendas perdidas" (o diretor não se deve sentir acusado). Os 11.880 € não entram na promessa principal; ficam na garantia e nas contas mais abaixo (06/11/2026).

## Redesign de 09/11/2026 (aprovado pelo Rui)

- `index.html` é agora uma página de entrada com duas portas: Hotéis (contacto Rui) e Casamentos & Eventos (contacto Beatriz). A página de hotéis passou para `hoteis.html`; links antigos com `#âncora` para a raiz são reencaminhados para `hoteis.html`.
- Todas as páginas têm no topo o seletor de área "Hotéis | Casamentos & Eventos".
- Página de hotéis nova e mais curta (`src/hotels.mjs`, 4 línguas): topo sem preço, valor (3 pilares), método (dia 1, dia 2, 7 dias), exemplo do formato do relatório (ilustrativo, sem números), serviços (Passo 1 e Passo 2, sob orçamento), equipa, checklist, perguntas, contacto. CTA principal: WhatsApp. As secções antigas (situações, objeções, cartazes, 10 fugas, contas/calculadora, tabela da visita) deixaram de aparecer; o código continua em `src/` caso se queira recuperar alguma.
- Eventos: contacto da Beatriz (foto, WhatsApp que acaba em 11, beatriz@cheersexperiences.com no email), topo claro com fotografia. Pacotes sem preço, "sob orçamento".
- Fonte dos títulos: Cormorant Garamond (em `dist/fonts/cormorant-*.woff`, licença OFL). Os ficheiros foram corrigidos com `scripts/fix-cormorant-circumflex.py` porque a fonte original desenha â ê î ô û com o acento torto. O PDF da checklist continua com Lora.

## Estrutura

- `src/hotels.mjs` — textos da página de hotéis (desde 09/11/2026), da página de entrada e do contacto da Beatriz, em PT/ES/EN/FR.
- `src/audit-offer.mjs` — textos antigos da oferta de hotéis. Ainda se usam daqui: mensagem de WhatsApp (`waText`), faixa "Onde trabalhamos", texto do Passo 2 e a nota das imagens; o resto (com preços de 990 €) já não aparece no site. As páginas PT redirecionam na 1.ª visita para ES/EN/FR conforme o fuso horário e o idioma do browser, salvo escolha manual guardada.
- `src/audit-trust.mjs` — secções antigas de apoio da página de hotéis (já não aparecem desde 09/11/2026).
- `src/weddings.mjs` — página de casamentos e eventos: três pacotes (Clássicos, Premium, Experiência à Medida), todos sob orçamento, sem preços.
- `src/editorial.mjs` — textos partilhados (menu, contactos, FAQ gerais, formulários).
- `src/content.json` — conteúdos de apoio (serviços, método, eventos, calculadora).
- `src/template.mjs` — HTML das páginas.
- `src/atelier.css` / `src/atelier.js` — design e interações (fontes Lora + Inter alojadas em `dist/fonts`).
- `dist/` — site gerado e publicado (imagens em `dist/images`).

## Comandos

- `npm run build` — gera as 16 páginas (entrada, hotéis, eventos e digital × 4 idiomas) em `dist/`.
- `npm test` — testes (Python com lxml + Node).
- `npm run preview` — cria `../Cheers-Experiences-Preview.html`, um ficheiro único para rever o site sem o publicar.

O formulário de hotéis ("Pedir uma proposta") envia por FormSubmit (POST normal, sem fetch) diretamente para info@cheersexperiences.com, a pedido do Rui em 30/10/2026; o envio por fetch/AJAX tinha falhado nesse dia. Tem WhatsApp como alternativa. O formulário de eventos prepara o pedido no WhatsApp, com alternativa por email.
