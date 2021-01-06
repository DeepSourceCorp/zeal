import ZDivider from '../../src/components/ZDivider'
import Vue from 'vue'

import { createLocalVue, mount, Wrapper } from '@vue/test-utils'

describe('ZDivider', () => {
  let mountFn: (options?: Record<string, unknown>) => Wrapper<Vue>
  let localVue: typeof Vue

  beforeEach(() => {
    mountFn = (options = {}) => {
      return mount(ZDivider, {
        localVue,
        ...options
      })
    }
  })

  it('renders the component', () => {
    const wrapper = mountFn()

    expect(wrapper.html()).toMatchSnapshot()
  })

  it.only('renders a vertical divider', () => {
    const wrapper = mountFn({
      propsData: {
        direction: 'vertical'
      }
    })

    expect(wrapper.classes()).toContain('z-divider--vertical')
    expect(wrapper.html()).toMatchSnapshot()
  })
})
