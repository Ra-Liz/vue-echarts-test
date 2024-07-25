<template>
  <div class="w-screen h-screen">
    <EchartsPage />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import EchartsPage from './views/EchartsPage.vue'

onMounted(() => {
  console.log('app mounted')
})
</script>
