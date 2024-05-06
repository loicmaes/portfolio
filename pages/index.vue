<script setup lang="ts">
import NavigationLink from "~/components/uikit/buttons/NavigationLink.vue";
import CallToAction from "~/components/uikit/buttons/CallToAction.vue";
import IconArrowRight from "~/components/uikit/icons/arrows/IconArrowRight.vue";
import ProjectCard from "~/components/locals/home/projects/ProjectCard.vue";
import ServiceCard from "~/components/locals/home/services/ServiceCard.vue";
import TestimonialCard from "~/components/locals/home/testimonials/TestimonialCard.vue";
// Mocks
import {projects} from '~/assets/mocks/projects';
import {services} from '~/assets/mocks/services';
import {testimonials} from '~/assets/mocks/testimonials';
import {CtaIconPosition, CtaVariant} from "assets/types/callToAction.types";

useHead({
  title: 'Loïc MAES · Bienvenue'
});

const projectList = computed(() => projects.slice(0, 3));
</script>

<template>
  <div data-page class="home">
    <section class="section hero">
      <div class="hero--wrapper">
        <h2 class="hero--title">👋, je m'appelle Loïc et je suis</h2>

        <div class="hero__links">
          <NuxtLink class="hero__links--item">Développeur web</NuxtLink>
          <NuxtLink class="hero__links--item">& Web designer</NuxtLink>
        </div>

        <div class="hero__infos">
          <p class="hero__infos--location">Basé à Strasbourg</p>

          <div class="hero__infos__social">
            <NavigationLink to="https://www.instagram.com/uiux.loicmaes" external>Instagram</NavigationLink>
            <NavigationLink to="https://www.linkedin.com/in/maesloic" external>LinkedIn</NavigationLink>
            <NavigationLink to="https://github.com/loicmaes" external>GitHub</NavigationLink>
          </div>
        </div>
      </div>

      <div class="hero__actions" v-if="false">
        <CallToAction>Besoin d'un développeur ?</CallToAction>
        <CallToAction :variant="CtaVariant.SECONDARY">Besoin d'un designer ?</CallToAction>
      </div>
    </section>

    <section class="section projects" v-if="projects.length">
      <header class="projects__head">
        <div class="projects__head--wrapper">
          <h2 class="section--title projects__head--title">Projets récents</h2>
          <p class="projects__head--caption">Découvre ma passion et mon expertise pour une expérience inoubliable. Avec mes compétences confirmées, je m'engage à te proposer une expérience exceptionnelle à chaque étape de ton parcours avec moi.</p>
        </div>

        <CallToAction to="/projects" :icon-position="CtaIconPosition.RIGHT" :variant="CtaVariant.SECONDARY" class="projects__head--more">
          <span>En voir plus</span>
          <IconArrowRight />
        </CallToAction>
      </header>

      <div class="projects--wrapper" v-if="projectList.length">
        <ProjectCard class="projects--item" :uuid="uuid" :name="name" :description="description" :tags="tags" :thumbnail="thumbnail" :client="client" v-for="{ uuid, thumbnail, client, name, description, tags } in projectList" :key="name" />
      </div>
    </section>

    <section class="section clients">
      <h2 class="section--title clients--title">Ils m'ont fait confiance !</h2>

      <div class="clients--wrapper">
        <a href="https://www.ergo3.ch/" target="_blank" class="clients--item">
          <svg class="clients--item" viewBox="0 0 296 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M253.27 15.0225C253.27 13.296 254.306 9.84294 258.45 9.84294H277.095C278.304 9.84294 280.721 10.5681 280.721 13.4686C280.721 16.3691 278.304 17.0943 277.095 17.0943H261.557V26.4174H278.39C279.685 26.5037 282.275 27.4015 282.275 30.302C282.275 33.2026 279.685 34.1003 278.39 34.1867H257.155C255.687 34.1867 252.752 33.3061 252.752 29.7841V27.4533H238.768C238.682 32.6328 241.669 42.9918 254.306 42.9918H282.275C286.85 43.1645 296 40.6611 296 29.2662V12.9507C295.914 8.63439 293.203 0.00186297 283.052 0.00186297H254.306C249.3 -0.0844623 239.286 2.7988 239.286 15.0225H253.27Z" fill="currentColor"/><path d="M53.6063 24.6046H20.9764V16.0584H40.9169V15.0225C40.9169 10.8789 37.6366 10.0156 35.9965 10.102H18.1277C13.9843 10.102 12.7757 13.7276 12.6894 15.5404V27.1944C12.6894 31.338 16.315 32.5465 18.1277 32.6328H35.7375C39.6738 32.6328 40.6579 29.3525 40.6579 27.7123H53.6063V30.561C53.6063 40.6093 45.492 42.8624 41.4348 42.7329H11.1356C2.4343 42.7329 0.0863225 35.3089 0 31.5969V12.9507C0 2.79883 8.63226 0.0882221 12.9484 0.00189679H42.2117C51.1202 0.00189679 53.52 7.59852 53.6063 11.3968V24.6046Z" fill="currentColor"/><path d="M61.1164 30.0431C61.1164 40.1949 69.576 42.7329 73.8058 42.7329V16.5763C73.8058 11.604 77.9493 10.3609 80.021 10.3609H91.9335C96.2842 10.3609 97.3718 13.9866 97.3718 15.7994H110.579V12.1738C110.579 2.64345 102.638 0.260873 98.6667 0.260873H73.8058C63.8614 0.260873 61.2027 8.72075 61.1164 12.9507V30.0431Z" fill="currentColor"/><path d="M139.843 18.6482V26.9354H155.122V27.7123C155.122 31.8559 151.669 32.8918 149.942 32.8918H133.627C129.069 32.8918 127.757 28.9209 127.671 26.9354V16.5763C127.671 11.8112 131.642 10.6199 133.627 10.6199H149.942C154.086 10.6199 155.122 14.0729 155.122 15.7994H167.811V11.6558C167.811 2.53986 160.042 0.0882221 156.157 0.00189679H126.894C117.157 0.00189679 114.723 8.11647 114.723 12.1738V30.0431C114.723 39.159 122.837 41.956 126.894 42.2149H159.524C166.361 42.2149 168.243 36.3448 168.329 33.4098V18.6482H139.843Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M188.269 0.260873C177.911 0.260873 175.321 8.8934 175.321 13.2097V30.561C175.321 40.0913 183.435 42.6466 187.493 42.7329H220.122C229.86 42.7329 232.294 34.6183 232.294 30.561V13.2097C232.294 2.85063 223.662 0.260873 219.346 0.260873H188.269ZM213.389 32.3739C218.154 32.3739 219.346 28.4029 219.346 26.4174V17.3533C219.346 11.9666 214.684 10.4473 212.353 10.3609H194.226C189.461 10.3609 188.269 14.3319 188.269 16.3174V26.1584C188.269 30.9236 192.413 32.2875 194.485 32.3739H213.389Z" fill="currentColor"/></svg>
        </a>
        <a href="https://www.inserm.fr/" target="_blank" class="clients--item">
          <svg class="clients--item" viewBox="0 0 190 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.83148 0H12.3116V42.0223H1.83148V0Z" fill="currentColor"/><path d="M29.8124 42.0223V22.69C29.8124 20.9942 30.7485 17.6025 34.4928 17.6025C38.2372 17.6025 39.1055 20.9942 39.0715 22.69V42.0223H48.2289V19.7393C48.2968 16.3816 46.4992 9.78823 38.7663 10.2766C33.9841 10.7854 33.1701 11.2941 29.8124 14.4483V11.1924H20.655V42.0223H29.8124Z" fill="currentColor"/><path d="M81.399 14.6518L76.3116 19.7393C74.7854 18.62 72.2417 17.2973 69.1892 16.8903C66.1367 16.4833 63.3895 17.399 63.4913 19.1288C63.5895 20.7991 64.3519 20.9513 70.8176 22.2425C71.0476 22.2884 71.2848 22.3358 71.5294 22.3847C78.6518 23.8092 81.9078 26.4547 81.9078 32.1526C81.9078 37.8506 77.0238 42.531 67.0525 42.8363C59.0754 43.0804 53.6895 38.9359 51.9936 36.8331L57.6916 31.6439C61.7615 35.7138 66.1367 35.8156 66.7472 35.8156C67.3577 35.8156 72.5469 35.5103 72.5469 32.9666C72.5469 30.6326 69.2916 30.1832 65.4536 29.6533C65.1088 29.6057 64.7593 29.5575 64.407 29.5072C60.1335 28.8967 53.9269 26.5564 54.3339 20.3498C54.7409 14.1431 58.8108 10.3784 67.5612 10.0731C74.5615 9.82893 79.7032 13.0238 81.399 14.6518Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M94.5246 28.4897H116.604C117.147 22.3508 114.793 10.0731 101.037 10.0731C87.2801 10.0731 84.7907 22.0117 85.2655 27.9809C85.0281 33.1362 87.911 43.3857 101.342 43.1415C105.174 43.1415 113.592 41.3711 116.604 34.2893L109.38 31.3386C108.803 32.9327 106.45 36.1208 101.647 36.1208C95.6439 36.1208 94.5246 31.1351 94.5246 28.4897ZM94.6264 22.69H107.243C107.175 20.6211 105.839 16.4833 101.037 16.4833C96.234 16.4833 94.7621 20.6211 94.6264 22.69Z" fill="currentColor"/><path d="M121.692 42.0223H130.951V24.1145C130.951 20.0445 136.716 18.8914 139.599 18.8235V10.5819C135.122 10.5819 131.765 13.2273 130.645 14.5501V10.8871H121.692V42.0223Z" fill="currentColor"/><path d="M144.076 42.0223H153.132V22.9952C153.132 21.2316 154.027 17.7043 157.609 17.7043C161.19 17.7043 162.154 21.2316 162.188 22.9952V42.0223H171.243V22.9952C171.141 21.2316 171.935 17.7043 175.924 17.7043C179.912 17.7043 180.299 21.1638 180.299 22.9952V42.0223H189.355V18.4165C189.422 15.7032 187.604 10.2766 179.79 10.2766C175.395 10.2766 171.786 12.7186 170.531 13.9396C169.785 12.7186 167.01 10.2766 161.882 10.2766C156.754 10.2766 153.912 13.1256 153.132 14.5501V11.0906H144.076V42.0223Z" fill="currentColor"/><path d="M14.0413 56.9793C14.0413 60.8567 10.8981 64 7.02067 64C3.14326 64 0 60.8567 0 56.9793C0 53.1019 3.14326 49.9587 7.02067 49.9587C10.8981 49.9587 14.0413 53.1019 14.0413 56.9793Z" fill="#E74010"/></svg>
        </a>
      </div>
    </section>

    <section class="section services">
      <h2 class="section--title services--title">Un projet, Une idée,<br />Et si on collaborait ?</h2>

      <div class="services--wrapper">
        <ServiceCard :features="features" :name="name" :description="description" :id="id" v-for="{ name, description, features, id } in services" :key="name" />
      </div>
    </section>

    <section class="section testimonials">
      <header class="testimonials__head">
        <p class="testimonials__head--subtitle">Témoignages</p>
        <h2 class="section--title testimonials__head--title">VOUS en parlez le mieux !</h2>
      </header>

      <div class="testimonials--wrapper">
        <TestimonialCard :mark="mark" :key="`quote-${index}`" v-for="({ author, mark, quote }, index) in testimonials">
          <template #name>{{ author.name }}</template>
          <template #society>{{ author.company }}</template>
          <template #quote>{{ quote }}</template>
        </TestimonialCard>
      </div>
    </section>
  </div>
