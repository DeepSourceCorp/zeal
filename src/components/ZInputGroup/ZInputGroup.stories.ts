import '../../assets/css/tailwind.css'
import '../../assets/css/typography.css'
import '../../assets/css/layout.css'

import ZInputGroup from '@/components/ZInputGroup/ZInputGroup.vue'

export default {
  title: 'InputGroup',
  component: ZInputGroup,
  excludeStories: /.*Data$/
}

export const BasicInputGroupWithAddon = () => ({
  components: { ZInputGroup },
  data() {
    return {
      name: 'Hello World'
    }
  },
  template: `<div class='padded-container'>
        <div class="input-container">
          <z-input-group v-model="name" prefix="www." addon-bg-color="bg-juniper" />
        </div>
    </div>`
})
