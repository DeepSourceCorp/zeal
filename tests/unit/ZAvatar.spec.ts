import Vue from 'vue'
import { createLocalVue, mount, Wrapper } from '@vue/test-utils'

import ZAvatar from '../../src/components/ZAvatar'

describe('Avatar component', () => {
  let mountFunction: (options?: Record<string, unknown>) => Wrapper<Vue>
  let localVue: typeof Vue
  beforeEach(() => {
    localVue = createLocalVue()
    mountFunction = (options = {}) => {
      return mount(ZAvatar, {
        localVue,
        ...options
      })
    }
  })
  it('renders an avatar when the component is mounted', () => {
    expect(
      mountFunction({
        propsData: {
          userName: 'John Doe'
        }
      }).html()
    ).toMatchSnapshot()
  })

  it('renders root element as a link for avatar with no props', () => {
    let mountedInstance = mountFunction({
      propsData: {
        userName: 'John Doe'
      }
    })
    expect(mountedInstance.html()).toMatchSnapshot()
    expect(mountedInstance.find('a').exists()).toBe(true)
  })

  it('renders root element as a span for avatar with type prop `span`', () => {
    let mountedInstance = mountFunction({
      propsData: {
        type: 'span',
        userName: 'John Doe'
      }
    })
    expect(mountedInstance.html()).toMatchSnapshot()
    expect(mountedInstance.find('span').exists()).toBe(true)
  })

  it('renders avatar with skeleton gradient background when loading is true', () => {
    let mountedInstance = mountFunction({
      propsData: {
        loading: true,
        userName: 'John Doe'
      }
    })
    expect(mountedInstance.html()).toMatchSnapshot()
    expect(mountedInstance.find('.bg-gradient-skeleton').exists()).toBe(true)
  })

  it('renders avatar correctly, when image is not given', () => {
    let mountedInstance = mountFunction({
      propsData: {
        userName: 'John Doe'
      }
    })
    expect(mountedInstance.html()).toMatchSnapshot()
    const spanElement = mountedInstance.find('span.rounded-full')
    expect(spanElement.exists()).toBe(true)
    expect(spanElement.text()).toContain('JD')
  })

  it('renders avatar correctly, when image is given', () => {
    let mountedInstance = mountFunction({
      propsData: {
        userName: 'John Doe',
        image: 'https://example.com/some.jpg'
      }
    })
    expect(mountedInstance.html()).toMatchSnapshot()
    const imageElement = mountedInstance.find('img.rounded-full')
    expect(imageElement.exists()).toBe(true)
    expect(imageElement.attributes().src).toEqual('https://example.com/some.jpg')
    expect(imageElement.attributes().alt).toEqual('John Doe')
  })

  it('renders fallback image', () => {
    let mountedInstance = mountFunction({
      propsData: {
        userName: 'John Doe',
        image: 'https://example.com/some.jpg',
        fallbackImage: 'https://example.com/fallback.jpg'
      }
    })
    expect(mountedInstance.html()).toMatchSnapshot()
    const imageElement = mountedInstance.find('img.rounded-full')
    imageElement.trigger('error')
    expect(imageElement.exists()).toBe(true)
    expect(imageElement.attributes().src).toEqual('https://example.com/fallback.jpg')
    expect(imageElement.attributes().alt).toEqual('John Doe')
  })

  it('renders avatar correctly, when size is given', () => {
    let mountedInstance = mountFunction({
      propsData: {
        userName: 'John Doe',
        size: 'sm'
      }
    })
    expect(mountedInstance.html()).toMatchSnapshot()
    const spanElement = mountedInstance.find('span.rounded-full')
    expect(spanElement.exists()).toBe(true)
    expect(spanElement.attributes().class).toContain('leading-none h-6 w-6 text-xs')
  })
})
