import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'

import Vue from 'vue'
import ZAnimatedInteger from './ZAnimatedInteger.vue'
import ZButton from '@/components/ZButton/ZButton.vue'

export default {
  title: 'Animated Integer',
  component: ZAnimatedInteger,
  excludeStories: /.*Data$/
}

export const BasicStepping = () => {
  return Vue.extend({
    components: { ZAnimatedInteger, ZButton },
    data() {
      return {
        value: 42
      }
    },
    methods: {
      updateValue() {
        this.value = Math.floor(Math.random() * 100)
      }
    },
    template: `
    <div class='padded-container text-vanilla-100 space-y-4'>
      <div>
        <z-animated-integer :value="value"></z-animated-integer>
      </div>
      <div class="diff">
        Expected value: {{ this.value }}
      </div>
      <z-button color="primary" @click="updateValue">Randomize</z-button>
    </div>
    `
  })
}

export const AnimationWithCustomFormat = () => {
  return Vue.extend({
    components: { ZAnimatedInteger, ZButton },
    data() {
      return {
        value: 42
      }
    },
    methods: {
      updateValue(): void {
        this.value = Math.floor(Math.random() * 100)
      },
      format(value: number) {
        return `${value}%`
      }
    },
    template: `
    <div class='padded-container text-vanilla-100 space-y-4'>
      <div>
        <z-animated-integer :value="value" :format="format"></z-animated-integer>
      </div>
      <div class="diff">
        Expected value: {{ this.value }}
      </div>
      <z-button color="primary" @click="updateValue">Randomize</z-button>
    </div>
    `
  })
}
