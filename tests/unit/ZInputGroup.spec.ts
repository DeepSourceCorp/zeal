import { mount, Wrapper } from '@vue/test-utils'
import Vue from 'vue'

import ZInputGroup from '../../src/components/ZInputGroup'

describe('InputGroup Component', () => {
  let mountFn: (options?: Record<string, unknown>) => Wrapper<Vue>
  let localVue: typeof Vue

  beforeEach(() => {
    mountFn = (options = {}) => {
      return mount(ZInputGroup, {
        localVue,
        ...options
      })
    }
  })

  it('renders an input element with addon', () => {
    const wrapper = mountFn({
      propsData: {
        prefix: 'text-prefix'
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.findAll('input').length).toEqual(1)
  })

  it('renders an input element with addon having a different background color', () => {
    const wrapper = mountFn({
      propsData: {
        prefix: 'text-prefix',
        addonBgColor: 'bg-juniper'
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.findAll('input').length).toEqual(1)
  })
})
