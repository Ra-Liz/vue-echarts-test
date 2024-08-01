<template>
  <div class="w-full h-full" ref="container"></div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import * as echarts from 'echarts'

const container = ref(null)
let myChart = null

const initChart = () => {
  if (container.value) {
    myChart = echarts.init(container.value)
    setChart()
  }
}

const setChart = () => {
  if (myChart) {
    const option = {
      title: {
        text: '简简单单折线图',
        left: 'center',
        top: 10
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        // XD
        // boundaryGap: false
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'line',
          smooth: true,
          // 这个属性有意思
          emphasis: {
            focus: 'series'
          }
        },
        {
          data: [90, 180, 160, 100, 90, 130, 120],
          type: 'line',
          smooth: true,
          emphasis: {
            focus: 'series'
          }
        }
      ]
    }

    myChart.setOption(option)
  }
}

onMounted(() => {
  nextTick(() => {
    if (container.value) {
      initChart()
      container.value.addEventListener('resize', () => myChart.resize())
    }
  })
})

onBeforeUnmount(() => {
  if (myChart) {
    myChart.dispose()
  }
  if (container.value) {
    container.value.removeEventListener('resize', () => myChart.resize())
  }
})
</script>
