import Vue from 'vue'
import { createLocalVue, mount, Wrapper } from '@vue/test-utils'

import ZNavList from '../../../src/components/marketing/ZNavList'

describe('ZNavList component', () => {
  let mountFunction: (options?: Record<string, unknown>) => Wrapper<Vue>
  let localVue: typeof Vue
  beforeEach(() => {
    localVue = createLocalVue()
    mountFunction = (options = {}) => {
      return mount(ZNavList, {
        localVue,
        ...options
      })
    }
  })
  it('renders a ZNavList when the component is mounted', () => {
    expect(mountFunction().html()).toMatchSnapshot()
  })
})
