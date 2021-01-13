import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'
import ZRadio from './ZRadio.vue'

export default {
  title: 'Form Inputs and Controls: Radio Button',
  component: ZRadio,
  excludeStories: /.*Data$/
}

export const DefaultRadio = () => ({
  components: { ZRadio },
  data() {
    return {
      modelValue: ''
    }
  },
  template: `<div class='padded-container'>
            <div class="input-container">
                <z-radio value="female" v-model="modelValue" label="Female"></z-radio>
                <z-radio value="male" v-model="modelValue" label="Male"></z-radio>
            </div>
        </div>`
})

export const CheckedRadioButton = () => ({
  components: { ZRadio },
  data() {
    return {
      modelValue: 'female'
    }
  },
  template: `<div class='padded-container'>
            <div class="input-container">
                <z-radio value="female" v-model="modelValue" label="Female"></z-radio>
                <z-radio value="male" v-model="modelValue" label="Male"></z-radio>
            </div>
        </div>`
})

export const DisabledRadioButton = () => ({
  components: { ZRadio },
  data() {
    return {
      modelValue: 'female'
    }
  },
  template: `<div class='padded-container'>
            <div class="input-container">
                <z-radio value="female" v-model="modelValue" label="Female"></z-radio>
                <z-radio value="male" v-model="modelValue" label="Male" :disabled="true"></z-radio>
            </div>
        </div>`
})

export const DisabledCheckedRadioButton = () => ({
  components: { ZRadio },
  data() {
    return {
      modelValue: 'female'
    }
  },
  template: `<div class='padded-container'>
            <div class="input-container">
                <z-radio value="female" v-model="modelValue" label="Female"></z-radio>
                <z-radio value="male" v-model="modelValue" label="Male"></z-radio>
            </div>
        </div>`
})
