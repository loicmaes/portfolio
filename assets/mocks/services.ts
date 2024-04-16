export interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'web-development',
    name: 'Développement Web',
    description: 'De l’idée au concret, je m’occupe de tout le développement et du déploiement de TON site !',
    features: [
      'Développement Front-End',
      'Développement Full-Stack',
      'Maintenance',
      'Refonte graphique',
      'Refonte technique'
    ],
  },
  {
    id: 'web-design',
    name: 'Web design',
    description: 'Du rêve au papier, j’imagine, dessine, conseille et intervient sur tes projets les plus fous !',
    features: [
      'Prototypes',
      'Refonte graphique',
      'Optimisation UI/UX',
      'Maquettes réactives',
      'Construction d\UI Kit'
    ],
  },
  {
    id: 'photography',
    name: 'Photographie',
    description: 'De la lumière au papier, passer dans le miroir de mon appareil pour immortaliser tout événement.',
    features: [
      'Animaux',
      'Anniversaires',
      'Mariages',
    ],
  }
];
