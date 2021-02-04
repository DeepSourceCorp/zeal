<template>
  <span
    :class="`text-${baseColor} border-${baseColor} ${sizeClass}`"
    class="inline-flex items-center gap-2 py-1 border"
  >
    <z-icon v-if="icon" :icon="icon" :size="iconSize" :color="`text-${baseColor}`"></z-icon>
    <slot></slot>
  </span>
</template>

<script lang="ts">
import ZIcon from '../ZIcon/ZIcon.vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'ZLabel',
  components: {
    ZIcon
  },
  props: {
    icon: {
      type: String
    },
    state: {
      type: String,
      default: 'default',
      validator: function (value: string): boolean {
        return ['success', 'error', 'warning', 'default'].includes(value)
      }
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
    baseColor(): string {
      const colors: Record<string, string> = {
        success: 'juniper',
        error: 'cherry',
        warning: 'honey',
        default: 'vanilla-100'
      }
      return colors[this.state || 'default']
    },
    sizeClass(): string {
      const sizes: Record<string, string> = {
        small: 'rounded-sm text-xs px-2',
        base: 'rounded-sm text-sm px-2',
        large: 'rounded-sm text-md px-3 py-2'
      }
      return sizes[(this.size, 'base')]
    },
    iconSize(): string {
      return this.size === 'large' ? '' : 'small'
    }
  }
})
</script>
