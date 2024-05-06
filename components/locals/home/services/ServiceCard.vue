<script setup lang="ts">
import CallToAction from "~/components/uikit/buttons/CallToAction.vue";
import IconArrowRight from "~/components/uikit/icons/arrows/IconArrowRight.vue";
import IconChevronRight from "~/components/uikit/icons/arrows/IconChevronRight.vue";
import type {Service} from "assets/mocks/services";
import {CtaIconPosition} from "assets/types/callToAction.types";

defineProps<Service>();
</script>

<template>
  <article class="card">
    <header class="card__head">
      <h3 class="card__head--title">{{ name }}</h3>
      <p class="card__head--description">{{ description }}</p>
    </header>

    <hr class="card--separator">

    <main class="card--wrapper">
      <ul class="card__features">
        <li class="card__features--item" v-for="f in features" :key="f">
          <IconChevronRight class="card__features--item-icon" />
          <span>{{ f }}</span>
        </li>
      </ul>
    </main>

    <footer class="card__foot" v-if="false"> <!-- TODO: remove statement -->
      <CallToAction class="card__foot--cta" :icon-position="CtaIconPosition.RIGHT" :to="`/contact/service/${id}`">
        <span>Prendre contact</span>
        <IconArrowRight />
      </CallToAction>
    </footer>
  </article>
</template>

<style scoped lang="sass">
.card
  @apply isolate bg-gradient-to-br from-woodsmoke-100 dark:from-woodsmoke-700 to-woodsmoke-0 dark:to-woodsmoke-900 rounded-3xl px-6 py-8 flex flex-col gap-6 relative before:absolute before:inset-[2px] before:-z-10 before:bg-woodsmoke-0 dark:before:bg-woodsmoke-900 before:rounded-[1.4rem]

  &__head
    @apply flex flex-col items-center

    &--title
      @apply w-max max-w-full whitespace-nowrap line-clamp-1 text-xl font-bold bg-gradient-to-r from-woodsmoke-950 dark:from-woodsmoke-0 to-woodsmoke-500 dark:to-woodsmoke-400 text-transparent bg-clip-text

    &--description
      @apply line-clamp-3 leading-relaxed text-woodsmoke-400 dark:text-woodsmoke-300 mt-2

  &--separator
    @apply border-none block w-full h-[2px] bg-woodsmoke-200 dark:bg-woodsmoke-800 rounded-full

  &--wrapper
    @apply mb-auto

  &__features
    @apply flex flex-col w-full gap-2

    &--item
      @apply flex items-center gap-3 w-max max-w-full whitespace-nowrap line-clamp-1

      &-icon
        @apply shrink-0

  &__foot
    &--cta
      @apply w-full justify-between
</style>
