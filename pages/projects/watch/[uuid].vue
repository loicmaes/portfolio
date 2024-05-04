<script setup lang="ts">
import {projects} from "assets/mocks/projects";
import IconArrowLeft from "~/components/uikit/icons/arrows/IconArrowLeft.vue";
import {useDateFormat} from "assets/scripts/hooks/date";
import {DateFormat} from "assets/types/dateHook.types";

definePageMeta({
  layout: 'project-watcher'
});

const project = projects.find(({ uuid }) => uuid === useRoute().params.uuid)
const date    = useDateFormat(project?.createdAt || new Date(), {
  format: DateFormat.SHORT_TEXT
})

useHead({
  title: `Loïc MAES · ${project?.name}`,
  meta: [
    {
      name: 'description',
      content: project?.description,
    },
    {
      name: 'author',
      content: 'Loïc MAES'
    },
    {
      name: 'keywords',
      content: project?.tags.join(', ')
    }
  ]
});

const back = () => useRouter().back()
</script>

<template>
  <div data-page class="project">
    <header class="project__header">
      <button type="button" class="project__header--back" @click="back">
        <IconArrowLeft />
      </button>

      <p class="project__header--date">Créer le {{ date }}</p>
    </header>
  </div>
</template>

<style scoped lang="sass">
.project
  &__header
    @apply sticky top-0 z-10 flex items-center justify-between px-8 py-4

    &--back
      @apply aspect-square p-3

    &--date
      @apply text-woodsmoke-300 dark:text-woodsmoke-600
</style>
