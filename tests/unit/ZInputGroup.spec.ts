import { createLocalVue, mount, Wrapper } from '@vue/test-utils'
import Vue from 'vue'

import ZInputGroup from '../../src/components/ZInputGroup'

describe('InputGroup Component', () => {
  const localVue = createLocalVue()

  const mountFn = (options = {}) => {
    return mount(ZInputGroup, {
      localVue,
      stubs: {
        ZInput: true
      },
      ...options
    })
  }

  it('renders an input element with addon', () => {
    const wrapper = mountFn({
      propsData: {
        prefix: 'text-prefix'
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders an input element with addon having a different background color', () => {
    const wrapper = mountFn({
      propsData: {
        prefix: 'text-prefix',
        addonBgColor: 'bg-juniper'
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('accepts fallthrough attributes', () => {
    const wrapper = mountFn({
      propsData: {
        prefix: 'text-prefix',
        size: 'small'
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
