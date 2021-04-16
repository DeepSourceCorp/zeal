<template>
  <div class="z-chart-wrapper w-full" :ref="wrapperName"></div>
</template>
<script lang="ts">
import Vue from 'vue'
import baseColors from '@/helpers/tailwind/colors'

// https://frappe.io/charts/docs
import { Chart } from 'frappe-charts/dist/frappe-charts.esm.js'

let updateTimer: ReturnType<typeof setTimeout>

export interface DataItem {
  values: Array<number>
  name: string
  type?: string
}

export interface Marker {
  label: string
  value: number
  options?: Record<string, string>
}

export interface ChartData {
  labels: Array<string>
  datasets: Array<DataItem>
  yMarkers?: Array<Marker>
}

export interface ChartInterface {
  type: string
  update: (data: ChartData) => void
  addDataPoint: (label: string, valueFromEachDataset: Array<number> | number, index: number) => void
  removeDataPoint: (index: number) => void
  destroy: () => void
}

export default Vue.extend({
  name: 'ZChart',
  props: {
    dataSets: {
      required: true,
      type: Object
    },
    labels: {
      required: false,
      type: Array,
      default: () => []
    },
    title: {
      required: false,
      default: null,
      type: String
    },
    type: {
      type: String,
      default: 'axis-mixed',
      validator: function(value: string): boolean {
        return ['bar', 'line', 'percentage', 'heatmap', 'donut', 'pie', 'axis-mixed'].includes(
          value
        )
      }
    },
    height: {
      type: Number,
      default: 300
    },
    yMarkers: {
      required: false,
      type: Array,
      default: () => null
    },
    colors: {
      required: false,
      type: Array,
      default: () => ['honey', 'juniper', 'aqua', 'cherry', 'lilac', 'pink', 'sea-glass', 'robin']
    },
    lineOptions: {
      required: false,
      type: Object,
      default: () => {
        return {
          dotSize: 4,
          hideLine: 0,
          hideDots: 1,
          heatline: 0,
          regionFill: 1,
          areaFill: 0,
          spline: 1
        }
      }
    },
    barOptions: {
      required: false,
      type: Object,
      default: () => {
        return {
          spaceRatio: 0.5,
          stacked: 0
        }
      }
    },
    axisOptions: {
      required: false,
      type: Object,
      default: () => {
        return {
          yAxisMode: '',
          xAxisMode: 'tick',
          shortenYAxisNumbers: true,
          xIsSeries: 0
        }
      }
    },
    maxLegendPoints: {
      required: false,
      type: Number,
      default: 8
    },
    maxSlices: {
      required: false,
      type: Number,
      default: 12
    },
    tooltipOptions: {
      required: false,
      default: null,
      type: Object
    }
  },
  data() {
    return {
      wrapperName: 'chart-wrapper',
      chart: {} as ChartInterface,
      themeColors: {} as Record<string, string>
    }
  },
  created() {
    this.themeColors = this.getThemeColors(baseColors)
  },
  watch: {
    chartType() {
      this.initChart()
    },
    labels() {
      this.updateChart()
    },
    dataSets() {
      this.updateChart()
    },
    yMarkers() {
      this.updateChart()
    }
  },
  methods: {
    initChart() {
      const chartOptions = {
        data: {
          labels: this.labels,
          datasets: this.dataSets,
          yMarkers: this.yMarkers ? this.markers : undefined
        },
        tooltipOptions: this.tooltipOptions,
        barOptions: this.barOptions,
        lineOptions: this.lineOptions,
        axisOptions: this.axisOptions,
        maxSlices: this.maxSlices,
        maxLegendPoints: this.maxLegendPoints
      }
      this.chart = new Chart(this.$refs[this.wrapperName], {
        type: this.chartType,
        colors: this.palette,
        height: this.height,
        title: this.title,
        ...chartOptions
      }) as ChartInterface
    },
    updateChart() {
      if (updateTimer) {
        window.clearTimeout(updateTimer)
        updateTimer = 0
      }
      updateTimer = window.setTimeout(() => {
        this.chart.update({
          labels: this.labels as Array<string>,
          datasets: this.dataSets as Array<DataItem>,
          yMarkers: this.yMarkers ? this.markers : undefined
        })
      }, 100)
    },
    addDataPoint(label: string, valueFromEachDataset: Array<number> | number, index: number) {
      this.chart && this.chart.addDataPoint(label, valueFromEachDataset, index)
    },
    removeDataPoint(index: number) {
      this.chart && this.chart.removeDataPoint(index)
    },
    getThemeColors(
      config: Record<string, string | Record<string, string>>,
      prefix = ''
    ): Record<string, string> {
      const colors: Record<string, string> = {}
      Object.entries(config).forEach(([token, value]) => {
        if (typeof value === 'string') {
          colors[prefix + token] = value
        } else {
          Object.assign(colors, this.getThemeColors(value, `${token}-`))
        }
      })
      return colors
    }
  },
  computed: {
    palette(): Array<string> {
      if (this.colors) {
        return (this.colors as Array<string>).map(token => this.themeColors[token])
      }
      return []
    },
    markers(): Array<Marker> {
      return (this.yMarkers as Array<Marker>).map(marker => {
        if (!marker.options) {
          marker.options = {}
        }
        marker.options.lineType = 'solid'
        if (marker.options.stroke && marker.options.stroke in this.themeColors) {
          marker.options.stroke = this.themeColors[marker.options.stroke]
        }
        return marker
      })
    },
    chartType(): string {
      return this.type
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    this.chart?.destroy?.()
  }
})
</script>
