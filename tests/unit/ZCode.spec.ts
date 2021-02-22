import ZCode from '../../src/components/ZCode'
import { mount } from '@vue/test-utils'

describe('ZCode', () => {
  it('renders a code component with Default Syntax highlighting', async () => {
    const wrapper = mount(ZCode, {
      propsData: {
        content: `<div class="highlight"><pre><span class="ln">2</span>\n<span class="ln">3</span>\n<span class="ln">4</span><span class="nd">@dramatiq.actor</span>\n<span class="hl"><span class="ln">5</span><span class="k">def</span> <span class="nf">example</span><span class="p">(</span><span class="p">)</span><span class="p">:</span></span><span class="ln">6</span>    <span class="k">pass</span>\n</pre></div>`
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.classes()).toContain('z-code')
  })
})
