<script setup lang="ts">
interface Props {
  items: string[];
}
defineProps<Props>();
</script>

<template>
  <ul class="list">
    <li class="list--item" v-for="(item, index) in items" :key="`list-${index}`">{{ item }}</li>
  </ul>
</template>

<style scoped lang="sass">
@forward './style'
</style>
