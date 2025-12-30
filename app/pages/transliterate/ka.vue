<script setup lang="ts">
import type { TransliterationRuleMetadata } from "#shared/types/transliteration";

const currentRule = ref<TransliterationRuleMetadata>({
  id: 'iso9984_1996',
  name: 'ISO 9984',
  desc: 'International Georgian–Latin transliteration standard'
});

const rules = ref<TransliterationRuleMetadata[]>([
  {
    id: 'iso9984_1996',
    name: 'ISO 9984',
    desc: 'International Georgian–Latin transliteration standard'
  }
]);

const originalText = ref<string>('');
const resultText = computed(() => useTransliterateKa(currentRule.value.id, originalText.value));

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
    <OriginalTextarea v-model="originalText" label="Georgian Text" id="georgian-textarea" placeholder="გამარჯობა, როგორ ხარ?" />
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