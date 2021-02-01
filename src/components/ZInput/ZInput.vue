<template>
  <div class="z-input w-full relative">
    <span
      v-if="icon && iconPosition === 'left'"
      class="absolute h-full flex items-center top-0 text-center transition-all left-2 cursor-pointer"
    >
      <z-icon :icon="icon" size="small"></z-icon>
    </span>
    <input
      type="text"
      class="input w-full caret-juniper focus:shadow-white rounded-sm outline-none"
      :class="[
        `${(disabled && 'text-slate cursor-not-allowed') || 'text-vanilla-300'}`,
        getIconBasedStyle,
        borderStyles,
        `text-${textSize}`,
        `bg-${backgroundColor}`
      ]"
      :value="name"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="updateSelf($event.target.value)"
    />
    <span
      v-if="clearable && !icon"
      class="absolute h-full flex items-center top-0 text-center right-2 transition-all cursor-pointer"
      @click.stop="updateSelf('')"
    >
      <z-icon icon="x" size="small"></z-icon>
    </span>
    <span
      v-if="icon && iconPosition === 'right'"
      class="absolute h-full flex items-center top-0 text-center transition-all right-2 cursor-pointer"
    >
      <z-icon :icon="icon" size="small"></z-icon>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ZIcon from '../ZIcon/ZIcon.vue'

export default Vue.extend({
  name: 'ZInput',
  components: {
    ZIcon
  },
  props: {
    name: {
      default: '',
      type: String
    },
    placeholder: {
      default: 'Enter a value',
      type: String
    },
    disabled: {
      default: false,
      type: Boolean
    },
    icon: {
      type: String
    },
    clearable: {
      type: Boolean
    },
    iconPosition: {
      type: String,
      default: 'left'
    },
    textSize: {
      type: String,
      default: 'sm'
    },
    spacing: {
      type: String,
      default: 'base',
      validator(value): boolean {
        return ['tight', 'base', 'loose'].includes(value)
      }
    },
    backgroundColor: {
      type: String,
      default: 'ink-400'
    },
    showBorder: {
      type: Boolean,
      default: true
    }
  },
  model: {
    prop: 'name',
    event: 'input'
  },
  computed: {
    getIconBasedStyle(): string {
      const iconPositions = {
        left: `pl-8 ${this.getSpacingClass}`,
        right: `pr-8 ${this.getSpacingClass}`,
        none: `${this.getSpacingClass}`
      }
      return (this.icon && iconPositions[this.iconPosition]) || iconPositions['none']
    },
    getSpacingClass(): string {
      const spacers: Record<string, string> = {
        tight: 'px-3 py-1.5',
        base: 'p-3',
        loose: 'px-3 py-4'
      }
      return spacers[this.spacing || 'base']
    },
    borderStyles(): string {
      if (this.showBorder) {
        return 'focus:border-vanilla-400 border border-solid border-ink-100'
      }
      return ''
    }
  },
  methods: {
    updateSelf(name: string): void {
      this.$emit('input', name)
    }
  }
})
</script>
