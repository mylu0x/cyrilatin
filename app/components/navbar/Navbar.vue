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
      <p class="text-12px font-500 text-gray-8 flex items-center justify-center gap-4px"><Icon name="circle-flags:ru" /> Russian</p>
      <div class="text-14px w-full mt-2px">
        <NuxtLink to="/ru/iso9" class="flex items-center justify-center rounded-8px font-500 py-3px w-full hover:bg-gray-2 transition-all-50">ISO-9</NuxtLink>
      </div>
    </NavbarSection>
  </div>
</template>

<style scoped>

</style>