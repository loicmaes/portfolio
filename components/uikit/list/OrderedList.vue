<script setup lang="ts">
interface Props {
  items: string[];
}
defineProps<Props>();
</script>

<template>
  <ol class="list">
    <li class="list--item" v-for="(item, index) in items" :key="`list-${index}`">{{ item }}</li>
  </ol>
</template>

<style scoped lang="sass">
@forward './style'
</style>
