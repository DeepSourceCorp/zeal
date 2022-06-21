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
        <template #menu-body>
          <z-menu-item as="button" icon="github">Create issue on GitHub</z-menu-item>
          <z-menu-item as="button" icon="gitlab">Create issue on GitLab</z-menu-item>
          <z-menu-item as="button" icon="bitbucket">Create issue on Bitbucket</z-menu-item>
        </template>
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
            <template #menu-body>
              <z-menu-item as="button" icon="github">Create issue on GitHub</z-menu-item>
              <z-menu-item as="button" icon="gitlab">Create issue on GitLab</z-menu-item>
              <z-menu-item as="button" icon="bitbucket">Create issue on Bitbucket</z-menu-item>
            </template>
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
          },
          menuSizes: {
            small: 'small',
            medium: 'base',
            large: 'large',
            xlarge: 'large'
          },
          menuWidths: {
            small: 'small',
            medium: 'base',
            large: 'large',
            xlarge: 'x-large'
          }
        }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
