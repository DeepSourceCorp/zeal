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
      name: 'Hello World',
      sizes: ['x-small', 'small', 'medium', 'large', 'xlarge']
    }
  },
  template: `
    <div class='padded-container'>
      <div class="input-container">
        <z-input-group v-model="name" prefix="www." addon-bg-color="bg-juniper" />
      </div>
    </div>
      `
})

export const Sizes = () => ({
  components: { ZInputGroup },
  filters: {
    capitalize: function(value: string) {
      if (!value) {
        return ''
      }
      return (
        value
          .toString()
          .charAt(0)
          .toUpperCase() + value.slice(1)
      )
    }
  },
  data() {
    return {
      name: 'Hello World',
      sizes: ['x-small', 'small', 'medium', 'large', 'xlarge']
    }
  },
  template: `<div class='padded-container'>
        <div class="input-container space-y-4">
        <div v-for="size in sizes" :key="size" class="space-y-2">
          <h3 class="text-vanilla-100 text-xl font-semibold">{{ size | capitalize }}</h3>
          <z-input-group v-model="name" :size="size" prefix="www." addon-bg-color="bg-juniper" />
        </div>
          </div>
    </div>`
})
