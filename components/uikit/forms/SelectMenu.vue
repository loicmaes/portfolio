<script setup lang="ts">
import CallToAction from "~/components/uikit/buttons/CallToAction.vue";
import {CtaIconPosition, CtaVariant} from "assets/types/callToAction.types";
import IconChevronDown from "~/components/uikit/icons/arrows/IconChevronDown.vue";

interface Props {
  options: (string | number)[],
  selected?: number,
}

const props = defineProps<Props>();
const emit  = defineEmits(['select'])
const { options, selected } = toRefs(props);
const selectedOption = computed(() => selected.value !== undefined ? options.value[selected.value] : undefined);

const opened = ref(false);
const toggleMenu = (state?: boolean) => {
  opened.value = state !== undefined ? state : !opened.value;
};

const selectValue = (optionIndex: number) => {
  emit('select', {
    index: optionIndex,
    value: options.value[optionIndex],
  })
  toggleMenu(false);
}
</script>

<template>
  <div class="menu">
    <CallToAction class="menu--toggle" :variant="CtaVariant.SECONDARY" :icon-position="CtaIconPosition.RIGHT" @click.prevent="toggleMenu()">
      <span>{{ selectedOption ?? 'Sélectionner une option' }}</span>
      <IconChevronDown />
    </CallToAction>

    <Transition name="menu--appear" mode="out-in">
      <ul class="menu--wrapper" v-if="opened">
        <li class="menu--option" :class="{ 'active': selected === index }" :key="option" v-for="(option, index) in options" @click="selectValue(index)">
          {{ option }}
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style scoped lang="sass">
.menu
  @apply relative

  &--wrapper
    @apply min-w-44 fixed lg:absolute inset-x-8 bottom-8 lg:inset-x-auto lg:top-16 lg:bottom-auto lg:left-0 lg:w-max lg:max-w-64 isolate bg-gradient-to-br from-woodsmoke-100 dark:from-woodsmoke-700 to-woodsmoke-0 dark:to-woodsmoke-900 rounded-3xl before:absolute before:inset-[2px] before:-z-10 before:bg-woodsmoke-0 dark:before:bg-woodsmoke-900 before:rounded-[1.4rem] overflow-hidden

  &--option
    @apply px-6 py-4 w-full transition-colors hover:bg-woodsmoke-100 dark:hover:bg-woodsmoke-800/20

    &.active
      @apply text-woodsmoke-300 dark:text-woodsmoke-400 font-bold

  &--appear
    &-enter-active, &-leave-active
      @apply transition-all

    &-enter-from, &-leave-to
      @apply opacity-0 translate-y-3 lg:-translate-y-2
</style>
