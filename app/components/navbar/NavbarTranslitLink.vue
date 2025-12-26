<script setup lang="ts">
const props = defineProps<{
  text: string;
  to?: string;
}>();
const route = useRoute();
const isLinkActive = computed(() => {
  return route.path === props.to;
});
</script>

<template>
  <NuxtLink :to :class="{ 'bg-gray-2' : isLinkActive }" class="flex items-center justify-center rounded-8px font-500 py-3px w-full hover:bg-gray-2 transition-all-50">
    {{ text }}
  </NuxtLink>
</template>

<style scoped>

</style>