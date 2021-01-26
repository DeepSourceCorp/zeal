import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'
import ZRadioGroup from '../ZRadioGroup/ZRadioGroup.vue'
import ZRadio from './ZRadio.vue'

export default {
  title: 'Form Inputs and Controls: Radio Button',
  component: ZRadio,
  excludeStories: /.*Data$/
}

export const DefaultRadio = () => ({
  components: { ZRadioGroup, ZRadio },
  data() {
    return {
      modelValue: ''
    }
  },
  template: `<div class='padded-container'>
            <div class="input-container">
                <z-radio-group v-model="modelValue">
                    <z-radio value="female" label="Female"></z-radio>
                    <z-radio value="male" label="Male"></z-radio>
                </z-radio-group>
            </div>
        </div>`
})

export const CheckedRadioButton = () => ({
  components: { ZRadioGroup, ZRadio },
  data() {
    return {
      modelValue: 'female'
    }
  },
  template: `<div class='padded-container'>
            <div class="input-container">
                <z-radio-group v-model="modelValue" class="flex flex-col gap-2">
                    <z-radio value="female" label="Female"></z-radio>
                    <z-radio value="male" label="Male"></z-radio>
                </z-radio-group>
            </div>
        </div>`
})

export const DisabledRadioButton = () => ({
  components: { ZRadioGroup, ZRadio },
  data() {
    return {
      modelValue: ''
    }
  },
  template: `<div class='padded-container'>
            <div class="input-container">
                <z-radio-group v-model="modelValue" :disabled="true" class="flex flex-col gap-2">
                    <z-radio value="female" label="Female"></z-radio>
                    <z-radio value="male" label="Male"></z-radio>
                </z-radio-group>
            </div>
        </div>`
})

export const DisabledCheckedRadioButton = () => ({
  components: { ZRadioGroup, ZRadio },
  data() {
    return {
      modelValue: 'female'
    }
  },
  template: `<div class='padded-container'>
            <div class="input-container">
                <z-radio-group v-model="modelValue" :disabled="true" class="flex space-x-4">
                    <z-radio value="female" label="Female"></z-radio>
                    <z-radio value="male" label="Male"></z-radio>
                </z-radio-group>
            </div>
        </div>`
})
