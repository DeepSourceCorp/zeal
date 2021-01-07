import ZIcon from '../../src/components/ZIcon'

import { shallowMount } from '@vue/test-utils'

describe('ZIcon', () => {
  it('renders an empty icon', () => {
    const wrapper = shallowMount(ZIcon)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders an icon when icon prop/name is passed', () => {
    const wrapper = shallowMount(ZIcon, {
      propsData: {
        icon: 'github'
      }
    })
    expect(wrapper.classes()).toContain(`z-icon--github`)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders a small icon when size prop is passed', () => {
    const wrapper = shallowMount(ZIcon, {
      propsData: {
        size: 'small',
        icon: 'github'
      }
    })
    expect(wrapper.classes()).toContain(`z-icon--small`)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
