import ZToggle from '../../src/components/ZToggle'

import { shallowMount } from '@vue/test-utils'

describe('Toggle', () => {
  it('renders a default toggle', () => {
    const wrapper = shallowMount(ZToggle, {
      propsData: {
        value: true
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders a default toggle in the off state', () => {
    const wrapper = shallowMount(ZToggle, {
      propsData: {
        value: false
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders a disabled toggle', () => {
    const wrapper = shallowMount(ZToggle, {
      propsData: {
        value: false,
        disabled: true
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders a disabled toggle with pre-selected value', () => {
    const wrapper = shallowMount(ZToggle, {
      propsData: {
        value: true,
        disabled: true
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
