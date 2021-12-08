import Vue from 'vue'
import { createLocalVue, mount, Wrapper } from '@vue/test-utils'

import ZButton from '../../src/components/ZButton'

describe('Button component', () => {
  let mountFunction: (options?: Record<string, unknown>) => Wrapper<Vue>
  let localVue: typeof Vue
  beforeEach(() => {
    localVue = createLocalVue()
    mountFunction = (options = {}) => {
      return mount(ZButton, {
        localVue,
        ...options
      })
    }
  })
  it('renders a button tag when the component is mounted', () => {
    expect(mountFunction().html()).toMatchSnapshot()
  })

  it('renders a button tag with the given text', () => {
    expect(
      mountFunction({
        slots: {
          default: 'Hello World'
        }
      }).html()
    ).toMatchSnapshot()
  })

  it('renders a button with primary type', () => {
    expect(
      mountFunction({
        propsData: {
          buttonType: 'primary'
        },
        slots: {
          default: 'Primary Button'
        }
      }).html()
    ).toMatchSnapshot()
  })
  it('renders a button with secondary type', () => {
    expect(
      mountFunction({
        propsData: {
          buttonType: 'secondary'
        },
        slots: {
          default: 'Secondary Button'
        }
      }).html()
    ).toMatchSnapshot()
  })
  it('renders a button with the given size(large)', () => {
    expect(
      mountFunction({
        propsData: {
          size: 'large'
        },
        slots: {
          default: 'Large Button'
        }
      }).html()
    ).toMatchSnapshot()
  })
  it('renders a disabled button when the disabled attribute is passed', () => {
    expect(
      mountFunction({
        propsData: {
          disabled: true
        },
        slots: {
          default: 'Disabled Button'
        }
      }).html()
    ).toMatchSnapshot()
  })
  it('renders a full-width button', () => {
    expect(
      mountFunction({
        propsData: {
          fullWidth: true
        },
        slots: {
          default: 'Full Width Button'
        }
      }).html()
    ).toMatchSnapshot()
  })
  it('renders a link tag when type is specified as link', () => {
    expect(
      mountFunction({
        propsData: {
          as: 'link',
          buttonType: 'link',
          to: 'https://deepsource.io/'
        },
        slots: {
          default: 'Link Button'
        }
      }).html()
    ).toMatchSnapshot()
  })
  it('button should emit a click event', () => {
    const click = jest.fn()
    const wrapper = mountFunction({
      listeners: {
        click: click
      }
    })
    wrapper.find('.z-btn').trigger('click')
    expect(click).toHaveBeenCalledTimes(1)
  })
  it('button should render correct colors', () => {
    expect(
      mountFunction({
        propsData: {
          color: 'robin'
        },
        slots: {
          default: 'Secondary Button'
        }
      }).html()
    ).toMatchSnapshot()
  })
  it('should render loading state', () => {
    expect(
      mountFunction({
        propsData: {
          isLoading: true,
          loadingLabel: 'Loading'
        },
        slots: {
          default: 'Secondary Button'
        }
      }).html()
    ).toMatchSnapshot()
  })
  it('should render with left justify', () => {
    expect(
      mountFunction({
        propsData: {
          justify: 'left'
        },
        slots: {
          default: 'Secondary Button'
        }
      }).html()
    ).toMatchSnapshot()
  })
})
