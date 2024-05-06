<script setup lang="ts">
import {projects} from "assets/mocks/projects";
import IconArrowLeft from "~/components/uikit/icons/arrows/IconArrowLeft.vue";
import {useDateFormat} from "assets/scripts/hooks/date";
import {DateFormat} from "assets/types/dateHook.types";
import Callout from "~/components/uikit/Callout.vue";
import Paragraph from "~/components/uikit/Paragraph.vue";
import Image from "~/components/uikit/Image.vue";
import { SectionType } from 'assets/types/projectContent.types';
import type { Callout as CalloutType, Paragraph as ParagraphType, Image as ImageType, Accordion as AccordionType, FAQ as FAQType, List as ListType } from 'assets/types/projectContent.types';
import Accordion from "~/components/uikit/accordions/Accordion.vue";
import FAQ from "~/components/uikit/accordions/AccordionGroup.vue";
import ListRender from "~/components/uikit/list/ListRender.vue";

definePageMeta({
  layout: 'project-watcher'
});

const { name, description, tags, client, thumbnail, uuid, createdAt, content } = projects.find(({ uuid }) => uuid === useRoute().params.uuid) || projects[0];
const date    = useDateFormat(createdAt || new Date(), {
  format: DateFormat.SHORT_TEXT
});

useHead({
  title: `Loïc MAES · ${name}`,
  meta: [
    {
      name: 'description',
      content: description,
    },
    {
      name: 'author',
      content: 'Loïc MAES'
    },
    {
      name: 'keywords',
      content: tags.join(', ')
    }
  ]
});

const back = () => useRouter().back();

const scrolledLimit = 10;
const scrolled = ref(false);
const scroll   = ()  => {
  const windowScrollTop = window.scrollY;
  const docElementTop   = document.documentElement.scrollTop;

  scrolled.value = windowScrollTop > scrolledLimit || docElementTop > scrolledLimit;
};

if (process.browser) {
  window.addEventListener('scroll', scroll);
  window.addEventListener('load', scroll);
}
</script>

<template>
  <article data-page class="project">
    <header class="project__header" :class="{ 'scrolled': scrolled }">
      <button type="button" class="project__header--back" @click="back">
        <IconArrowLeft />
      </button>

      <p class="project__header--date">Créer le {{ date }}</p>
    </header>

    <main class="project--wrapper">
      <img :src="thumbnail.src" :alt="thumbnail.alt ?? ''" ref="thumbnailRef" class="project--thumbnail">

      <div class="project--container">
        <section class="project__section head">
          <ul class="head__tags">
            <li class="head__tags--item" :key="`tag-${index}`" v-for="(tag, index) in tags">{{ tag }}</li>
          </ul>

          <h1 class="head--title">{{ name }}</h1>
          <p class="head--description">{{ description }}</p>
        </section>

        <section class="project__section" v-for="(section, index) in content" :key="`section-${index}`">
          <hr class="project--separator" v-if="section.type === SectionType.SEPARATOR" />
          <Callout v-if="section.type === SectionType.CALLOUT">
            <template #content>{{ (section as CalloutType).content }}</template>
          </Callout>
          <Paragraph v-if="section.type === SectionType.PARAGRAPH" :no-title="!(section as ParagraphType).title">
            <template #title v-if="(section as ParagraphType).title">{{ (section as ParagraphType).title }}</template>
            <template #content>{{ (section as ParagraphType).content }}</template>
          </Paragraph>
          <Image v-if="section.type === SectionType.IMAGE" :src="(section as ImageType).src" :caption="(section as ImageType).caption" />
          <Accordion v-if="section.type === SectionType.ACCORDION" :foot-less="!(section as AccordionType).foot">
            <template #title>{{ (section as AccordionType).title }}</template>
            <template #content>{{ (section as AccordionType).content }}</template>
            <template #foot v-if="(section as AccordionType).foot">{{ (section as AccordionType).foot }}</template>
          </Accordion>
          <FAQ v-if="section.type === SectionType.FAQ" :questions="(section as FAQType).questions" />
          <ListRender v-if="section.type === SectionType.LIST" :items="(section as ListType).items" :ordered="(section as ListType).ordered" />
        </section>
      </div>
    </main>
  </article>
</template>

<style scoped lang="sass">
.project
  &__header
    @apply sticky top-0 inset-x-0 z-10 flex items-center justify-between px-8 py-4 transition-colors bg-woodsmoke-0 dark:bg-woodsmoke-950

    &--back
      @apply aspect-square p-3

    &--date
      @apply text-woodsmoke-300 dark:text-woodsmoke-600

  &--wrapper
    @apply flex flex-col items-center

  &--container
    @apply relative px-8 py-12 lg:px-12 w-full max-w-[1024px] flex flex-col gap-16

  &--thumbnail
    @apply h-52 md:h-64 lg:h-96 w-full object-cover object-center

  &--separator
    @apply border-woodsmoke-200 dark:border-woodsmoke-400

.head
  &__tags
    @apply mt-4 flex flex-wrap gap-2

    &--item
      @apply text-xs text-woodsmoke-300 py-2 px-3 bg-woodsmoke-100 dark:bg-woodsmoke-800 rounded-lg

  &--title
    @apply w-max max-w-full pt-8 pb-4 text-4xl lg:text-5xl 2xl:text-6xl font-black bg-gradient-to-r from-woodsmoke-950 dark:from-woodsmoke-0 to-woodsmoke-500 dark:to-woodsmoke-400 text-transparent bg-clip-text

  &--description
    @apply leading-loose text-woodsmoke-500
</style>
