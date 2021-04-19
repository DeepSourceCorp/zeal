import Vue from 'vue'
import { createLocalVue, mount, Wrapper } from '@vue/test-utils'

import ZNavMenu from '../../../src/components/marketing/ZNavMenu'

describe('ZNavMenu component', () => {
  let mountFunction: (options?: Record<string, unknown>) => Wrapper<Vue>
  let localVue: typeof Vue
  beforeEach(() => {
    localVue = createLocalVue()
    mountFunction = (options = {}) => {
      return mount(ZNavMenu, {
        localVue,
        ...options
      })
    }
  })
  it('renders a ZNavMenu when the component is mounted', () => {
    let mountedInstance = mountFunction({
      propsData: {
        title: 'Dummy title'
      }
    })
    expect(mountedInstance.html()).toMatchSnapshot()
  })
  it('when type is dropdown', () => {
    let mountedInstance = mountFunction({
      propsData: {
        title: 'Dummy title',
        type: 'dropdown'
      },
      slots: {
        default: ['Something']
      }
    })
    expect(mountedInstance.html()).toMatchSnapshot()
    expect(mountedInstance.html()).toContain('absolute')
    expect(mountedInstance.text()).toContain('Something')
  })
  it('when type is accordion', () => {
    let mountedInstance = mountFunction({
      propsData: {
        title: 'Dummy title',
        type: 'accordion'
      },
      slots: {
        default: ['Something']
      }
    })
    expect(mountedInstance.html()).toContain('chevron-down')
    expect(mountedInstance.text()).toContain('Something')
  })
  it('when type is none', () => {
    let mountedInstance = mountFunction({
      propsData: {
        title: 'Dummy title'
      },
      slots: {
        default: ['Something']
      }
    })
    expect(mountedInstance.html()).toMatchSnapshot()
    expect(mountedInstance.html()).toContain('Dummy title')
    expect(mountedInstance.text()).toContain('Something')
  })
})
