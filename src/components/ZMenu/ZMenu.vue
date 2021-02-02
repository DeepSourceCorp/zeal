<template>
  <span class="relative z-menu">
    <button v-on:click="toggle" v-outside-click="close" class="outline-none focus:outline-none">
      <slot name="trigger"></slot>
    </button>
    <div
      v-if="isOpen"
      class="absolute z-10 rounded-sm text-vanilla-200 bg-ink-200"
      :class="`${directionClass} ${sizeClass}`"
    >
      <slot name="body"></slot>
    </div>
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
import outsideClickDirective from '../../directives/outside-click'

Vue.directive('outside-click', outsideClickDirective)

export default Vue.extend({
  name: 'ZMenu',
  props: {
    direction: {
      type: String,
      default: 'right',
      validator: function (value: string): boolean {
        return ['left', 'right'].includes(value)
      }
    },
    size: {
      type: String,
      default: 'base',
      validator: function (value: string): boolean {
        return ['small', 'base', 'large'].includes(value)
      }
    },
    width: {
      type: String
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle(): void {
      this.isOpen = !this.isOpen
    },
    close(): void {
      this.isOpen = false
    }
  },
  computed: {
    directionClass(): string {
      return this.direction == 'right' ? 'left-0 origin-top-left' : 'right-0 origin-top-right'
    },
    sizeClass(): string {
      const sizes: Record<string, string> = {
        small: `py-1 text-xs w-${this.width || '52'} mt-2`,
        base: `py-1 text-sm w-${this.width || '64'} mt-2`,
        large: `py-2 text-base w-${this.width || '72'} mt-4`
      }

      return sizes[this.size || 'base']
    }
  }
})
</script>
