<script setup lang="ts">
import {CtaIconPosition, CtaStaticTheme, type CtaVariant} from "assets/types/callToAction.types";

type Props = {
  to?: string,
  variant?: CtaVariant,
  disabled?: boolean,
  submit?: boolean,
  iconPosition?: CtaIconPosition,
  static?: CtaStaticTheme
};

defineProps<Props>();
</script>

<template>
  <NuxtLink :to="to" class="button" :class="{ 'static-light': static === CtaStaticTheme.LIGHT, 'static-dark': static === CtaStaticTheme.DARK, disabled }" :data-icon-position="iconPosition ?? 'none'" :data-variant="variant ?? 'primary'" v-if="to"><slot /></NuxtLink>
  <a :href="to" class="button" :class="{ 'static-light': static === CtaStaticTheme.LIGHT, 'static-dark': static === CtaStaticTheme.DARK, disabled }" :data-icon-position="iconPosition ?? 'non'" :data-variant="variant ?? 'primary'" :target="to.startsWith('http') ? '_blank' : '_self'" v-else-if="to && (to.startsWith('mailto') || to.startsWith('tel') || to.startsWith('http'))"><slot /></a>
  <button class="button" :class="{ 'static-light': static === CtaStaticTheme.LIGHT, 'static-dark': static === CtaStaticTheme.DARK, disabled }" :data-icon-position="iconPosition ?? 'none'" :data-variant="variant ?? 'primary'" :type="submit ? 'submit' : 'button'" v-else><slot /></button>
</template>

<style scoped lang="sass">
.button
  @apply relative rounded-full gap-4 w-full sm:w-max flex justify-center items-center font-medium isolate overflow-hidden before:absolute before:inset-[2px] before:rounded-full before:-z-10

  &[data-variant="primary"]
    @apply before:bg-transparent before:transition-colors transition-colors bg-woodsmoke-950 dark:bg-woodsmoke-0 text-woodsmoke-0 dark:text-woodsmoke-950 hover:text-woodsmoke-950 hover:before:bg-woodsmoke-0 dark:hover:text-woodsmoke-0 dark:hover:before:bg-woodsmoke-950

    &.static-light
      @apply bg-woodsmoke-950 text-woodsmoke-0
    &.static-dark
      @apply bg-woodsmoke-0 text-woodsmoke-950

  &[data-variant="secondary"]
    @apply bg-gradient-to-br from-woodsmoke-100 dark:from-woodsmoke-800 to-woodsmoke-0 dark:to-woodsmoke-950 before:bg-woodsmoke-0 dark:before:bg-woodsmoke-950 after:absolute after:h-4 after:w-[60%] after:rounded-full after:blur-xl after:transition-transform after:left-[50%] after:translate-x-[-50%] after:translate-y-3 after:top-[100%] after:bg-woodsmoke-200 dark:after:bg-woodsmoke-500 hover:after:translate-y-0

  &[data-icon-position="none"]
    @apply py-4 px-8
  &[data-icon-position="alone"]
    @apply p-4
  &[data-icon-position="left"]
    @apply py-4 pl-4 pr-8
  &[data-icon-position="right"]
    @apply py-4 pl-8 pr-4

  &.disabled
    @apply [pointer-events:none] opacity-50 dark:opacity-40
</style>
