import ZLabel from '../../src/components/ZLabel'

import { shallowMount } from '@vue/test-utils'

const slotData = {
  default: 'Hello World'
}

describe('Labels', () => {
  it('renders without icon', () => {
    const wrapper = shallowMount(ZLabel, {
      slots: slotData
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders with icon', () => {
    const wrapper = shallowMount(ZLabel, {
      propsData: {
        icon: 'check-circle'
      },
      slots: slotData
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders with state', () => {
    expect(
      shallowMount(ZLabel, {
        propsData: {
          icon: 'check-circle',
          state: 'success'
        },
        slots: slotData
      }).html()
    ).toMatchSnapshot()

    expect(
      shallowMount(ZLabel, {
        propsData: {
          icon: 'check-circle',
          state: 'error'
        },
        slots: slotData
      }).html()
    ).toMatchSnapshot()

    expect(
      shallowMount(ZLabel, {
        propsData: {
          icon: 'check-circle',
          state: 'warning'
        },
        slots: slotData
      }).html()
    ).toMatchSnapshot()

    expect(
      shallowMount(ZLabel, {
        propsData: {
          icon: 'check-circle',
          state: 'default'
        },
        slots: slotData
      }).html()
    ).toMatchSnapshot()
  })

  it('renders with size', () => {
    expect(
      shallowMount(ZLabel, {
        propsData: {
          icon: 'check-circle',
          size: 'small'
        },
        slots: slotData
      }).html()
    ).toMatchSnapshot()

    expect(
      shallowMount(ZLabel, {
        propsData: {
          icon: 'check-circle',
          size: 'base'
        },
        slots: slotData
      }).html()
    ).toMatchSnapshot()

    expect(
      shallowMount(ZLabel, {
        propsData: {
          icon: 'check-circle',
          size: 'large'
        },
        slots: slotData
      }).html()
    ).toMatchSnapshot()
  })
})
