# Cheers Experiences

Website de consultoria de bares para hotéis e grupos em Espanha e Portugal, em espanhol e português.

## Publicação

O site é estático e completo em `dist/`. Não precisa de dependências nem de serviços externos para funcionar. `npm run build` valida os ficheiros e a sintaxe JavaScript. O workflow de GitHub Pages publica `dist/` após cada push para `main`. O domínio existente é `cheers.guru`; a configuração de DNS não é alterada por este projeto.

## Edição

- `dist/app.js`: textos ES/PT, navegação, formulário e contactos.
- `dist/style.css`: apresentação e estilos responsivos.
- `dist/index.html`: versão inicial em espanhol, disponível antes do JavaScript.
- `dist/hero.webp`: imagem de ambiente ilustrativa.

Ao alterar os textos, atualizar também o HTML inicial para manter as duas versões coerentes.

## Contactos e privacidade

Email: sucessomacico@gmail.com. Telefone: +351927653087. Todos os destinos WhatsApp utilizam `https://wa.me/351927653087`. O formulário prepara uma mensagem para o visitante rever e enviar no WhatsApp; não envia automaticamente, não guarda dados e não necessita de credenciais. A alternativa por email prepara uma mensagem no cliente de email do visitante.

## Conteúdo comercial

Menus digitais por QR code, adaptação a todos os idiomas necessários e animações para ecrãs/TV complementam cartas, serviço, formação, operações e compras. O cenário 3× é um exemplo matemático identificado, não um caso de estudo ou garantia de resultado.

## Eventos

A área `dist/eventos.html` apresenta casamentos, batizados, aniversários, eventos empresariais, parcerias com catering e exploração temporária de bares. Os textos ES/PT e o formulário de proposta estão em `dist/events.js`. O formulário permite escolher bar aberto, venda no local ou modelo misto e prepara um pedido por WhatsApp ou email.
