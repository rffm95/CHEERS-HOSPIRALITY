export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'EVENTS' | 'COCKTAILS' | 'HOSPITALITY' | 'BRAND' | 'DIGITAL' | 'AMBIENT';
  tag?: string;
  size?: 'featured' | 'wide' | 'tall' | 'normal';
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Beverage Program',
    description: 'Cocktails autorais desenvolvidos para eventos premium e hospitality.',
    image: 'https://i.imgur.com/aUNb0uK.png',
    category: 'COCKTAILS',
    size: 'tall',
  },
  {
    id: '2',
    title: 'Brand Identity',
    description: 'Identidade visual e conceito de marca para espaços de hospitality.',
    image: 'https://i.imgur.com/CnaTvqH.png',
    category: 'BRAND',
    size: 'normal',
  },
  {
    id: '3',
    title: 'Digital Experience',
    description: 'Menus digitais e experiências interativas para bares e restaurantes.',
    image: 'https://i.imgur.com/JzfPypn.png',
    category: 'DIGITAL',
    size: 'normal',
  },
  {
    id: '4',
    title: 'Event Production',
    description: 'Bar premium montado e operado para eventos corporativos e privados.',
    image: 'https://i.imgur.com/VrbFY65.png',
    category: 'EVENTS',
    size: 'featured',
  },
  {
    id: '5',
    title: 'Hospitality Design',
    description: 'Conceito e ambiente de hospitality para espaços boutique.',
    image: 'https://i.imgur.com/VEnpjnY.png',
    category: 'HOSPITALITY',
    size: 'normal',
  },
  {
    id: '6',
    title: 'Bar Concept',
    description: 'Conceito operacional e identidade para bares independentes.',
    image: 'https://i.imgur.com/n993YwC.png',
    category: 'AMBIENT',
    size: 'normal',
  },
  {
    id: '7',
    title: 'Visual Identity',
    description: 'Branding e posicionamento visual para marcas de hospitality.',
    image: 'https://i.imgur.com/gLkKjHL.png',
    category: 'BRAND',
    size: 'tall',
  },
  {
    id: '8',
    title: 'Menu Design',
    description: 'Design editorial de menus físicos e digitais com foco na experiência.',
    image: 'https://i.imgur.com/BFUQH2t.png',
    category: 'DIGITAL',
    size: 'normal',
  },
  {
    id: '9',
    title: 'Event Experience',
    description: 'Experiências imersivas de bar em eventos de marca e lifestyle.',
    image: 'https://i.imgur.com/sC49CxI.png',
    category: 'EVENTS',
    size: 'normal',
  },
];

export const CATEGORY_LABELS: Record<PortfolioItem['category'], string> = {
  EVENTS: 'Eventos',
  COCKTAILS: 'Cocktails',
  HOSPITALITY: 'Hospitality',
  BRAND: 'Marca',
  DIGITAL: 'Digital',
  AMBIENT: 'Ambientes',
};
