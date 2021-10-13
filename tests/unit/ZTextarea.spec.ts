import ZTextarea from '../../src/components/ZTextarea'
import ZButton from '../../src/components/ZButton'
import Vue from 'vue'

import { mount, Wrapper } from '@vue/test-utils'

const CopyButton = {
  template: `<z-button buttonType="secondary" icon="copy" iconSize="small"></z-button>`,
  components: {
    ZButton
  }
}

describe('Textarea Component', () => {
  let mountFn: (options?: Record<string, unknown>) => Wrapper<Vue>
  let localVue: typeof Vue

  beforeEach(() => {
    mountFn = (options = {}) => {
      return mount(ZTextarea, {
        localVue,
        ...options
      })
    }
  })

  it('renders the default textarea component', () => {
    const wrapper = mountFn()

    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.findAll('textarea').length).toEqual(1)
  })

  it('renders a disabled textarea', () => {
    const wrapper = mountFn({
      propsData: {
        disabled: true
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('textarea').attributes('disabled')).toMatch('disabled')
  })
  it('renders a textarea with right slot', () => {
    const wrapper = mountFn({
      slots: {
        default: CopyButton
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders a textarea with maxLength of 60', () => {
    const wrapper = mountFn({
      propsData: {
        maxLength: 60
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('textarea').attributes('maxlength')).toMatch('60')
  })
})
