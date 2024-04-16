<script setup lang="ts">

</script>

<template>
  <section class="section">
    <h2 class="section--title"><slot name="title" /></h2>
    <div class="section--wrapper"><slot name="content" /></div>
  </section>
</template>

<style scoped lang="sass">
.section
  @apply flex flex-col gap-4 col-span-4 md:col-span-3 lg:col-span-4 xl:col-span-2

  &--title
    @apply font-bold

  &--wrapper
    @apply flex flex-col items-start gap-2
</style>
