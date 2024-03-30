<script setup lang="ts">
import CallToAction from "~/components/uikit/buttons/CallToAction.vue";
import NavigationLink from "~/components/uikit/buttons/NavigationLink.vue";
import MobileMenu from "~/components/globals/MobileMenu.vue";
import IconBurger from "~/components/uikit/icons/menus/IconBurger.vue";

const opened = ref<boolean>(false);
</script>

<template>
  <header class="header gridified">
    <p class="header--brand">Loïc.</p>

    <nav class="header__nav">
      <NavigationLink to="/">Accueil</NavigationLink>
      <NavigationLink to="/projects">Travaux</NavigationLink>
      <NavigationLink to="/about">À propos</NavigationLink>
    </nav>

    <div class="header--cta-wrapper">
      <CallToAction to="/">hello@maesloic.fr</CallToAction>
    </div>

    <!-- MOBILE MENU -->
    <div class="header--menu-wrapper">
      <button class="header--menu-toggle" type="button" @click.prevent="opened = true"><IconBurger /></button>
    </div>
    <MobileMenu :opened="opened" @close="opened = false">
      <template #top>
        <NavigationLink @click="opened = false" to="/">Accueil</NavigationLink>
        <NavigationLink @click="opened = false" to="/projects">Travaux</NavigationLink>
        <NavigationLink @click="opened = false" to="/about">À propos</NavigationLink>
      </template>
      <template #bottom>
        <CallToAction to="/">hello@maesloic.fr</CallToAction>
      </template>
    </MobileMenu>
  </header>
</template>

<style scoped lang="sass">
.header
  @apply fixed top-0 inset-x-0 z-20 bg-woodsmoke-0 dark:bg-woodsmoke-950 p-8 items-center lg:px-20 xl:px-[7.5rem] 2xl:px-40

  &--brand
    @apply font-anton text-xl col-span-3 md:col-span-5 lg:col-span-2 xl:col-span-3

  &__nav, &--cta-wrapper
    @apply hidden lg:flex

  &__nav
    @apply col-span-4 justify-center gap-8 2xl:col-span-6

  &--cta-wrapper
    @apply justify-end col-span-2 xl:col-span-3

  &--menu-wrapper
    @apply flex justify-end lg:hidden
</style>
