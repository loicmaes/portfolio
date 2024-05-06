<script setup lang="ts">
import IconPlusSign from "~/components/uikit/icons/math/IconPlusSign.vue";
import IconMinusSign from "~/components/uikit/icons/math/IconMinusSign.vue";
import { randomString } from "~/assets/scripts/functions/strings";

const emit = defineEmits([
    'deployed'
])

interface Props {
  footLess?: boolean;
}
defineProps<Props>();

const code = randomString(6);

const deployed = ref(false);
const toggleDeploy = () => {
  emit('deployed', { code, state: !deployed.value });
  deployed.value = !deployed.value;
}

const close = () => {
  deployed.value = false
};
defineExpose({
  close,
})
</script>

<template>
  <div class="accordion">
    <button class="accordion--head" @click.prevent="toggleDeploy">
      <span class="accordion--title"><slot name="title" /></span>
      <IconMinusSign v-if="deployed" />
      <IconPlusSign v-else />
    </button>
    <div class="accordion--wrapper" :class="{ deployed }">
      <div class="accordion--wrapper-content">
        <hr class="accordion--separator" />
        <p class="accordion--content"><slot name="content" /></p>
        <span class="accordion--foot" v-if="!footLess"><slot name="foot" /></span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.accordion
  @apply isolate bg-gradient-to-br from-woodsmoke-100 dark:from-woodsmoke-800 to-woodsmoke-0 dark:to-woodsmoke-950 rounded-3xl overflow-hidden flex flex-col relative before:absolute before:inset-[2px] before:-z-10 before:bg-woodsmoke-0 dark:before:bg-woodsmoke-950 before:rounded-[1.4rem]

  &--head
    @apply flex justify-between items-center px-8 py-6 font-bold gap-6 text-left

  &--wrapper
    @apply grid grid-rows-[0fr] transition-all duration-300

    &.deployed
      @apply grid-rows-[1fr]

    &-content
      @apply flex flex-col overflow-hidden

  &--separator
    @apply mb-4 border-[1px] border-woodsmoke-100 dark:border-woodsmoke-900

  &--content
    @apply mx-8 text-woodsmoke-400 whitespace-pre-line mb-4

  &--foot
    @apply text-woodsmoke-200 dark:text-woodsmoke-800 mr-8 self-end mb-4
</style>
