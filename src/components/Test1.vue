<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <button
      class="w-full h-20 rounded bg-blue-200 hover:bg-blue-400 text-2xl"
      @click="handleChangeData"
    >
      🖱️点击更新数据
    </button>
    <div id="chart" ref="chartContainer" class="w-full h-full bg-pink-200"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'

const fakeData = reactive([
  { value: 335, name: 'Direct' },
  { value: 310, name: 'Email' },
  { value: 274, name: 'Union Ads' },
  { value: 235, name: 'Video Ads' },
  { value: 400, name: 'Search Engine' }
])

const chartContainer = ref(null)
let myChart = null

const initChart = () => {
  if (chartContainer.value) {
    myChart = echarts.init(chartContainer.value)
    setChartOptions()
  }
}

const setChartOptions = () => {
  if (myChart) {
    const option = {
      // 这里可以配置背景色，当然也可以在容器声明
      backgroundColor: '#2c343c',
      title: {
        text: 'Customized Pie',
        left: 'center',
        top: 20,
        textStyle: {
          color: '#ccc'
        }
      },
      tooltip: {
        trigger: 'item'
      },
      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: fakeData.sort((a, b) => a.value - b.value),
          roseType: 'radius',
          label: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
          labelLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          },
          itemStyle: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: (idx) => Math.random() * 200
        }
      ]
    }
    myChart.setOption(option)
  }
}

const handleChangeData = () => {
  fakeData.forEach((item) => {
    item.value = Math.floor(Math.random() * 500)
  })
}

onMounted(() => {
  initChart()
  window.addEventListener('resize', () => myChart && myChart.resize())
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', () => myChart && myChart.resize())
  if (myChart) {
    myChart.dispose()
  }
})

watch(
  fakeData,
  () => {
    setChartOptions()
  },
  { deep: true }
)
</script>
