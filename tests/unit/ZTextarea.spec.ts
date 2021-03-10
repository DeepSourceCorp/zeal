import ZTextarea from '../../src/components/ZTextarea'
import ZButton from '../../src/components/ZButton'
import Vue from 'vue'

import { mount, Wrapper } from '@vue/test-utils'

const CopyButton = {
  template: `<z-button color="secondary" iconStyle="p-1" icon="copy" iconSize="small" iconColor="vanilla-100"></z-button>`,
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
        right: CopyButton
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
