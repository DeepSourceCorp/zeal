<template>
  <div :class="`flex flex-shrink-0 h-${pulseSize} w-${pulseSize} items-center justify-center`">
    <span
      :class="
        `animate-pulse absolute inline-flex h-${pulseSize} w-${pulseSize} rounded-full bg-${color} bg-opacity-75`
      "
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
      validator: function(value: string): boolean {
        return ['small', 'base', 'large'].includes(value)
      }
    }
  },
  computed: {
    pulseSize(): string {
      if (this.size === 'small') return '3'
      else if (this.size === 'large') return '6'
      return '4'
    },
    dotSize(): string {
      if (this.size === 'small') return '1'
      else if (this.size === 'large') return '3'
      return '2'
    }
  }
})
</script>
