<script setup lang="ts">
import {
  type Accordion as T_Accordion, type Callout as T_Callout, type FAQ as T_FAQ,
  type Image as T_Image, type List as T_List,
  type Paragraph as T_Paragraph, type SectionChild as T_SectionChild,
  SectionType
} from "assets/types/projectContent.types";
import FAQ from "~/components/uikit/accordions/AccordionGroup.vue";
import Image from "~/components/uikit/images/Image.vue";
import Accordion from "~/components/uikit/accordions/Accordion.vue";
import Paragraph from "~/components/uikit/paragraphs/Paragraph.vue";
import Callout from "~/components/uikit/callouts/Callout.vue";
import ListRender from "~/components/uikit/list/ListRender.vue";

interface Props {
  child: T_SectionChild;
}
defineProps<Props>();
</script>

<template>
  <div class="section-child">
    <hr class="project--separator" v-if="child.type === SectionType.SEPARATOR" />
    <Callout v-if="child.type === SectionType.CALLOUT">
      <template #content>{{ (child as T_Callout).content }}</template>
    </Callout>
    <Paragraph v-if="child.type === SectionType.PARAGRAPH" :no-title="!(child as T_Paragraph).title">
      <template #title v-if="(child as T_Paragraph).title">{{ (child as T_Paragraph).title }}</template>
      <template #content>{{ (child as T_Paragraph).content }}</template>
    </Paragraph>
    <Image v-if="child.type === SectionType.IMAGE" :src="(child as T_Image).src" :caption="(child as T_Image).caption" />
    <Accordion v-if="child.type === SectionType.ACCORDION" :foot-less="!(child as T_Accordion).foot">
      <template #title>{{ (child as T_Accordion).title }}</template>
      <template #content>{{ (child as T_Accordion).content }}</template>
      <template #foot v-if="(child as T_Accordion).foot">{{ (child as T_Accordion).foot }}</template>
    </Accordion>
    <FAQ v-if="child.type === SectionType.FAQ" :questions="(child as T_FAQ).questions" />
    <ListRender v-if="child.type === SectionType.LIST" :items="(child as T_List).items" :ordered="(child as T_List).ordered" />
  </div>
</template>

<style scoped lang="sass">

</style>
