<script setup lang="ts">
import type { TransliterationRuleMetadata } from "#shared/types/transliteration";

const currentRule = ref<TransliterationRuleMetadata>({
  id: 'iso9_1995',
  name: 'ISO 9:1995',
  desc: 'International one-to-one Cyrillic–Latin transliteration standard'
});

const rules = ref<TransliterationRuleMetadata[]>([
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
const resultText = computed(() => useTransliterateRu(currentRule.value.id, originalText.value));

function copy(text?: string) {
  if (!text) return;
  navigator.clipboard.writeText(text);
}

function clear() {
  originalText.value = '';
}
</script>

<template>
  <div>
    <OriginalTextarea v-model="originalText" label="Cyrillic Text" id="cyrillic-textarea" placeholder="Привет, как дела?" />
    <div class="flex items-center justify-between px-8px">
      <ActionButtonGroup direction="down" @copy="copy(resultText)" @clear="clear" />
      <div class="flex w-full px-4px">
        <RuleSelector v-model="currentRule" :rules="rules" />
      </div>
      <ActionButtonGroup direction="up" @copy="copy(originalText)" @clear="clear" />
    </div>
    <ResultTextarea :result="resultText" />
  </div>
</template>

<style scoped>

</style>