import { createLocalVue, mount } from '@vue/test-utils'
import ZAlert from '../../src/components/ZAlert'
import ZButton from '../../src/components/ZButton'
import ZCode from '../../src/components/ZCode'

/**
 * Helper to mount the component
 *
 * @param {Object} options={}
 * @returns {Wrapper<Vue>}
 */
const mountFunction = (options = {}) => {
  const localVue = createLocalVue()
  return mount(ZAlert, {
    localVue,
    ...options
  })
}

describe('Alert component', () => {
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
          default: `<div class="hidden md:flex items-center justify-between mr-2">
          Alert of the type danger with controls
          <z-button button-type="ghost" color="vanilla-100" size="small" class="bg-cherry bg-opacity-40">
            Default button
          </z-button>
        </div>`
        }
      }).html()
    ).toMatchSnapshot()
  })

  it('renders a dismissible alert widget with code snippet', () => {
    expect(
      mount({
        template: `<z-alert type="danger" :dismissible="true">
            <div>
              <p> Alert of the type danger with code snippet </p>
              <z-button button-type="ghost" color="vanilla-100" size="small" class="bg-cherry bg-opacity-40">
                Default button
              </z-button>
            </div>

            <template #code-snippet>
              <z-code :content="content" />
            </template>
          </z-alert>`,
        components: {
          ZAlert,
          ZButton,
          ZCode
        },
        data() {
          return {
            content: `<z-code content="<div class="highlight"><pre><span class="ln">2</span>\n<span class="ln">3</span>\n<span class="ln">4</span><span class="nd">@dramatiq.actor</span>\n<span class="hl"><span class="ln">5</span><span class="k">def</span> <span class="nf">example</span><span class="p">(</span><span class="p">)</span><span class="p">:</span></span><span class="ln">6</span>    <span class="k">pass</span>\n</pre></div>" />`
          }
        }
      }).html()
    ).toMatchSnapshot()
  })
})
