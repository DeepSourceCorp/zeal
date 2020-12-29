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
      getSizeClasses,
      `${this.fullWidth !== false && 'w-full inline-block'}`,
      {
        'is-disabled': this.disabled !== false,
        'is-active': this.active !== false
      },
      customClasses,
      `${!color && !customClasses ? 'z-btn--primary' : ''}`
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
    getSizeClasses() {
      let sizes = {
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

<style lang="css" scoped>
.is-disabled {
  @apply opacity-50 cursor-not-allowed;
}
/* Button - Primary Style */
.z-btn--primary {
  @apply bg-juniper hover:bg-light_juniper text-ink-400;
}

.z-btn--primary.is-disabled {
  @apply hover:bg-juniper;
}

/* Button - Secondary Style */

.z-btn--secondary {
  @apply bg-ink-300 hover:bg-ink-200 text-vanilla-100 border border-slate;
}

.z-btn--secondary.is-disabled {
  @apply hover:bg-ink-300;
}

.z-btn--secondary.is-active {
  @apply bg-ink-100;
}

.z-btn--link {
  @apply font-normal text-juniper hover:underline;
}

.z-btn--link.is-active {
  @apply underline;
}

.z-btn--link.is-disabled {
  @apply text-slate no-underline;
}
</style>
