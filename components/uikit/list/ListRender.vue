<script setup lang="ts">
import OrderedList from "~/components/uikit/list/OrderedList.vue";
import UnorderedList from "~/components/uikit/list/UnorderedList.vue";

interface Props {
  ordered?: boolean;
  items: string[];
}
defineProps<Props>();
</script>

<template>
  <OrderedList v-if="ordered" :items="items" />
  <UnorderedList v-else :items="items" />
</template>

<style scoped lang="sass">

</style>
