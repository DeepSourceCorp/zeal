import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'
import '../../assets/css/chart.css'
import ZChart from './ZChart.vue'

const issueData = {
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
      values: Array.from({ length: 12 }, () => Math.floor(10 + Math.random() * 80))
    },
    {
      name: 'Resolved Issues',
      values: Array.from({ length: 12 }, () => Math.floor(10 + Math.random() * 75))
    }
  ],
  yMarkers: [{ label: 'Threshold', value: 75, options: { labelPos: 'right', stroke: 'cherry' } }]
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
      dataSets: issueData.datasets,
      labels: issueData.labels,
      yMarkers: issueData.yMarkers
    }
  },
  template: `<div class="padding-container">
    <z-chart :dataSets="dataSets" :labels="labels" :yMarkers=yMarkers type="line" :yAxisMax="100" :yAxisMin="0"></z-chart>
  </div>`
})

export const CustomColors = () => ({
  components: { ZChart },
  data() {
    return {
      dataSets: issueData.datasets,
      labels: issueData.labels,
      yMarkers: issueData.yMarkers
    }
  },
  template: `<div class="padding-container">
    <z-chart :dataSets="dataSets" :labels="labels" :yMarkers=yMarkers type="line" :colors="['ink-200', 'vanilla-400']"></z-chart>
  </div>`
})

export const BarChart = () => ({
  components: { ZChart },
  data() {
    return {
      dataSets: issueData.datasets,
      labels: issueData.labels,
      yMarkers: issueData.yMarkers
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
      dataSets: issueData.datasets,
      labels: issueData.labels,
      yMarkers: issueData.yMarkers
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
      dataSets: issueData.datasets,
      labels: issueData.labels,
      yMarkers: issueData.yMarkers
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
      dataSets: issueData.datasets,
      labels: issueData.labels,
      yMarkers: issueData.yMarkers
    }
  },
  template: `<div class="padding-container">
    <z-chart :dataSets="dataSets" :labels="labels" :yMarkers=yMarkers type="percentage"></z-chart>
  </div>`
})
