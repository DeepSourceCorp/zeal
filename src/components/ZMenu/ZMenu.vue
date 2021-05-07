<template>
  <span class="relative z-menu">
    <button v-on:click="toggle" class="outline-none focus:outline-none" ref="menu-trigger">
      <slot name="trigger" :toggle="toggle" :isOpen="isOpen"></slot>
    </button>
    <transition
      enter-active-class="animate-slide-bottom-enter-active sm:animate-none sm:transition-all sm:duration-75 sm:ease-out-quad"
      leave-active-class="animate-slide-bottom-leave-active sm:animate-none sm:transition-all sm:duration-150 sm:ease-in-quad"
      enter-class="sm:opacity-0 sm:scale-75"
      enter-to-class="sm:opacity-100 sm:scale-100"
      leave-class="sm:opacity-100 sm:scale-100"
      leave-to-class="sm:opacity-0 sm:scale-75"
    >
      <div
        v-if="isOpen"
        class="fixed z-10 flex items-end overflow-hidden h-100 sm:absolute text-vanilla-200 transform-gpu"
        :class="[directionClass, placementClasses]"
      >
        <div
          class="rounded-t-lg bg-ink-300 sm:rounded-sm shadow-double-dark"
          :class="`${sizeClass}`"
          v-outside-click="close"
        >
          <slot name="body"></slot>
        </div>
      </div>
    </transition>
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
import { containsElement } from '@/helpers/components/utils'
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
    placement: {
      type: String,
      default: 'bottom',
      validator: function (value: string): boolean {
        return ['top', 'bottom'].includes(value)
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
      type: String,
      default: 'base',
      validator: function (value: string): boolean {
        return ['x-small', 'small', 'base', 'large', 'x-large'].includes(value)
      }
    },
    collapseOnMobile: {
      type: Boolean,
      default: false
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
    close(event?: Event): void {
      // If click event is not present close directly
      if (!event) {
        this.isOpen = false
      } else {
        const target = event.target as HTMLElement
        const menuTrigger = this.$refs['menu-trigger'] as HTMLElement

        if (!containsElement(menuTrigger, target)) {
          this.isOpen = false
        }
      }
    }
  },
  computed: {
    directionClass(): string {
      return this.direction == 'right'
        ? 'sm:left-0 sm:origin-top-left'
        : 'sm:right-0 sm:origin-top-right'
    },
    placementClasses(): string {
      if (this.placement == 'top') {
        return 'sm:inset-auto sm:bottom-10'
      }
      return 'sm:inset-auto'
    },
    sizeClass(): string {
      const sizes: Record<string, string> = {
        small: `py-1 text-xs w-full ${this.widthClass} mt-5 sm:mt-2`,
        base: `py-1 text-sm w-full ${this.widthClass} mt-5 sm:mt-2`,
        large: `py-2 text-base w-full ${this.widthClass} mt-5 sm:mt-4`
      }
      return sizes[this.size || 'base']
    },
    widthClass(): string {
      const widths = {
        'x-small': 'sm:w-48',
        small: 'sm:w-52',
        base: 'sm:w-64',
        large: 'sm:w-72',
        'x-large': 'sm:w-80'
      }
      return widths[this.width] || 'sm:w-64'
    }
  }
})
</script>
