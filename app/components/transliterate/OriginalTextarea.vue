<script setup lang="ts">
const props = defineProps<{
  label: string;
  id: string;
}>();
const model = defineModel<string>();
</script>

<template>
  <div class="flex flex-col">
    <label :for="id" class="text-12px text-gray-7 pl-2px">{{ label }}</label>
    <textarea v-model="model" :id class="w-full resize-none h-250px b-(solid 1px gray-2) rounded-8px shadow-sm bg-gray-50 px-8px py-6px outline-(solid 0 gray-1) transition-all-25 focus:outline-2px"></textarea>
  </div>
</template>

<style scoped>

</style>