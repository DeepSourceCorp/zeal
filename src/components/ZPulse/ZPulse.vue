<template>
  <div :class="`flex flex-shrink-0 h-${pulseSize} w-${pulseSize} items-center justify-center`">
    <span
      :class="`animate-ping absolute inline-flex h-${pulseSize} w-${pulseSize} rounded-full border-2 border-${color} bg-opacity-75`"
    ></span>
    <span :class="`relative inline-flex rounded-full h-${dotSize} w-${dotSize} bg-${color}`"></span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const SIZEMAP = {
  small: { pulse: 2, dot: 1 },
  base: { pulse: 3, dot: 2 },
  large: { pulse: 5, dot: 3 }
}

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
    pulseSize(): string {
      return SIZEMAP[this.size || 'base'].pulse
    },
    dotSize(): string {
      return SIZEMAP[this.size || 'base'].dot
    }
  }
})
</script>
