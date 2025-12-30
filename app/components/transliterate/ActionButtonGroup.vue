<script setup lang="ts">
const props = defineProps<{
  direction: 'up' | 'down';
}>();
</script>

<template>
  <div class="shrink-0 p-4px bg-gray-1 b-(solid 1px gray-2px) flex gap-4px" :class="direction === 'up' ? '!b-t-none rounded-b-12px mb-6px max-md:(!b-b-none rounded-t-12px mt-6px mb-0 rounded-b-0)' : '!b-b-none rounded-t-12px mt-6px max-md:(!b-t-none rounded-b-12px mb-6px mt-0 rounded-t-0)'">
    <button @click="$emit('copy')" class="flex items-center bg-white px-8px py-2px gap-3px rounded-8px b-(solid 1px gray-2) shadow-sm text-gray-9 hover:bg-gray-1 transition-all-100">
      <Icon name="tabler:copy" class="size-14px" />
      <span class="text-14px">Copy</span>
    </button>
    <button @click="$emit('clear')" class="flex items-center bg-white px-8px py-2px gap-3px rounded-8px b-(solid 1px red-2) shadow-sm text-gray-9 hover:bg-gray-1 transition-all-100">
      <Icon name="tabler:trash" class="size-14px" />
      <span class="text-14px">Clear</span>
    </button>
  </div>
</template>

<style scoped>

</style>