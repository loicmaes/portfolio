<script setup lang="ts">
import IconSun from "~/components/uikit/icons/environment/IconSun.vue";
import IconMoon from "~/components/uikit/icons/environment/IconMoon.vue";
import CallToAction from "~/components/uikit/buttons/CallToAction.vue";
import {CtaIconPosition, CtaVariant} from "assets/types/callToAction.types";

const colorMode = useColorMode();
const theme = ref<string>();

switch (colorMode.preference) {
  case 'system':
    theme.value = window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark': 'light';
    break;
  default:
    theme.value = 'light';
    break;
  case 'dark':
    theme.value = 'dark';
    break;
}
const switchTheme = () => {
  switch (theme.value) {
    default:
      colorMode.preference = 'dark';
      break;
    case 'dark':
      colorMode.preference = 'light';
      break;
  }
  theme.value = colorMode.preference
}
</script>

<template>
  <ClientOnly>
    <CallToAction class="theme-switcher" @click.prevent="switchTheme" :variant="CtaVariant.SECONDARY" :icon-position="CtaIconPosition.ALONE">
      <IconSun v-if="colorMode.preference === 'light'" />
      <IconMoon v-if="colorMode.preference === 'dark'" />
    </CallToAction>
  </ClientOnly>
</template>

<style scoped lang="sass">
.theme-switcher
  @apply w-max fixed z-10 bottom-6 right-6 lg:right-[inherit] lg:bottom-12 lg:left-8
</style>
