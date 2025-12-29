<script setup lang="ts">
import type { TransliterationRule } from "#shared/transliteration";
import ResultTextarea from "~/components/transliterate/ResultTextarea.vue";

const currentRule = ref<TransliterationRule>({
  id: 'iso9_1995',
  name: 'ISO 9:1995',
  desc: 'International one-to-one Cyrillic–Latin transliteration standard'
});

const rules = ref<TransliterationRule[]>([
  {
    id: 'iso9_1995',
    name: 'ISO 9:1995',
    desc: 'International one-to-one Cyrillic–Latin transliteration standard'
  },
  {
    id: 'gost7_79_2000b',
    name: 'GOST 7.79B',
    desc: 'Simplified Cyrillic–Latin transliteration system'
  },
  {
    id: 'mylu_style',
    name: 'Mylu Style',
    desc: 'Mylu\'s Cyrillic–Latin transliteration rules'
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
</script>

<template>
  <div>
    <OriginalTextarea v-model="originalText" label="Cyrillic Text" id="cyrillic-textarea" />
    <div class="flex items-center justify-between px-8px">
      <ActionButtonGroup direction="down" @copy="copyResultText" @clear="clearResultText" />
      <div class="flex w-full px-4px">
        <RuleSelector v-model="currentRule" :rules="rules" />
      </div>
      <ActionButtonGroup direction="up" @copy="copyOriginalText" @clear="clearOriginalText" />
    </div>
    <ResultTextarea :result="resultText" />
  </div>
</template>

<style scoped>

</style>