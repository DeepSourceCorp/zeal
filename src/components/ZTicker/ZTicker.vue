<template>
  <div class="z-indicator flex items-center">
    <div class="flex items-center space-x-0.5"
        :class="[`text-${color}`]">
      <span>{{value}}%</span>
      <z-icon icon="triangle-down" :color="color" size="small" class="transform"
              :class="{
                'rotate-180 mt-0.5': this.type === 'increase',
                'rotate-0': this.type === 'decrease',
                'hidden': this.hideIcon
              }"></z-icon>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script>
import ZIcon from '@/components/ZIcon/ZIcon.vue'

export default {
  name: 'ZTicker',
  components: {
    ZIcon 
  },
  props: {
    value: {
        type: [String, Number],
        default: 100
    },
    type: {
        type: String,
        default: 'increase'
    },
    hideIcon: {
      type: Boolean
    }
  },
  computed: {
    color() {
      const colors = {
        increase: 'juniper',
        decrease: 'cherry'
      }
      return colors[this.type]
    }
  }
}
</script>
