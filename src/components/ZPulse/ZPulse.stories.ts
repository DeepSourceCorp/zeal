import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'
import ZPulse from './ZPulse.vue'

export default {
  title: 'Pulse Indicator',
  component: ZPulse,
  excludeStories: /.*Data$/
}

export const BasicPulse = () => ({
  components: { ZPulse },
  template: `<div>
      <z-pulse></z-pulse>
    </div>`
})

export const PulseWithColor = () => ({
  components: { ZPulse },
  template: `<div class="flex gap-2">
      <z-pulse color="cherry"></z-pulse>
      <z-pulse color="honey"></z-pulse>
      <z-pulse color="aqua"></z-pulse>
      <z-pulse color="slate"></z-pulse>
      <z-pulse color="robin"></z-pulse>
    </div>`
})

export const PulseWithSizes = () => ({
  components: { ZPulse },
  template: `<div class="flex flex-col gap-3">
      <div class="flex gap-2">
        <z-pulse size="small" color="cherry"></z-pulse>
        <z-pulse size="small" color="honey"></z-pulse>
        <z-pulse size="small" color="aqua"></z-pulse>
        <z-pulse size="small" color="slate"></z-pulse>
        <z-pulse size="small" color="robin"></z-pulse>
      </div>
      <div class="flex gap-2">
        <z-pulse color="cherry"></z-pulse>
        <z-pulse color="honey"></z-pulse>
        <z-pulse color="aqua"></z-pulse>
        <z-pulse color="slate"></z-pulse>
        <z-pulse color="robin"></z-pulse>
      </div>
      <div class="flex gap-2">
        <z-pulse size="large" color="cherry"></z-pulse>
        <z-pulse size="large" color="honey"></z-pulse>
        <z-pulse size="large" color="aqua"></z-pulse>
        <z-pulse size="large" color="slate"></z-pulse>
        <z-pulse size="large" color="robin"></z-pulse>
      </div>
    </div>`
})
