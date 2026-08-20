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
}
