<template>
  <span
    :class="`text-${baseColor} border-${baseColor} bg-${baseColor} ${sizeClass}`"
    class="inline-flex items-center gap-2 py-1 border bg-opacity-5"
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
      validator: function(value: string): boolean {
        return ['success', 'error', 'warning', 'default'].includes(value)
      }
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
    baseColor(): string {
      if (this.state === 'success') return 'juniper'
      else if (this.state == 'error') return 'cherry'
      else if (this.state == 'warning') return 'honey'
      else return 'vanilla-100'
    },
    sizeClass(): string {
      if (this.size === 'small') return 'rounded-sm text-xs px-2'
      else if (this.size === 'large') return 'rounded-sm text-md px-3 py-2'
      return 'rounded-sm text-sm px-2'
    },
    iconSize(): string {
      return this.size === 'large' ? '' : 'small'
    }
  }
})
</script>
