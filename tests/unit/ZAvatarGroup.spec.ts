import Vue from 'vue'
import { createLocalVue, mount, Wrapper } from '@vue/test-utils'

import ZAvatarGroup from '../../src/components/ZAvatarGroup'
import ZAvatar from '../../src/components/ZAvatar'

describe('Avatar Group component', () => {
  let mountFunction: (options?: Record<string, string | object>) => Wrapper<Vue>
  let localVue: typeof Vue
  beforeEach(() => {
    localVue = createLocalVue()
    mountFunction = (options = {}) => {
      return mount(ZAvatarGroup, {
        localVue,
        ...options
      })
    }
  })

  it('renders an avatar group when the component is mounted', () => {
    expect(mountFunction({}).html()).toMatchSnapshot()
  })

  it('renders avatar group', () => {
    let mountedInstance = mountFunction({
      components: {
        ZAvatar
      },
      slots: {
        default: [
          `<z-avatar
            user-name="Akshay Paliwal"
          ></z-avatar>`,
          `<z-avatar
            user-name="Akshay Paliwal"
          ></z-avatar>`,
          `<z-avatar
            user-name="Akshay Paliwal"
          ></z-avatar>`,
          `<z-avatar
            user-name="Akshay Paliwal"
          ></z-avatar>`
        ]
      }
    })
    expect(mountedInstance.html()).toMatchSnapshot()
    expect(mountedInstance.findAll('span.rounded-full').length).toEqual(4)
  })

  it('renders avatar group with size', () => {
    let mountedInstance = mountFunction({
      components: {
        ZAvatar
      },
      propsData: {
        size: 'sm'
      },
      slots: {
        default: [
          `
            <z-avatar
              user-name="Akshay Paliwal"
            ></z-avatar>
            <z-avatar
              user-name="Snoop Dogg"
            ></z-avatar>
            <z-avatar
              user-name="Akshay Paliwal"
            ></z-avatar>
            <z-avatar
              user-name="Akshay Paliwal"
            ></z-avatar>
            <z-avatar
              user-name="Akshay Paliwal"
            ></z-avatar>
          `
        ]
      }
    })
    expect(mountedInstance.html()).toMatchSnapshot()
    expect(mountedInstance.findAll('.leading-none.h-6.w-6.text-xs').length).toEqual(5)
  })
})
