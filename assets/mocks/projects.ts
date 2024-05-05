import type {Project} from "assets/types/projects.types";
import {SectionType} from "assets/types/projectContent.types";

export const projects: Project[] = [
  {
    uuid: 'portfolio',
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
      src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    createdAt: new Date(2024, 2, 27),
    content: [
      {
        type: SectionType.CALLOUT,
        content: 'Pourquoi je suis con ?',
      },
      {
        type: SectionType.PARAGRAPH,
        title: 'Découvrez la puissance d\'un portfolio',
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at dolores inventore ipsa iusto nostrum placeat sapiente! Accusamus, amet beatae blanditiis consequuntur debitis doloremque earum esse facere id illo inventore ipsa nihil nisi non nostrum omnis pariatur quam quo recusandae reprehenderit repudiandae temporibus ullam voluptate? Et eum maxime minima odit optio quisquam repellendus sunt? Ad deleniti eaque excepturi? Assumenda aut debitis dolore est et expedita fugit impedit itaque iure maxime minima nobis, quibusdam sapiente voluptatibus.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorum ea earum ex fugiat laudantium molestiae mollitia quia quisquam totam.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, ut?`,
      },
      {
        type: SectionType.SEPARATOR,
      },
      {
        type: SectionType.IMAGE,
        src: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Tour du bureau',
      },
    ]
  },
  {
    uuid: 'optimisation-ux-de-la-navigation',
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
    },
    createdAt: new Date(2024, 3, 7),
    content: [
      {
        type: SectionType.CALLOUT,
        content: 'Font chier !',
      }
    ]
  },
  {
    uuid: 'generateur-davis-de-valeur',
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
    },
    createdAt: new Date(2022, 4, 12),
    content: [
      {
        type: SectionType.CALLOUT,
        content: 'Trop bien ici !',
      }
    ]
  }
];
