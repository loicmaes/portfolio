<script setup lang="ts">
interface Props {
  src: string;
  caption?: string;
}

defineProps<Props>();
</script>

<template>
  <figure class="image">
    <img :src="src" alt="" class="image--img" />
    <figcaption class="image--caption" v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<style scoped lang="sass">
.image
  @apply flex flex-col gap-3

  &--img
    @apply w-full rounded-2xl

  &--caption
    @apply block ml-3 text-sm text-woodsmoke-300 dark:text-woodsmoke-700
</style>
