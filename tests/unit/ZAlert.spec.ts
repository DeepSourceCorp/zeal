import { createLocalVue, mount } from '@vue/test-utils'
import ZAlert from '../../src/components/ZAlert'
import ZButton from '../../src/components/ZButton'

describe('Alert component', () => {
  const localVue = createLocalVue()
  const mountFunction = (options = {}) => {
    return mount(ZAlert, {
      localVue,
      ...options
    })
  }

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
          default: 'Alert of the type danger with controls',
          controls: `<z-button button-type="ghost" color="vanilla-100" size="small" class="bg-cherry bg-opacity-40">
              Default button
            </z-button>`
        }
      }).html()
    ).toMatchSnapshot()
  })

  it('renders a dismissible alert widget with code snippets', () => {
    expect(
      mountFunction({
        components: {
          ZButton
        },
        propsData: {
          type: 'danger',
          dismissible: true,
          sourceCodeMarkup: `<div class="highlight"><pre><span class="ln">2</span>\n<span class="ln">3</span>\n<span class="ln">4</span><span class="nd">@dramatiq.actor</span>\n<span class="hl"><span class="ln">5</span><span class="k">def</span> <span class="nf">example</span><span class="p">(</span><span class="p">)</span><span class="p">:</span></span><span class="ln">6</span>    <span class="k">pass</span>\n</pre></div>`
        },
        slots: {
          default: 'Alert of the type danger with code snippets'
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
