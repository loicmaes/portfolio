<script setup lang="ts">
import {range} from "assets/scripts/functions/math";
import CallToAction from "~/components/uikit/buttons/CallToAction.vue";
import {CtaIconPosition, CtaVariant} from "assets/types/callToAction.types";
import IconChevronLeft from "~/components/uikit/icons/arrows/IconChevronLeft.vue";
import IconChevronRight from "~/components/uikit/icons/arrows/IconChevronRight.vue";
import SelectMenu from "~/components/uikit/forms/SelectMenu.vue";
import type {SelectEvent} from "assets/types/selectMenu.types";

interface Props {
  elements: number;
  perPage: number;
  current?: number;
}

const props = defineProps<Props>();
const { elements, perPage, current } = toRefs(props);
const emit = defineEmits([
    'updated'
]);

const pages = Math.ceil(elements.value / perPage.value) ?? 1;
const pageRange = range(1, pages);
const currentPage = computed(() => current.value ?? 1);

const getPage = (step: number): number => {
  const nextPage = currentPage.value + step;
  if (nextPage < 1) return 1;
  if (nextPage > pages) return pages;
  return nextPage;
};
const selectNextPage = () => {
  emit('updated', getPage(1));
};
const selectPreviousPage = () => {
  emit('updated', getPage(-1));
};
const updatePage = ({ value }: SelectEvent) => {
  emit('updated', parseInt(value as string));
};
</script>

<template>
  <div class="pagination">
    <CallToAction class="pagination--button" :variant="CtaVariant.SECONDARY" :icon-position="CtaIconPosition.ALONE" @click="selectPreviousPage" :disabled="currentPage === 1"><IconChevronLeft /></CallToAction>
    <SelectMenu class="pagination--menu" :options="pageRange" :selected="pageRange.indexOf(currentPage)" @select="updatePage" />
    <CallToAction class="pagination--button" :variant="CtaVariant.SECONDARY" :icon-position="CtaIconPosition.ALONE" @click="selectNextPage" :disabled="currentPage === pages"><IconChevronRight /></CallToAction>
  </div>
</template>

<style scoped lang="sass">
.pagination
  @apply flex justify-center gap-4

  &--button
    @apply shrink-0 w-fit
</style>
