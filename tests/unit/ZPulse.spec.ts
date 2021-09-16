import ZPulse from '../../src/components/ZPulse'

import { shallowMount } from '@vue/test-utils'

const template = `<div class="flex flex-col gap-3">
<div class="flex gap-2">
  <z-pulse size="small" color="cherry"></z-pulse>
  <z-pulse size="small" color="honey"></z-pulse>
  <z-pulse size="small" color="aqua"></z-pulse>
  <z-pulse size="small" color="slate"></z-pulse>
  <z-pulse size="small" color="robin"></z-pulse>
</div>
<div class="flex gap-2">
  <z-pulse color="cherry"></z-pulse>
  <z-pulse color="honey"></z-pulse>
  <z-pulse color="aqua"></z-pulse>
  <z-pulse color="slate"></z-pulse>
  <z-pulse color="robin"></z-pulse>
</div>
<div class="flex gap-2">
  <z-pulse :active="false" color="cherry"></z-pulse>
  <z-pulse :active="false" color="honey"></z-pulse>
  <z-pulse :active="false" color="aqua"></z-pulse>
  <z-pulse :active="false" color="slate"></z-pulse>
  <z-pulse :active="false" color="robin"></z-pulse>
</div>
<div class="flex gap-2">
  <z-pulse size="large" color="cherry"></z-pulse>
  <z-pulse size="large" color="honey"></z-pulse>
  <z-pulse size="large" color="aqua"></z-pulse>
  <z-pulse size="large" color="slate"></z-pulse>
  <z-pulse size="large" color="robin"></z-pulse>
</div>
</div>`

describe('Pulse', () => {
  it('default rendering', () => {
    const wrapper = shallowMount(ZPulse)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders with options', () => {
    const wrapper = shallowMount(ZPulse, {
      template: template
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
