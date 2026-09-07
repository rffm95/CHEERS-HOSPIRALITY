export type Language = 'pt' | 'es' | 'en' | 'fr';

export interface Translation {
  nav: {
    home: string;
    about: string;
    portfolio: string;
    contact: string;
  };
  footer: {
    tagline: string;
    contact: string;
    follow: string;
    rights: string;
  };
  portfolioPage: {
    hero: {
      eyebrow: string;
      title: string;
      titleAccent: string;
      description: string;
    };
    cta: {
      title: string;
      button: string;
    };
  };
  aboutPage: {
    hero: {
      eyebrow: string;
      title: string;
      titleAccent: string;
      p1: string;
      p2: string;
      quote: string;
    };
    values: {
      items: {
        title: string;
        text: string;
      }[];
    };
  };
  homePage: {
    hero: {
      eyebrow: string;
      title: string;
      titleAccent: string;
      description: string;
      ctaAudit: string;
      ctaResults: string;
    };
    problem: {
      title: string;
      titleAccent: string;
      description: string;
      items: {
        title: string;
        description: string;
      }[];
    };
    impact: {
      title: string;
      titleAccent: string;
      description: string;
      scenarios: {
        label: string;
        value: string;
        text: string;
      }[];
    };
    opportunity: {
      title: string;
      titleAccent: string;
      description: string;
      concept: string;
      items: {
        title: string;
        description: string;
      }[];
    };
    caseStudy: {
      title: string;
      subtitle: string;
      stat: string;
      timeframe: string;
      challenge: string;
      challengeText: string;
      intervention: string;
      interventionText: string;
      result: string;
      resultText: string;
    };
    framework: {
      title: string;
      subtitle: string;
      items: {
        title: string;
        description: string;
      }[];
    };
    services: {
      title: string;
      titleAccent: string;
      items: {
        title: string;
        description: string;
        result: string;
      }[];
    };
    whyCheers: {
      title: string;
      subtitle: string;
      items: {
        title: string;
        description: string;
      }[];
    };
    process: {
      title: string;
      subtitle: string;
      steps: {
        number: string;
        title: string;
        description: string;
      }[];
    };
    methodology: {
      title: string;
      steps: {
        number: string;
        title: string;
        description: string;
      }[];
    };
    testimonials: {
      title: string;
      items: {
        quote: string;
        author: string;
        role: string;
        company: string;
      }[];
    };
    partnershipModels: {
      title: string;
      titleAccent: string;
      description: string;
      items: {
        title: string;
        description: string;
        features: string[];
        cta: string;
        highlight?: boolean;
      }[];
    };
    ctaSection: {
      title: string;
      titleAccent: string;
      description: string;
      button: string;
    };
  };
  common: {
    language: string;
    viewMore: string;
    premiumService: string;
    multiLanguage: string;
    marketReality: string;
    solutionsHospitality: string;
    revenueTransformation: string;
    theDifference: string;
    impactLabel: string;
    decisionMakerInvitation: string;
    whatsappCta: string;
    consultationNote: string;
    impactDisclaimer: string;
  };
  contactPage: {
    hero: {
      eyebrow: string;
      title: string;
      titleAccent: string;
    };
    info: {
      phoneTitle: string;
      phoneStatus: string;
      emailTitle: string;
      instaTitle: string;
      areaTitle: string;
      areaText: string;
    };
    form: {
      event: string;
      business: string;
      businessType: string;
      placeholderName: string;
      placeholderEmail: string;
      placeholderPhone: string;
      placeholderMessage: string;
      propertyName: string;
      propertyScale: string;
      intent: string;
      revenue: string;
      urgency: string;
      categories: {
        wedding: string;
        birthday: string;
        baptism: string;
        corporate: string;
        other: string;
      };
      businessCategories: {
        bar: string;
        restaurant: string;
        hotel: string;
        catering: string;
      };
      intents: {
        audit: string;
        management: string;
        consulting: string;
      };
      scales: {
        small: string;
        medium: string;
        large: string;
        group: string;
      };
      urgencies: {
        immediate: string;
        planning: string;
        future: string;
      };
      successDetail: string;
      sendAnother: string;
    };
  };
}
