<script setup lang="ts">
import IconClose from "~/components/uikit/icons/menus/IconClose.vue";
import ThemeSelector from "~/components/uikit/ThemeSelector.vue";

defineProps<{
  opened: boolean
}>();
defineEmits(['close']);
</script>

<template>
  <Transition name="fade-in" mode="out-in">
    <div class="menu" v-if="opened">
      <header class="menu__header">
        <p class="menu__header--brand">Loïc.</p>
        <button class="menu__header--close" type="button" @click.prevent="$emit('close')"><IconClose /></button>
      </header>

      <nav class="menu--content">
        <slot name="top" />
      </nav>

      <footer class="menu__footer">
        <slot name="bottom" />
      </footer>
    </div>
  </Transition>
</template>

<style scoped lang="sass">
.menu
  @apply fixed flex flex-col inset-0 p-8 gap-8 bg-woodsmoke-0 dark:bg-woodsmoke-950 lg:hidden

  &.fade-in
    &-enter-active, &-leave-active
      @apply transition-all duration-500
    &-enter-from, &-leave-to
      @apply opacity-0 translate-x-8

  &__header
    @apply flex justify-between items-center

    &--brand
      @apply font-anton text-xl

  &--content
    @apply grow flex flex-col gap-16 items-start py-4 text-6xl font-anton

  &__footer
    @apply flex flex-col
</style>
