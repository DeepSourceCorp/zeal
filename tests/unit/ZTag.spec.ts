import ZTag from '../../src/components/ZTag'

import { shallowMount } from '@vue/test-utils'

const slotData = {
  default: 'Tag'
}

describe('Tags', () => {
  it('renders a default tag', () => {
    const wrapper = shallowMount(ZTag, {
      slots: slotData
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders with left icon', () => {
    const wrapper = shallowMount(ZTag, {
      propsData: {
        iconLeft: 'star'
      },
      slots: slotData
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders with right icon', () => {
    const wrapper = shallowMount(ZTag, {
      propsData: {
        iconRight: 'star'
      },
      slots: slotData
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders with state', () => {
    expect(
      shallowMount(ZTag, {
        propsData: {
          state: 'success'
        },
        slots: slotData
      }).html()
    ).toMatchSnapshot()

    expect(
      shallowMount(ZTag, {
        propsData: {
          state: 'error'
        },
        slots: slotData
      }).html()
    ).toMatchSnapshot()

    expect(
      shallowMount(ZTag, {
        propsData: {
          state: 'warning'
        },
        slots: slotData
      }).html()
    ).toMatchSnapshot()

    expect(
      shallowMount(ZTag, {
        propsData: {
          state: 'info'
        },
        slots: slotData
      }).html()
    ).toMatchSnapshot()

    expect(
      shallowMount(ZTag, {
        propsData: {
          state: 'default'
        },
        slots: slotData
      }).html()
    ).toMatchSnapshot()
  })

  it('renders with size', () => {
    expect(
      shallowMount(ZTag, {
        propsData: {
          iconLeft: 'star',
          size: 'small'
        },
        slots: slotData
      }).html()
    ).toMatchSnapshot()

    expect(
      shallowMount(ZTag, {
        propsData: {
          iconLeft: 'star',
          size: 'large'
        },
        slots: slotData
      }).html()
    ).toMatchSnapshot()
  })
})
