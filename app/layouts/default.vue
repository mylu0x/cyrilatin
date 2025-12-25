<script setup lang="ts">

</script>

<template>
  <div class="layout flex w-screen h-screen bg-gray-50 justify-center py-256px gap-8px">
    <div>
      <Navbar />
    </div>
    <div class="w-500px h-300px bg-white rounded-16px b-(solid 1px gray-2) p-12px shadow-sm outline-(solid 1px gray-1 3px)">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.layout {
  background-image: radial-gradient(#dddddd 1px, transparent 1px);
  background-size: 32px 32px;
}
</style>