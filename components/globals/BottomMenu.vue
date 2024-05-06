<script setup lang="ts">

import BottomMenuSection from "~/components/globals/BottomMenuSection.vue";
import NavigationLink from "~/components/uikit/buttons/NavigationLink.vue";
import IconMapPin from "~/components/uikit/icons/locations/IconMapPin.vue";
import IconPhone from "~/components/uikit/icons/contact/IconPhone.vue";
import IconEnvelope from "~/components/uikit/icons/contact/IconEnvelope.vue";
</script>

<template>
  <footer class="footer gridified">
    <section class="footer__hero">
      <h2 class="footer__hero--title">
        <svg class="footer__hero--title-icon" viewBox="0 0 27 27" fill="none">
          <g clip-path="url(#clip0_172_246)">
            <mask id="mask0_172_246" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="27" height="27">
              <path d="M27 0H0V27H27V0Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_172_246)">
              <path d="M15.0517 11.9483L3.10345 0V23.8965H7.75863V11.2386L15.0517 18.5317L22.3448 11.2386V23.8965H27V0L15.0517 11.9483Z" fill="currentColor"/>
              <path d="M2.71552 0.387939L0 3.10346V27H4.65517L7.37067 24.2845H2.71552V0.387939Z" fill="currentColor"/>
              <path d="M8.14655 17.8333L11.9483 21.635L14.7774 18.8059L8.14655 12.175V17.8333Z" fill="currentColor"/>
              <path d="M19.2414 26.9999V14.8905L21.9569 12.175V24.2844H26.612L23.8966 26.9999H19.2414Z" fill="currentColor"/>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_172_246">
              <rect width="27" height="27" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        Loïc MAES
      </h2>

      <ul class="footer__hero--wrapper">
        <li class="footer__hero--item">
          <IconMapPin class="footer__hero--item-icon" />
          <NavigationLink to="https://maps.app.goo.gl/iawjah5df4ahm9mQ6" class="" external>21 rue Vincent Scotto,<br>67400, Illkirch-Graffenstaden<br>FRANCE</NavigationLink>
        </li>
        <li class="footer__hero--item">
          <IconPhone class="footer__hero--item-icon" />
          <NavigationLink to="tel:+33388315386" class="" external>+33 (0)3 88 31 53 86</NavigationLink>
        </li>
        <li class="footer__hero--item">
          <IconEnvelope class="footer__hero--item-icon" />
          <NavigationLink to="mailto:hello@maesloic.fr" class="" external>hello@maesloic.fr</NavigationLink>
        </li>
      </ul>
    </section>

    <BottomMenuSection id="section-1">
      <template #title>Réseaux</template>
      <template #content>
        <NavigationLink to="https://www.linkedin.com/in/maesloic" external>LinkedIn</NavigationLink>
        <NavigationLink to="https://www.instagram.com/uiux.loicmaes" external>Instagram</NavigationLink>
        <NavigationLink to="https://discord.gg/h3DmeEnjy6" external>Discord</NavigationLink>
        <NavigationLink to="https://www.youtube.com/" external>YouTube</NavigationLink>
      </template>
    </BottomMenuSection>
    <BottomMenuSection id="section-2">
      <template #title>Produits</template>
      <template #content>
        <p class="opacity-30">A venir...</p>
      </template>
    </BottomMenuSection>
    <BottomMenuSection id="section-3">
      <template #title>Documents</template>
      <template #content>
        <NavigationLink to="/legal/legal-mentions">Mentions légales</NavigationLink>
        <NavigationLink to="">Curiculum Vitae</NavigationLink>
      </template>
    </BottomMenuSection>

    <hr class="footer--separator" />

    <p class="footer--info">Tous droits réservés &copy; 2024</p>
    <p class="footer--info">Conçu & développé avec ❤️</p>
  </footer>
</template>

<style scoped lang="sass">
.footer
  @apply relative z-10 px-8 py-20 md:px-12 lg:px-16 xl:px-[7.5rem] gap-x-4 gap-y-12 md:gap-y-8 bg-woodsmoke-100 dark:bg-woodsmoke-900

  #section-1
    @apply 2xl:col-start-7

  &__hero
    @apply flex flex-col gap-4 col-span-4 md:col-span-6 lg:col-span-4

    &--title
      @apply flex items-center text-xl font-bold

      &-icon
        @apply aspect-square w-6 mr-4

    &--wrapper
      @apply flex flex-col gap-4

    &--item
      @apply flex items-center gap-3

      &-icon
        @apply text-woodsmoke-400

  &--separator
    @apply border-none h-[2px] w-full bg-woodsmoke-200 dark:bg-woodsmoke-800 col-span-4 md:col-span-6 lg:col-span-8 xl:col-span-10 2xl:col-span-12

  &--info
    @apply text-woodsmoke-400 col-span-4 md:col-span-3 lg:col-span-4 xl:col-span-5 2xl:col-span-6

    &:nth-child(odd)
      @apply md:text-end
</style>
