<script setup lang="ts">
import type {Project} from "assets/mocks/projects";

defineProps<Project>();
</script>

<template>
  <article class="card">
    <NuxtImg :src="thumbnail.src" :alt="thumbnail.alt ?? ''" class="card--thumbnail" />

    <p class="card--client">{{ client.name }} · {{ client.country }}</p>
    <h3 class="card--title">{{ name }}</h3>

    <p class="card--caption">{{ description }}</p>

    <ul class="card__tags" v-if="tags?.length">
      <li class="card__tags--item" v-for="tag in tags" :key="tag">{{ tag }}</li>
    </ul>

    <NuxtLink :to="`/projects/watch/${uuid}`" class="card--link" />
  </article>
</template>

<style scoped lang="sass">
.card
  @apply isolate bg-gradient-to-br from-woodsmoke-100 dark:from-woodsmoke-700 to-woodsmoke-0 dark:to-woodsmoke-900 rounded-3xl p-4 flex flex-col relative before:absolute before:inset-[2px] before:-z-10 before:bg-woodsmoke-0 dark:before:bg-woodsmoke-900 before:rounded-[1.4rem]

  &--link
    @apply absolute inset-0

  &--thumbnail
    @apply rounded-lg w-full h-36 object-cover

  &--client
    @apply mt-4 text-xs text-woodsmoke-500 dark:text-woodsmoke-400

  &--title
    @apply w-max max-w-full whitespace-nowrap line-clamp-1 text-xl font-bold bg-gradient-to-r from-woodsmoke-950 dark:from-woodsmoke-0 to-woodsmoke-500 dark:to-woodsmoke-400 text-transparent bg-clip-text

  &--caption
    @apply line-clamp-3 leading-relaxed text-woodsmoke-400 dark:text-woodsmoke-300 mt-2

  &__tags
    @apply mt-4 flex flex-wrap gap-2

    &--item
      @apply text-xs text-woodsmoke-300 py-2 px-3 bg-woodsmoke-100 dark:bg-woodsmoke-800 rounded-lg
</style>
