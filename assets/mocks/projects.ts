export interface ProjectThumbnail {
  src: string;
  alt?: string;
}
export interface ProjectClient {
  name: string;
  country: string;
}
export interface Project {
  name: string;
  description: string;
  tags: string[];
  thumbnail: ProjectThumbnail;
  client: ProjectClient;
}

export const projects: Project[] = [
  {
    name: 'Portfolio',
    description: 'Design et mise en place d’un site vitrine pour la présentation de mes projets, de mes compétences, de mes réseaux sociaux mais également pour un gage de qualité et de présentation de mes services.',
    tags: [
      'Full-Stack',
      'UI/UX',
      'Perso'
    ],
    client: {
      name: 'Loïc MAES',
      country: 'France'
    },
    thumbnail: {
      src: 'https://plus.unsplash.com/premium_photo-1669825050501-b1d61e263df0?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  },
  {
    name: 'Optimisation UX de la navigation',
    description: 'Modification de l’existant en optimisant et améliorant l’UX du système de navigation au sein de l’application domotique mise en place par le client.',
    tags: [
      'UI/UX',
      'Optimisation',
      'Domotique'
    ],
    client: {
      name: 'Ergo3',
      country: 'Suisse'
    },
    thumbnail: {
      src: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=2826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  },
  {
    name: 'Générateur d’avis de valeur',
    description: 'Conception et réalisation d’une web app interne permettant la génération d’avis de valeur pour l’agence et l’accélération du processus d’estimation d’un bien.',
    tags: [
      'Web App',
      'Full-Stack',
      'UI/UX'
    ],
    client: {
      name: 'Rue de l\'immobilier',
      country: 'France'
    },
    thumbnail: {
      src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2746&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  }
];