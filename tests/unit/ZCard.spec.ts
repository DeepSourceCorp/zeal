import ZCard from '../../src/components/ZCard'
import Vue from 'vue'

import { createLocalVue, mount, Wrapper } from '@vue/test-utils'

describe('Card Component', () => {
  let mountFn: (options?: Record<string, unknown>) => Wrapper<Vue>
  let localVue: typeof Vue

  beforeEach(() => {
    mountFn = (options = {}) => {
      return mount(ZCard, {
        localVue,
        ...options
      })
    }
  })

  it('renders a Card component with Header, Body and Footer named slots', () => {
    const wrapper = mountFn({
      slots: {
        header:
          '<img src="https://www.kindpng.com/picc/m/4-46830_chris-evans-png-transparent-png.png" class="w-full block object-fill">',
        body:
          '<p>"DeepSource has made the code base <span class="text-juniper">much more stable and dependable</span>. It allowed us to identify many more areas for improvement."</p>',
        footer: '<p class="font-medium block">Chris Evans</p>'
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
