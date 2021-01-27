import Vue from 'vue'
import { createLocalVue, mount, Wrapper } from '@vue/test-utils'

import ZNav from '../../../src/components/marketing/ZNav'

describe('ZNavList component', () => {
  let mountFunction: (options?: Record<string, unknown>) => Wrapper<Vue>
  let localVue: typeof Vue
  beforeEach(() => {
    localVue = createLocalVue()
    mountFunction = (options = {}) => {
      return mount(ZNav, {
        localVue,
        ...options
      })
    }
  })
  it('renders a ZNav when the component is mounted', () => {
    expect(mountFunction().html()).toMatchSnapshot()
  })
  it('renders a ZNav with proper container size', () => {
    let mountedInstance = mountFunction({
      propsData: {
        container: 'md'
      }
    })
    expect(mountedInstance.html()).toMatchSnapshot()
    expect(mountedInstance.html()).toContain('lg:max-w-6xl')
  })
  it('renders a ZNav with proper menu alignment', () => {
    let mountedInstance = mountFunction({
      propsData: {
        menuAlign: 'right'
      }
    })
    expect(mountedInstance.html()).toMatchSnapshot()
    expect(mountedInstance.html()).toContain('justify-end')
  })
  it('renders a ZNav with drawer to toggle', async () => {
    let mountedInstance = mountFunction({
      propsData: {
        menuAlign: 'right'
      }
    })
    expect(mountedInstance.html()).toMatchSnapshot()
    await mountedInstance.find('.lg\\:hidden.cursor-pointer').trigger('click')
    expect(mountedInstance.html()).toContain('translate-x-0')
  })
})
