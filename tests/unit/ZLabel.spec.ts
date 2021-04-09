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
      slots: slotData
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders with state', () => {
    expect(
      shallowMount(ZLabel, {
        propsData: {
          state: 'success'
        },
        slots: slotData
      }).html()
    ).toMatchSnapshot()

    expect(
      shallowMount(ZLabel, {
        propsData: {
          state: 'error'
        },
        slots: slotData
      }).html()
    ).toMatchSnapshot()

    expect(
      shallowMount(ZLabel, {
        propsData: {
          state: 'warning'
        },
        slots: slotData
      }).html()
    ).toMatchSnapshot()

    expect(
      shallowMount(ZLabel, {
        propsData: {
          state: 'info'
        },
        slots: slotData
      }).html()
    ).toMatchSnapshot()
  })

  it('renders with size', () => {
    expect(
      shallowMount(ZLabel, {
        propsData: {
          size: 'base'
        },
        slots: slotData
      }).html()
    ).toMatchSnapshot()

    expect(
      shallowMount(ZLabel, {
        propsData: {
          size: 'large'
        },
        slots: slotData
      }).html()
    ).toMatchSnapshot()
  })
})
