<template>
  <div class="w-full h-full" ref="container"></div>
</template>

<script setup>
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'

const container = ref(null)
// 好好好，严谨的let
let mychart = null

const initChart = () => {
  if (container.value) {
    mychart = echarts.init(container.value)
    setChart()
  }
}

const setChart = () => {
  if (mychart) {
    const option = {
      title: {
        text: '简简单单柱状图',
        left: 'center',
        top: 10,
        textStyle: {
          fontSize: 16
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [120, 200, 150, 80, 70, 110, 130],
          barWidth: 20,
          itemStyle: {
            borderRadius: [5, 5, 0, 0],
            color: '#3F74C2'
          }
        }
      ]
    }
    mychart.setOption(option)
  }
}

onMounted(() => {
  nextTick(() => {
    if (container.value) {
      initChart()
      container.value.addEventListener('resize', () => mychart.resize())
    }
  })
})

onBeforeUnmount(() => {
  if (mychart) {
    mychart.dispose()
  }
  if (container.value) {
    container.value.removeEventListener('resize', () => mychart.resize())
  }
})
</script>
