<script setup lang="ts">

</script>

<template>
  <div class="layout flex w-screen h-screen bg-gray-50 justify-center pt-200px gap-8px max-md:flex-col">
    <div class="max-md:mx-16px">
      <Navbar />
    </div>
    <div>
      <div class="w-500px bg-white rounded-16px b-(solid 1px gray-2) p-12px shadow-sm outline-(solid 1px gray-1 3px) max-md:(w-auto mx-16px)">
        <slot />
      </div>
      <Footer />
    </div>

    <div class="absolute left-16px top-16px flex gap-4px">
      <a href="https://github.com/mylu0x/cyrilatin" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4px bg-white px-12px py-3px text-14px text-gray-8 rounded-10px b-(solid 1px gray-2) shadow-sm hover:bg-gray-1 transition-all-100">
        <Icon name="tabler:brand-github-filled" class="text-gray-7" />
        GitHub Repository
      </a>
    </div>
  </div>
</template>

<style scoped>
.layout {
  background-image: radial-gradient(#dddddd 1px, transparent 1px);
  background-size: 32px 32px;
}
</style>