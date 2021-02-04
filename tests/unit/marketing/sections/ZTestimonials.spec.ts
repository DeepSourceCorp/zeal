import Vue from 'vue'
import { createLocalVue, mount, Wrapper } from '@vue/test-utils'

import ZTestimonials from '../../../../src/components/marketing/sections/ZTestimonials'

const testimonials = [
  {
    customer: 'Dgraph',
    text:
      'DeepSource actually helped us resolve more than 50 bugs, which has made the code base much more stable and dependable. It allowed us to identify many more areas for improvement.',
    author: 'Piero Molino, Senior Technology Officer',
    image: { color: 'https://i.imgur.com/ISsHpNY.png', bnw: 'https://i.imgur.com/ISsHpNY.png' },
    url: ''
  },
  {
    customer: 'Intel',
    text:
      'DeepSource actually helped us resolve more than 50 bugs, which has made the code base much more stable and dependable. It allowed us to identify many more areas for improvement.',
    author: 'Piero Molino, Senior Technology Officer',
    image: { color: 'https://i.imgur.com/oqlV3mB.png', bnw: 'https://i.imgur.com/oqlV3mB.png' },
    url: ''
  },
  {
    customer: 'Qubole',
    text:
      'DeepSource actually helped us resolve more than 50 bugs, which has made the code base much more stable and dependable. It allowed us to identify many more areas for improvement.',
    author: 'Piero Molino, Senior Technology Officer',
    image: { color: 'https://i.imgur.com/ISsHpNY.png', bnw: 'https://i.imgur.com/ISsHpNY.png' },
    url: ''
  },
  {
    customer: 'Okteto',
    text:
      'DeepSource actually helped us resolve more than 50 bugs, which has made the code base much more stable and dependable. It allowed us to identify many more areas for improvement.',
    author: 'Piero Molino, Senior Technology Officer',
    image: { color: 'https://i.imgur.com/oqlV3mB.png', bnw: 'https://i.imgur.com/oqlV3mB.png' },
    url: ''
  },
  {
    customer: 'Slack1',
    text:
      'DeepSource actually helped us resolve more than 50 bugs, which has made the code base much more stable and dependable. It allowed us to identify many more areas for improvement.',
    author: 'Piero Molino, Senior Technology Officer',
    image: { color: 'https://i.imgur.com/ifq7pvm.png', bnw: 'https://i.imgur.com/ifq7pvm.png' },
    url: ''
  },
  {
    customer: 'Slack2',
    text:
      'DeepSource actually helped us resolve more than 50 bugs, which has made the code base much more stable and dependable. It allowed us to identify many more areas for improvement.',
    author: 'Piero Molino, Senior Technology Officer',
    image: { color: 'https://i.imgur.com/ifq7pvm.png', bnw: 'https://i.imgur.com/ifq7pvm.png' },
    url: ''
  }
]

describe('Testimonials section', () => {
  let mountFunction: (options?: Record<string, unknown>) => Wrapper<Vue>
  let localVue: typeof Vue
  beforeEach(() => {
    localVue = createLocalVue()
    mountFunction = (options = {}) => {
      return mount(ZTestimonials, {
        localVue,
        ...options
      })
    }
  })
  it('renders testimonials section when the component is mounted', () => {
    let mountedInstance = mountFunction({
      propsData: {
        testimonials
      }
    })
    expect(mountedInstance.html()).toMatchSnapshot()
  })

  it('renders testimonials section heading when given in slot', () => {
    let mountedInstance = mountFunction({
      propsData: {
        testimonials
      },
      slots: {
        heading: 'This is heading'
      }
    })
    expect(mountedInstance.text()).toContain('This is heading')
  })

  it('renders six testimonial logos but renders one testimonial card', () => {
    let mountedInstance = mountFunction({
      propsData: {
        testimonials
      }
    })
    expect(mountedInstance.findAll('.z-testimonials__logo').length).toEqual(6)
    expect(mountedInstance.findAll('.bg-ink-300').length).toEqual(6)
    expect(mountedInstance.findAll('.block.animate-fadeIn').length).toEqual(1)
  })
})
