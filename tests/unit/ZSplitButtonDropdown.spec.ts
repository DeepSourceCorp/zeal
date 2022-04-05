import { mount } from '@vue/test-utils'

import ZButton from '../../src/components/ZButton'
import ZMenu from '../../src/components/ZMenu'
import ZMenuItem from '../../src/components/ZMenu/ZMenuItem'
import ZSplitButtonDropdown from '../../src/components/ZSplitButtonDropdown'

describe('Split Button Dropdown component', () => {
  it('renders a top-level button and a menu with icon button as the trigger', () => {
    const wrapper = mount({
      template: `
      <z-split-button-dropdown :icon="icon" :label="label" :to="to">
        <z-menu size="small">
          <template v-slot:trigger="{ toggle }">
            <z-button button-type="secondary" icon="chevron-down" size="small" @click="toggle" />
          </template>

          <template #body>
            <z-menu-item as="button" icon="github">Create an issue on GitHub</z-menu-item>
            <z-menu-item as="button" icon="gitlab">Create an issue on GitLab</z-menu-item>
          </template>
        </z-menu>
    </z-split-button-dropdown>
    `,
      components: {
        ZButton,
        ZMenu,
        ZMenuItem,
        ZSplitButtonDropdown
      },
      data() {
        return {
          icon: 'github',
          label: 'GitHub',
          to: 'https://github.com'
        }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
