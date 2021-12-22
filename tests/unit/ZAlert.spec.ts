import { createLocalVue, mount, Wrapper } from '@vue/test-utils'
import Vue from 'vue'

import ZAlert from '../../src/components/ZAlert'
import ZButton from '../../src/components/ZButton'

describe('Alert component', () => {
  let mountFunction: (options?: Record<string, unknown>) => Wrapper<Vue>
  let localVue: typeof Vue

  beforeEach(() => {
    localVue = createLocalVue()
    mountFunction = (options = {}) => {
      return mount(ZAlert, {
        localVue,
        ...options
      })
    }
  })

  it('renders an alert widget with the given text', () => {
    expect(
      mountFunction({
        propsData: {
          type: 'danger'
        },
        slots: {
          default: 'Alert of the type danger'
        }
      }).html()
    ).toMatchSnapshot()
  })

  it('renders a dismissible alert widget', () => {
    expect(
      mountFunction({
        propsData: {
          type: 'danger',
          dismissible: true
        },
        slots: {
          default: 'Alert of the type danger which is dismissible'
        }
      }).html()
    ).toMatchSnapshot()
  })

  it('renders a dismissible alert widget with controls', () => {
    expect(
      mountFunction({
        components: {
          ZButton
        },
        propsData: {
          type: 'danger',
          dismissible: true
        },
        slots: {
          default: 'Alert of the type danger which is dismissible',
          controls: `<z-button button-type="ghost" color="vanilla-100" size="small" class="bg-cherry bg-opacity-40">
              Default button
            </z-button>`
        }
      }).html()
    ).toMatchSnapshot()
  })

  it('renders an alert widget with border-bottom', () => {
    expect(
      mountFunction({
        propsData: {
          type: 'danger',
          border: 'bottom'
        },
        slots: {
          default: 'Alert of the type danger with border-bottom'
        }
      }).html()
    ).toMatchSnapshot()
  })
})
