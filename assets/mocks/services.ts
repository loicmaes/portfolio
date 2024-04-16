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
    to: undefined
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
    to: undefined
  },
  {
    name: 'Extras',
    description: 'Un travail de qualité, des compétences confirmés mais je n’en suis pas spécialiste.',
    features: [
      'Développement mobile',
      'Développement de bots',
      'Création de plugins (Minecraft)',
      'Création de logos'
    ],
    to: undefined
  }
];
