import ZInput from '../../src/components/ZInput'
import Vue from 'vue'

import { mount, Wrapper } from '@vue/test-utils'

describe('Input Component', () => {
  let mountFn: (options?: Record<string, unknown>) => Wrapper<Vue>
  let localVue: typeof Vue

  beforeEach(() => {
    mountFn = (options = {}) => {
      return mount(ZInput, {
        localVue,
        ...options
      })
    }
  })

  it('renders the default input component', () => {
    const wrapper = mountFn()

    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.findAll('input').length).toEqual(1)
  })
  it('renders the input with custom placeholder', () => {
    const wrapper = mountFn({
      propsData: {
        placeholder: 'captain@marvel.com'
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('input').attributes('placeholder')).toMatch('captain@marvel.com')
  })
  it('renders a disabled input', () => {
    const wrapper = mountFn({
      propsData: {
        disabled: true
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('input').attributes('disabled')).toMatch('disabled')
  })
  it('renders an input with clearable', () => {
    const wrapper = mountFn({
      propsData: {
        clearable: true
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.findAll('.z-icon--x').length).toEqual(1)
  })
})
