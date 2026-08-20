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
  },
};
