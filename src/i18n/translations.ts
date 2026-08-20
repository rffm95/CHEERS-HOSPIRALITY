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
      subheadline: 'Excelência operacional em serviços de bar, consultoria estratégica B2B e soluções de inovação digital. Transformamos operações de hospitalidade em negócios de alta performance e standards de elite.',
      ctaQuote: 'SOLICITAR PROPOSTA ESTRATÉGICA',
      ctaWhatsapp: 'CONVERSAR COM UM ESPECIALISTA',
    },
    mobileBar: {
      title: 'A Experiência do Bar Móvel Premium',
      subtitle: 'Design Industrial. Execução Impecável.',
      description: 'Não é apenas um bar. É uma unidade operacional autónoma de alta performance, desenhada para se fundir com a estética do seu evento e garantir um fluxo de serviço perfeito, independentemente do volume de convidados.',
      features: ['Estrutura Industrial-Chic Customizável', 'Estação de Cocktails Ergonómica', 'Iluminação de Atmosfera Integrada', 'Logística de Montagem Ultra-Rápida'],
      cta: 'DESCOBRIR A UNIDADE MÓVEL',
    },
    businessAreas: {
      events: {
        title: 'Eventos & Bar Services',
        description: 'Serviço chave-na-mão para quem não admite falhas. Da logística complexa à mixologia de autor, assumimos a responsabilidade total pela experiência líquida do seu evento.',
        features: ['Cocktails de Autor & Clássicos', 'Logística Integral (Copos, Gelo, Insumos)', 'Staff Formado em Standards de Luxo', 'Gestão de Fluxo para Grandes Volumes'],
      },
      consulting: {
        title: 'Consultoria B2B & Operações',
        description: 'Onde outros veem desperdício, nós vemos margem. Aplicamos engenharia de menu e rigor operacional para estancar fugas financeiras e elevar a percepção de valor do seu negócio.',
        features: ['Menu Engineering (Otimização de ROI)', 'Controlo de Cost & Waste Management', 'Standard Operating Procedures (SOPs)', 'Formação de Equipas de Alta Performance'],
      },
      digital: {
        title: 'Revenue Tech & Inovação',
        description: 'Transformamos ecrãs passivos em vendedores ativos. Soluções digitais desenhadas para aumentar o ticket médio e modernizar a comunicação no ponto de venda.',
        features: ['Digital Signage (Ecrãs que Vendem)', 'Menus QR Dinâmicos e Elegantes', 'Estratégia de Redes Sociais com IA', 'Identidade Digital para Hospitality'],
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
        eyebrow: 'B2B Strategic Consulting',
        title: 'Maximizamos a sua',
        titleAccent: 'Margem.',
        description: 'Bares e restaurantes perdem, em média, 15% de faturação por ineficiências operacionais e cartas mal desenhadas. Intervimos na engenharia do seu negócio para transformar custos em lucro real através de metodologia rigorosa e standards de elite.',
      },
      transformation: {
        title: 'Da Inconsistência Operacional para a',
        titleAccent: 'Alta Rentabilidade.',
        features: [
          { title: 'Engenharia de Menu (Profit Max)', description: 'Analisamos o Food & Beverage Cost ao cêntimo. Criamos cartas onde os produtos mais rentáveis são os mais vendidos, equilibrando stock e popularidade.' },
          { title: 'SOPs & Standards de Luxo', description: 'Documentamos e implementamos Standard Operating Procedures que garantem que o décimo cocktail é igual ao primeiro, com a mesma elegância e precisão.' },
          { title: 'Gestão de Cost & Waste', description: 'Implementamos sistemas de controlo de stock e auditoria de desperdício. O que não é medido, não é gerido. Estancamos as perdas invisíveis no balcão.' },
        ],
      },
      partnership: {
        title: 'Concessão & Gestão de Exploração',
        description: 'Tem um Hotel, Quinta ou Espaço de Eventos mas a operação de bar é um "pain point"? A Cheers assume a gestão total ou parcial (concessão), aplicando os nossos standards, staff e logística, partilhando o sucesso com a sua unidade.',
        cta: 'REUNIÃO DE PARCERIA ESTRATÉGICA',
      },
      painPoints: {
        title: 'O seu negócio sofre com algum destes sintomas?',
        items: [
          'Faturação alta, mas lucro líquido final dececionante (Margens esmagadas)',
          'Inconsistência gritante no serviço e na qualidade das bebidas entre turnos',
          'Cartas de bar estáticas, sem sazonalidade e sem foco em produtos premium',
          'Desperdício de stock não contabilizado que destrói o F&B Cost',
          'Equipas sem formação técnica, sem brio e sem técnicas de upselling',
          'Falta de uma identidade clara que diferencie o seu bar da concorrência',
        ],
      },
      cta: 'Agende um diagnóstico operacional gratuito. Visitamos a sua unidade.',
    },
    digitalPage: {
      hero: {
        eyebrow: 'Revenue-Driving Technology',
        title: 'Inovação que',
        titleAccent: 'Potencia Vendas.',
        description: 'No setor Hospitality, o digital deve ser um acelerador de vendas, não apenas um adereço. Criamos ecossistemas que profissionalizam a imagem da sua unidade e automatizam o desejo de consumo.',
      },
      tvStrategy: {
        badge: 'Revenue Opportunity',
        title: 'Transforme as suas TVs em',
        titleAccent: 'Vendedores Ativos.',
        description: 'Ecrãs sintonizados em canais genéricos são ruído visual. Convertemos as suas TVs em painéis de Digital Signage dinâmicos que promovem cocktails de alta margem e happy hours estratégicas.',
        features: [
          { title: 'Engenharia de Menu Visual', description: 'Destaque os produtos que geram mais lucro nos momentos de maior tráfego.' },
          { title: 'Atmosfera & Branding', description: 'Conteúdo estético que eleva a percepção de luxo do seu espaço físico.' },
          { title: 'Gestão de Conteúdos 24/7', description: 'Atualizamos os seus ecrãs remotamente. Preocupe-se com o serviço, nós tratamos da imagem.' },
        ],
        preview: {
          eyebrow: 'Digital Signage Preview',
          title: 'SIGNATURE COCKTAILS',
          subtitle: 'A harmonia perfeita entre técnica e sabor.',
        },
      },
      aiSocial: {
        eyebrow: 'Gestão de Presença Digital',
        popularTag: 'Business Choice',
        cta: 'SOLICITAR PLANO DE CRESCIMENTO',
      },
      signage: {
        eyebrow: 'Digital Infrastructure',
      },
      services: {
        items: [
          { title: 'Digital Signage B2B', text: 'Instalação de sistemas de TV inteligentes que gerem vendas silenciosas enquanto os clientes aguardam.' },
          { title: 'Menus QR Premium', text: 'Menus digitais com fotografia de alta qualidade e navegação fluida, otimizados para aumentar o ticket médio.' },
          { title: 'AI Content Engine', text: 'Gestão de redes sociais que utiliza IA para garantir posts diários relevantes e design de alta gama.' },
          { title: 'Visual Storytelling', text: 'Criação de vídeos e fotografia de bar que captam a essência premium do seu serviço.' },
          { title: 'Hospitality WebDesign', text: 'Landing pages focadas em conversão para eventos, reservas de mesa e apresentação de menus.' },
          { title: 'Consultoria de Imagem', text: 'Alinhamento total entre a experiência física no bar e a percepção digital do cliente.' },
        ],
      },
      cta: {
        title: 'Pare de ignorar o potencial digital do seu espaço.',
        button: 'AGENDAR DIAGNÓSTICO DIGITAL',
      },
    },
    eventsPage: {
      hero: {
        eyebrow: 'Premium Bar Services & Logistics',
        title: 'Eventos que',
        titleAccent: 'Elevam.',
        description: 'Levamos a sofisticação e o rigor operacional de um bar de elite para o seu evento. Seja um casamento exclusivo, um evento corporativo de alto nível ou uma celebração privada, garantimos uma execução imaculada onde o detalhe é a norma.',
        note: 'Especialistas em logística complexa e serviço de alta rotação.',
      },
      categories: {
        weddings: 'Casamentos & Destinations',
        corporate: 'Corporate & Networking',
        private: 'Private Luxury Parties',
        baptisms: 'Eventos Familiares',
      },
      quote: {
        title: 'Pronto para o seu',
        titleAccent: 'Próximo Evento?',
        description: 'Não deixe a experiência líquida do seu evento ao acaso. Peça uma proposta personalizada e descubra como elevamos os padrões do serviço de bar.',
        cta: 'SOLICITAR PROPOSTA DE EVENTO',
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
        eyebrow: 'A Nossa Gênese Operacional',
        title: 'Rigor e Paixão pela',
        titleAccent: 'Hospitalidade.',
        p1: 'A Cheers Hospitality não nasceu de um plano teórico, mas do chão de granito de bares de alta rotação e da exigência operacional de hotéis de elite. Nascemos em Viseu com a missão ingrata, mas necessária, de elevar os standards onde outros aceitam a mediocridade.',
        p2: 'Somos especialistas em hospitalidade que pensam como engenheiros. Da gestão de stocks complexos à psicologia do serviço de luxo, a nossa história é escrita através da rentabilidade que entregamos aos nossos parceiros e da memória imaculada que deixamos em cada cocktail servido.',
        quote: 'Operação sem standards é apenas caos disfarçado de serviço. Nós trazemos a ordem e o lucro.',
      },
      values: {
        items: [
          { title: 'Excelência Inegociável', text: 'Os nossos standards não são sugestões. São leis operacionais que garantem que o décimo cocktail é tão perfeito quanto o primeiro.' },
          { title: 'Obsessão pela Margem', text: 'Hospitalidade é negócio. Cada gesto e cada ingrediente deve ser um acelerador de rentabilidade para a sua unidade.' },
          { title: 'Inovação com Propósito', text: 'Não seguimos tendências vazias. Implementamos tecnologia e mixologia que resolvem problemas reais e aumentam o ticket médio.' },
        ],
      },
    },
    homePage: {
      hero: {
        eyebrow: 'Hospitality Excellence & Operations',
        title: 'Elevamos a sua',
        titleAccent: 'Operação.',
        description: 'Especialistas em serviços de bar premium, consultoria estratégica B2B e soluções de inovação digital. Unimos visão operacional e execução impecável para transformar o seu negócio num centro de lucro de alta performance.',
      },
      whyCheers: {
        title: 'Porquê a Cheers Hospitality?',
        subtitle: 'Não somos uma agência de marketing. Somos parceiros operacionais que conhecem o "terreno" — do balcão à gestão de stocks.',
        items: [
          { title: 'Expertise Real', description: 'Nascidos no setor hospitality. Compreendemos os desafios reais de staff, margem e experiência de luxo.' },
          { title: 'Standards de Elite', description: 'Implementamos processos rigorosos que garantem consistência absoluta e qualidade inquestionável.' },
          { title: 'Foco no Bottom Line', description: 'Cada intervenção, menu ou ecrã digital é desenhado para maximizar a sua rentabilidade e ROI.' },
          { title: 'Ecossistema 360º', description: 'Soluções integradas que cobrem eventos físicos, consultoria de gestão e inovação tecnológica.' },
        ],
      },
      methodology: {
        title: 'O Nosso Método de Transformação',
        steps: [
          { number: '01', title: 'Audit & Diagnóstico', description: 'Analisamos a fundo a sua operação atual, identificamos fugas de lucro e oportunidades de diferenciação.' },
          { number: '02', title: 'Arquitetura Estratégica', description: 'Desenhamos uma solução customizada: da engenharia de menu à infraestrutura digital e protocolos de staff.' },
          { number: '03', title: 'Implementação de Campo', description: 'Executamos com precisão cirúrgica, garantindo que os novos padrões são assimilados pela equipa e sentidos pelo cliente.' },
          { number: '04', title: 'Gestão de Performance', description: 'Monitorizamos KPIs, ROI e feedback para ajustar e elevar continuamente o patamar do seu negócio.' },
        ],
      },
      ctaSection: {
        title: 'Pronto para elevar os seus',
        titleAccent: 'Standards?',
        description: 'Seja para um evento exclusivo ou para profissionalizar a sua unidade hoteleira, a nossa equipa está pronta para intervir com rigor e excelência.',
        button: 'AGENDAR REUNIÃO ESTRATÉGICA',
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
        eyebrow: 'Canal Direto / Propostas',
        title: 'Inicie a sua',
        titleAccent: 'Transformação.',
      },
      info: {
        phoneTitle: 'Linha Direta / WhatsApp',
        phoneStatus: 'Agenda lotada até 15 Set.',
        emailTitle: 'Direção Operacional',
        instaTitle: 'Instagram (Backstage)',
        areaTitle: 'Geografia de Operação',
        areaText: 'Baseados no centro de Portugal (Viseu), mobilizamos logística para eventos premium no Porto, Alto Douro, Coimbra e Aveiro. Projetos de consultoria estratégica e infraestrutura digital são assegurados em todo o território nacional.',
      },
      form: {
        event: 'Serviço de Eventos',
        business: 'Consultoria / Digital',
        businessType: 'Setor de Negócio',
        placeholderName: 'Ex: Direção Geral / Gestor de Eventos',
        placeholderEmail: 'email.corporativo@unidade.pt',
        placeholderPhone: '+351 9XX XXX XXX',
        placeholderMessage: 'Descreva os seus desafios operacionais ou a visão para o seu evento.',
        categories: {
          wedding: 'Wedding & Destination',
          birthday: 'Celebração Exclusiva',
          baptism: 'Evento Familiar Premium',
          corporate: 'Corporate & Branding',
          other: 'Outro (Especifique)',
        },
        businessCategories: {
          bar: 'Bar de Alta Rotação',
          restaurant: 'Fine Dining / Restaurante',
          hotel: 'Hotelaria de Luxo / Quinta',
          catering: 'Serviço de Catering',
        },
        successDetail: 'A nossa direção analisará o seu pedido. Expectativa de resposta: 12-24 horas.',
        sendAnother: 'Enviar nova solicitação',
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
          { title: 'Ingeniería de Menú', description: 'Analizamos la rentabilidad de cada ingrediente para crear menús que vendan más los productos más rentables.' },
          { title: 'Formación de Equipo', description: 'Estándares de servicio que elevan la experiencia del cliente y aumentan el ticket medio por mesa.' },
          { title: 'Estrategia de Precios', description: 'Modelos dinámicos basados en el mercado real y costes operativos precisos.' },
        ],
      },
      partnership: {
        title: 'Asociación y Concesión',
        description: '¿Tiene un espacio para eventos o un hotel y busca una gestión de bar profesional? Discutimos modelos de asociación o concesión total donde Cheers asume la operación con nuestros estándares de excelencia.',
        cta: 'DISCUTIR ASOCIACIÓN',
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
          { title: 'Promoción Dinámica', description: 'Muestre los productos más rentables en horas pico.' },
          { title: 'Upsell Visual', description: 'Imágenes de alta calidad que despiertan el deseo.' },
          { title: 'Gestión Central', description: 'Actualice contenidos en segundos remotamente.' },
          { title: 'ROI Inmediato', description: 'Aumente el ticket medio de forma silenciosa.' },
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
      hero: {
        eyebrow: 'Hospitality Excellence',
        title: 'Elevamos su',
        titleAccent: 'Operación.',
        description: 'Especialistas en servicios de bar premium, consultoría estratégica y soluciones digitales de alto rendimiento. Unimos visión operativa y ejecución impecable.',
      },
      whyCheers: {
        title: '¿Por qué Cheers?',
        subtitle: 'No somos solo una agencia. Somos socios operativos con años de experiencia real.',
        items: [
          { title: 'Visión 360º', description: 'Comprendemos el ecosistema hospitality: del cóctel en el vaso al margen final.' },
          { title: 'Ejecución de Élite', description: 'Equipos formados bajo los más altos estándares de servicio de lujo.' },
          { title: 'Innovación Digital', description: 'Tecnología diseñada para vender más y profesionalizar la comunicación.' },
          { title: 'Foco en ROI', description: 'Cada acción y cada menú se diseña pensando en la rentabilidad.' },
        ],
      },
      methodology: {
        title: 'Nuestro Método',
        steps: [
          { number: '01', title: 'Diagnóstico', description: 'Analizamos su operación y oportunidades de crecimiento real.' },
          { number: '02', title: 'Estrategia', description: 'Diseñamos una solución personalizada y estratégica.' },
          { number: '03', title: 'Ejecución', description: 'Implementamos con precisión garantizando calidad.' },
          { number: '04', title: 'Optimización', description: 'Monitoreamos resultados para maximizar el rendimiento.' },
        ],
      },
      ctaSection: {
        title: '¿Listo para elevar sus',
        titleAccent: 'Estándares?',
        description: 'Ya sea para un evento exclusivo o para profesionalizar su unidad, estamos listos.',
        button: 'HABLAR CON UM ESPECIALISTA',
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
        eyebrow: 'B2B Strategic Consulting',
        title: 'Operational',
        titleAccent: 'Transformation.',
        description: 'We don’t just sell advice. We deliver results. We help hospitality units reach their maximum potential through menu engineering, service standards, and cost optimization.',
      },
      transformation: {
        title: 'From an ordinary bar to an',
        titleAccent: 'elite operation.',
        features: [
          { title: 'Menu Engineering (ROI)', description: 'We analyze the profitability of each ingredient to create menus that sell the most profitable products.' },
          { title: 'Service Standards', description: 'Team training focused on luxury hospitality and upselling techniques to increase the average ticket.' },
          { title: 'F&B Control', description: 'Rigorous stock management systems and waste reduction to protect your margin.' },
        ],
      },
      partnership: {
        title: 'Partnership & Concession',
        description: 'Do you have an event space or hotel and seek professional bar management? We discuss partnership or full concession models where Cheers takes over the operation with our standards of excellence.',
        cta: 'DISCUSS PARTNERSHIP',
      },
      painPoints: {
        title: 'Do you feel these problems in your business?',
        items: [
          'High operational volume with reduced profit margins',
          'Glaring inconsistency in service and hospitality standards',
          'Static menus with low turnover of premium products',
          'Stock waste impacting Food & Beverage Cost',
          'Difficulty in continuous training and talent retention',
        ],
      },
      cta: 'Take your business to the next level of profitability.',
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
          { title: 'Dynamic Promotion', description: 'Showcase high-margin products during peak hours.' },
          { title: 'Visual Upsell', description: 'High-quality imagery that triggers immediate desire.' },
          { title: 'Central Management', description: 'Update all screens remotely in seconds.' },
          { title: 'Instant ROI', description: 'Quietly increase average spend per customer.' },
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
      hero: {
        eyebrow: 'Hospitality Excellence',
        title: 'Elevating your',
        titleAccent: 'Operation.',
        description: 'Specialists in premium bar services, strategic consulting, and high-performance digital solutions. We unite operational vision and flawless execution.',
      },
      whyCheers: {
        title: 'Why Cheers?',
        subtitle: 'We are not just an agency. We are operational partners with years of real field experience.',
        items: [
          { title: '360º Vision', description: 'We understand the hospitality ecosystem: from the cocktail in the glass to the final margin.' },
          { title: 'Elite Execution', description: 'Teams trained under the highest standards of luxury service.' },
          { title: 'Digital Innovation', description: 'Technology designed to sell more and professionalize communication.' },
          { title: 'ROI Focus', description: 'Every action and menu is designed with profitability in mind.' },
        ],
      },
      methodology: {
        title: 'Our Method',
        steps: [
          { number: '01', title: 'Diagnosis', description: 'We analyze your operation and real growth opportunities.' },
          { number: '02', title: 'Strategy', description: 'We design a customized and strategic solution.' },
          { number: '03', title: 'Execution', description: 'We implement with precision ensuring quality.' },
          { number: '04', title: 'Optimization', description: 'We monitor results to maximize performance.' },
        ],
      },
      ctaSection: {
        title: 'Ready to elevate your',
        titleAccent: 'Standards?',
        description: 'Whether for an exclusive event or to professionalize your unit, we are ready.',
        button: 'TALK TO A SPECIALIST',
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
          { title: 'Ingénierie de Menu', description: 'Nous analysons la rentabilité de chaque ingrediente pour créer des menus qui vendent les produits les plus rentables.' },
          { title: 'Formation d\'Équipe', description: 'Des standards de service qui rehaussent l\'expérience client et augmentent le ticket moyen par table.' },
          { title: 'Stratégie de Prix', description: 'Des modèles dynamiques basés sur le marché réel et des coûts opérationnels précis.' },
        ],
      },
      partnership: {
        title: 'Partenariat & Concession',
        description: 'Vous disposez d\'un espace événementiel ou d\'un hôtel et recherchez une gestion de bar professionnelle ? Nous discutons de modèles de partenariat ou de concession totale où Cheers reprend l\'exploitation avec nos standards d\'excellence.',
        cta: 'DISCUTER DU PARTENARIAT',
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
          { title: 'Promotion Dynamique', description: 'Présentez les produits les plus rentables aux heures de pointe.' },
          { title: 'Upsell Visuel', description: 'Des images de haute qualité qui déclenchent le désir immédiat.' },
          { title: 'Gestion Centralisée', description: 'Mettez à jour tous vos écrans à distance en quelques secondes.' },
          { title: 'ROI Immédiat', description: 'Augmentez le panier moyen de manière silencieuse.' },
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
      hero: {
        eyebrow: 'L\'Hospitalité Élevée au Rang d\'Art',
        title: 'Ingénierie de',
        titleAccent: 'l\'Expérience.',
        description: 'Nous transformons les opérations hôtelières en destinations de luxe grâce à une synergie entre événements, conseil stratégique et innovation digitale.',
      },
      whyCheers: {
        title: 'Pourquoi',
        subtitle: 'Cheers Hospitality?',
        items: [
          { title: 'Excellence Opérationnelle', description: 'Des processus optimisés pour maximiser la rentability e le service.' },
          { title: 'Vision 360º', description: 'Nous couvrons tous les points de contact, du bar physique au menu digital.' },
          { title: 'Expertise Réelle', description: 'Des années d\'expérience sur le terrain dans le secteur du luxe.' },
          { title: 'Focus sur le ROI', description: 'Chaque décision est prise pour augmenter vos marges e a satisfaction client.' },
        ],
      },
      methodology: {
        title: 'Notre Méthodologie',
        steps: [
          { number: '01', title: 'Diagnostic', description: 'Analyse profonde de l\'opération actuelle e identification des fuites de revenus.' },
          { number: '02', title: 'Stratégie', description: 'Création d\'un plan d\'action sur mesure axé sur la performance e l\'élégance.' },
          { number: '03', title: 'Exécution', description: 'Mise en œuvre avec une rigueur absolue e formation des équipes.' },
          { number: '04', title: 'Optimisation', description: 'Suivi constant e ajustements pour garantir des résultats durables.' },
        ],
      },
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
