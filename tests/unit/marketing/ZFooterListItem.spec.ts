import Vue from 'vue'
import { createLocalVue, mount, Wrapper } from '@vue/test-utils'

import ZFooterListItem from '../../../src/components/marketing/ZFooterListItem'

describe('ZFooterListItem component', () => {
  let mountFunction: (options?: Record<string, unknown>) => Wrapper<Vue>
  let localVue: typeof Vue
  beforeEach(() => {
    localVue = createLocalVue()
    mountFunction = (options = {}) => {
      return mount(ZFooterListItem, {
        localVue,
        ...options
      })
    }
  })
  it('renders a ZFooterListItem when the component is mounted', () => {
    expect(mountFunction().html()).toMatchSnapshot()
  })
})
