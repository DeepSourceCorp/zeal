<template>
  <component
    :is="isLink ? 'a' : 'button'"
    :href="to || '#'"
    :disabled="disabled"
    :type="type"
    class="transition-colors duration-300 ease-in-out inline-flex items-center font-medium border-transparent rounded-sm relative justify-center focus:outline-none whitespace-nowrap"
    :class="{
      [`z-btn--${color}`]: color,
      'w-full inline-block': fullWidth,

      // Button Size & Spacing Styles
      'p-0': isLink || icon,
      'px-6': !(isLink || (icon && !$slots.default)),

      // Set width of button when just icon is used
      'w-8': size == 'small' && icon && !$slots.default,
      'w-8 sm:w-10': size == 'medium' && icon && !$slots.default,
      'w-12': size == 'large' && icon && !$slots.default,
      'w-16': size == 'xlarge' && icon && !$slots.default,

      // Button Base Sizing
      'h-8 text-xs': size == 'small',
      'h-8 text-xs sm:h-10 sm:text-base': size == 'medium',
      'h-12 text-lg': size == 'large',
      'h-16 text-lg': size == 'xlarge',

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
  >
    <z-icon
      v-if="icon"
      :icon="icon"
      :color="iconColor"
      :size="iconSize"
      :class="{
        'mr-1': size == 'small' && $slots.default,
        'mr-1.5': size == 'medium' && $slots.default,
        'mr-2.5': size == 'large' && $slots.default,
        'mr-4': size == 'xlarge' && $slots.default
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
        return ['submit', 'reset', 'button'].includes(val)
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
      type: String
    },
    iconSize: {
      type: String
    }
  },
  data() {
    return {
      defaultClasses:
        'inline-flex items-center font-medium border-transparent rounded-sm relative justify-center focus:outline-none'
    }
  },
  computed: {
    iconColor(): string {
      const colors = {
        link: 'text-juniper',
        ghost: 'text-juniper',
        primary: 'text-ink-400',
        secondary: 'text-vanilla-100',
        danger: 'text-ink-400'
      }

      return colors[this.buttonStyle as string]
    },
    buttonStyle(): string {
      return (this.buttonType || this.color || 'primary') as string
    },
    isLink() {
      return this.as === 'link' || this.to
    }
  }
})
</script>
