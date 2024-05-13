import type {Project} from "assets/types/projects.types";
import {SectionType} from "assets/types/projectContent.types";

export const projects: Project[] = [
  {
    uuid: 'portfolio-personnel',
    name: 'Portfolio personnel',
    description: 'Une nouvelle année, une nouvelle image. Découvrez un portfolio moderne et professionnel avec une attention toute particulière aux détails.',
    thumbnail: {
      src: 'https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    client: {
      name: 'Loïc MAES',
      country: 'France'
    },
    tags: [
        'École',
        'Personnel',
        'Dev. Full-Stack'
    ],
    content: [
      {
        name: 'description',
        children: [
          {
            type: SectionType.PARAGRAPH,
            content: 'Le projet de conception de mon portfolio est une initiative complète visant à créer une vitrine en ligne dynamique et fonctionnelle afin de :',
          },
          {
            type: SectionType.LIST,
            items: [
                'Présenter mon travail et mon expertise ;',
                'Prendre contact avec mes prospects ;',
                'Donner une nouvelle dimension à mon CV.'
            ]
          },
          {
            type: SectionType.PARAGRAPH,
            content: `Cette entreprise comprendra la réalisation de la vitrine elle-même, mettant en valeur mes compétences en design et en développement web. En plus de cela, le projet implique la conception d'un robuste back-end pour gérer efficacement les données, garantissant une expérience utilisateur fluide et sécurisée.`
          },
          {
            type: SectionType.PARAGRAPH,
            content: `De plus, une attention particulière sera accordée à la création d'un back-office intuitif et convivial. Ce back-office permettra la gestion efficace de la clientèle, ainsi que la facilitation du processus de rédaction, de publication et de mise à jour du contenu. En combinant ces éléments, le portfolio sera non seulement une vitrine professionnelle de mes réalisations, mais aussi un outil puissant pour interagir avec les visiteurs et les clients potentiels, tout en simplifiant les tâches administratives liées à sa maintenance et à son actualisation.`
          }
        ]
      },
      {
        name: 'separator',
        children: [
          {
            type: SectionType.SEPARATOR,
          }
        ]
      },
      {
        name: 'technical-stack',
        title: 'Stack technique',
        children: [
          {
            type: SectionType.FAQ,
            questions: [
              {
                type: SectionType.ACCORDION,
                title: 'Front-End',
                content: `Pour la conception de l'interface utilisateur de mon portfolio, j'ai opté pour une combinaison dynamique de technologies de pointe. À la base de cette architecture se trouve NuxtJS, une framework basée sur VueJS 3 et la Composition API, reconnue pour sa performance et sa flexibilité. Cette décision a été motivée par mon désir d'adopter les dernières normes et pratiques de développement web, tout en garantissant une expérience utilisateur fluide et réactive.

En combinant NuxtJS avec Tailwind CSS, j'ai pu tirer parti de la puissance de ces deux outils pour créer une interface esthétique et fonctionnelle. Tailwind CSS offre une approche unique du design, en permettant une personnalisation minutieuse grâce à sa méthodologie utility-first, tout en favorisant une meilleure maintenabilité du code. Cette stack technique, fruit de mon expérience et de ma recherche constante d'excellence, offre un équilibre parfait entre performance, flexibilité et esthétique, assurant ainsi une expérience utilisateur exceptionnelle pour les visiteurs de mon portfolio.`
              },
              {
                type: SectionType.ACCORDION,
                title: 'Back-End',
                content: `Concernant la gestion des données et des fonctionnalités côté serveur de mon portfolio, j'ai opté pour une approche basée sur une API REST développée avec NestJS, appuyée par son intégration rapide et efficace de Fastify. Ce choix a été motivé par la réputation de NestJS en tant que framework robuste et modulaire, offrant une structure bien organisée pour développer des applications back-end évolutives et performantes.

L'intégration de Fastify avec NestJS permet d'exploiter pleinement les performances et les fonctionnalités avancées de ce serveur HTTP, offrant ainsi des temps de réponse rapides et une efficacité accrue dans le traitement des requêtes. De plus, j'ai choisi Swagger pour la documentation de mon API, en raison de sa facilité d'intégration avec NestJS. Cette décision garantit une documentation claire et complète de toutes les fonctionnalités de mon API, facilitant ainsi son utilisation et son intégration par d'autres développeurs ou services tiers.

En résumé, l'adoption de NestJS avec Fastify et Swagger pour la partie back-end de mon projet garantit non seulement des performances optimales et une gestion efficace des données, mais aussi une documentation précise et accessible, contribuant ainsi à la robustesse et à la fiabilité globale de mon portfolio en ligne.`
              },
              {
                type: SectionType.ACCORDION,
                title: 'Stockage de la donnée',
                content: `Pour la gestion efficace et sécurisée des données de mon portfolio, j'ai fait le choix de PostgreSQL comme système de gestion de base de données. PostgreSQL est reconnu pour sa fiabilité, sa robustesse et sa conformité aux normes SQL, en faisant un choix idéal pour les applications web nécessitant une manipulation complexe des données.

Pour interagir avec la base de données PostgreSQL de manière efficace et élégante, j'ai opté pour l'utilisation de Prisma en tant qu'ORM (Object-Relational Mapping). Prisma simplifie grandement le processus d'interrogation et de manipulation des données, en offrant une interface conviviale basée sur le langage de programmation TypeScript. Son système de modélisation de données intuitif facilite la création, la lecture, la mise à jour et la suppression des données, tout en assurant la sécurité et la cohérence des opérations.

En choisissant PostgreSQL avec Prisma pour la gestion de la base de données de mon portfolio, je m'assure non seulement une performance optimale et une sécurité renforcée, mais aussi une expérience de développement fluide et efficace, permettant ainsi de concentrer mes efforts sur la création de fonctionnalités innovantes et sur la qualité globale de mon projet.`
              }
            ]
          }
        ]
      },
      {
        name: 'technical-stack-adv',
        children: [
          {
            type: SectionType.CALLOUT,
            content: 'Cette stack technique sera concervée entre les différents services qui seront liés à cette vitrine dynamique.',
          }
        ]
      },
      {
        name: 'separator',
        children: [
          {
            type: SectionType.SEPARATOR,
          }
        ]
      },
      {
        name: 'approach',
        title: 'Démarche de développement',
        children: [
          {
            type: SectionType.PARAGRAPH,
            content: `La démarche de développement de mon projet de conception de portfolio a été méticuleusement planifiée, intégrant alors différentes étapes pour assurer la cohérence et la qualité tout au long du processus. Tout commencera par une phase de conception approfondie, où j'élaborerai les concepts et les maquettes de l'interface utilisateur, en accordant une attention particulière à l'esthétique et à l'ergonomie.`
          },
          {
            type: SectionType.PARAGRAPH,
            content: `Ensuite, je procéderai à l'intégration de la vitrine, en utilisant des mocks pour simuler le comportement des fonctionnalités avant même leur développement complet. Cette approche me permettra de valider rapidement le design et de recueillir des retours d'utilisateurs potentiels avant de passer à la prochaine étape.`
          },
          {
            type: SectionType.PARAGRAPH,
            content: `La conception du back-end, axée principalement sur la modélisation de la base de données, suivra cette phase initiale. Une fois la structure de la base de données définie, je procéderai au déploiement d'une version beta de la v1 pour recueillir des retours d'utilisateurs réels et affiner davantage les fonctionnalités et l'expérience utilisateur.`
          },
          {
            type: SectionType.PARAGRAPH,
            content: `Le développement back-end prendra alors le relais, mettant en œuvre les fonctionnalités nécessaires pour alimenter la vitrine en données et assurer son bon fonctionnement. Cette étape sera étroitement liée à l'intégration de la vitrine, garantissant une synchronisation fluide entre l'interface utilisateur et les données provenant du back-end.`
          },
          {
            type: SectionType.PARAGRAPH,
            content: `Parallèlement au développement back-end, j'entamerai la conception du back-office, en me concentrant sur les fonctionnalités de gestion clientèle, de rédaction et de publication. Une fois le design du back-office finalisé, je commencerai le développement de ses fonctionnalités, en veillant à ce qu'elles répondent aux besoins opérationnels et administratifs de manière efficace et intuitive.`
          }
        ]
      }
    ],
    createdAt: new Date(2024, 2, 27)
  },
  {
    uuid: 'frontkit-nouvelle-bibliotheque-de-composants',
    name: 'FrontKit - Nouvelle bibliothèque de composants',
    description: 'Un nouveau projet en cette année 2024 : Créons ensemble une nouvelle bibliothèque de composant à mettre à disposition au public. Je réalise enfin mon rêve : mettre un SaaS à disposition de tous !',
    thumbnail: {
      src: 'https://images.unsplash.com/photo-1584428018260-1a9bc0e15365?q=80&w=2811&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    client: {
      name: 'Loïc MAES',
      country: 'France',
    },
    tags: [
        'Personnel',
        'Web design',
        'Dev. Front-End',
    ],
    content: [
      {
        name: 'description',
        children: [
          {
            type: SectionType.PARAGRAPH,
            content: "C'est en ce 13 mai 2024 que se lance mon tout premier projet concret de développement de SaaS. Aujourd'hui je vous présente donc FrontKit, une nouvelle bibliothèque de composants à copier-coller pour vos prochains projets Vue.JS ou Nuxt.JS. De nouvelles versions sauront arriver petit à petit afin d'évoluer sur d'autres frameworks comme React ou Next, Svelte et j'en passe. Suivez-moi dans cette aventure où je développe avec vous ma solution web et découvrez toutes les étapes de conceptions, ainsi que les erreurs que je pourrais faire tout au long de cette première expérience de Solo-preneur !",
          },
          {
            type: SectionType.CALLOUT,
            content: "Cette page est susceptible d'évoluer dans le temps. Toutes les informations peuvent être inexacte et corrigées dans les versions futures."
          }
        ]
      },
      {
        name: '-',
        children: [
          {
            type: SectionType.SEPARATOR,
          }
        ]
      },
      {
        name: 'content',
        title: 'Au programme',
        children: [
          {
            type: SectionType.PARAGRAPH,
            content: "Pleins de bonnes choses sont au programme de ce nouveau projet. Dans mes lives (Twitch) et vidéos (YouTube, Instagram, etc...), vous retrouverez :",
          },
          {
            type: SectionType.LIST,
            items: [
                "la conception graphique des composants ;",
                "la réalisation des assets graphiques ;",
                "la publication sur le Marketplace de Figma ;",
                "le développement front-end ;",
                "la mise en ligne du module NPM ;",
                "la conception du site vitrine ;",
                "et l'intégration et mise en ligne du site vitrine."
            ]
          },
          {
            type: SectionType.PARAGRAPH,
            content: "J'espère que vous êtes prêt, ce projet risque d'être long !"
          }
        ]
      }
    ],
    createdAt: new Date(2024, 4, 13),
  }
];
