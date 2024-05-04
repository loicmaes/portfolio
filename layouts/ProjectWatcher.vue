<script setup lang="ts">
import BottomMenu from "~/components/globals/BottomMenu.vue";
import ThemeSelector from "~/components/uikit/ThemeSelector.vue";
</script>

<template>
  <div data-layout>
    <slot />

    <ThemeSelector />
    <BottomMenu />
  </div>
</template>

<style scoped lang="sass">

</style>
