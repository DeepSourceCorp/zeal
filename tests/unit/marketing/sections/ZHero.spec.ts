import Vue from 'vue'
import { createLocalVue, mount, shallowMount, Wrapper } from '@vue/test-utils'

import ZHero from '../../../../src/components/marketing/sections/ZHero'

describe('Customers section', () => {
  let mountFunction: (options?: Record<string, unknown>) => Wrapper<Vue>
  let localVue: typeof Vue
  beforeEach(() => {
    localVue = createLocalVue()
    mountFunction = (options = {}) => {
      return mount(ZHero, {
        localVue,
        ...options
      })
    }
  })
  it('renders hero section when the component is mounted', () => {
    let mountedInstance = mountFunction()
    expect(mountedInstance.html()).toMatchSnapshot()
  })

  it('renders the slots of hero section', () => {
    let mountedInstance = mountFunction({
      slots: {
        cta: '<span class="hero-cta">This is cta</span>',
        heading: '<span class="hero-heading">This is heading</span>',
        subheading: '<span class="hero-subheading">This is subheading</span>',
        illustration: '<span class="hero-illustration"><img src="https://www.tibco.com/blog/wp-content/uploads/2016/07/rsz_bigstock-electronic-devices-with-blank-81878129.jpg" /></span>'
      }
    })
    expect(mountedInstance.html()).toContain('hero-cta')
    expect(mountedInstance.html()).toContain('hero-heading')
    expect(mountedInstance.html()).toContain('hero-subheading')
    expect(mountedInstance.html()).toContain('hero-illustration')
  })
})
