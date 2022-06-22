<template>
  <button
    role="tab"
    :aria-selected="selected"
    @click="action && action()"
    class="inline-flex items-end gap-2 pb-3 px-1 text-sm leading-none outline-none z-nav-item focus:outline-none"
    :disabled="disabled"
    :class="{
      'border-b-2': !removeIndicatorStyles,
      'text-vanilla-100': isActive && !disabled,
      [borderActive]: isActive && !disabled && !removeIndicatorStyles,
      'text-vanilla-400': !isActive && !disabled,
      'border-transparent hover:border-slate-400': !isActive && !disabled && !removeIndicatorStyles,
      'text-slate cursor-not-allowed border-transparent': disabled
    }"
  >
    <z-icon
      v-if="icon"
      :icon="icon"
      size="small"
      :color="isActive && !disabled ? 'vanilla-100' : 'vanilla-400'"
    ></z-icon>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import ZIcon from '../ZIcon/ZIcon.vue'

const DEFAULT_BORDER_ACTIVE_COLOR = 'juniper'

export default Vue.extend({
  name: 'ZTab',
  components: {
    ZIcon
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    action: {
      type: Function
    },
    removeIndicatorStyles: {
      type: Boolean,
      default: false
    },
    borderActiveColor: {
      type: String,
      default: DEFAULT_BORDER_ACTIVE_COLOR
    }
  },
  computed: {
    selected(): string {
      return String(this.isActive)
    },
    borderActive(): string {
      return `border-${this.borderActiveColor}`
    }
  }
})
</script>
