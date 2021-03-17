import ZTicker from '../../src/components/ZTicker'

import { shallowMount } from '@vue/test-utils'

describe('Ticker', () => {
  it('renders a default ticker', () => {
    const wrapper = shallowMount(ZTicker)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders a negative type ticker', () => {
    const wrapper = shallowMount(ZTicker, {
      propsData: {
        type: 'decrease',
        value: '44%'
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders a ticker with additional content', () => {
    const wrapper = shallowMount(ZTicker, {
      propsData: {
        type: 'decrease',
        value: '44%'
      },
      slots: { content: '<span class="text-sm">since last week</span>' }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
