import Vue from 'vue'
import { createLocalVue, mount, Wrapper } from '@vue/test-utils'

import ZFooter from '../../../src/components/marketing/ZFooter'

describe('ZFooterList component', () => {
  let mountFunction: (options?: Record<string, unknown>) => Wrapper<Vue>
  let localVue: typeof Vue
  beforeEach(() => {
    localVue = createLocalVue()
    mountFunction = (options = {}) => {
      return mount(ZFooter, {
        localVue,
        ...options
      })
    }
  })
  it('renders a ZFooter when the component is mounted', () => {
    expect(mountFunction().html()).toMatchSnapshot()
  })
  it('renders a ZFooter with proper container size', () => {
    let mountedInstance = mountFunction({
      propsData: {
        container: 'md'
      }
    })
    expect(mountedInstance.html()).toMatchSnapshot()
    expect(mountedInstance.html()).toContain('lg:max-w-6xl')
  })
})
