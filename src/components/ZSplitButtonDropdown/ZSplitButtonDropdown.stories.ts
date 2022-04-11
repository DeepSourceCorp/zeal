import Vue from 'vue'

import '../../assets/css/layout.css'
import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'

import ZButton from '../ZButton/ZButton.vue'
import ZIcon from '../ZIcon/ZIcon.vue'
import ZMenu from '../ZMenu/ZMenu.vue'
import ZMenuItem from '../ZMenu/ZMenuItem'
import ZSplitButtonDropdown from './ZSplitButtonDropdown.vue'

export default {
  title: 'Split Button Dropdown',
  component: ZSplitButtonDropdown,
  excludeStories: /.*Data$/
}

/**
 * UI states representing Split Button Dropdown default behavior
 *
 * @returns {ExtendedVue}
 */
export const Default = () =>
  Vue.extend({
    components: { ZButton, ZIcon, ZMenu, ZMenuItem, ZSplitButtonDropdown },
    data: function() {
      return {
        icon: 'github',
        label: 'Create issue on GitHub',
        to: 'https://github.com'
      }
    },
    methods: {
      createIssue(vcsProvider: string) {
        switch (vcsProvider) {
          case 'github':
            this.icon = 'github'
            this.label = 'Create issue on GitHub'
            this.to = 'https://github.com'
            window.open(this.to, '_blank')
            break
          case 'gitlab':
            this.icon = 'gitlab'
            this.label = 'Create issue on GitLab'
            this.to = 'https://gitlab.com'
            window.open(this.to, '_blank')
            break
        }
      }
    },
    template: `
      <div class="container">
        <z-split-button-dropdown :icon="icon" :label="label" :to="to">
          <z-menu direction="left" size="small" width="small">
            <template v-slot:trigger="{ toggle }">
              <z-button button-type="secondary" size="small" @click="toggle" class="rounded-tl-none rounded-bl-none rounded-tr-sm rounded-br-sm">
                <z-icon icon="chevron-down" />
              </z-button>
            </template>

            <template #body>
              <z-menu-item as="button" icon="github" @click="createIssue('github')" class="w-full">Create issue on GitHub</z-menu-item>
              <z-menu-item as="button" icon="gitlab" @click="createIssue('gitlab')" class="w-full">Create issue on GitLab</z-menu-item>
            </template>
          </z-menu>
        </z-split-button-dropdown>
      </div>`
  })

/**
 * UI states representing Split Button Dropdown of various sizes
 *
 * @returns {ExtendedVue}
 */
export const Sizes = () =>
  Vue.extend({
    components: { ZButton, ZIcon, ZMenu, ZMenuItem, ZSplitButtonDropdown },
    data: function() {
      return {
        icon: 'github',
        label: 'Create issue on GitHub',
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
    },
    methods: {
      createIssue(vcsProvider: string) {
        switch (vcsProvider) {
          case 'github':
            this.icon = 'github'
            this.label = 'Create issue on GitHub'
            this.to = 'https://github.com'
            window.open(this.to, '_blank')
            break
          case 'gitlab':
            this.icon = 'gitlab'
            this.label = 'Create issue on GitLab'
            this.to = 'https://gitlab.com'
            window.open(this.to, '_blank')
            break
        }
      }
    },
    template: `
      <div class="container space-y-24">
        <div v-for="size in sizes" :key="size" class="space-y-4">
          <h3 class="text-vanilla-100 text-base font-semibold">Size: {{ size }}</h3>
          <z-split-button-dropdown :icon="icon" :label="label" :to="to" :size="size">
            <z-menu :size="menuSizes[size]" :width="menuWidths[size]" direction="left">
              <template v-slot:trigger="{ toggle }">
                <z-button button-type="secondary" :size="size" @click="toggle" class="rounded-tl-none rounded-bl-none rounded-tr-sm rounded-br-sm">
                  <z-icon :size="iconSizes[size]" icon="chevron-down" />
                </z-button>
              </template>

              <template #body>
                <z-menu-item as="button" icon="github" @click="createIssue('github')" class="w-full">Create issue on GitHub</z-menu-item>
                <z-menu-item as="button" icon="gitlab" @click="createIssue('gitlab')" class="w-full">Create issue on GitLab</z-menu-item>
              </template>
            </z-menu>
          </z-split-button-dropdown>
        </div>
      </div>`
  })
