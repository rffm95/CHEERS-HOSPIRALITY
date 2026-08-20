import { Language, Translation } from '../types';

export const translations: Record<Language, Translation> = {
  pt: {
    nav: {
      home: 'Início',
      events: 'Eventos',
      consulting: 'Consultoria',
      digital: 'Soluções Digitais',
      portfolio: 'Trabalhos',
      about: 'Sobre',
      contact: 'Orçamento',
    },
    hero: {
      headline: 'Já tens o evento. Nós levamos o bar.',
      subheadline: 'Excelência operacional em serviços de bar, consultoria estratégica e soluções digitais de alto rendimento para o setor Hospitality.',
      ctaQuote: 'Solicitar Proposta',
      ctaWhatsapp: 'CONTACTAR',
    },
    mobileBar: {
      title: 'Bar Móvel Premium',
      subtitle: 'Elegante. Sofisticado. Inesquecível.',
      description: 'O nosso bar móvel é a solução perfeita para casamentos e eventos que exigem um toque de distinção. Totalmente equipado e com um design industrial-chic.',
      features: ['Design Customizado', 'Iluminação LED Quente', 'Serviço de Cocktails Premium', 'Montagem em Qualquer Local'],
      cta: 'Ver Detalhes',
    },
    businessAreas: {
      events: {
        title: 'Eventos & Bar Services',
        description: 'Tens o evento. Nós levamos o bar. Soluções completas para casamentos, festas privadas e eventos corporativos.',
        features: ['Welcome Drinks', 'Cocktail Bar', 'Open Bar', 'Barstations Temáticas'],
      },
      consulting: {
        title: 'Consultoria B2B',
        description: 'Potenciamos o ROI e a eficiência operacional da sua unidade. Engenharia de menus de alta performance e standards de luxo.',
        features: ['Engenharia de Menu (ROI)', 'Gestão de Cost & Waste', 'Otimização de Operações', 'Formação de Standards'],
      },
      digital: {
        title: 'Soluções Digitais',
        description: 'Transforme as suas TVs e menus em máquinas de venda. Menus QR e sistemas de comunicação visual.',
        features: ['Menus Digitais QR', 'Sistemas de TV', 'Websites Hospitality', 'Conteúdo Promocional'],
      },
    },
    packages: {
      title: 'Pacotes Exclusivos',
      subtitle: 'Soluções adaptadas à dimensão do seu evento.',
      from: 'desde',
      items: [
        {
          name: 'Welcome Drinks',
          price: '450',
          description: 'A primeira impressão é a que fica. Um serviço elegante de receção.',
          features: ['Espumante & Cocktails de Boas-vindas', 'Logística & Copos', 'Staff Profissional'],
        },
        {
          name: 'Cocktail Bar',
          price: '750',
          description: 'Mixologia clássica e contemporânea para o seu evento.',
          features: ['Menu de Cocktails Customizado', 'Bar Mobile Premium', 'Bartenders Especializados'],
        },
        {
          name: 'Open Bar Premium',
          price: '1200',
          description: 'A experiência completa sem limites para os seus convidados.',
          features: ['Vasta gama de destilados', 'Cocktails ilimitados', 'Gestão total de logística'],
        },
        {
          name: 'Bar Móvel Cheers',
          price: '950',
          description: 'A nossa icónica unidade móvel com design industrial e iluminação vintage.',
          features: ['Design Industrial Chic', 'Iluminação LED & Vintage', 'Totalmente Equipado', 'Ideal para Casamentos'],
        },
      ],
    },
    quote: {
      title: 'Solicite um Orçamento',
      subtitle: 'Responda a algumas perguntas e entraremos em contacto brevemente.',
      form: {
        name: 'Nome / Empresa',
        email: 'Email Corporativo',
        phone: 'Contacto (Opcional)',
        eventType: 'Natureza do Evento',
        eventDate: 'Data Prevista',
        guests: 'Volume de Convidados',
        budget: 'Budget Estimado',
        message: 'Requisitos Específicos',
        submit: 'Submeter Proposta',
        success: 'Pedido enviado com sucesso! A nossa direção entrará em contacto brevemente.',
      },
    },
    footer: {
      tagline: 'Elevamos a hospitalidade a um novo nível.',
      contact: 'Contactos',
      follow: 'Siga-nos',
      rights: 'Todos os direitos reservados.',
    },
    socialMediaIA: {
      headline: 'O seu Instagram está abandonado. Os clientes notam.',
      engagementStat: '+340% engagement médio nos primeiros 90 dias',
      cta: 'Quero Conteúdo que Vende',
      packages: [
        { name: 'Starter', features: ['8 posts/mês', 'Copywriting IA', 'Design Personalizado'] },
        { name: 'Growth', features: ['16 posts/mês', 'Stories semanais', 'Agendamento Automático', 'Relatório de Performance'], popular: true },
        { name: 'Premium', features: ['Posts Diários', 'Reels Estratégicos', 'Gestão de Comunidade', 'Call Mensal de Estratégia'] },
      ],
    },
    digitalSignage: {
      headline: 'Do zero ao ecrã a vender — em 48h',
      timeline: [
        { step: '01', title: 'Diagnóstico do espaço' },
        { step: '02', title: 'Instalação do hardware' },
        { step: '03', title: 'Criação de conteúdos' },
      ],
      packages: [
        { name: 'Bar Pack', features: ['1 ecrã', 'Software', '4 conteúdos/mês', 'Suporte remoto'] },
        { name: 'Hotel/Quinta Pack', features: ['Quantos ecrãs necessários', 'Software', 'Menus personalizados por evento', 'Cocktails personalizados por evento', 'Suporte prioritário', 'E muito mais'] },
      ],
      cta: 'Pedir Instalação',
      locationNote: 'Instalação disponível em Viseu e região Centro',
    },
    curiosityHook: {
      label: 'SABIA QUE...?',
      cards: [
        {
          title: 'O cliente decide em 8 segundos',
          text: 'A primeira impressão — cheiro, luz, som, limpeza — forma-se antes de o cliente sentar. Se o espaço não convida, não há cocktail bom o suficiente para compensar. O ambiente é o produto.',
        },
        {
          title: 'Staff sem treino é o teu maior custo escondido',
          text: 'Um bartender lento, sem técnica de upsell ou com má atitude custa mais do que o salário que recebe. Treino contínuo, standards claros e accountability diária são a diferença entre um bar rentável e um que sobrevive.',
        },
        {
          title: 'Menu grande ≠ mais vendas',
          text: 'Menus enormes criam desperdício, confusão no staff e clientes indecisos. Menos opções, bem executadas, com margens calculadas — especialmente nos cocktails da casa — geram mais dinheiro e melhor experiência.',
        },
      ],
      footer: 'Estas não são opiniões. São padrões observados em centenas de operações de hospitalidade.',
    },
    consultingAppointment: {
      text: 'Orçamentos gratuitos • Visitamos o seu negócio',
      cta: 'Agende uma reunião connosco',
    },
    consultingPage: {
      hero: {
        eyebrow: 'Consultoria Estratégica',
        title: 'Negócios',
        titleAccent: 'Inteligentes',
        description: 'Ajudamos bares, restaurantes e hotéis a maximizar a rentabilidade através de processos otimizados e engenharia de menus focada no lucro.',
      },
      transformation: {
        title: 'De um bar comum para uma',
        titleAccent: 'operação de elite.',
        features: [
          { title: 'Engenharia de Menu', text: 'Analisamos a rentabilidade de cada ingrediente para criar menus que vendem mais os produtos mais lucrativos.' },
          { title: 'Formação de Equipa', text: 'Standards de serviço que elevam a experiência do cliente e aumentam o ticket médio por mesa.' },
          { title: 'Estratégia de Preços', text: 'Modelos dinâmicos baseados no mercado real e custos operacionais precisos.' },
        ],
      },
      painPoints: {
        title: 'Sente estes problemas?',
        items: [
          'Volume operacional elevado com margens de lucro reduzidas',
          'Inconsistência nos padrões de serviço e hospitalidade',
          'Menus estáticos com baixa rotatividade de produtos premium',
          'Desperdício de stock (Waste) impactando o Food & Beverage Cost',
          'Falta de uma identidade visual e digital integrada na unidade',
          'Dificuldade na formação contínua e retenção de talentos de bar',
        ],
      },
      cta: 'Leve o seu negócio para o próximo patamar.',
    },
    digitalPage: {
      hero: {
        eyebrow: 'Inovação Digital',
        title: 'Hospitality',
        titleAccent: 'Digital',
        description: 'Ferramentas tecnológicas desenhadas para aumentar o consumo médio e melhorar a comunicação com o cliente no ponto de venda.',
      },
      tvStrategy: {
        badge: 'Perda de Receita Detectada',
        title: 'As suas TVs estão a',
        titleAccent: 'perder dinheiro?',
        description: 'Muitos espaços têm ecrãs ligados em canais aleatórios ou conteúdos estáticos. As nossas soluções transformam esses ecrãs em vendedores silenciosos que promovem cocktails, sobremesas e happy horas nos momentos certos.',
        features: [
          'Promoção dinâmica de produtos lucrativos',
          'Aumento imediato do ticket médio',
          'Comunicação visual profissional e elegante',
          'Gestão centralizada de conteúdos',
        ],
        preview: {
          eyebrow: 'Live Preview',
          title: 'HAPPY HOUR',
          subtitle: 'Gin & Tonic 2x1 • 17:00 - 19:00',
        },
      },
      aiSocial: {
        eyebrow: 'AI Social Management',
        popularTag: 'Mais Popular',
        cta: 'Quero Conteúdo que Vende',
      },
      signage: {
        eyebrow: 'Turnkey Solutions',
      },
      services: {
        items: [
          { title: 'Menus QR Premium', text: 'Menus digitais elegantes, multilingues e fáceis de atualizar. Esqueça as folhas de papel desgastadas.' },
          { title: 'Multi-idioma Real', text: 'Traduções profissionais que respeitam a terminologia da hospitalidade para atrair turistas.' },
          { title: 'Websites Focados', text: 'Sites mobile-first otimizados para reservas e apresentação de serviços de hotelaria.' },
          { title: 'Suporte & Updates', text: 'Cuidamos de todas as atualizações mensais para que o seu foco seja o cliente.' },
          { title: 'Digital Signage', text: 'Sistemas de ecrãs para lobbies de hotéis, quintas de eventos e bares de alta rotação.' },
          { title: 'Revenue Focus', text: 'Estratégias digitais desenhadas para aumentar as vendas de cocktails e upsells.' },
        ],
      },
      cta: {
        title: 'Digitalize o seu sucesso.',
        button: 'Pedir Demonstração Digital',
      },
    },
    eventsPage: {
      hero: {
        eyebrow: 'Bar Services',
        title: 'Eventos',
        titleAccent: 'Premium',
        description: 'Casamentos, aniversários, batizados ou eventos corporativos. Onde houver festa, a Cheers leva o bar com elegância e profissionalismo.',
        note: 'Podemos trabalhar num balcão disponibilizado ou levar o nosso próprio bar. Tudo é possível.',
      },
      categories: {
        weddings: 'Casamentos',
        corporate: 'Corporativos',
        private: 'Festas Privadas',
        baptisms: 'Batizados',
      },
      quote: {
        title: '"Falta o bar?',
        titleAccent: 'Cheers."',
        description: 'Não deixe o serviço de bar ao acaso. Confie na equipa que eleva qualquer celebração.',
        cta: 'CONTACTAR',
      },
    },
    portfolioPage: {
      hero: {
        eyebrow: 'Nosso Portfólio',
        title: 'Exemplos de',
        titleAccent: 'Trabalhos',
        description: 'Uma seleção de projetos que demonstram o nosso compromisso com a excelência na hospitalidade e inovação digital.',
      },
      cta: {
        title: 'Quer ver o seu projeto aqui?',
        button: 'Vamos Conversar',
      },
    },
    aboutPage: {
      hero: {
        eyebrow: 'A Nossa História',
        title: 'Paixão pela',
        titleAccent: 'Hospitalidade',
        p1: 'A Cheers Hospitality nasceu em Viseu com um propósito claro: elevar os padrões do serviço de bar e da hospitalidade em Portugal. Não somos apenas uma empresa de eventos; somos parceiros estratégicos dos nossos clientes.',
        p2: 'Com anos de experiência real no terreno, desde a gestão de bares de alta rotação à consultoria estratégica para hotéis de luxo, compreendemos que o sucesso está no detalhe, na eficiência operacional e na emoção que cada cocktail transmite.',
        quote: 'Onde outros veem apenas uma bebida, nós vemos uma oportunidade de criar uma memória inesquecível e um negócio rentável.',
      },
      values: {
        items: [
          { title: 'Excelência Operacional', text: 'Não deixamos nada ao acaso. Da logística impecável ao serviço de topo.' },
          { title: 'Visão Comercial', text: 'Hospitalidade é negócio. Focamos sempre na rentabilidade e no crescimento.' },
          { title: 'Inovação Constante', text: 'Dos novos cocktails às soluções digitais de ponta, estamos sempre à frente.' },
        ],
      },
    },
    homePage: {
      ctaSection: {
        title: 'Excelência',
        titleAccent: 'Operacional.',
        description: 'Elevamos os padrões de hospitalidade através de parcerias estratégicas com hotéis e espaços de eventos premium.',
        button: 'CONTACTAR',
      },
    },
    common: {
      language: 'Idioma',
      viewMore: 'Ver em Grande',
      premiumService: 'Serviço Premium',
      multiLanguage: 'Multi-idioma',
    },
    contactPage: {
      hero: {
        eyebrow: 'Contactos',
        title: 'Vamos',
        titleAccent: 'Conversar?',
      },
      info: {
        phoneTitle: 'Telefone / WhatsApp',
        phoneStatus: 'Indisponível até 15 Set.',
        emailTitle: 'Email Direto',
        instaTitle: 'Instagram',
        areaTitle: 'Área de Atuação',
        areaText: 'Baseados em Viseu, servimos as regiões de Coimbra, Porto, Alto Douro, Aveiro, Guarda e todo o norte e centro de Portugal. Para projetos de consultoria e soluções digitais, atuamos a nível nacional.',
      },
      form: {
        event: 'Evento',
        business: 'Negócio',
        businessType: 'Tipo de Negócio',
        placeholderName: 'Ex: João Silva',
        placeholderEmail: 'email@exemplo.com',
        placeholderPhone: '+351 900 000 000',
        placeholderMessage: 'Como podemos ajudar?',
        categories: {
          wedding: 'Casamento',
          birthday: 'Aniversário',
          baptism: 'Batizado',
          corporate: 'Corporativo',
          other: 'Outro',
        },
        businessCategories: {
          bar: 'Bar',
          restaurant: 'Restaurante',
          hotel: 'Hotel / Quinta',
          catering: 'Catering',
        },
        successDetail: 'Entraremos em contacto através do meio preferencial em menos de 24 horas.',
        sendAnother: 'Enviar outro pedido',
      },
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      events: 'Eventos',
      consulting: 'Consultoría',
      digital: 'Soluciones Digitales',
      portfolio: 'Portfolio',
      about: 'Nosotros',
      contact: 'Presupuesto',
    },
    hero: {
      headline: 'Ya tienes el evento. Nosotros traemos el bar.',
      subheadline: 'Excelencia operacional en servicios de bar, consultoría estratégica y soluciones digitales de alto rendimiento para el sector Hospitality.',
      ctaQuote: 'Solicitar Propuesta',
      ctaWhatsapp: 'CONTACTAR',
    },
    mobileBar: {
      title: 'Bar Móvil Premium',
      subtitle: 'Elegante. Sofisticado. Inolvidable.',
      description: 'Nuestro bar móvil es la solución perfecta para bodas y eventos que exigen un toque de distinción. Totalmente equipado y con un diseño industrial-chic.',
      features: ['Diseño Personalizado', 'Iluminación LED Cálida', 'Servicio de Cócteles Premium', 'Montaje en Cualquier Lugar'],
      cta: 'Ver Detalles',
    },
    businessAreas: {
      events: {
        title: 'Eventos & Bar Services',
        description: 'Tienes el evento. Nosotros traemos el bar. Soluciones completas para bodas, fiestas privadas y eventos corporativos.',
        features: ['Welcome Drinks', 'Cocktail Bar', 'Open Bar', 'Barstations Temáticas'],
      },
      consulting: {
        title: 'Consultoría B2B',
        description: 'Potenciamos el ROI y la eficiencia operativa de su unidad. Ingeniería de menús de alto rendimiento y estándares de lujo.',
        features: ['Ingeniería de Menú (ROI)', 'Gestión de Cost & Waste', 'Optimización de Operaciones', 'Formación de Estándares'],
      },
      digital: {
        title: 'Soluciones Digitales',
        description: 'Transforme sus televisores y menús en máquinas de venta. Menús QR y sistemas de comunicación visual.',
        features: ['Menús Digitales QR', 'Sistemas de TV', 'Websites Hospitality', 'Contenido Promocional'],
      },
    },
    packages: {
      title: 'Paquetes Exclusivos',
      subtitle: 'Soluciones adaptadas a la dimensión de su evento.',
      from: 'desde',
      items: [
        {
          name: 'Welcome Drinks',
          price: '450',
          description: 'La primera impresión es la que queda. Un servicio elegante de recepción.',
          features: ['Espumante & Cócteles de Bienvenida', 'Logística & Cristalería', 'Personal Profesional'],
        },
        {
          name: 'Cocktail Bar',
          price: '750',
          description: 'Mixología clásica y contemporánea para su evento.',
          features: ['Menú de Cócteles Personalizado', 'Bar Móvil Premium', 'Bartenders Especializados'],
        },
        {
          name: 'Open Bar Premium',
          price: '1200',
          description: 'La experiencia completa sin límites para sus invitados.',
          features: ['Amplia gama de destilados', 'Cócteles ilimitados', 'Gestión total de logística'],
        },
        {
          name: 'Bar Móvil Cheers',
          price: '950',
          description: 'Nuestra icónica unidad móvil con diseño industrial e iluminación vintage.',
          features: ['Diseño Industrial Chic', 'Iluminación LED & Vintage', 'Totalmente Equipado', 'Ideal para Bodas'],
        },
      ],
    },
    quote: {
      title: 'Solicite un Presupuesto',
      subtitle: 'Responda algunas preguntas y nos pondremos en contacto pronto.',
      form: {
        name: 'Nombre / Empresa',
        email: 'Email',
        phone: 'WhatsApp / Teléfono',
        eventType: 'Tipo de Evento',
        eventDate: 'Fecha del Evento',
        guests: 'Nº de Invitados',
        budget: 'Presupuesto Estimado',
        message: 'Notas Adicionales',
        submit: 'Enviar Solicitud',
        success: '¡Solicitud enviada con éxito! Nos pondremos en contacto pronto.',
      },
    },
    footer: {
      tagline: 'Elevamos la hospitalidad a un nuevo nivel.',
      contact: 'Contactos',
      follow: 'Síguenos',
      rights: 'Todos los derechos reservados.',
    },
    socialMediaIA: {
      headline: 'Tu Instagram está abandonado. Los clientes lo notan.',
      engagementStat: '+340% engagement promedio en los primeros 90 días',
      cta: 'Quiero Contenido que Vende',
      packages: [
        { name: 'Starter', features: ['8 posts/mes', 'Copywriting IA', 'Diseño Personalizado'] },
        { name: 'Growth', features: ['16 posts/mes', 'Stories semanales', 'Programación Automática', 'Informe de Rendimiento'], popular: true },
        { name: 'Premium', features: ['Posts Diarios', 'Reels Estratégicos', 'Gestión de Comunidad', 'Call Mensual de Estrategia'] },
      ],
    },
    digitalSignage: {
      headline: 'De cero a la pantalla vendiendo — en 48h',
      timeline: [
        { step: '01', title: 'Diagnóstico del espacio' },
        { step: '02', title: 'Instalación del hardware' },
        { step: '03', title: 'Creación de contenidos' },
      ],
      packages: [
        { name: 'Bar Pack', features: ['1 pantalla', 'Software', '4 contenidos/mes', 'Soporte remoto'] },
        { name: 'Hotel/Quinta Pack', features: ['Tantas pantallas como sea necesario', 'Software', 'Menús personalizados por evento', 'Cócteles personalizados por evento', 'Soporte prioritario', 'Y mucho más'] },
      ],
      cta: 'Solicitar Instalación',
      locationNote: 'Instalación disponible en Viseu y región Centro',
    },
    curiosityHook: {
      label: '¿SABÍA QUE...?',
      cards: [
        {
          title: 'El cliente decide en 8 segundos',
          text: 'La primera impresión — olor, luz, sonido, limpieza — se forma antes de que el cliente se siente. Si el espacio no invita, no hay cóctel lo suficientemente bueno para compensar. El ambiente es el producto.',
        },
        {
          title: 'Staff sin entrenamiento es tu mayor costo oculto',
          text: 'Un bartender lento, sin técnica de upsell o con mala actitud cuesta más que el salario que recibe. Entrenamiento continuo, estándares claros y accountability diaria son la diferencia entre un bar rentable y uno que sobrevive.',
        },
        {
          title: 'Menú grande ≠ más ventas',
          text: 'Menús enormes crean desperdicio, confusión en el staff y clientes indecisos. Menos opciones, bien ejecutadas, con márgenes calculados — especialmente en los cócteles de la casa — generan más dinero y mejor experiencia.',
        },
      ],
      footer: 'Estas no son opiniones. Son patrones observados en cientos de operaciones de hostelería.',
    },
    consultingAppointment: {
      text: 'Presupuestos gratuitos • Visitamos su negocio',
      cta: 'Programe una reunión con nosotros',
    },
    consultingPage: {
      hero: {
        eyebrow: 'Consultoría Estratégica',
        title: 'Negocios',
        titleAccent: 'Inteligentes',
        description: 'Ayudamos a bares, restaurantes y hoteles a maximizar la rentabilidad a través de procesos optimizados e ingeniería de menús centrada en el beneficio.',
      },
      transformation: {
        title: 'De un bar común a una',
        titleAccent: 'operación de élite.',
        features: [
          { title: 'Ingeniería de Menú', text: 'Analizamos la rentabilidad de cada ingrediente para crear menús que vendan más los productos más rentables.' },
          { title: 'Formación de Equipo', text: 'Estándares de servicio que elevan la experiencia del cliente y aumentan el ticket medio por mesa.' },
          { title: 'Estrategia de Precios', text: 'Modelos dinámicos basados en el mercado real y costes operativos precisos.' },
        ],
      },
      painPoints: {
        title: '¿Siente estos problemas?',
        items: [
          'Alto volumen operativo con márgenes de beneficio reducidos',
          'Inconsistencia en los estándares de servicio y hospitalidad',
          'Menús estáticos con baja rotación de productos premium',
          'Desperdicio de stock (Waste) que afecta el Food & Beverage Cost',
          'Falta de una identidad visual y digital integrada en la unidad',
          'Dificultad en la formación continua y retención de talentos de bar',
        ],
      },
      cta: 'Lleve su negocio al siguiente nivel.',
    },
    digitalPage: {
      hero: {
        eyebrow: 'Innovación Digital',
        title: 'Hospitalidad',
        titleAccent: 'Digital',
        description: 'Herramientas tecnológicas diseñadas para aumentar el consumo medio y mejorar la comunicación con el cliente en el punto de venta.',
      },
      tvStrategy: {
        badge: 'Pérdida de Ingresos Detectada',
        title: '¿Sus TVs están',
        titleAccent: 'perdiendo dinero?',
        description: 'Muchos espacios tienen pantallas conectadas en canales aleatorios o contenidos estáticos. Nuestras soluciones transforman esas pantallas en vendedores silenciosos que promueven cócteles, postres y happy hours en los momentos adecuados.',
        features: [
          'Promoción dinámica de productos rentables',
          'Aumento inmediato del ticket medio',
          'Comunicación visual profesional y elegante',
          'Gestión centralizada de contenidos',
        ],
        preview: {
          eyebrow: 'Vista Previa en Vivo',
          title: 'HAPPY HOUR',
          subtitle: 'Gin & Tonic 2x1 • 17:00 - 19:00',
        },
      },
      aiSocial: {
        eyebrow: 'Gestión Social con IA',
        popularTag: 'Más Popular',
        cta: 'Quiero Contenido que Vende',
      },
      signage: {
        eyebrow: 'Soluciones Llave en Mano',
      },
      services: {
        items: [
          { title: 'Menús QR Premium', text: 'Menús digitales elegantes, multilingües y fáciles de actualizar. Olvídese de las hojas de papel desgastadas.' },
          { title: 'Multilingüe Real', text: 'Traducciones profesionales que respetan la terminología de la hostelería para atraer turistas.' },
          { title: 'Websites Enfocados', text: 'Sitios web mobile-first optimizados para reservas y presentación de servicios hoteleros.' },
          { title: 'Soporte y Actualizaciones', text: 'Nos encargamos de todas las actualizaciones mensuales para que su enfoque sea el cliente.' },
          { title: 'Cartelería Digital', text: 'Sistemas de pantallas para lobbies de hoteles, fincas de eventos y bares de alta rotación.' },
          { title: 'Enfoque en Ingresos', text: 'Estrategias digitales diseñadas para aumentar las ventas de cócteles y ventas adicionales.' },
        ],
      },
      cta: {
        title: 'Digitalice su éxito.',
        button: 'Pedir Demostración Digital',
      },
    },
    eventsPage: {
      hero: {
        eyebrow: 'Servicios de Bar',
        title: 'Eventos',
        titleAccent: 'Premium',
        description: 'Bodas, cumpleaños, bautizos o eventos corporativos. Donde haya fiesta, Cheers lleva el bar con elegancia y profesionalismo.',
        note: 'Podemos trabajar en una barra disponible o traer nuestra propia barra. Todo es posible.',
      },
      categories: {
        weddings: 'Bodas',
        corporate: 'Corporativos',
        private: 'Fiestas Privadas',
        baptisms: 'Bautizos',
      },
      quote: {
        title: '¿Falta el bar?',
        titleAccent: 'Cheers."',
        description: 'No deje el servicio de bar al azar. Confíe en el equipo que eleva cualquier celebración.',
        cta: 'CONTACTAR',
      },
    },
    portfolioPage: {
      hero: {
        eyebrow: 'Nuestro Portfolio',
        title: 'Ejemplos de',
        titleAccent: 'Trabajos',
        description: 'Una selección de proyectos que demuestran nuestro compromiso con la excelencia en la hospitalidad e innovación digital.',
      },
      cta: {
        title: '¿Quiere ver su proyecto aquí?',
        button: 'Hablemos',
      },
    },
    aboutPage: {
      hero: {
        eyebrow: 'Nuestra Historia',
        title: 'Pasión por la',
        titleAccent: 'Hospitalidad',
        p1: 'Cheers Hospitality nació en Viseu con un propósito claro: elevar los estándares del servicio de bar y de la hospitalidad en Portugal. No somos solo una empresa de eventos; somos socios estratégicos de nuestros clientes.',
        p2: 'Con años de experiencia real en el terreno, desde la gestión de bares de alta rotación hasta la consultoría estratégica para hoteles de lujo, entendemos que el éxito está en el detalle, en la eficiencia operativa y en la emoción que transmite cada cóctel.',
        quote: 'Donde otros ven solo una bebida, nosotros vemos una oportunidad de crear una memoria inolvidable y un negocio rentable.',
      },
      values: {
        items: [
          { title: 'Excelencia Operativa', text: 'No dejamos nada al azar. Desde una logística impecable hasta un servicio de primera.' },
          { title: 'Visión Comercial', text: 'La hospitalidad é un negocio. Nos enfocamos siempre en la rentabilidad y el crecimiento.' },
          { title: 'Innovación Constante', text: 'Desde nuevos cócteles hasta soluciones digitales de vanguardia, siempre estamos un paso por delante.' },
        ],
      },
    },
    homePage: {
      ctaSection: {
        title: 'Excelencia',
        titleAccent: 'Operativa.',
        description: 'Elevamos los estándares de hospitalidad a través de asociaciones estratégicas con hoteles y espacios de eventos premium.',
        button: 'CONTACTAR',
      },
    },
    common: {
      language: 'Idioma',
      viewMore: 'Ver en Grande',
      premiumService: 'Servicio Premium',
      multiLanguage: 'Multi-idioma',
    },
    contactPage: {
      hero: {
        eyebrow: 'Contactos',
        title: '¿Vamos a',
        titleAccent: 'Conversar?',
      },
      info: {
        phoneTitle: 'Teléfono / WhatsApp',
        phoneStatus: 'No disponible hasta el 15 de septiembre.',
        emailTitle: 'Email Directo',
        instaTitle: 'Instagram',
        areaTitle: 'Área de Actuación',
        areaText: 'Con sede en Viseu, servimos las regiones de Coimbra, Oporto, Alto Douro, Aveiro, Guarda y todo el norte y centro de Portugal. Para proyectos de consultoría y soluciones digitales, actuamos a nivel nacional.',
      },
      form: {
        event: 'Evento',
        business: 'Negocio',
        businessType: 'Tipo de Negocio',
        placeholderName: 'Ej: Juan Silva',
        placeholderEmail: 'email@ejemplo.com',
        placeholderPhone: '+34 600 000 000',
        placeholderMessage: '¿Cómo podemos ayudar?',
        categories: {
          wedding: 'Boda',
          birthday: 'Cumpleaños',
          baptism: 'Bautizo',
          corporate: 'Corporativo',
          other: 'Otro',
        },
        businessCategories: {
          bar: 'Bar',
          restaurant: 'Restaurante',
          hotel: 'Hotel / Quinta',
          catering: 'Catering',
        },
        successDetail: 'Nos pondremos en contacto a través de su medio preferido en menos de 24 horas.',
        sendAnother: 'Enviar otra solicitud',
      },
    },
  },
  en: {
    nav: {
      home: 'Home',
      events: 'Events',
      consulting: 'Consulting',
      digital: 'Digital Solutions',
      portfolio: 'Portfolio',
      about: 'About',
      contact: 'Get a Quote',
    },
    hero: {
      headline: 'Have the event. We bring the bar.',
      subheadline: 'Operational excellence in bar services, strategic consulting, and high-performance digital solutions for the Hospitality sector.',
      ctaQuote: 'Request Proposal',
      ctaWhatsapp: 'CONTACTAR',
    },
    mobileBar: {
      title: 'Premium Mobile Bar',
      subtitle: 'Elegant. Sophisticated. Unforgettable.',
      description: 'Our mobile bar is the perfect solution for weddings and events that demand a touch of distinction. Fully equipped with an industrial-chic design.',
      features: ['Custom Design', 'Warm LED Lighting', 'Premium Cocktail Service', 'Setup in Any Location'],
      cta: 'View Details',
    },
    businessAreas: {
      events: {
        title: 'Events & Bar Services',
        description: "You have the event. We bring the bar. Complete solutions for weddings, private parties, and corporate events.",
        features: ['Welcome Drinks', 'Cocktail Bar', 'Open Bar', 'Themed Bar Stations'],
      },
      consulting: {
        title: 'B2B Consulting',
        description: 'We boost your unit ROI and operational efficiency. High-performance menu engineering and luxury hospitality standards.',
        features: ['Menu Engineering (ROI)', 'Cost & Waste Management', 'Operations Optimization', 'Service Standards'],
      },
      digital: {
        title: 'Digital Solutions',
        description: 'Turn your TVs and menus into sales machines. QR menus and visual communication systems.',
        features: ['QR Digital Menus', 'TV Systems', 'Hospitality Websites', 'Promotional Content'],
      },
    },
    packages: {
      title: 'Exclusive Packages',
      subtitle: 'Solutions tailored to the scale of your event.',
      from: 'from',
      items: [
        {
          name: 'Welcome Drinks',
          price: '450',
          description: 'The first impression is the one that lasts. An elegant reception service.',
          features: ['Sparkling Wine & Welcome Cocktails', 'Logistics & Glassware', 'Professional Staff'],
        },
        {
          name: 'Cocktail Bar',
          price: '750',
          description: 'Classic and contemporary mixology for your event.',
          features: ['Customized Cocktail Menu', 'Premium Mobile Bar', 'Specialized Bartenders'],
        },
        {
          name: 'Open Bar Premium',
          price: '1200',
          description: 'The complete limitless experience for your guests.',
          features: ['Wide range of spirits', 'Unlimited cocktails', 'Total logistics management'],
        },
        {
          name: 'Cheers Mobile Bar',
          price: '950',
          description: 'Our iconic mobile unit with industrial design and vintage lighting.',
          features: ['Industrial Chic Design', 'LED & Vintage Lighting', 'Fully Equipped', 'Ideal for Weddings'],
        },
      ],
    },
    quote: {
      title: 'Request a Quote',
      subtitle: 'Answer a few questions and we will get back to you shortly.',
      form: {
        name: 'Name / Company',
        email: 'Email',
        phone: 'WhatsApp / Phone',
        eventType: 'Event Type',
        eventDate: 'Event Date',
        guests: 'Number of Guests',
        budget: 'Estimated Budget',
        message: 'Additional Notes',
        submit: 'Send Request',
        success: 'Request sent successfully! We will contact you soon.',
      },
    },
    footer: {
      tagline: 'Elevating hospitality to a new level.',
      contact: 'Contacts',
      follow: 'Follow Us',
      rights: 'All rights reserved.',
    },
    socialMediaIA: {
      headline: 'Your Instagram is abandoned. Customers notice.',
      engagementStat: '+340% average engagement in the first 90 days',
      cta: 'I Want Content that Sells',
      packages: [
        { name: 'Starter', features: ['8 posts/month', 'AI Copywriting', 'Custom Design'] },
        { name: 'Growth', features: ['16 posts/month', 'Weekly Stories', 'Auto Scheduling', 'Performance Report'], popular: true },
        { name: 'Premium', features: ['Daily Posts', 'Strategic Reels', 'Community Management', 'Monthly Strategy Call'] },
      ],
    },
    digitalSignage: {
      headline: 'From zero to selling screen — in 48h',
      timeline: [
        { step: '01', title: 'Space Diagnosis' },
        { step: '02', title: 'Hardware Installation' },
        { step: '03', title: 'Content Creation' },
      ],
      packages: [
        { name: 'Bar Pack', features: ['1 screen', 'Software', '4 contents/month', 'Remote support'] },
        { name: 'Hotel/Quinta Pack', features: ['As many screens as needed', 'Software', 'Custom menus per event', 'Custom cocktails per event', 'Priority support', 'And much more'] },
      ],
      cta: 'Request Installation',
      locationNote: 'Installation available in Viseu and Centro region',
    },
    curiosityHook: {
      label: 'DID YOU KNOW...?',
      cards: [
        {
          title: 'The customer decides in 8 seconds',
          text: 'The first impression — smell, light, sound, cleanliness — is formed before the customer sits down. If the space is not inviting, no cocktail is good enough to compensate. The environment is the product.',
        },
        {
          title: 'Untrained staff is your biggest hidden cost',
          text: 'A slow bartender, without upsell techniques or with a bad attitude, costs more than the salary they receive. Continuous training, clear standards, and daily accountability are the difference between a profitable bar and one that just survives.',
        },
        {
          title: 'Big menu ≠ more sales',
          text: 'Huge menus create waste, staff confusion, and indecisive customers. Fewer options, well-executed, with calculated margins — especially in house cocktails — generate more money and a better experience.',
        },
      ],
      footer: 'These are not opinions. They are patterns observed in hundreds of hospitality operations.',
    },
    consultingAppointment: {
      text: 'Free quotes • We visit your business',
      cta: 'Schedule a meeting with us',
    },
    consultingPage: {
      hero: {
        eyebrow: 'Strategic Consulting',
        title: 'Smart',
        titleAccent: 'Business',
        description: 'We help bars, restaurants, and hotels maximize profitability through optimized processes and profit-focused menu engineering.',
      },
      transformation: {
        title: 'From an ordinary bar to an',
        titleAccent: 'elite operation.',
        features: [
          { title: 'Menu Engineering', text: 'We analyze the profitability of each ingredient to create menus that sell the most profitable products.' },
          { title: 'Team Training', text: 'Service standards that elevate the customer experience and increase the average ticket per table.' },
          { title: 'Pricing Strategy', text: 'Dynamic models based on the real market and precise operational costs.' },
        ],
      },
      painPoints: {
        title: 'Do you feel these problems?',
        items: [
          'High operational volume with reduced profit margins',
          'Inconsistency in service and hospitality standards',
          'Static menus with low turnover of premium products',
          'Stock waste impacting Food & Beverage Cost',
          'Lack of an integrated visual and digital identity in the unit',
          'Difficulty in continuous training and bar talent retention',
        ],
      },
      cta: 'Take your business to the next level.',
    },
    digitalPage: {
      hero: {
        eyebrow: 'Digital Innovation',
        title: 'Digital',
        titleAccent: 'Hospitality',
        description: 'Technological tools designed to increase average consumption and improve customer communication at the point of sale.',
      },
      tvStrategy: {
        badge: 'Revenue Loss Detected',
        title: 'Are your TVs',
        titleAccent: 'losing money?',
        description: 'Many spaces have screens connected to random channels or static content. Our solutions transform these screens into silent salespeople promoting cocktails, desserts, and happy hours at the right times.',
        features: [
          'Dynamic promotion of profitable products',
          'Immediate increase in average ticket',
          'Professional and elegant visual communication',
          'Centralized content management',
        ],
        preview: {
          eyebrow: 'Live Preview',
          title: 'HAPPY HOUR',
          subtitle: 'Gin & Tonic 2x1 • 17:00 - 19:00',
        },
      },
      aiSocial: {
        eyebrow: 'AI Social Management',
        popularTag: 'Most Popular',
        cta: 'I Want Content that Sells',
      },
      signage: {
        eyebrow: 'Turnkey Solutions',
      },
      services: {
        items: [
          { title: 'Premium QR Menus', text: 'Elegant, multilingual, and easy-to-update digital menus. Forget worn-out paper sheets.' },
          { title: 'Real Multilingual', text: 'Professional translations that respect hospitality terminology to attract tourists.' },
          { title: 'Focused Websites', text: 'Mobile-first sites optimized for bookings and presentation of hospitality services.' },
          { title: 'Support & Updates', text: 'We take care of all monthly updates so your focus is on the customer.' },
          { title: 'Digital Signage', text: 'Screen systems for hotel lobbies, event venues, and high-turnover bars.' },
          { title: 'Revenue Focus', text: 'Digital strategies designed to increase cocktail sales and upsells.' },
        ],
      },
      cta: {
        title: 'Digitize your success.',
        button: 'Request Digital Demo',
      },
    },
    eventsPage: {
      hero: {
        eyebrow: 'Bar Services',
        title: 'Premium',
        titleAccent: 'Events',
        description: 'Weddings, birthdays, baptisms, or corporate events. Wherever there is a party, Cheers brings the bar with elegance and professionalism.',
        note: 'We can work at a provided counter or bring our own bar. Everything is possible.',
      },
      categories: {
        weddings: 'Weddings',
        corporate: 'Corporate',
        private: 'Private Parties',
        baptisms: 'Baptisms',
      },
      quote: {
        title: '"Missing the bar?',
        titleAccent: 'Cheers."',
        description: 'Don’t leave the bar service to chance. Trust the team that elevates any celebration.',
        cta: 'CONTACT US',
      },
    },
    portfolioPage: {
      hero: {
        eyebrow: 'Our Portfolio',
        title: 'Project',
        titleAccent: 'Examples',
        description: 'A selection of projects demonstrating our commitment to hospitality excellence and digital innovation.',
      },
      cta: {
        title: 'Want to see your project here?',
        button: 'Let’s Talk',
      },
    },
    aboutPage: {
      hero: {
        eyebrow: 'Our Story',
        title: 'Passion for',
        titleAccent: 'Hospitality',
        p1: 'Cheers Hospitality was born in Viseu with a clear purpose: to raise the standards of bar service and hospitality in Portugal. We are not just an event company; we are strategic partners for our clients.',
        p2: 'With years of real field experience, from managing high-turnover bars to strategic consulting for luxury hotels, we understand that success lies in the detail, operational efficiency, and the emotion each cocktail conveys.',
        quote: 'Where others see just a drink, we see an opportunity to create an unforgettable memory and a profitable business.',
      },
      values: {
        items: [
          { title: 'Operational Excellence', text: 'We leave nothing to chance. From impeccable logistics to top-tier service.' },
          { title: 'Commercial Vision', text: 'Hospitality is business. We always focus on profitability and growth.' },
          { title: 'Constant Innovation', text: 'From new cocktails to cutting-edge digital solutions, we are always ahead.' },
        ],
      },
    },
    homePage: {
      ctaSection: {
        title: 'Operational',
        titleAccent: 'Excellence.',
        description: 'We elevate hospitality standards through strategic partnerships with hotels and premium event venues.',
        button: 'CONTACT US',
      },
    },
    common: {
      language: 'Language',
      viewMore: 'View Large',
      premiumService: 'Premium Service',
      multiLanguage: 'Multi-language',
    },
    contactPage: {
      hero: {
        eyebrow: 'Contacts',
        title: "Let's",
        titleAccent: 'Talk?',
      },
      info: {
        phoneTitle: 'Phone / WhatsApp',
        phoneStatus: 'Unavailable until Sept 15th.',
        emailTitle: 'Direct Email',
        instaTitle: 'Instagram',
        areaTitle: 'Coverage Area',
        areaText: 'Based in Viseu, we serve Coimbra, Porto, Alto Douro, Aveiro, Guarda, and the entire north and center of Portugal. For consulting and digital solutions, we operate nationwide.',
      },
      form: {
        event: 'Event',
        business: 'Business',
        businessType: 'Business Type',
        placeholderName: 'Ex: John Doe',
        placeholderEmail: 'email@example.com',
        placeholderPhone: '+44 700 000 000',
        placeholderMessage: 'How can we help?',
        categories: {
          wedding: 'Wedding',
          birthday: 'Birthday',
          baptism: 'Baptism',
          corporate: 'Corporate',
          other: 'Other',
        },
        businessCategories: {
          bar: 'Bar',
          restaurant: 'Restaurant',
          hotel: 'Hotel / Venue',
          catering: 'Catering',
        },
        successDetail: 'We will get in touch through your preferred method in less than 24 hours.',
        sendAnother: 'Send another request',
      },
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      events: 'Événements',
      consulting: 'Conseil',
      digital: 'Solutions Digitales',
      portfolio: 'Portfolio',
      about: 'À Propos',
      contact: 'Devis',
    },
    hero: {
      headline: 'Vous avez l\'événement. Nous apportons le bar.',
      subheadline: 'Service de bar premium, conseil stratégique et solutions digitales pour l\'excellence dans l\'événementiel et l\'hôtellerie.',
      ctaQuote: 'Demander un Devis',
      ctaWhatsapp: 'CONTACTAR',
    },
    mobileBar: {
      title: 'Bar Mobile Premium',
      subtitle: 'Élégant. Sophistiqué. Inoubliable.',
      description: 'Notre bar mobile est la solution parfaite pour les mariages et les événements qui exigent une touche de distinction. Entièrement équipé avec un design industriel-chic.',
      features: ['Design Personnalisé', 'Éclairage LED Chaud', 'Service de Cocktails Premium', 'Installation en Tout Lieu'],
      cta: 'Voir Détails',
    },
    businessAreas: {
      events: {
        title: 'Événements & Bar Services',
        description: 'Vous avez l\'événement. Nous apportons le bar. Solutions complètes pour mariages, fêtes privées et événements d\'entreprise.',
        features: ['Boissons de Bienvenue', 'Bar à Cocktails', 'Open Bar', 'Stations de Bar Thématiques'],
      },
      consulting: {
        title: 'Conseil Hôtelier',
        description: 'Nous optimisons la rentabilité et l\'exploitation de votre entreprise. Ingénierie de menu et standards de service.',
        features: ['Ingénierie de Menu', 'Stratégie de Prix', 'Optimisation de Bar', 'Standards d\'Équipe'],
      },
      digital: {
        title: 'Solutions Digitales',
        description: 'Transformez vos téléviseurs et menus en machines de vente. Menus QR et systèmes de communication visuelle.',
        features: ['Menus Digitaux QR', 'Systèmes TV', 'Sites Web Hôteliers', 'Contenu Promotionnel'],
      },
    },
    packages: {
      title: 'Forfaits Exclusifs',
      subtitle: 'Des solutions adaptées à l\'ampleur de votre événement.',
      from: 'à partir de',
      items: [
        {
          name: 'Welcome Drinks',
          price: '450',
          description: 'La première impression est celle qui reste. Un service de réception élégant.',
          features: ['Mousseux & Cocktails de Bienvenue', 'Logistique & Verrerie', 'Personnel Professionnel'],
        },
        {
          name: 'Cocktail Bar',
          price: '750',
          description: 'Mixologie classique et contemporaine pour votre événement.',
          features: ['Menu de Cocktails Personnalisé', 'Bar Mobile Premium', 'Bartenders Spécialisés'],
        },
        {
          name: 'Open Bar Premium',
          price: '1200',
          description: 'L\'expérience complète et illimitée pour vos invités.',
          features: ['Large gamme de spiritueux', 'Cocktails illimités', 'Gestion logistique totale'],
        },
        {
          name: 'Bar Mobile Cheers',
          price: '950',
          description: 'Notre unité mobile iconique au design industriel et éclairage vintage.',
          features: ['Design Industriel Chic', 'Éclairage LED & Vintage', 'Entièrement Équipé', 'Idéal pour Mariages'],
        },
      ],
    },
    quote: {
      title: 'Demander un Devis',
      subtitle: 'Répondez à quelques questions et nous vous recontacterons sous peu.',
      form: {
        name: 'Nom / Entreprise',
        email: 'Email',
        phone: 'WhatsApp / Téléphone',
        eventType: 'Type d\'Événement',
        eventDate: 'Date de l\'Événement',
        guests: 'Nombre d\'Invités',
        budget: 'Budget Estimé',
        message: 'Notes Additionnelles',
        submit: 'Envoyer la Demande',
        success: 'Demande envoyée com succès ! Nous vous contacterons bientôt.',
      },
    },
    footer: {
      tagline: 'Élever l\'hôtellerie à un nouveau niveau.',
      contact: 'Contacts',
      follow: 'Suivez-nous',
      rights: 'Tous droits réservés.',
    },
    socialMediaIA: {
      headline: 'Votre Instagram est abandonné. Les clients le remarquent.',
      engagementStat: '+340% d\'engagement moyen dans les 90 premiers jours',
      cta: 'Je veux du contenu qui vend',
      packages: [
        { name: 'Starter', features: ['8 posts/mois', 'Copywriting IA', 'Design Personnalisé'] },
        { name: 'Growth', features: ['16 posts/mois', 'Stories hebdomadaires', 'Planification Automatique', 'Rapport de Performance'], popular: true },
        { name: 'Premium', features: ['Posts Quotidiens', 'Reels Stratégiques', 'Gestion de Communauté', 'Call Mensuel de Stratégie'] },
      ],
    },
    digitalSignage: {
      headline: 'De zéro à l\'écran qui vend — en 48h',
      timeline: [
        { step: '01', title: 'Diagnostic de l\'espace' },
        { step: '02', title: 'Installation du matériel' },
        { step: '03', title: 'Création de contenus' },
      ],
      packages: [
        { name: 'Bar Pack', features: ['1 écran', 'Logiciel', '4 contenus/mois', 'Support à distance'] },
        { name: 'Hotel/Quinta Pack', features: ['Autant d\'écrans que nécessaire', 'Logiciel', 'Menus personnalisés par événement', 'Cocktails personnalisés par événement', 'Support prioritaire', 'Et bien plus encore'] },
      ],
      cta: 'Demander l\'Installation',
      locationNote: 'Installation disponible à Viseu et région Centre',
    },
    curiosityHook: {
      label: 'SAVIEZ-VOUS QUE...?',
      cards: [
        {
          title: 'Le client décide en 8 secondes',
          text: "La première impression — odeur, lumière, son, propreté — se forme avant que le client ne s'assoie. Si l'espace n'est pas invitant, aucun cocktail n'est assez bon pour compenser. L'environnement est le produit.",
        },
        {
          title: 'Un personnel non formé est votre plus grand coût caché',
          text: "Un bartender lent, sans techniques de vente incitative ou avec une mauvaise attitude, coûte plus cher que le salaire qu'il reçoit. Une formation continue, des standards clairs et une responsabilité quotidienne font la différence entre un bar rentable et un qui survit.",
        },
        {
          title: 'Grand menu ≠ plus de ventes',
          text: "Les menus énormes créent du gaspillage, de la confusion chez le personnel et des clients indécis. Moins d'options, bien exécutées, avec des marges calculées — surtout pour les cocktails maison — génèrent plus d'argent et une meilleure expérience.",
        },
      ],
      footer: "Ce ne sont pas des opinions. Ce sont des schémas observés dans des centaines d'opérations hôtelières.",
    },
    consultingAppointment: {
      text: 'Devis gratuits • Nous visitons votre entreprise',
      cta: 'Planifiez une réunion avec nous',
    },
    consultingPage: {
      hero: {
        eyebrow: 'Conseil Stratégique',
        title: 'Affaires',
        titleAccent: 'Intelligentes',
        description: 'Nous aidons les bars, restaurants et hôtels à maximizar a rentabilidade através de processos otimizados e engenharia de menus focada no lucro.',
      },
      transformation: {
        title: 'D\'un bar ordinaire à une',
        titleAccent: 'opération d\'élite.',
        features: [
          { title: 'Ingénierie de Menu', text: 'Nous analysons la rentabilité de chaque ingrediente pour créer des menus qui vendent les produits les plus rentables.' },
          { title: 'Formation d\'Équipe', text: 'Des standards de service qui rehaussent l\'expérience client et augmentent le ticket moyen par table.' },
          { title: 'Stratégie de Prix', text: 'Des modèles dynamiques basés sur le marché réel et des coûts opérationnels précis.' },
        ],
      },
      painPoints: {
        title: 'Ressentez-vous ces problèmes ?',
        items: [
          'Volume opérationnel élevé com des marges de profit réduites',
          'Incohérence dans les standards de service et d\'accueil',
          'Menus statiques avec une faible rotation des produits premium',
          'Gaspillage de stock impactant le coût nourriture et boissons',
          'Manque d\'identité visuelle et digitale intégrée dans l\'établissement',
          'Difficulté de formation continue et de rétention des talents du bar',
        ],
      },
      cta: 'Passez votre entreprise au niveau supérieur.',
    },
    digitalPage: {
      hero: {
        eyebrow: 'Innovation Digitale',
        title: 'Hospitalité',
        titleAccent: 'Digitale',
        description: 'Des outils technologiques conçus pour augmenter la consommation moyenne et améliorer la communication client au point de vente.',
      },
      tvStrategy: {
        badge: 'Perte de Revenus Détectée',
        title: 'Vos téléviseurs',
        titleAccent: 'perdent-ils de l\'argent ?',
        description: 'De nombreux établissements ont des écrans connectés à des chaînes aléatoires ou du contenu statique. Nos solutions transforment ces écrans en vendeurs silencieux promouvant cocktails, desserts et happy hours aux bons moments.',
        features: [
          'Promotion dynamique de produits rentables',
          'Augmentation immédiate du ticket moyen',
          'Communication visuelle professionnelle et élégante',
          'Gestion centralisée du contenu',
        ],
        preview: {
          eyebrow: 'Aperçu en Direct',
          title: 'HAPPY HOUR',
          subtitle: 'Gin & Tonic 2x1 • 17:00 - 19:00',
        },
      },
      aiSocial: {
        eyebrow: 'Gestion Sociale par IA',
        popularTag: 'Plus Populaire',
        cta: 'Je veux du contenu qui vend',
      },
      signage: {
        eyebrow: 'Solutions Clés en Main',
      },
      services: {
        items: [
          { title: 'Menus QR Premium', text: 'Menus digitaux élégants, multilingues et faciles à mettre à jour. Oubliez les feuilles de papier usées.' },
          { title: 'Vrai Multilingue', text: 'Des traductions professionnelles qui respectent la terminologie hôtelière pour attirer les touristes.' },
          { title: 'Sites Web Ciblés', text: 'Sites mobile-first optimisés pour les réservations et la présentation des services hôteliers.' },
          { title: 'Support & Mises à jour', text: 'Nous nous occupons de toutes les mises à jour mensuelles pour que vous puissiez vous concentrer sur le client.' },
          { title: 'Affichage Dynamique', text: 'Systèmes d\'écrans pour les halls d\'hôtels, les lieux d\'événements et les bars à forte fréquentation.' },
          { title: 'Focus sur les Revenus', text: 'Stratégies digitales conçues pour augmenter les ventes de cocktails et les ventes incitatives.' },
        ],
      },
      cta: {
        title: 'Numérisez votre succès.',
        button: 'Demander une Démo Digitale',
      },
    },
    eventsPage: {
      hero: {
        eyebrow: 'Services de Bar',
        title: 'Événements',
        titleAccent: 'Premium',
        description: 'Mariages, anniversaires, baptêmes ou événements d\'entreprise. Partout où il y a une fête, Cheers apporte le bar avec élégance et professionnalisme.',
        note: 'Nous pouvons travailler à un comptoir fourni ou apporter nosso propre bar. Tout est possible.',
      },
      categories: {
        weddings: 'Mariages',
        corporate: 'Entreprise',
        private: 'Fêtes Privées',
        baptisms: 'Baptêmes',
      },
      quote: {
        title: '"Le bar manque ?',
        titleAccent: 'Cheers."',
        description: 'Ne laissez pas le service de bar au hasard. Faites confiance à l\'équipe qui sublime chaque célébration.',
        cta: 'CONTACTER',
      },
    },
    portfolioPage: {
      hero: {
        eyebrow: 'Notre Portfolio',
        title: 'Exemples de',
        titleAccent: 'Projets',
        description: 'Une sélection de projets démontrant nosso engagement envers l\'excellence hôtelière et l\'innovation digitale.',
      },
      cta: {
        title: 'Vous voulez voir votre projet aqui ?',
        button: 'Parlons-en',
      },
    },
    aboutPage: {
      hero: {
        eyebrow: 'Notre Histoire',
        title: 'Passion pour',
        titleAccent: 'l\'Hospitalité',
        p1: 'Cheers Hospitality est née à Viseu com um objectif clair : élever les standards du service de bar et de l\'accueil au Portugal. Nous ne sommes pas qu\'une société d\'événements ; nous sommes des partenaires stratégiques pour nos clients.',
        p2: 'Avec des années d\'expérience réelle sur le terrain, de la gestion de bars à forte fréquentation au conseil stratégique pour des hôtels de luxe, nous comprenons que le succès réside dans le détail, l\'efficacité opérationnelle et l\'émotion que chaque cocktail transmet.',
        quote: 'Là où d\'autres ne voient qu\'une boisson, nous voyons une opportunité de créer um souvenir inoubliable e um negócio rentável.',
      },
      values: {
        items: [
          { title: 'Excellence Opérationnelle', text: 'Nous ne laissons rien au hasard. D\'une logistique impeccable à um service de premier ordre.' },
          { title: 'Vision Commerciale', text: 'L\'hospitalité est um business. Nous nous concentrons toujours sur la rentabilité e a croissance.' },
          { title: 'Innovation Constante', text: 'Des nouveaux cocktails aux solutions digitales de pointe, nous avons toujours une longueur d\'avance.' },
        ],
      },
    },
    homePage: {
      ctaSection: {
        title: 'Excellence',
        titleAccent: 'Opérationnelle.',
        description: 'Nous élevons les standards de l\'hospitalité grâce à des partenariats stratégiques avec des hôtels et des lieux d\'événements premium.',
        button: 'CONTACTER',
      },
    },
    common: {
      language: 'Langue',
      viewMore: 'Voir en Grand',
      premiumService: 'Service Premium',
      multiLanguage: 'Multi-langue',
    },
    contactPage: {
      hero: {
        eyebrow: 'Contacts',
        title: 'Parlons',
        titleAccent: 'Ensemble?',
      },
      info: {
        phoneTitle: 'Téléphone / WhatsApp',
        phoneStatus: 'Indisponible jusqu\'au 15 septembre.',
        emailTitle: 'Email Direct',
        instaTitle: 'Instagram',
        areaTitle: 'Zone de Couverture',
        areaText: 'Basés à Viseu, nous desservons Coimbra, Porto, Alto Douro, Aveiro, Guarda et tout le nord et le centre du Portugal. Pour le conseil et les solutions numériques, nous opérons à l\'échelle nationale.',
      },
      form: {
        event: 'Événement',
        business: 'Entreprise',
        businessType: 'Type d\'Entreprise',
        placeholderName: 'Ex : Jean Dupont',
        placeholderEmail: 'email@exemple.com',
        placeholderPhone: '+33 600 000 000',
        placeholderMessage: 'Comment pouvons-nous vous aider ?',
        categories: {
          wedding: 'Mariage',
          birthday: 'Anniversaire',
          baptism: 'Baptême',
          corporate: 'Entreprise',
          other: 'Autre',
        },
        businessCategories: {
          bar: 'Bar',
          restaurant: 'Restaurant',
          hotel: 'Hôtel / Domaine',
          catering: 'Traiteur',
        },
        successDetail: 'Nous vous contacterons via votre moyen préféré en moins de 24 heures.',
        sendAnother: 'Envoyer une autre demande',
      },
    },
  },
};
