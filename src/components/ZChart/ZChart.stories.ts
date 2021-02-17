import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'
import '../../assets/css/chart.css'
import ZChart from './ZChart.vue'

const financialData = {
  labels: [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
  ],
  datasets: [
    {
      name: 'Active Issues',
      values: Array.from({ length: 12 }, () => Math.floor(4000 + Math.random() * 10000))
    },
    {
      name: 'Resolved Issues',
      values: Array.from({ length: 12 }, () => Math.floor(Math.random() * 4000))
    }
  ],
  yMarkers: [{ label: 'Threshold', value: 6000, options: { labelPos: 'right', stroke: '#23C4F8' } }]
}

export default {
  title: 'Charts',
  component: ZChart,
  excludeStories: /.*Data$/
}

export const LineChart = () => ({
  components: { ZChart },
  data() {
    return {
      dataSets: financialData.datasets,
      labels: financialData.labels,
      yMarkers: financialData.yMarkers
    }
  },
  template: `<div class="padding-container">
    <z-chart :dataSets="dataSets" :labels="labels" :yMarkers=yMarkers type="line"></z-chart>
  </div>`
})

export const BarChart = () => ({
  components: { ZChart },
  data() {
    return {
      dataSets: financialData.datasets,
      labels: financialData.labels,
      yMarkers: financialData.yMarkers
    }
  },
  template: `<div class="padding-container">
    <z-chart :dataSets="dataSets" :labels="labels" :yMarkers=yMarkers type="bar"></z-chart>
  </div>`
})

export const DonutChart = () => ({
  components: { ZChart },
  data() {
    return {
      dataSets: financialData.datasets,
      labels: financialData.labels,
      yMarkers: financialData.yMarkers
    }
  },
  template: `<div class="padding-container">
    <z-chart :dataSets="dataSets" :labels="labels" :yMarkers=yMarkers type="donut"></z-chart>
  </div>`
})

export const PieChart = () => ({
  components: { ZChart },
  data() {
    return {
      dataSets: financialData.datasets,
      labels: financialData.labels,
      yMarkers: financialData.yMarkers
    }
  },
  template: `<div class="padding-container">
    <z-chart :dataSets="dataSets" :labels="labels" :yMarkers=yMarkers type="pie"></z-chart>
  </div>`
})

export const PercentageChart = () => ({
  components: { ZChart },
  data() {
    return {
      dataSets: financialData.datasets,
      labels: financialData.labels,
      yMarkers: financialData.yMarkers
    }
  },
  template: `<div class="padding-container">
    <z-chart :dataSets="dataSets" :labels="labels" :yMarkers=yMarkers type="percentage"></z-chart>
  </div>`
})
