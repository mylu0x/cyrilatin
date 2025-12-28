<script setup lang="ts">
type Update = {
  date: string;
  content: string;
}

const updates: Update[] = [
  {
    date: 'December 28, 2025',
    content: 'Added the "Mylu Style" rule for Russian transliteration'
  },
  {
    date: 'December 28, 2025',
    content: 'Added updates section to the home page',
  }
]
</script>

<template>
  <div class="flex flex-col items-center justify-center w-full gap-16px">
    <div class="text-center my-32px">
      <p class="text-32px font-600 text-gray-8 leading-tight">Welcome!</p>
      <p class="text-gray-7 text-14px"><strong>Cyrilatin</strong> is a tool that converts characters into Latin letters.</p>
    </div>
    <div class="flex flex-col w-full px-24px b-t-(solid 1px gray-2) py-16px gap-6px">
      <div v-for="update in updates" class="flex items-center justify-between w-full gap-4px">
        <p class="font-600 text-gray-8 text-14px">{{ update.date }}</p>
        <p class="text-14px text-gray-7">{{ update.content }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
strong { @apply text-gray-8 font-600 }
</style>