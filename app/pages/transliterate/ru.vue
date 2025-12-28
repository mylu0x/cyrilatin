<script setup lang="ts">
import { OnClickOutside } from '@vueuse/components';

type Rule = {
  id: string;
  name: string;
  desc: string;
}

const currentRule = ref<Rule>({
  id: 'iso9',
  name: 'ISO 9:1995',
  desc: 'An international standard for transliterating Cyrillic letters into Latin letters'
});

const rules = ref<Rule[]>([
  {
    id: 'iso9',
    name: 'ISO 9:1995',
    desc: 'An international standard for transliterating Cyrillic letters into Latin letters'
  },
  {
    id: 'gost7.79-2000b',
    name: 'GOST 7.79B',
    desc: 'A simplified Cyrillic-Latin transliteration standard'
  },
  {
    id: 'mylu-style',
    name: 'Mylu Style',
    desc: 'Mylu\'s original Cyrillic-Latin transliteration rules'
  }
]);

const originalText = ref<string>('');
const resultText = computed(() => {
  return useTransliterateRu(currentRule.value.id, originalText.value);
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

const isSelectorOpen = ref<boolean>(false);
</script>

<template>
  <div>
    <div class="flex flex-col">
      <label for="original-text-textarea" class="text-12px text-gray-7 pl-2px">Cyrillic Text</label>
      <textarea v-model="originalText" id="original-text-textarea" class="w-full resize-none h-250px b-(solid 1px gray-2) rounded-8px shadow-sm bg-gray-50 px-8px py-6px outline-(solid 0 gray-1) transition-all-25 focus:outline-2px"></textarea>
    </div>
    <div class="flex items-center justify-between px-8px">
      <div class="shrink-0 p-4px bg-gray-1 rounded-t-12px b-(solid 1px gray-2px) !b-b-none flex gap-4px mt-6px">
        <button @click="copyResultText" class="flex items-center bg-white px-8px py-2px gap-3px rounded-8px b-(solid 1px gray-2) shadow-sm text-gray-9 hover:bg-gray-1 transition-all-100">
          <Icon name="tabler:copy" class="size-14px" />
          <span class="text-14px">Copy</span>
        </button>
        <button @click="clearResultText" class="flex items-center bg-white px-8px py-2px gap-3px rounded-8px b-(solid 1px red-2) shadow-sm text-gray-9 hover:bg-gray-1 transition-all-100">
          <Icon name="tabler:trash" class="size-14px" />
          <span class="text-14px">Clear</span>
        </button>
      </div>
      <div class="flex w-full px-4px">
        <div class="relative w-full">
          <OnClickOutside @trigger="isSelectorOpen = false">
            <button @click="isSelectorOpen = !isSelectorOpen" class="flex items-center px-6px py-3px bg-white b-(solid 1px gray-2) w-full shadow-sm rounded-8px hover:bg-gray-1 transition-all-100 outline-none focus:outline-none focus:b-(solid 1px gray-3)">
              {{ currentRule.name }}
            </button>
            <div v-show="isSelectorOpen" class="absolute left-1/2 -translate-x-1/2">
              <div class="flex flex-col gap-4px bg-white z-999 b-(solid 1px gray-2) shadow-sm w-fit p-6px rounded-12px items-center mt-4px shadow-md">
                <div v-for="rule in rules" @click="currentRule = rule; isSelectorOpen = false;" class="cursor-pointer transition-all-50 flex hover:bg-gray-1 px-12px py-6px rounded-10px w-300px items-center justify-between">
                  <div class="leading-tight w-100px flex flex-col shrink-0">
                    <p class="whitespace-nowrap text-16px font-600 text-gray-8">{{ rule.name }}</p>
                    <p class="text-12px text-gray-7">{{ rule.id }}</p>
                  </div>
                  <p class="text-12px text-gray-8">{{ rule.desc }}</p>
                </div>
              </div>
            </div>
          </OnClickOutside>
        </div>
      </div>
      <div class="shrink-0 p-4px bg-gray-1 rounded-b-12px b-(solid 1px gray-2px) !b-t-none flex gap-4px mb-6px">
        <button @click="copyOriginalText" class="flex items-center bg-white px-8px py-2px gap-3px rounded-8px b-(solid 1px gray-2) shadow-sm text-gray-9 hover:bg-gray-1 transition-all-100">
          <Icon name="tabler:copy" class="size-14px" />
          <span class="text-14px">Copy</span>
        </button>
        <button @click="clearOriginalText" class="flex items-center bg-white px-8px py-2px gap-3px rounded-8px b-(solid 1px red-2) shadow-sm text-gray-9 hover:bg-gray-1 transition-all-100">
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