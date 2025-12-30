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
      <div class="text-14px w-full flex flex-col gap-4px">
        <NavbarTransliterateLink text="Russian" icon="circle-flags:lang-ru" to="/transliterate/ru" />
        <NavbarTransliterateLink text="Ukrainian" icon="circle-flags:lang-uk" to="/transliterate/uk" />
        <NavbarTransliterateLink text="Greek" icon="circle-flags:lang-el" to="/transliterate/el" />
        <NavbarTransliterateLink text="Georgian" icon="circle-flags:lang-ka" to="/transliterate/ka" />
        <NavbarTransliterateLink text="Armenian" icon="circle-flags:lang-hy" to="/transliterate/hy" />
      </div>
    </NavbarSection>
  </div>
</template>

<style scoped>

</style>