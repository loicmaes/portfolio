<script setup lang="ts">
import type {Section as T_Section} from "assets/types/projectContent.types";
import SectionChild from "~/components/locals/watcher/SectionChild.vue";

interface Props {
  section: T_Section;
}
defineProps<Props>();
</script>

<template>
  <section class="section-wrapper" v-if="section.children.length">
    <SectionChild :child="child" v-for="(child, index) in section.children" :key="`${section.name.substring(0, Math.max(4, section.name.length))}-${index}`" />
  </section>
</template>

<style scoped lang="sass">
.section-wrapper
  @apply flex flex-col gap-6
</style>
