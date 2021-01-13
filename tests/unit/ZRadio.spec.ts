import ZRadio from '../../src/components/ZRadio'
import Vue from 'vue'

import { mount, Wrapper } from '@vue/test-utils'

describe('Radio Button Component', () => {
  let mountFn: (options?: Record<string, unknown>) => Wrapper<Vue>
  let localVue: typeof Vue

  beforeEach(() => {
    mountFn = (options = {}) => {
      return mount(ZRadio, {
        localVue,
        ...options
      })
    }
  })

  it('renders the default radio component', () => {
    const wrapper = mountFn({
      propsData: {
        label: 'Hello'
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.findAll('input[type="radio"]').length).toEqual(1)
  })

  it('renders the checked radio component', () => {
    const wrapper = mountFn({
      propsData: {
        label: 'Female',
        modelValue: 'female',
        value: 'female'
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.findAll('.z-radio--inner span').length).toEqual(1)
  })
  it('renders the disabled radio component', () => {
    const wrapper = mountFn({
      propsData: {
        label: 'Female',
        value: 'female',
        disabled: true
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.findAll('input[disabled="disabled"]').length).toEqual(1)
  })
  it('renders a checked radio button disabled', () => {
    const wrapper = mountFn({
      propsData: {
        label: 'Female',
        value: 'female',
        disabled: true,
        modelValue: 'female'
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.findAll('input[disabled="disabled"]').length).toEqual(1)
    expect(wrapper.findAll('.z-radio--inner span').length).toEqual(1)
  })
})
