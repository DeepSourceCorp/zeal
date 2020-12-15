import Vue from 'vue'
import { createLocalVue, mount, Wrapper, shallowMount } from '@vue/test-utils'

import ZButton from '../../src/components/ZButton'

describe('Button component', () => {
  let mountFunction: (options?: object) => Wrapper<Vue>
  let localVue: typeof Vue
  beforeEach(() => {
    localVue = createLocalVue()
    mountFunction = (options = {}) => {
      return mount(ZButton, {
        localVue,
        ...options
      })
    }
  })
  it('renders a button tag when the component is mounted', () => {
    expect(mountFunction().html()).toMatch(
      '<button type="button" class="z-btn z-btn--primary">Click</button>'
    )
  })
})
