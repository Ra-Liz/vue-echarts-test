<template>
  <div class="w-full h-full" ref="container"></div>
</template>

<script setup>
import * as echarts from 'echarts'
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

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
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '10',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          padAngle: 5,
          itemStyle: {
            borderRadius: 10
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ]
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

      container.value.addEventListener('resize', () => {
        if (myChart) {
          myChart.resize()
        }
      })
    }
  })
})

onBeforeUnmount(() => {
  if (myChart) {
    myChart.dispose()
  }
  container.value.removeEventListener('resize', () => {
    if (myChart) {
      myChart.resize()
    }
  })
})
</script>
