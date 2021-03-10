<template>
  <component
    :is="isLink ? 'a' : 'button'"
    :href="to || '#'"
    v-bind="$attrs"
    :disabled="disabled"
    v-on="$listeners"
    @click="handleClick"
    :class="[
      customClasses,
      defaultClasses,
      `${color && `z-btn--${color}`}`,
      `${this.fullWidth !== false && 'w-full inline-block'}`,
      `${this.isButtonDisabled && 'opacity-50 cursor-not-allowed'}`,
      ((isLink || icon) && 'p-0') || spacing,
      isLink || icon ? '' : sizeClasses,
      `${stylesBasedOnColor}`,
      icon && iconStyle
    ]"
    :type="type"
  >
    <z-icon v-if="icon" :icon="icon" :color="iconColor" :size="iconSize"></z-icon>
    <slot v-else>Click</slot>
  </component>
</template>

<script>
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
    type: {
      default: 'button',
      type: String
    },
    customClasses: {
      default: '',
      type: String
    },
    size: {
      default: '',
      type: String
    },
    disabled: {
      default: false,
      type: Boolean
    },
    active: {
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
    iconColor: {
      type: String
    },
    iconSize: {
      type: String
    },
    hoverOpacity: {
      type: String,
      default: '50'
    },
    spacing: {
      type: String,
      default: 'px-6'
    },
    iconSpacing: {
      default: 'tight',
      type: String,
      validator(val) {
        return ['tight', 'base', 'loose'].includes(val)
      }
    }
  },
  data() {
    return {
      defaultClasses:
        'inline-flex items-center font-medium border-transparent rounded-sm relative justify-center focus:outline-none'
    }
  },
  computed: {
    iconStyle() {
      const spacingTypes = {
        tight: '0.5',
        base: '1',
        loose: '1.5'
      }
      return `p-${spacingTypes[this.iconSpacing]}`
    },
    isButtonDisabled() {
      return this.disabled !== false
    },
    isButtonActive() {
      return this.active !== false
    },
    stylesBasedOnColor() {
      const colors = {
        link: `font-normal text-juniper ${this.isButtonActive && 'underline'} ${
          (this.isButtonDisabled && 'text-slate no-underline') || 'hover:underline'
        }`,
        primary: `bg-juniper text-ink-400 ${
          (this.isButtonDisabled && 'hover:bg-juniper') || 'hover:bg-light_juniper'
        }`,
        secondary: `bg-ink-300 text-vanilla-100 border border-slate ${
          (this.isButtonDisabled && 'hover:bg-ink-300') || 'hover:bg-ink-200'
        } ${this.isButtonActive && 'bg-ink-100'}`,
        ghost: `transition-DEFAULT duration-300 ease-in-out 
                ${!this.icon && 'px-6'} 
                ${this.icon ? '' : this.sizeClasses} 
                ${
                  (this.isButtonDisabled && 'hover:bg-ink-300') ||
                  `hover:bg-ink-200 hover:bg-opacity-${this.hoverOpacity}`
                } 
                ${this.isButtonActive && 'bg-ink-100'}`
      }
      return colors[this.color] || ''
    },
    isLink() {
      return this.type === 'link' || this.to
    },
    sizeClasses() {
      const sizes = {
        small: 'h-8 text-xs',
        medium: 'h-8 text-xs sm:h-10 sm:text-base',
        large: 'h-12 text-lg',
        xlarge: 'h-16 text-lg',
        none: ''
      }
      return sizes[this.size] || sizes['medium']
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('clicked', event)
    }
  }
})
</script>
