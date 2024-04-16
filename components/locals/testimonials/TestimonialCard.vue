<script setup lang="ts">
import IconQuote from "~/components/uikit/icons/text/IconQuote.vue";
import IconStar from "~/components/uikit/icons/environment/IconStar.vue";

type Props = {
  mark: number;
};
defineProps<Props>();
</script>

<template>
  <article class="card">
    <header class="card__head">
      <div class="card--icon"><IconQuote /></div>

      <h3 class="card__head--title"><slot name="name" /></h3>
      <p class="card__head--subtitle"><slot name="society" /></p>
    </header>

    <main class="card--content">
      <slot name="quote" />
    </main>

    <footer class="card__footer">
      <ul class="card__footer__mark">
        <li class="card__footer__mark--item" :class="{ 'active': mark >= 1}"><IconStar /></li>
        <li class="card__footer__mark--item" :class="{ 'active': mark >= 2}"><IconStar /></li>
        <li class="card__footer__mark--item" :class="{ 'active': mark >= 3}"><IconStar /></li>
        <li class="card__footer__mark--item" :class="{ 'active': mark >= 4}"><IconStar /></li>
        <li class="card__footer__mark--item" :class="{ 'active': mark >= 5}"><IconStar /></li>
      </ul>
    </footer>
  </article>
</template>

<style scoped lang="sass">
.card
  @apply relative isolate bg-gradient-to-br from-woodsmoke-100 dark:from-woodsmoke-800 to-woodsmoke-0 dark:to-woodsmoke-950 rounded-3xl px-6 py-8 pt-12 flex flex-col gap-6 items-center before:absolute before:inset-[2px] before:-z-10 before:bg-woodsmoke-0 dark:before:bg-woodsmoke-900 before:rounded-[1.4rem]

  &--icon
    @apply absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-full bg-woodsmoke-100 dark:bg-woodsmoke-600

  &__head
    @apply flex flex-col items-center

    &--title
      @apply w-max max-w-full whitespace-nowrap line-clamp-1 font-bold bg-gradient-to-r from-woodsmoke-950 dark:from-woodsmoke-0 to-woodsmoke-500 dark:to-woodsmoke-400 text-transparent bg-clip-text

    &--subtitle
      @apply text-sm text-woodsmoke-400

  &--content
    @apply text-center my-auto line-clamp-5 italic

  &__footer
    &__mark
      @apply flex gap-1

      &--item
        @apply text-woodsmoke-300 dark:text-woodsmoke-400

        &.active
          @apply text-calico-400

        > *
          @apply w-4
</style>
