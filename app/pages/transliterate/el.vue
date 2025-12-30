<script setup lang="ts">
import type { TransliterationRuleMetadata } from "#shared/types/transliteration";

const currentRule = ref<TransliterationRuleMetadata>({
  id: 'iso843_1997',
  name: 'ISO 843:1997',
  desc: 'International one-to-one Greek–Latin transliteration standard'
});

const rules = ref<TransliterationRuleMetadata[]>([
  {
    id: 'iso843_1997',
    name: 'ISO 843:1997',
    desc: 'International one-to-one Greek–Latin transliteration standard'
  }
]);

const originalText = ref<string>('');
const resultText = computed(() => useTransliterateEl(currentRule.value.id, originalText.value));

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
    <OriginalTextarea v-model="originalText" label="Greek Text" id="greek-textarea" placeholder="Γεια σας, πώς είστε;" />
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