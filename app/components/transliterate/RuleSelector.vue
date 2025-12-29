<script setup lang="ts">
import type { TransliterationRule } from "#shared/types/transliteration";
import { OnClickOutside } from "@vueuse/components";

const props = defineProps<{
  rules: TransliterationRule[]
}>();
const model = defineModel<TransliterationRule>({
  required: true
});
const isSelectorOpen = ref<boolean>(false);
</script>

<template>
  <div class="relative w-full">
    <OnClickOutside @trigger="isSelectorOpen = false">
      <button @click="isSelectorOpen = !isSelectorOpen" class="flex items-center px-6px py-3px bg-white b-(solid 1px gray-2) w-full shadow-sm rounded-8px hover:bg-gray-1 transition-all-100 outline-none focus:outline-none focus:b-(solid 1px gray-3)">
        {{ model.name }}
      </button>
      <div v-show="isSelectorOpen" class="absolute left-1/2 -translate-x-1/2">
        <div class="flex flex-col gap-4px bg-white z-999 b-(solid 1px gray-2) shadow-sm w-fit p-6px rounded-12px items-center mt-4px shadow-md">
          <div v-for="rule in rules" :key="rule.id" @click="model = rule; isSelectorOpen = false;" class="select-none cursor-pointer transition-all-50 flex hover:bg-gray-1 px-12px py-6px rounded-10px w-300px items-center justify-between">
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
</template>

<style scoped>

</style>