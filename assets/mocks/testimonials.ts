import type {Testimonial} from "assets/types/testimonials.types";

export const testimonials: Testimonial[] = [
  {
    author: {
      name: 'Raphaël FLEURY',
      company: 'Ergo3'
    },
    quote: 'Un travail de qualité, réactif et plein de bon sens et de bonnes idées. C’est avec plaisir que je recommande !',
    mark: 5
  },
  {
    author: {
      name: 'Tom CZEKAJ',
      company: 'Dotslash'
    },
    quote: 'En un mot : un collaborateur de QUALITÉ',
    mark: 4
  },
  {
    author: {
      name: 'Stéphane ROUQUILLE',
      company: 'Rue de l\'immobilier'
    },
    quote: 'Mon agence enregistre un CA bien supérieur depuis l’intervention de Loïc. Merci !',
    mark: 5
  },
  {
    author: {
      name: 'Camille SAYOUS',
      company: 'Sayous Studio'
    },
    quote: 'Je le recommande à toute entreprise à la recherche d\'un designer et intégrateur web compétent et fiable.',
    mark: 2
  }
];
