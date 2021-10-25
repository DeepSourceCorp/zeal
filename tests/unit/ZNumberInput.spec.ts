import ZNumberInput from '../../src/components/ZNumberInput'

import { mount } from '@vue/test-utils'

const BasicTab = {
  template: `
    <div class="container space-y-5 text-vanilla-100">
      <z-number-input v-model="inputNum" class="w-28" />
      <div class="mt-2">Number: {{ inputNum }}</div>
    </div>
  `,
  components: {
    ZNumberInput
  },
  data() {
    return {
      inputNum: 0
    }
  }
}

describe('ZNumberInput', () => {
  it('renders a number input and two buttons', async () => {
    const wrapper = mount(BasicTab)

    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.findAll('input').length).toEqual(1)
    expect(wrapper.findAll('button').length).toEqual(2)
  })
})
