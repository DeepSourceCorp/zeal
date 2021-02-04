<template>
  <div :class="`flex flex-shrink-0 h-${pulseSize} w-${pulseSize} items-center justify-center`">
    <span
      class="animate-ping absolute inline-flex rounded-full"
      :class="`h-${dotSize} w-${dotSize} bg-${color}`"
    ></span>
    <span :class="`relative inline-flex rounded-full h-${dotSize} w-${dotSize} bg-${color}`"></span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ZPulse',
  props: {
    color: {
      type: String,
      default: 'juniper'
    },
    size: {
      type: String,
      default: 'base',
      validator: function (value: string): boolean {
        return ['small', 'base', 'large'].includes(value)
      }
    }
  },
  computed: {
    pulseSize(): number {
      const sizes: Record<string, number> = {
        small: 3,
        base: 4,
        large: 5
      }

      return sizes[this.size || 'base']
    },
    dotSize(): number {
      const sizes: Record<string, number> = {
        small: 2,
        base: 3,
        large: 4
      }

      return sizes[this.size || 'base']
    }
  }
})
</script>
