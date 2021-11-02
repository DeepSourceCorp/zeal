<template>
  <div :class="`flex flex-shrink-0 h-${pulseSize} w-${pulseSize} items-center justify-center`">
    <span
      class="absolute inline-flex rounded-full"
      :class="[`h-${pulseSize} w-${pulseSize}`, { 'animate-ping': active }, active ? `bg-${color}` : 'bg-ink-200']"
    ></span>
    <span
      :class="[`relative inline-flex rounded-full h-${dotSize} w-${dotSize}`, active ? `bg-${color}` : 'bg-ink-200']"
    ></span>
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
        return ['small', 'base', 'large', 'xlarge'].includes(value)
      }
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    pulseSize(): number {
      const sizes: Record<string, number> = {
        small: 3,
        base: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 7
      }

      return sizes[this.size || 'base']
    },
    dotSize(): number {
      const sizes: Record<string, number> = {
        small: 2,
        base: 3,
        large: 4,
        xlarge: 5,
        xxlarge: 6
      }

      return sizes[this.size || 'base']
    }
  }
})
</script>
