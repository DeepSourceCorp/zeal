import Vue from 'vue'
import { createLocalVue, mount, Wrapper } from '@vue/test-utils'

import ZPageLabel from '../../../src/components/marketing/ZPageLabel'

describe('Page Label component', () => {
  let mountFunction: (options?: object) => Wrapper<Vue>
  let localVue: typeof Vue
  beforeEach(() => {
    localVue = createLocalVue()
    mountFunction = (options = {}) => {
      return mount(ZPageLabel, {
        localVue,
        ...options
      })
    }
  })
  it('renders a page label when the component is mounted', () => {
    expect(mountFunction().html()).toMatchSnapshot()
  })

  it('renders a page label with the given text', () => {
    let mountedInstance = mountFunction({
      slots: {
        default: 'Guide'
      }
    })
    expect(mountedInstance.html()).toMatchSnapshot()
    expect(mountedInstance.text()).toContain('Guide')
  })

  it('renders a page label with default gradient background', () => {
    let mountedInstance = mountFunction({
      slots: {
        default: 'Guide'
      }
    })
    expect(mountedInstance.html()).toMatchSnapshot()
    expect(mountedInstance.classes()).toContain('bg-gradient-dawn')
  })
  it('renders a page label with custom background color', () => {
    let mountedInstance = mountFunction({
      propsData: {
        backgroundColor: 'ink-400'
      },
      slots: {
        default: 'Guide'
      }
    })
    expect(mountedInstance.html()).toMatchSnapshot()
    expect(mountedInstance.classes()).toContain('bg-ink-400')
  })

  it('renders a page label with default text color', () => {
    let mountedInstance = mountFunction({
      slots: {
        default: 'Guide'
      }
    })
    expect(mountedInstance.html()).toMatchSnapshot()
    expect(mountedInstance.classes()).toContain('text-vanilla-100')
  })
  it('renders a page label with custom text color', () => {
    let mountedInstance = mountFunction({
      propsData: {
        textColor: 'slate'
      },
      slots: {
        default: 'Guide'
      }
    })
    expect(mountedInstance.html()).toMatchSnapshot()
    expect(mountedInstance.classes()).toContain('text-slate')
  })
})
