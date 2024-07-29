<template>
  <div class="w-full h-full">
    <h1 class="text-3xl text-black">Test 2</h1>
    <div ref="containerRef" class="w-1/2 h-1/2 rounded bg-blue-300"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import * as echarts from 'echarts'

let myChart: echarts.ECharts | null = null
const containerRef = ref<HTMLDivElement | null>(null)

const originYear: number = 2020
const years: number = 10
const cnt: number = 7
const legendData: string[] = ['trend']
const xAxisData: string[] = []
const customData: any[] = []
const encodeY: any = []
const dataList: any = []

for (let i = 0; i < cnt; i++) {
  legendData.push(`${originYear + i}`)
  dataList.push([])
  encodeY.push(1 + i)
}

for (let i = 0; i < years; i++) {
  xAxisData.push('category' + i)

  const customVal = [i]
  customData.push(customVal)

  let val = Math.random() * 1000
  for (let j = 0; j < dataList.length; j++) {
    let value =
      j === 0
        ? echarts.number.round(val, 2)
        : echarts.number.round(Math.max(0, dataList[j - 1][i] + (Math.random() - 0.5) * 200), 2)
    dataList[j].push(value)
    customVal.push(value)
  }
}

const initChart = () => {
  if (containerRef.value) {
    myChart = echarts.init(containerRef.value)
    setChartOptions()
  }
}

const setChartOptions = async () => {
  if (myChart) {
    const options = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: legendData
      },
      dataZoom: [
        {
          type: 'slider',
          start: 50,
          end: 70
        },
        {
          type: 'inside',
          start: 50,
          end: 70
        }
      ],
      xAxis: {
        type: 'category',
        data: xAxisData
      },
      yAxis: {},
      series: [
        {
          name: 'trend',
          type: 'custom',
          renderItem: (params: any, api: any) => {
            let xValue = api.value(0)
            let currentSeriesIndices = api.currentSeriesIndices()
            let barLayout = api.barLayout({
              barGap: '30%',
              barCategoryGap: '20%',
              count: currentSeriesIndices.length - 1
            })
            let points = []

            for (let i = 0; i < currentSeriesIndices.length; i++) {
              let seriesIndex = currentSeriesIndices[i]
              if (seriesIndex !== params.seriesIndex) {
                let point = api.coord([xValue, api.value(seriesIndex)])
                point[0] += barLayout[i - 1].offsetCenter
                point[1] -= 20
                points.push(point)
              }
            }

            let style = api.style({
              stroke: api.visual('color'),
              fill: 'none'
            })
            return {
              type: 'polyline',
              shape: {
                points: points
              },
              style: style
            }
          },
          data: customData,
          encode: {
            x: 0,
            y: encodeY
          },
          z: 100
        },
        ...dataList.map((data: any, index: any) => {
          return {
            type: 'bar',
            animation: false,
            name: legendData[index + 1],
            data: data
          }
        })
      ]
    }

    myChart.setOption(options)
  }
}

onMounted(() => {
  nextTick(() => {
    if (containerRef.value) {
      console.log(containerRef.value)
      initChart()
    }
  })
})
</script>
