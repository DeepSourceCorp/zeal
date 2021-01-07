import ZExpandable from '../../src/components/ZExpandable'
import Vue from 'vue'

import { mount, Wrapper } from '@vue/test-utils'

describe('ZExpandable', () => {
  let mountFn: (options?: object) => Wrapper<Vue>
  let localVue: typeof Vue

  beforeEach(() => {
    mountFn = (options = {}) => {
      return mount(ZExpandable, {
        localVue,
        ...options
      })
    }
  })

  it('renders the default expandable component', () => {
    const wrapper = mountFn({
      slots: {
        header: '<p>Non-iterable value used in an iterating context</p>',
        content: ` <p>
                    Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc uch as: design style, icons and texts, position of elements, etc uch as: design style, icons and texts, position of elements, etc.
                </p>`
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.classes()).toContain('z-expandable')
  })

  it('renders an expandable in an open state', () => {
    const wrapper = mountFn({
      propsData: {
        open: true
      },
      slots: {
        header: '<p>Non-iterable value used in an iterating context</p>',
        content: ` <p>
                    Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc uch as: design style, icons and texts, position of elements, etc uch as: design style, icons and texts, position of elements, etc.
                </p>`
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
