import Vue from 'vue'
import { createLocalVue, mount, Wrapper } from '@vue/test-utils'

import ZFooterList from '../../../src/components/marketing/ZFooterList'

describe('ZFooterList component', () => {
  let mountFunction: (options?: Record<string, unknown>) => Wrapper<Vue>
  let localVue: typeof Vue
  beforeEach(() => {
    localVue = createLocalVue()
    mountFunction = (options = {}) => {
      return mount(ZFooterList, {
        localVue,
        ...options
      })
    }
  })
  it('renders a ZFooterList when the component is mounted', () => {
    expect(mountFunction().html()).toMatchSnapshot()
  })
  it('renders a ZFooterList with horizontal arrangement', () => {
    let mountedInstance = mountFunction({
      propsData: {
        arrange: 'horizontal'
      }
    })
    expect(mountedInstance.html()).toMatchSnapshot()
    expect(mountedInstance.html()).toContain('flex flex-wrap')
  })
  it('renders a ZFooterList when type is accordion', () => {
    let mountedInstance = mountFunction({
      propsData: {
        type: 'accordion'
      },
      slots: {
        heading: 'Dummy title',
        default: ['Something']
      }
    })
    expect(mountedInstance.html()).toMatchSnapshot()
    expect(mountedInstance.html()).toContain('chevron-right')
    expect(mountedInstance.text()).toContain('Something')
  })
  it('renders a ZFooterList when type is none', () => {
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
