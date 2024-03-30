<script setup lang="ts">
import TopMenu from "~/components/globals/TopMenu.vue";
import BottomMenu from "~/components/globals/BottomMenu.vue";
import ThemeSelector from "~/components/uikit/ThemeSelector.vue";
</script>

<template>
  <div data-layout>
    <TopMenu />

    <slot />

    <ThemeSelector />
    <BottomMenu />
  </div>
</template>

<style lang="sass">
[data-layout]
  @apply min-h-screen
</style>
