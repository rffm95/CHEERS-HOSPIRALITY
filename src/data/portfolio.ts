export interface PortfolioItem {
  id: string;
  title: string;
  image: string;
  category?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'EXEMPLO TRABALHO DIGITAL',
    image: 'https://i.imgur.com/aUNb0uK.png',
  },
  {
    id: '2',
    title: 'EXEMPLO TRABALHO DIGITAL',
    image: 'https://i.imgur.com/CnaTvqH.png',
  },
  {
    id: '3',
    title: 'EXEMPLO TRABALHO DIGITAL',
    image: 'https://i.imgur.com/VrbFY65.png',
  },
];
