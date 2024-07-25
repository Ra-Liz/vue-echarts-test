<template>
  <div class="w-full h-full bg-white flex">
    <div class="w-1/6 h-full border-r-2 border-blue-200 rounded">
      <VList width="100%" height="100%">
        <VListItem>
          <RouterLink to="/test1" active-class="text-blue-500">自定义饼图吟唱</RouterLink>
        </VListItem>
        <VListItem>
          <RouterLink to="/test2" active-class="text-blue-500">test2</RouterLink>
        </VListItem>
      </VList>
    </div>
    <div class="flex-1 f-full">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { VList, VListItem } from 'vuetify/lib/components/index.mjs'
</script>