</template>

<style lang="sass" scoped>
.home
  .section
    @apply px-8 py-20 md:px-12 lg:px-16 xl:px-[7.5rem]

    &--title
      @apply font-anton text-3xl

  .hero
    @apply relative h-screen flex flex-col justify-between items-center px-8 pt-32 pb-16 sm:justify-center sm:py-0

    &--title
      @apply text-woodsmoke-500 dark:text-woodsmoke-400

    &--wrapper
      @apply flex flex-col items-center gap-16

    &__links
      @apply flex flex-col gap-4 items-center

      &--item
        @apply text-transparent transition-colors cursor-pointer font-anton text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl [-webkit-text-stroke:1px_theme("colors.woodsmoke.950")] dark:[-webkit-text-stroke:1px_theme("colors.woodsmoke.0")] md:[-webkit-text-stroke:2px_theme("colors.woodsmoke.950")] dark:md:[-webkit-text-stroke:2px_theme("colors.woodsmoke.0")]

      &:not(:hover)
        > :first-child
          @apply text-woodsmoke-950 dark:text-woodsmoke-0
      &:hover
        > :hover
          @apply text-woodsmoke-950 dark:text-woodsmoke-0

    &__infos
      @apply flex flex-col gap-6 items-center lg:flex-row lg:justify-between lg:w-full

      &--location
        @apply font-anton text-woodsmoke-500 dark:text-woodsmoke-400

      &__social
        @apply flex items-center gap-8 text-woodsmoke-500 dark:text-woodsmoke-400

    &__actions
      @apply flex flex-col gap-6 sm:flex-row sm:self-center sm:absolute sm:bottom-14

  .projects
    @apply flex flex-col gap-12

    &__head
      @apply flex flex-col gap-8 md:flex-row md:items-end md:justify-between

      &--wrapper
        @apply flex flex-col gap-4 md:max-w-[25rem]

      &--caption
        @apply text-woodsmoke-400 dark:text-woodsmoke-300 leading-relaxed

      &--more
        @apply justify-between

    &--wrapper
      @apply gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3

  .clients
    @apply flex flex-col gap-20 bg-woodsmoke-100 dark:bg-woodsmoke-900

    &--wrapper
      @apply flex flex-wrap gap-20

    &--item
      @apply h-10 opacity-45 dark:opacity-35 transition-opacity hover:opacity-100 dark:hover:opacity-100

  .services
    @apply flex flex-col gap-14

    &--wrapper
      @apply gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3

  .testimonials
    @apply flex flex-col gap-14

    &__head
      &--subtitle
        @apply text-woodsmoke-300 dark:text-woodsmoke-500

    &--wrapper
      @apply gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
</style>
