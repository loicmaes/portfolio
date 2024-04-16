export interface Service {
  name: string;
  description: string;
  features: string[];
  to?: string;
}

export const services: Service[] = [
  {
    name: 'Développement Web',
    description: 'De l’idée au concret, je m’occupe de tout le développement et du déploiement de TON site !',
    features: [
      'Développement Front-End',
      'Développement Full-Stack',
      'Maintenance',
      'Refonte graphique',
      'Refonte technique'
    ],
    to: '/contact/service/web-development'
  },
  {
    name: 'Web design',
    description: 'Du rêve au papier, j’imagine, dessine, conseille et intervient sur tes projets les plus fous !',
    features: [
      'Prototypes',
      'Refonte graphique',
      'Optimisation UI/UX',
      'Maquettes réactives',
      'Construction d\UI Kit'
    ],
    to: '/contact/service/web-design'
  },
  {
    name: 'Photographie',
    description: 'De la lumière au papier, passer dans le miroir de mon appareil pour immortaliser tout événement.',
    features: [
      'Animaux',
      'Anniversaires',
      'Mariages',
    ],
    to: '/contact/service/photography'
  }
];
