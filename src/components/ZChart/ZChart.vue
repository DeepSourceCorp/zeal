<template>
  <div class="z-chart-wrapper w-full" :ref="wrapperName"></div>
</template>
<script lang="ts">
import Vue from 'vue'
import baseColors from '@/helpers/tailwind/colors'

// https://frappe.io/charts/docs
import { Chart } from '@deepsource/charts/dist/frappe-charts.esm.js'
import { shortenLargeNumber } from '@/helpers/components/utils'

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

export interface Region {
  label: string
  start: number
  end: number
  options?: Record<string, string>
}

export interface ChartData {
  labels: Array<string>
  datasets: Array<DataItem>
  yMarkers?: Array<Marker>
  yRegions?: Array<Region>
}

export interface ChartInterface {
  type: string
  update: (data: ChartData) => void
  addDataPoint: (label: string, valueFromEachDataset: Array<number> | number, index: number) => void
  removeDataPoint: (index: number) => void
  destroy: () => void
}

const DEFAULT_LINE_OPTIONS = {
  dotSize: 4,
  hideLine: 0,
  showDots: 0,
  trailingDot: 1,
  hideDotBorder: true,
  heatline: 0,
  regionFill: 1,
  areaFill: 0,
  spline: 0
}

const DEFAULT_AXIS_OPTIONS = {
  yAxisMode: '',
  xAxisMode: 'tick',
  shortenYAxisNumbers: true,
  xIsSeries: 0
}

export default Vue.extend({
  name: 'ZChart',
  props: {
    dataSets: {
      required: true,
      type: Array
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
    yAxisMin: {
      required: false,
      default: undefined,
      type: Number
    },
    yAxisMax: {
      required: false,
      default: undefined,
      type: Number
    },
    type: {
      type: String,
      default: 'axis-mixed',
      validator: function(value: string): boolean {
        return ['bar', 'line', 'percentage', 'heatmap', 'donut', 'pie', 'axis-mixed'].includes(value)
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
    yRegions: {
      required: false,
      type: Array,
      default: () => null
    },
    colors: {
      required: false,
      type: Array,
      default: () => ['robin', 'cherry', 'aqua', 'honey', 'juniper', 'lilac', 'pink', 'sea-glass', 'robin']
    },
    lineOptions: {
      required: false,
      type: Object,
      default: () => DEFAULT_LINE_OPTIONS
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
      default: () => DEFAULT_AXIS_OPTIONS
    },
    maxLegendPoints: {
      required: false,
      type: Number,
      default: 8
    },
    showLegend: {
      required: false,
      type: Boolean,
      default: false
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
    },
    animate: {
      required: false,
      default: false,
      type: Boolean
    },
    humanizeTooltips: {
      default: true,
      type: Boolean
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
    chartData: {
      handler: function() {
        this.updateChart()
      }
      // deep: true
    }
  },
  methods: {
    initChart() {
      this.chart = new Chart(this.$refs[this.wrapperName], {
        ...this.chartData
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
          yMarkers: this.yMarkers ? this.markers : undefined,
          yRegions: this.yRegions ? this.regions : undefined
        })
      }, 100)
    },
    addDataPoint(label: string, valueFromEachDataset: Array<number> | number, index: number) {
      this.chart && this.chart.addDataPoint(label, valueFromEachDataset, index)
    },
    removeDataPoint(index: number) {
      this.chart && this.chart.removeDataPoint(index)
    },
    getThemeColors(config: Record<string, string | Record<string, string>>, prefix = ''): Record<string, string> {
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
        return (this.colors as Array<string>).map(token => {
          return this.themeColors[token] || token
        })
      }
      return []
    },
    /** @return {Array<Marker>} */
    markers(): Array<Marker> {
      return (this.yMarkers as Array<Marker>).map(marker => {
        if (!marker.options) {
          marker.options = {}
        }
        marker.options.lineType = marker.options.lineType ?? 'solid'
        if (marker.options.stroke && marker.options.stroke in this.themeColors) {
          marker.options.stroke = this.themeColors[marker.options.stroke]
        }
        return marker
      })
    },
    regions(): Array<Region> {
      return (this.yRegions as Array<Region>).map(region => {
        if (!region.options) {
          region.options = {}
        }

        const color = region.options.fill in this.themeColors ? region.options.fill : 'ink-300'
        region.options.fill = this.themeColors[color]
        region.options.stroke = this.themeColors[color]
        console.log(region.options)

        return region
      })
    },
    chartType(): string {
      return this.type
    },
    humanizedTooltips() {
      if (!this.humanizeTooltips) {
        return this.tooltipOptions
      }
      const tooltipFunctions = ['formatTooltipX', 'formatTooltipY']
      const shortenIfNumber = (value: string | number) =>
        Number.isNaN(Number(value)) ? value : shortenLargeNumber(value)
      const humanizedTooltipOptions = {}

      tooltipFunctions.forEach(key => {
        // ? Check if `tooltipOptions` is an truthy and functions exist within
        this.tooltipOptions && typeof this.tooltipOptions[key] === 'function'
          ? (humanizedTooltipOptions[key] = (d: string | number, ...args: unknown[]) => {
              // ? If a tooltip method is already provided, run it and then shorten if possible
              const value = this.tooltipOptions[key](d, ...args) as string | number
              return shortenIfNumber(value)
            })
          : // ? If a tooltip method is not provided, shorten if possible
            (humanizedTooltipOptions[key] = (d: string | number) => shortenIfNumber(d))
      })

      return this.tooltipOptions ? { ...this.tooltipOptions, ...humanizedTooltipOptions } : humanizedTooltipOptions
    },
    chartData() {
      return {
        // @ts-expect-error - ref https://github.com/vuejs/vetur/issues/1707#issuecomment-686851677
        type: this.chartType,
        // @ts-expect-error - ref https://github.com/vuejs/vetur/issues/1707#issuecomment-686851677
        colors: this.palette,
        height: this.height,
        title: this.title,
        data: {
          labels: this.labels,
          datasets: this.dataSets,
          // @ts-expect-error - ref https://github.com/vuejs/vetur/issues/1707#issuecomment-686851677
          yMarkers: this.yMarkers ? this.markers : undefined,
          // @ts-expect-error - ref https://github.com/vuejs/vetur/issues/1707#issuecomment-686851677
          yRegions: this.yRegions ? this.regions : undefined
        },
        // @ts-expect-error - ref https://github.com/vuejs/vetur/issues/1707#issuecomment-686851677
        tooltipOptions: this.humanizedTooltips,
        barOptions: this.barOptions,
        lineOptions: Object.assign(DEFAULT_LINE_OPTIONS, this.lineOptions),
        axisOptions: {
          ...Object.assign(DEFAULT_AXIS_OPTIONS, this.axisOptions),
          yAxisRange: {
            min: this.yAxisMin,
            max: this.yAxisMax
          }
        },
        maxSlices: this.maxSlices,
        showLegend: this.showLegend,
        animate: this.animate,
        disableEntryAnimation: !this.animate,
        maxLegendPoints: this.maxLegendPoints
      }
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
