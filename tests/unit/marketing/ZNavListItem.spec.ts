import Vue from 'vue'
import { createLocalVue, mount, Wrapper } from '@vue/test-utils'

import ZNavListItem from '../../../src/components/marketing/ZNavListItem'

describe('ZNavListItem component', () => {
  let mountFunction: (options?: Record<string, unknown>) => Wrapper<Vue>
  let localVue: typeof Vue
  beforeEach(() => {
    localVue = createLocalVue()
    mountFunction = (options = {}) => {
      return mount(ZNavListItem, {
        localVue,
        ...options
      })
    }
  })
  it('renders a ZNavListItem when the component is mounted', () => {
    expect(mountFunction().html()).toMatchSnapshot()
  })
})
