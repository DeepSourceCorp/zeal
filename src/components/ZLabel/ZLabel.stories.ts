import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'
import ZLabel from './ZLabel.vue'

export default {
  title: 'Label',
  component: ZLabel,
  excludeStories: /.*Data$/
}

export const BasicLabels = () => ({
  components: { ZLabel },
  template: `<div class="padded-container flex gap-3 items-end">
      <z-label state="success">Analysis Active</z-label>
      <z-label state="error">Analysis Errored</z-label>
      <z-label state="warning">Analysis Incomplete</z-label>
      <z-label >Analysis Inactive</z-label>
    </div>`
})

export const LabelSuccess = () => ({
  components: { ZLabel },
  template: `<div class="padded-container flex gap-3 items-end">
      <z-label size="small" state="success" icon="check-circle">Analysis Active</z-label>
      <z-label size="base" state="success" icon="check-circle">Analysis Active</z-label>
      <z-label size="large" state="success" icon="check-circle">Analysis Active</z-label>
    </div>`
})

export const LabelError = () => ({
  components: { ZLabel },
  template: `<div class="padded-container flex gap-3 items-end">
      <z-label size="small" state="error" icon="x-circle">Analysis Errored</z-label>
      <z-label size="base" state="error" icon="x-circle">Analysis Errored</z-label>
      <z-label size="large" state="error" icon="x-circle">Analysis Errored</z-label>
    </div>`
})

export const LabelWarning = () => ({
  components: { ZLabel },
  template: `<div class="padded-container flex gap-3 items-end">
      <z-label size="small" state="warning" icon="minus-circle">Analysis Incomplete</z-label>
      <z-label size="base" state="warning" icon="minus-circle">Analysis Incomplete</z-label>
      <z-label size="large" state="warning" icon="minus-circle">Analysis Incomplete</z-label>
    </div>`
})

export const LabelDefault = () => ({
  components: { ZLabel },
  template: `<div class="padded-container flex gap-3 items-end">
      <z-label size="small" icon="circle">Analysis Inactive</z-label>
      <z-label size="base" icon="circle">Analysis Inactive</z-label>
      <z-label size="large" icon="circle">Analysis Inactive</z-label>
    </div>`
})
