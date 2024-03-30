<script setup lang="ts">
type Props = {
  to: string,
  external?: boolean
}
const { to, external } = defineProps<Props>();
</script>

<template>
  <a :href="to" :target="external ? '_blank' : '_self'" class="link" v-if="to.startsWith('http') || external"><slot /></a>
  <NuxtLink class="link" active-class="active" exact-active-class="active" :to="to" v-else><slot /></NuxtLink>
</template>

<style scoped lang="sass">
.link
  @apply relative opacity-60 transition-opacity after:bg-[currentColor] after:h-[2px] after:absolute after:inset-x-0 after:-bottom-2 after:transition-all after:translate-y-1 after:opacity-0 hover:opacity-100 hover:after:translate-y-0 hover:after:opacity-100

  &.active
    @apply opacity-100 after:opacity-100 after:translate-y-0
</style>
