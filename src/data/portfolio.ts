export interface PortfolioItem {
  id: string;
  title: string;
  image: string;
  category?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Mobile Bar - Wedding Event Viseu',
    image: 'https://images.unsplash.com/photo-1541339907198-e08759df9a73?q=80&w=1200',
  },
  {
    id: '2',
    title: 'Digital Signage - Hotel Lobby',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200',
  },
  {
    id: '3',
    title: 'Custom Cocktail Menu Design',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200',
  },
];
