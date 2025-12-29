<script setup lang="ts">
import type { NuxtError } from '#app';
const props = defineProps<{ error: NuxtError }>();
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col items-center text-center leading-tight py-24px">
      <h1 class="text-48px text-red-6 font-700">{{ error.statusCode }}</h1>
      <p class="text-gray-8">{{ error.statusMessage }}</p>
      <NuxtLink to="/" class="my-6px text-blue-6 hover:underline">Go back home</NuxtLink>
    </div>
  </NuxtLayout>
</template>
