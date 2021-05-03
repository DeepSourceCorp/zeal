<template>
  <component
    :is="isLink ? 'a' : 'button'"
    :href="to || '#'"
    :disabled="disabled"
    :type="type"
    class="z-btn inline-flex items-center justify-center font-medium transition-colors duration-300 ease-in-out rounded-sm focus:outline-none whitespace-nowrap"
    :class="{
      [`z-btn--${color}`]: color,
      'w-full': fullWidth,

      // Button Size & Spacing Styles
      'p-0': isLink || icon,
      'h-8 px-4 py-1 text-xs space-x-1 leading-loose': size == 'small' && !iconOnly,
      'h-10 px-4 py-2 text-base space-x-2 leading-8': size == 'medium' && !iconOnly,
      'h-12 px-4 py-2.5 text-lg space-x-2.5 leading-9': size == 'large' && !iconOnly,
      'h-13 px-4 py-3 text-lg space-x-3 leading-9': size == 'xlarge' && !iconOnly,

      // Set width of button when just icon is used
      'h-8 w-8': size == 'small' && iconOnly,
      'h-10 w-10': size == 'medium' && iconOnly,
      'h-12 w-12': size == 'large' && iconOnly,
      'h-13 w-13': size == 'xlarge' && iconOnly,

      // Button Base Styles
      'font-normal text-juniper': ['link', 'ghost'].includes(buttonStyle),
      'bg-juniper text-ink-400': buttonStyle == 'primary',
      'bg-ink-300 text-vanilla-100': buttonStyle == 'secondary',
      'bg-cherry text-ink-400': buttonStyle == 'danger',

      // Button Hover Styles
      'hover:underline': buttonStyle == 'link' && !disabled,
      'hover:bg-light-juniper': buttonStyle == 'primary' && !disabled,
      'hover:bg-ink-200': ['secondary', 'ghost'].includes(buttonStyle) && !disabled,
      'hover:bg-light-cherry': buttonStyle == 'danger' && !disabled,

      // Disabled Styles
      'opacity-50 cursor-not-allowed': disabled,
      'font-normal text-slate': ['link', 'ghost'].includes(buttonStyle) && disabled
    }"
    @click="clicked"
  >
    <z-icon
      v-if="icon"
      :icon="icon"
      :color="iconColor"
      :size="iconSizeToken"
      :class="{
        'mr-1.5': size == 'small' && !iconOnly,
        'mr-2': size == 'medium' && !iconOnly,
        'mr-2.5': size == 'large' && !iconOnly,
        'mr-3': size == 'xlarge' && !iconOnly
      }"
    ></z-icon>
    <slot></slot>
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
import ZIcon from '@/components/ZIcon/ZIcon.vue'

export default Vue.extend({
  name: 'ZButton',
  components: {
    ZIcon
  },
  props: {
    color: {
      default: '',
      type: String
    },
    as: {
      default: 'button',
      type: String
    },
    buttonType: {
      default: 'primary',
      type: String,
      validator(val) {
        return ['primary', 'secondary', 'link', 'ghost', 'danger'].includes(val)
      }
    },
    type: {
      default: 'button',
      type: String,
      validator(val) {
        return ['submit', 'reset', 'button', 'link'].includes(val)
      }
    },
    size: {
      default: 'medium',
      type: String,
      validator(val) {
        return ['small', 'medium', 'large', 'xlarge'].includes(val)
      }
    },
    disabled: {
      default: false,
      type: Boolean
    },
    fullWidth: {
      default: false,
      type: Boolean
    },
    to: {
      default: '',
      type: String
    },
    icon: {
      type: String,
      default: undefined
    },
    iconSize: {
      type: String,
      default: undefined
    }
  },
  data() {
    return {
      defaultClasses:
        'inline-flex items-center font-medium border-transparent rounded-sm relative justify-center focus:outline-none'
    }
  },
  methods: {
    clicked(event: Event) {
      this.$emit('click', event)
    }
  },
  computed: {
    iconColor(): string {
      const colors = {
        link: 'juniper',
        ghost: 'juniper',
        primary: 'ink-400',
        secondary: 'vanilla-100',
        danger: 'ink-400'
      }

      return colors[this.buttonStyle as string]
    },
    iconSizeToken(): string {
      const sizes = {
        small: 'small',
        medium: 'base',
        large: 'medium',
        xlarge: 'large'
      }
      return this.iconSize || sizes[this.size]
    },
    iconOnly(): boolean {
      return Boolean(this.icon && !this.$slots['default'])
    },
    buttonStyle(): string {
      return (this.buttonType || this.color || 'secondary') as string
    },
    isLink(): boolean {
      return Boolean(this.as === 'link' || this.type === 'link' || this.to)
    }
  }
})
</script>
