<script setup lang="ts">
const { params } = useRoute();
const number = params.id;
</script>

<template>
  <h1>Project n°{{ number }}</h1>
</template>

<style scoped lang="sass">

</style>
