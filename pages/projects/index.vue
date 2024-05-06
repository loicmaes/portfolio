<script setup lang="ts">
import Pagination from "~/components/uikit/paginations/Pagination.vue";
import {projects} from "assets/mocks/projects";
import ProjectCard from "~/components/locals/home/projects/ProjectCard.vue";
import CallToAction from "~/components/uikit/buttons/CallToAction.vue";
import {CtaIconPosition, CtaVariant} from "assets/types/callToAction.types";
import IconTwoSliders from "~/components/uikit/icons/search/IconTwoSliders.vue";
import IconArrowRight from "~/components/uikit/icons/arrows/IconArrowRight.vue";

const { params } = useRoute();
const currentPage = ref(parseInt(params.page as string ?? '1'));

const perPage = 12;

const start       = computed(() => (currentPage.value - 1) * perPage);
const end         = computed(() => start.value + perPage);
const projectList = computed(() => projects.slice(start.value, end.value));

const changePage = async (value: number) => {
  currentPage.value = value;
};
</script>

<template>
  <div data-page class="projects">
    <div class="projects--wrapper gridified" v-if="projects.length">
      <!-- TODO: enable filter -->
      <header class="projects__head" v-if="false">
        <CallToAction class="projects__head--filter" :variant="CtaVariant.SECONDARY" :icon-position="CtaIconPosition.RIGHT">
          <span>Filtrer</span>
          <IconTwoSliders />
        </CallToAction>
      </header>
      <ProjectCard class="projects--item" :uuid="uuid" :name="name" :description="description" :tags="tags" :thumbnail="thumbnail" :client="client" v-for="{ uuid, thumbnail, client, name, description, tags } in projectList" :key="name" />
      <Pagination class="projects--pagination" :per-page="perPage" :elements="projects.length" :current="currentPage" @updated="changePage" v-if="projects.length && projects.length > perPage" />
    </div>
    <div class="projects__no-content" v-else>
      <h2 class="projects__no-content--title">Oops...</h2>
      <p class="projects__no-content--content">On dirait qu'il n'y a rien à voir par ici, pour le moment...</p>
      <CallToAction to="/" :icon-position="CtaIconPosition.RIGHT">Retour à l'accueil <IconArrowRight /></CallToAction>
    </div>
  </div>
</template>

<style scoped lang="sass">
.projects
  @apply px-8 py-24 lg:py-32 md:px-12 lg:px-16 xl:px-[7.5rem]

  &__head
    @apply flex justify-end col-span-4 md:col-span-6 lg:col-span-8 xl:col-span-10 2xl:col-span-12

  &--item
    @apply col-span-4 md:col-span-3 lg:col-span-4 xl:col-span-3 2xl:col-span-3

    &:nth-of-type(3n+2)
      @apply xl:col-span-4 2xl:col-span-3

  &--pagination
    @apply col-span-4 md:col-span-6 lg:col-start-2 xl:col-start-3 2xl:col-start-4

  &__no-content
    @apply min-h-[70dvh] w-full flex flex-col gap-8 sm:items-center sm:justify-center

    &--title
      @apply text-7xl font-extrabold

    &--content
      @apply mb-8 text-woodsmoke-500 dark:text-woodsmoke-400
</style>
