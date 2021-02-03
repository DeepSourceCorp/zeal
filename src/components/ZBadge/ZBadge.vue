<template>
  <div class="relative inline-block z-badge">
    <slot></slot>
    <sup
      v-show="!hidden && (content || content === 0 || isDot)"
      v-text="content"
      class="absolute inline-block text-xs text-center transform translate-x-full -translate-y-1/2 z-badge-content"
      :class="[
        getBgColor,
        getSize,
        getPosition,
        `text-${textColor}`,
        {
          'p-0 rounded-full': isDot,
          'px-2 leading-4 rounded-full': value
        }
      ]"
    >
    </sup>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ZBadge',
  components: {},
  props: {
    value: [String, Number],
    max: Number,
    isDot: Boolean,
    hidden: Boolean,
    size: {
      type: String,
      default: 'sm',
      validator(val) {
        return ['sm', 'md', 'lg'].indexOf(val) > -1
      }
    },
    type: {
      type: String,
      default: 'default',
      validator(val) {
        return ['default', 'success', 'warning', 'info', 'danger'].indexOf(val) > -1
      }
    },
    position: {
      type: String
    },
    textColor: {
      type: String,
      default: 'vanilla-100'
    }
  },
  computed: {
    getBgColor() {
      const colors: Record<string, string> = {
        default: '',
        success: 'juniper',
        warning: 'honey',
        info: 'aqua',
        danger: 'cherry'
      }
      return `bg-${colors[this.type as string]}`
    },
    getSize() {
      const sizes: Record<string, string> = {
        sm: 'w-2 h-2',
        md: 'w-2.5 h-2.5',
        lg: 'w-3 h-3'
      }
      return this.isDot ? sizes[this.size as string] : ''
    },
    getPosition(): string {
      if (this.position) return this.position as string
      else {
        if (this.value) return 'top-0 right-3'
        if (this.isDot) return 'top-0 right-1'
        return 'top-0'
      }
    },
    content() {
      if (this.isDot) return
      const value = this.value,
        max = this.max
      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? `${max}+` : value
      }
      return value
    }
  }
})
</script>
