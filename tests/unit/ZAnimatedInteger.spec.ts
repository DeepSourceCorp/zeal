import Vue from 'vue'
import ZAnimatedInteger from '../../src/components/ZAnimatedInteger'
import ZButton from '../../src/components/ZButton'
import { mount } from '@vue/test-utils'

const AnimateInteger = Vue.extend({
  components: { ZAnimatedInteger, ZButton },
  data() {
    return {
      value: 42
    }
  },
  methods: {
    updateValue(value: number) {
      this.value = value
    }
  },
  template: `
    <div class='padded-container text-vanilla-100 space-y-4'>
      <div>
        <z-animated-integer id="finalValue" :value="value"></z-animated-integer>
      </div>
      <z-button color="primary" @click="updateValue">Randomize</z-button>
    </div>
    `
})

const randomValues = Array.from({ length: 5 }, () => {
  return Math.floor(Math.random() * (1000 - 0 + 1)) + 1000
})

describe('Animation', () => {
  test.each(randomValues)('updates to correct value', async val => {
    const wrapper = mount(AnimateInteger)

    wrapper.vm.updateValue(val)
    await new Promise(resolve =>
      setTimeout(() => {
        expect(wrapper.find('#finalValue').text()).toBe(`${val}`)
        resolve(val)
      }, 1000)
    )
  })
})
