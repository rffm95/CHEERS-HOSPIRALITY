# Cheers Experiences — cheersexperiences.com

Site estático (sem frameworks) da Cheers Experiences: consultoria de bar para hotéis e bar para casamentos/eventos, em Portugal e Espanha. Dono: Rui Monteiro.

## Regras importantes

- **Cada push para `main` publica o site automaticamente** (GitHub Actions → GitHub Pages, domínio cheersexperiences.com). Trabalhar num ramo e só fazer merge/push para `main` depois de o Rui aprovar a preview.
- Mostrar sempre uma preview (`npm run preview`) antes de qualquer commit.
- Três idiomas: qualquer alteração de texto é feita em PT (pt-PT), ES (es-ES, "usted" nos hotéis, "vosotros" nos casamentos) e EN (britânico).
- Não inventar testemunhos, clientes, logótipos, números de vendas ou prémios. O percurso do Rui (Cheers O Bar desde 2014, Grande Real Santa Eulália 2017) é experiência profissional, não clientes de consultoria.
- O Rui não quer vídeos no site.

## Estrutura

- `src/audit-offer.mjs` — oferta da página de hotéis: Passo 1 Mystery Guest Bar Audit (990 € + deslocação, sem IVA, ≥10 erros e melhorias, garantia de 990 €/mês em vendas perdidas ou desperdício (ou reembolso), crédito em 30 dias, máx. 4/mês), Passo 2 Auditoria Completa (orçamento à medida), e a secção "O lucro que não vê" (`leaks`). CTA principal da página de hotéis: WhatsApp. As páginas PT redirecionam na 1.ª visita para ES/EN conforme o fuso horário (Espanha → ES) e o idioma do browser, salvo escolha manual guardada.
- `src/weddings.mjs` — página de casamentos e eventos: pacotes com preços sem IVA (desde 25 € + IVA/pessoa bar de cerveja; desde 35 € + IVA/pessoa cerveja + cocktails; ambos com mínimo de 50 pessoas; à medida sob orçamento).
- `src/editorial.mjs` — textos partilhados (menu, contactos, FAQ gerais, formulários).
- `src/content.json` — conteúdos de apoio (serviços, método, eventos, calculadora).
- `src/template.mjs` — HTML das páginas.
- `src/atelier.css` / `src/atelier.js` — design e interações (fontes Lora + Inter alojadas em `dist/fonts`).
- `dist/` — site gerado e publicado (imagens em `dist/images`).

## Comandos

- `npm run build` — gera as 6 páginas em `dist/`.
- `npm test` — testes (Python com lxml + Node).
- `npm run preview` — cria `../Cheers-Experiences-Preview.html`, um ficheiro único para rever o site sem o publicar.

O formulário de hotéis ("Pedir uma proposta") envia por FormSubmit (POST normal, sem fetch) diretamente para info@cheersexperiences.com, a pedido do Rui em 30/10/2026; o envio por fetch/AJAX tinha falhado nesse dia. Tem WhatsApp como alternativa. O formulário de eventos prepara o pedido no WhatsApp, com alternativa por email.
