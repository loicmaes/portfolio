<script setup lang="ts">
import CallToAction from "~/components/uikit/buttons/CallToAction.vue";
import {CtaStaticTheme} from "assets/types/callToAction";
</script>

<template>
  <div data-page class="about">
    <section class="about__section hero">
      <p class="about__section--caption hero--caption">Commençons à nous connaître</p>
      <h1 class="hero--title">À propos</h1>
    </section>

    <section class="about__section about-me gridified">
      <div class="about--container about-me--container">
        <h2 class="about__section--title">Je fais des sites web et des photos, et je le fais bien.</h2>
        <div class="about-me--wrapper">
          <p class="about__section--paragraph">Passionné par le développement, la mixologie et le graphisme, j’aime travailler avec des personnes qui accorde une importance à l’esthétisme, qui saisissent l’importance de la simplicité et qui reconnaissent l'essentiel d'une expérience client satisfaisante.</p>
          <p class="about__section--paragraph">En centrant mon approche sur votre identité, mon but est de trouver la solution la plus directe pour satisfaire vos besoins.</p>
          <p class="about__section--paragraph">Mes clients me sollicitent pour mon efficacité, ma polyvalence et ma capacité de communication.</p>
        </div>
      </div>
    </section>

    <!-- TODO: testimonials section (not enough to display for now) -->

    <section class="about__section playlist gridified">
      <div class="about--container playlist--container">
        <p class="about__section--caption playlist--caption">Playlist</p>
        <h2 class="about__section--title playlist--title">De la musique pour travailler !</h2>
        <p class="playlist--paragraph">J'écoute toujours de la musique en travaillant et j'aime trouver des groupes qui méritent d'être reconnus.<br>Découvrez mes 100 titres préférés dans une playlist faite pour vous.</p>
        <CallToAction :static="CtaStaticTheme.DARK">Explorer la playlist</CallToAction>
      </div>
    </section>

    <section class="about__section must-known gridified">
      <div class="about--container must-known--container">
        <p class="about__section--caption must-known--caption">Ce que j'aime</p>
        <h2 class="about__section--title must-known--title">3 choses à savoir sur moi</h2>
        <ol class="must-known__info">
          <li class="must-known__info--item about__section--paragraph">Quand je bidouille sur l'ordi ou que je shake des cocktails derrière le bar, je m'éclate ! C'est comme un terrain de jeu où je peux laisser aller ma créativité et améliorer mes compétences. C'est du plaisir pur, à la fois dans la tête et dans les papilles.</li>
          <li class="must-known__info--item about__section--paragraph">Je considère <b class="font-bold">DeadPool</b> comme le meilleur film du siècle.</li>
          <li class="sr-only" aria-hidden="true">Pas d'élément 3.</li>
          <li class="must-known__info--item about__section--paragraph">Je n’aime pas le chiffre 3.</li>
        </ol>
      </div>
    </section>
  </div>
</template>

<style scoped lang="sass">
.about
  &--container
    @apply col-span-4 md:col-start-2 lg:col-start-3 xl:col-start-4 2xl:col-span-6 2xl:col-start-4

  &__section
    @apply px-8 py-20

    &--title
      @apply leading-loose font-anton text-4exl lg:text-5xl 2xl:text-6exl

    &--caption
      @apply uppercase leading-none tracking-[.2em] text-woodsmoke-300 dark:text-woodsmoke-400

    &--paragraph
      @apply text-woodsmoke-500 dark:text-woodsmoke-300

.hero
  @apply min-h-screen flex flex-col gap-6 items-center justify-center

  &--caption
    @apply text-center leading-relaxed sm:leading-none

  &--title
    @apply font-anton uppercase leading-none text-7exl md:text-8xl lg:text-9xl xl:text-9exl 2xl:text-10xl

.about-me
  @apply min-h-screen place-content-center

  &--container
    @apply flex flex-col gap-6

  &--wrapper
    @apply flex flex-col gap-5

.playlist
  @apply isolate relative min-h-screen place-content-center bg-cover bg-no-repeat bg-center [background-image:url('/images/about-preview.webp')] text-woodsmoke-0 before:absolute before:inset-0 before:opacity-75 before:bg-woodsmoke-950 before:-z-10

  &--container
    @apply flex flex-col gap-4

  &--caption
    @apply text-woodsmoke-400

  &--paragraph
    @apply my-6 text-woodsmoke-300 leading-relaxed

.must-known
  @apply min-h-screen place-content-center

  &--container
    @apply flex flex-col gap-4

  &__info
    @apply list-decimal ml-4 mt-4 flex flex-col gap-4
</style>
