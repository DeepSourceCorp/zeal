import Vue from 'vue'

import '../../assets/css/layout.css'
import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import ZSplitButtonDropdown from './ZSplitButtonDropdown.vue'

export default {
  title: 'Split Button Dropdown',
  component: ZSplitButtonDropdown,
  excludeStories: /.*Data$/
}

export const DefaultSplitButtonDropdown = (): unknown =>
  Vue.extend({
    components: { ZSplitButtonDropdown },
    template: `<div class="container">
        <z-split-button-dropdown />
    </div>`
  })
