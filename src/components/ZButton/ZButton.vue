<template>
  <component
    :is="type === 'link' || to ? 'a' : 'button'"
    :href="to || '#'"
    class="z-btn inline-flex items-center px-6 font-medium border-transparent rounded-sm relative justify-center"
    v-bind="$attrs"
    :disabled="disabled"
    v-on="$listeners"
    :class="[
      `${color && `z-btn--${color}`}`,
      `${this.fullWidth !== false && 'w-full inline-block'}`,
      `${this.isButtonDisabled && 'opacity-50 cursor-not-allowed'}`,
      getSizeClasses,
      customClasses,
      `${getStyleBasedOnType}`
    ]"
    :type="type"
  >
    <slot>Click</slot>
  </component>
</template>

<script>
export default {
  name: 'ZButton',
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
    }
  },
  computed: {
    isButtonDisabled() {
      return this.disabled !== false;
    },
    isButtonActive() {
      return this.active !== false;
    },
    getStyleBasedOnType() {
      const colors = {
        'link': `font-normal text-juniper ${this.isButtonActive && 'underline'} ${this.isButtonDisabled && 'text-slate no-underline' || 'hover:underline'}`,
        'primary': `bg-juniper text-ink-400 ${this.isButtonDisabled && 'hover:bg-juniper' || 'hover:bg-light_juniper'}`,
        'secondary': `bg-ink-300 text-vanilla-100 border border-slate ${this.isButtonDisabled && 'hover:bg-ink-300' || 'hover:bg-ink-200'} ${this.isButtonActive && 'bg-ink-100'}`
      }
      return colors[this.color] || colors['primary'];
    },
    getSizeClasses() {
      const sizes = {
        small: 'h-8 text-xs',
        medium: 'h-10 text-base',
        large: 'h-12 text-lg',
        xlarge: 'h-16 text-lg'
      }
      return sizes[this.size] || sizes['medium']
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>

