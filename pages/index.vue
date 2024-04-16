<script setup lang="ts">
import NavigationLink from "~/components/uikit/buttons/NavigationLink.vue";
import CallToAction from "~/components/uikit/buttons/CallToAction.vue";
import IconArrowRight from "~/components/uikit/icons/arrows/IconArrowRight.vue";
import ProjectCard from "~/components/locals/projects/ProjectCard.vue";
// Mocks
import {projects} from '~/assets/mocks/projects';
import {CtaIconPosition, CtaVariant} from "assets/types/callToAction";
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

      <div class="hero__actions">
        <CallToAction>Besoin d'un développeur ?</CallToAction>
        <CallToAction variant="secondary">Besoin d'un designer ?</CallToAction>
        <CallToAction :variant="CtaVariant.SECONDARY">Besoin d'un designer ?</CallToAction>
      </div>
    </section>

    <section class="section projects">
      <header class="projects__head">
        <div class="projects__head--wrapper">
          <h2 class="section--title projects__head--title">Projets récents</h2>
          <p class="projects__head--caption">Découvre ma passion et mon expertise pour une expérience inoubliable. Avec mes compétences confirmées, je m'engage à te proposer une expérience exceptionnelle à chaque étape de ton parcours avec moi.</p>
        </div>

        <CallToAction :icon-position="CtaIconPosition.RIGHT" :variant="CtaVariant.SECONDARY" class="projects__head--more">
          <span>En voir plus</span>
          <IconArrowRight />
        </CallToAction>
      </header>

      <div class="projects--wrapper">
        <ProjectCard class="projects--item" :thumbnail="thumbnail" :client="client" :project="{ name, description, tags }" v-for="{ thumbnail, client, name, description, tags } in projects" :key="name" />
      </div>
    </section>
  </div>
</template>

<style lang="sass" scoped>
.home
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
</style>
