<script setup lang="ts">
interface Props {
  name: string;
}
defineProps<Props>();
</script>

<template>
  <section :id="name" class="section">
    <h2 class="section--title">
      <slot name="title" />
    </h2>

    <div class="section--wrapper">
      <slot name="content" />
    </div>
  </section>
</template>

<style scoped lang="sass">
.section
  @apply relative w-full max-w-[768px] flex flex-col gap-4

  &--title
    @apply text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-extrabold

  &--wrapper
    @apply flex flex-col gap-4 text-justify text-woodsmoke-500 dark:text-woodsmoke-400
</style>
