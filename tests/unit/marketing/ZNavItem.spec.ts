import Vue from 'vue'
import { createLocalVue, mount, Wrapper } from '@vue/test-utils'

import ZNavItem from '../../../src/components/marketing/ZNavItem'

describe('NavItem component', () => {
  let mountFunction: (options?: Record<string, unknown>) => Wrapper<Vue>
  let localVue: typeof Vue
  beforeEach(() => {
    localVue = createLocalVue()
    mountFunction = (options = {}) => {
      return mount(ZNavItem, {
        localVue,
        ...options
      })
    }
  })
  it('renders a ZNavItem when the component is mounted', () => {
    expect(mountFunction().html()).toMatchSnapshot()
  })
})
