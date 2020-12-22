import ZCheckbox from '../../src/components/ZCheckbox'
import Vue from 'vue'

import { createLocalVue, mount, Wrapper } from '@vue/test-utils'

describe('Checkbox Component', () => {
  let mountFn: (options?: object) => Wrapper<Vue>
  let localVue: typeof Vue

  beforeEach(() => {
    mountFn = (options = {}) => {
      return mount(ZCheckbox, {
        localVue,
        ...options
      })
    }
  })

  it('renders the checkbox component', () => {
    const wrapper = mountFn()

    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.classes().includes('z-input__checkbox')).toBe(true)
  })

  it('renders a disabled checkbox component when disabled prop is passed', () => {
    const wrapper = mountFn({
      propsData: {
        disabled: true
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.classes().includes('is-disabled')).toBe(true)
  })

  it('renders a pre-selected checkbox when the value is passed as checked', () => {
    const wrapper = mountFn({
      propsData: {
        value: 'icecream',
        label: 'Icecreams'
      }
    })
    wrapper.setData({ selectedValue: true })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
