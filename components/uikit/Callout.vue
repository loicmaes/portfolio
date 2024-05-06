<script setup lang="ts">

</script>

<template>
  <div class="callout">
    <slot name="icon" />

    <p class="callout--content">
      <slot name="content" />
    </p>
  </div>
</template>

<style scoped lang="sass">
.callout
  @apply isolate bg-gradient-to-br from-woodsmoke-200 dark:from-woodsmoke-700 to-woodsmoke-100 dark:to-woodsmoke-900 rounded-3xl px-8 py-6 flex flex-col relative before:absolute before:inset-[2px] before:-z-10 before:bg-woodsmoke-100 dark:before:bg-woodsmoke-900 before:rounded-[1.4rem]

  &--content
    @apply leading-loose font-semibold italic text-woodsmoke-600 dark:text-woodsmoke-300
</style>
