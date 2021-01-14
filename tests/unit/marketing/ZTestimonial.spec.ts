import Vue from 'vue'
import { createLocalVue, mount, Wrapper } from '@vue/test-utils'

import ZTestimonial from '../../../src/components/marketing/ZTestimonial'

describe('Testimonial component', () => {
  let mountFunction: (options?: Record<string, unknown>) => Wrapper<Vue>
  let localVue: typeof Vue
  beforeEach(() => {
    localVue = createLocalVue()
    mountFunction = (options = {}) => {
      return mount(ZTestimonial, {
        localVue,
        ...options
      })
    }
  })
  it('renders a testimonial card when the component is mounted', () => {
    expect(mountFunction().html()).toMatchSnapshot()
  })

  it('renders slots only when they are available', () => {
    let mountedInstance = mountFunction({
      slots: {
        image: ['<img id="image">']
      }
    })
    expect(mountFunction().html()).toMatchSnapshot()
    expect(mountedInstance.findAll('#image').length).toEqual(1)
    expect(mountedInstance.findAll('#body').length).toEqual(0)
    expect(mountedInstance.findAll('#footer').length).toEqual(0)

    mountedInstance = mountFunction({
      slots: {
        image: ['<img id="image">'],
        body: ['<img id="body">'],
        footer: ['<img id="footer">']
      }
    })
    expect(mountedInstance.findAll('#image').length).toEqual(1)
    expect(mountedInstance.findAll('#body').length).toEqual(1)
    expect(mountedInstance.findAll('#footer').length).toEqual(1)
  })
})
