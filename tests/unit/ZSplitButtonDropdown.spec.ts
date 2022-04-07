import { mount } from '@vue/test-utils'

import ZButton from '../../src/components/ZButton'
import ZIcon from '../../src/components/ZIcon'
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
            <z-button button-type="secondary" size="small" @click="toggle">
              <z-icon icon="chevron-down" />
            </z-button>
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
        ZIcon,
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

  it('renders split button dropdown of various sizes', () => {
    const wrapper = mount({
      template: `
      <div>
        <z-split-button-dropdown v-for="size in sizes" :key="size" :icon="icon" :label="label" :to="to" :size="size">
          <z-menu size="small">
            <template v-slot:trigger="{ toggle }">
              <z-button button-type="secondary" :size="size" @click="toggle">
                <z-icon :size="iconSizes[size]" icon="chevron-down" />
              </z-button>
            </template>

            <template #body>
              <z-menu-item as="button" icon="github" @click="createIssue('github')">Create an issue on GitHub</z-menu-item>
              <z-menu-item as="button" icon="gitlab" @click="createIssue('gitlab')">Create an issue on GitLab</z-menu-item>
            </template>
          </z-menu>
      </z-split-button-dropdown>
    </div>
    `,
      components: {
        ZButton,
        ZIcon,
        ZMenu,
        ZMenuItem,
        ZSplitButtonDropdown
      },
      data() {
        return {
          icon: 'github',
          label: 'GitHub',
          to: 'https://github.com',
          sizes: ['small', 'medium', 'large', 'xlarge'],
          iconSizes: {
            small: 'small',
            medium: 'base',
            large: 'medium',
            xlarge: 'large'
          }
        }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
