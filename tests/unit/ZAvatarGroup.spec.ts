import { createLocalVue, mount, Wrapper } from '@vue/test-utils'
import Vue from 'vue'
import { VueConstructor } from 'vue/types/umd'

import ZAvatar from '../../src/components/ZAvatar'
import ZAvatarGroup from '../../src/components/ZAvatarGroup'

describe('Avatar Group component', () => {
  const sizes = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl']

  const localVue: VueConstructor<Vue> = createLocalVue()
  const mountFunction: (options?: Record<string, unknown>) => Wrapper<Vue> = (options = {}) => {
    return mount(ZAvatarGroup, {
      localVue,
      ...options
    })
  }

  it('renders an avatar group when the component is mounted', () => {
    expect(mountFunction({}).html()).toMatchSnapshot()
  })

  it('renders avatar group', () => {
    const mountedInstance = mountFunction({
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

  it.each(sizes)('renders avatar group with the size `%s`', size => {
    const mountedInstance = mountFunction({
      components: {
        ZAvatar
      },
      propsData: {
        size
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
  })
})
