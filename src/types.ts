export type Language = 'pt' | 'es' | 'en' | 'fr';

export interface Translation {
  nav: {
    home: string;
    events: string;
    consulting: string;
    digital: string;
    about: string;
    portfolio: string;
    contact: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    ctaQuote: string;
    ctaWhatsapp: string;
  };
  mobileBar: {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    cta: string;
  };
  businessAreas: {
    events: {
      title: string;
      description: string;
      features: string[];
    };
    consulting: {
      title: string;
      description: string;
      features: string[];
    };
    digital: {
      title: string;
      description: string;
      features: string[];
    };
  };
  packages: {
    title: string;
    subtitle: string;
    from: string;
    items: {
      name: string;
      price: string;
      description: string;
      features: string[];
    }[];
  };
  quote: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      eventType: string;
      eventDate: string;
      guests: string;
      budget: string;
      message: string;
      submit: string;
      success: string;
    };
  };
  footer: {
    tagline: string;
    contact: string;
    follow: string;
    rights: string;
  };
  socialMediaIA?: {
    headline: string;
    engagementStat: string;
    cta: string;
    packages: {
      name: string;
      features: string[];
      price?: string;
      popular?: boolean;
    }[];
  };
  digitalSignage?: {
    headline: string;
    timeline: {
      step: string;
      title: string;
    }[];
    packages: {
      name: string;
      features: string[];
    }[];
    cta: string;
    locationNote: string;
  };
  curiosityHook?: {
    label: string;
    cards: {
      title: string;
      text: string;
    }[];
    footer: string;
  };
  consultingAppointment?: {
    text: string;
    cta: string;
  };
  consultingPage: {
    hero: {
      eyebrow: string;
      title: string;
      titleAccent: string;
      description: string;
    };
    transformation: {
      title: string;
      titleAccent: string;
      features: {
        title: string;
        description: string;
      }[];
    };
    partnership: {
      title: string;
      description: string;
      cta: string;
    };
    painPoints: {
      title: string;
      items: string[];
    };
    cta: string;
  };
  digitalPage: {
    hero: {
      eyebrow: string;
      title: string;
      titleAccent: string;
      description: string;
    };
    tvStrategy: {
      badge: string;
      title: string;
      titleAccent: string;
      description: string;
      features: {
        title: string;
        description: string;
      }[];
      preview: {
        eyebrow: string;
        title: string;
        subtitle: string;
      };
    };
    aiSocial: {
      eyebrow: string;
      popularTag: string;
      cta: string;
    };
    signage: {
      eyebrow: string;
    };
    services: {
      items: {
        title: string;
        text: string;
      }[];
    };
    cta: {
      title: string;
      button: string;
    };
  };
  eventsPage: {
    hero: {
      eyebrow: string;
      title: string;
      titleAccent: string;
      description: string;
      note: string;
    };
    categories: {
      weddings: string;
      corporate: string;
      private: string;
      baptisms: string;
    };
    quote: {
      title: string;
      titleAccent: string;
      description: string;
      cta: string;
    };
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
    };
    whyCheers: {
      title: string;
      subtitle: string;
      items: {
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
      successDetail: string;
      sendAnother: string;
    };
  };
}
