import Vue from 'vue'

import '../../assets/css/layout.css'
import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import ZButton from '../ZButton/ZButton.vue'
import ZMenu from '../ZMenu/ZMenu.vue'
import ZMenuItem from '../ZMenu/ZMenuItem'
import ZSplitButtonDropdown from './ZSplitButtonDropdown.vue'

export default {
  title: 'Split Button Dropdown',
  component: ZSplitButtonDropdown,
  excludeStories: /.*Data$/
}

/**
 * UI state representing Split Button Dropdown behavior
 *
 * @returns {ExtendedVue}
 */
export const DefaultSplitButtonDropdown = () =>
  Vue.extend({
    components: { ZButton, ZMenu, ZMenuItem, ZSplitButtonDropdown },
    data: function () {
      return {
        icon: 'github',
        label: 'Create an issue on GitHub',
        to: 'https://github.com'
      }
    },
    methods: {
      createIssue(vcsProvider: string) {
        switch (vcsProvider) {
          case 'github':
            this.icon = 'github'
            this.label = 'Create an issue on GitHub'
            this.to = 'https://github.com'
            window.open(this.to, '_blank')
            break
          case 'gitlab':
            this.icon = 'gitlab'
            this.label = 'Create an issue on GitLab'
            this.to = 'https://gitlab.com'
            window.open(this.to, '_blank')
            break
        }
      }
    },
    template: `<div class="container">
        <z-split-button-dropdown :icon="icon" :label="label" :to="to">
          <z-menu size="small">
            <template v-slot:trigger="{ toggle }">
              <z-button button-type="secondary" icon="chevron-down" size="small" @click="toggle" />
            </template>

            <template #body>
              <z-menu-item as="button" icon="github" @click="createIssue('github')">Create an issue on GitHub</z-menu-item>
              <z-menu-item as="button" icon="gitlab" @click="createIssue('gitlab')">Create an issue on GitLab</z-menu-item>
            </template>
          </z-menu>
        </z-split-button-dropdown>
    </div>`
  })
