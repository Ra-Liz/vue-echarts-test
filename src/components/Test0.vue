<template>
  <div class="w-full h-full grid grid-cols-7 grid-rows-1 gap-2">
    <div class="col-span-2 grid grid-rows-3 grid-cols-1 gap-2">
      <div class="bg-blue-100">
        <Chart1 />
      </div>
      <div class="bg-blue-200">
        <Chart2 />
      </div>
      <div class="bg-blue-100">
        <Chart3 />
      </div>
    </div>
    <div class="col-span-3 flex flex-col items-center gap-2">
      <div class="w-full h-1/6 bg-pink-100">1</div>
      <div class="w-full flex-1 bg-pink-200">2</div>
    </div>
    <div class="col-span-2 grid grid-rows-3 grid-cols-1 gap-2">
      <div class="bg-blue-100">1</div>
      <div class="bg-blue-200">2</div>
      <div class="bg-blue-100">3</div>
    </div>
  </div>
</template>

<script setup>
import Chart1 from './basicCharts/Chart1.vue'
import Chart2 from './basicCharts/Chart2.vue'
import Chart3 from './basicCharts/Chart3.vue'
</script>
