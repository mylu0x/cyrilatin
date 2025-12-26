<script setup lang="ts">

</script>

<template>
  <div class="py-14px flex flex-col items-end gap-4px">
    <NavbarSection>
      <NuxtLink to="/" class="flex items-center w-full gap-4px px-18px py-3px bg-white b-(solid 1px gray-2) shadow-sm hover:bg-gray-50 transition-all-50 rounded-8px">
        <Icon name="tabler:home" class="text-gray-8" />
        <span class="text-gray-8 font-500 text-14px">Home</span>
      </NuxtLink>
    </NavbarSection>
    <NavbarSection>
      <div class="text-14px w-full">
        <NavbarTransliterateLink text="Russian" icon="circle-flags:ru" to="/transliterate/ru" />
      </div>
    </NavbarSection>
  </div>
</template>

<style scoped>

</style>