import Vue from 'vue'
import { createLocalVue, mount, Wrapper } from '@vue/test-utils'

import ZCustomers from '../../../../src/components/marketing/sections/ZCustomers'

const customers = [
  {
    title: 'Slack1',
    slug: 'Slack1',
    image: 'https://i.imgur.com/mu7Vh6o.png',
    url: ''
  },
  {
    title: 'Slack2',
    slug: 'Slack2',
    image: 'https://i.imgur.com/BxxXp7v.png',
    url: ''
  },
  {
    title: 'Nasa',
    slug: 'Nasa',
    image: 'https://i.imgur.com/46V02HC.png',
    url: ''
  },
  {
    title: 'Sas',
    slug: 'Sas',
    image: 'https://i.imgur.com/v7zouKN.png',
    url: ''
  },
  {
    title: 'Dgraph',
    slug: 'Dgraph',
    image: 'https://i.imgur.com/ZJBUi4D.png',
    url: ''
  },
  {
    title: 'Qubole',
    slug: 'Qubole',
    image: 'https://i.imgur.com/O9bfIqK.png',
    url: ''
  },
  {
    title: 'Intel',
    slug: 'Intel',
    image: 'https://i.imgur.com/4uKLbka.png',
    url: ''
  },
  {
    title: 'Okteto',
    slug: 'Okteto',
    image: 'https://i.imgur.com/9gqeCeh.png',
    url: ''
  }
]

describe('Customers section', () => {
  let mountFunction: (options?: Record<string, unknown>) => Wrapper<Vue>
  let localVue: typeof Vue
  beforeEach(() => {
    localVue = createLocalVue()
    mountFunction = (options = {}) => {
      return mount(ZCustomers, {
        localVue,
        ...options
      })
    }
  })
  it('renders customers section when the component is mounted', () => {
    let mountedInstance = mountFunction({
      propsData: {
        customers
      }
    })
    expect(mountedInstance.html()).toMatchSnapshot()
  })

  it('renders the heading correctly', () => {
    let mountedInstance = mountFunction({
      propsData: {
        customers
      },
      slots: {
        heading: 'This is heading'
      }
    })
    expect(mountedInstance.text()).toContain('This is heading')
  })

  it('renders eight logos', () => {
    let mountedInstance = mountFunction({
      propsData: {
        customers
      }
    })
    expect(mountedInstance.findAll('span.border-b').length).toEqual(8)
  })

  it('renders every logo, except the fourth logo, with right border', () => {
    let mountedInstance = mountFunction({
      propsData: {
        customers
      }
    })
    expect(mountedInstance.findAll('span.border-b').at(0).classes('border-r')).toBe(true)
    expect(mountedInstance.findAll('span.border-b').at(3).classes('border-r')).toBe(false)
  })
})
