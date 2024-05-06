<script setup lang="ts">
import Accordion from "~/components/uikit/accordions/Accordion.vue";
import {type Accordion as AccordionType, SectionType} from "assets/types/projectContent.types";

interface Props {
  questions: AccordionType[];
}
defineProps<Props>();

const accordions = ref([]);
const handleDeploy = (event: { code: string, state: boolean }) => {
  if (!event.state) return;
  accordions.value.filter((a: any) => a.code !== event.code).forEach((a: any) => a.close())
}
</script>

<template>
  <div class="faq">
    <Accordion v-for="({title, content, foot}, index) in questions" :key="`faq-accordion-${index}`" :foot-less="!foot" ref="accordions" @deployed="handleDeploy">
      <template #title>{{ title }}</template>
      <template #content>{{ content }}</template>
      <template #foot>{{ foot }}</template>
    </Accordion>
  </div>
</template>

<style scoped lang="sass">
.faq
  @apply flex flex-col gap-4
</style>
