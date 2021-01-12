import ZDivider from '../../src/components/ZDivider'
import Vue from 'vue'

import { mount, Wrapper } from '@vue/test-utils'

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

  it('renders a vertical divider', () => {
    const wrapper = mountFn({
      propsData: {
        direction: 'vertical'
      }
    })

    expect(wrapper.classes()).toContain('h-4')
    expect(wrapper.html()).toMatchSnapshot()
  })
})
