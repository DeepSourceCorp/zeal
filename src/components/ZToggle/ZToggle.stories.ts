import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'
import ZToggle from '../ZToggle/ZToggle.vue'

export default {
  title: 'Form Inputs and Controls: Toggle Button',
  component: ZToggle,
  excludeStories: /.*Data$/
}

export const DefaultToggle = () => ({
  components: { ZToggle },
  data() {
    return {
      value: true
    }
  },

  template: `<div class='padded-container'>
            <div class="input-container p-4">
                <z-toggle :value="value"
                @input="() => this.value = !this.value"></z-toggle>
            </div>
        </div>`
})

export const DisabledToggle = () => ({
  components: { ZToggle },
  data() {
    return {
      value: false
    }
  },

  template: `<div class='padded-container'>
            <div class="input-container p-4">
                <z-toggle :value="value" :disabled="true"
                @input="() => this.value = !this.value"></z-toggle>
            </div>
        </div>`
})

export const DisabledTogglePreSelected = () => ({
  components: { ZToggle },
  data() {
    return {
      value: true
    }
  },

  template: `<div class='padded-container'>
            <div class="input-container p-4">
                <z-toggle :value="value" :disabled="true"
                @input="() => this.value = !this.value"></z-toggle>
            </div>
        </div>`
})
