<script setup lang="ts">
interface Props {
  noTitle?: boolean;
}

defineProps<Props>();
</script>

<template>
  <div class="paragraph">
    <h2 class="paragraph--title" v-if="!noTitle">
      <slot name="title" />
    </h2>
    <p class="paragraph--content">
      <slot name="content" />
    </p>
  </div>
</template>

<style scoped lang="sass">
.paragraph
  &--title
    @apply mb-4 font-extrabold text-2xl lg:text-3xl 2xl:text-4xl

  &--content
    @apply text-justify leading-loose text-woodsmoke-700 dark:text-woodsmoke-300 whitespace-pre-line
</style>
