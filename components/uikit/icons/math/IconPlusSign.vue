<script setup lang="ts">
interface Props {
  strokeWidth?: number;
}
defineProps<Props>();
</script>

<template>
  <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12H12M12 12H18M12 12V18M12 12V6" stroke="currentColor" :stroke-width="strokeWidth ?? 1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<style scoped lang="sass">

</style>
