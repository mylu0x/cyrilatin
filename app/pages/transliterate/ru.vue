<script setup lang="ts">
import useTransliterateRu from "~/composables/useTransliterateRu";

const transliterationType = ref<'iso9'>('iso9');

const originalText = ref<string>('');
const resultText = computed(() => {
  return useTransliterateRu(transliterationType.value, originalText.value);
});

const copyOriginalText = () => {
  navigator.clipboard.writeText(originalText.value);
}

const clearOriginalText = () => {
  originalText.value = '';
}

const copyResultText = () => {
  navigator.clipboard.writeText(resultText.value);
}

const clearResultText = () => {
  originalText.value = '';
}
</script>

<template>
  <div>
    <div class="flex flex-col">
      <label for="original-text-textarea" class="text-12px text-gray-7 pl-2px">Cyrillic Text</label>
      <textarea v-model="originalText" id="original-text-textarea" class="w-full resize-none h-250px b-(solid 1px gray-2) rounded-8px shadow-sm bg-gray-50 px-8px py-6px outline-(solid 0 gray-1) transition-all-25 focus:outline-2px"></textarea>
    </div>
    <div class="flex items-center justify-between px-8px">
      <div class="shrink-0 p-4px bg-gray-1 rounded-t-12px b-(solid 1px gray-2px) !b-b-none flex gap-4px mt-6px">
        <button @click="copyOriginalText" class="flex items-center bg-white px-8px py-2px gap-3px rounded-8px b-(solid 1px gray-2) shadow-sm text-gray-9 hover:bg-gray-1 transition-all-100">
          <Icon name="tabler:copy" class="size-14px" />
          <span class="text-14px">Copy</span>
        </button>
        <button @click="clearOriginalText" class="flex items-center bg-white px-8px py-2px gap-3px rounded-8px b-(solid 1px gray-2) shadow-sm text-gray-9 hover:bg-gray-1 transition-all-100">
          <Icon name="tabler:trash" class="size-14px" />
          <span class="text-14px">Clear</span>
        </button>
      </div>
      <div class="flex w-full px-4px">
        <select v-model="transliterationType" class="w-full py-3px px-6px bg-white b-(solid 1px gray-2) shadow-sm rounded-8px w-full text-gray-8 focus:b-gray-3 focus:outline-none">
          <option value="iso9">ISO 9</option>
        </select>
      </div>
      <div class="shrink-0 p-4px bg-gray-1 rounded-b-12px b-(solid 1px gray-2px) !b-t-none flex gap-4px mb-6px">
        <button @click="copyResultText" class="flex items-center bg-white px-8px py-2px gap-3px rounded-8px b-(solid 1px gray-2) shadow-sm text-gray-9 hover:bg-gray-1 transition-all-100">
          <Icon name="tabler:copy" class="size-14px" />
          <span class="text-14px">Copy</span>
        </button>
        <button @click="clearResultText" class="flex items-center bg-white px-8px py-2px gap-3px rounded-8px b-(solid 1px gray-2) shadow-sm text-gray-9 hover:bg-gray-1 transition-all-100">
          <Icon name="tabler:trash" class="size-14px" />
          <span class="text-14px">Clear</span>
        </button>
      </div>
    </div>
    <div class="flex flex-col">
      <textarea :value="resultText" readonly id="result-text-textarea" class="w-full resize-none h-250px b-(solid 1px gray-2) rounded-8px shadow-sm bg-gray-50 px-8px py-6px outline-(solid 0 gray-1) transition-all-25 focus:outline-2px"></textarea>
    </div>
  </div>
</template>

<style scoped>

</style>