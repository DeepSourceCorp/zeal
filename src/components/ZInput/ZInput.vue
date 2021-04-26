<template>
  <div
    class="flex items-center w-full rounded-sm outline-none space-x-2 p-1"
    :class="[
      borderStyles,
      `text-${textSize}`,
      `bg-${backgroundColor}`,
      {
        'text-slate cursor-not-allowed': disabled,
        'text-vanilla-300': !disabled,
        'h-8 py-1 text-xs space-x-1 leading-loose': size == 'small',
        'h-10 py-2 text-base space-x-2 leading-8': size == 'medium',
        'h-12 py-2.5 text-lg space-x-2.5 leading-9': size == 'large',
        'h-13 py-3 text-lg space-x-3 leading-9': size == 'xlarge',
        'px-4': !$slots.left && !$slots.right,
        'pl-4': $slots.right && !$slots.left,
        'pr-4': $slots.left && !$slots.right
      }
    ]"
  >
    <!-- Any icon/content to the left renders here -->
    <slot name="left"></slot>
    <input
      v-debounce:[debounceDelay]="updateDebounce"
      class="w-full caret-juniper flex flex-grow outline-none bg-transparent pl-0.5"
      :class="{
        'cursor-not-allowed': disabled
      }"
      :aria-label="label"
      :value="name"
      :type="type"
      :max="max"
      :min="min"
      :placeholder="placeholder"
      :disabled="disabled"
      :autocomplete="autocomplete"
      @input="updateSelf($event.target.value)"
      @blur="this.blurHandler"
      @focus="this.focusHandler"
      @keydown="this.keydownHandler"
      @keyup="this.keyupHandler"
    />
    <!-- Any icon/content to the right renders here -->
    <slot name="right">
      <z-icon
        v-if="clearable"
        icon="x"
        size="small"
        class="cursor-pointer"
        @click.stop="updateSelf('')"
      >
      </z-icon>
    </slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ZIcon from '../ZIcon/ZIcon.vue'
import debounceDirective from '@/directives/debounce'

export default Vue.extend({
  name: 'ZInput',
  components: {
    ZIcon
  },
  directives: {
    debounce: debounceDirective
  },
  props: {
    name: {
      default: '',
      type: String
    },
    label: {
      default: '',
      type: String
    },
    type: {
      default: 'text',
      type: String
    },
    max: {
      type: [String, Number],
      default: undefined
    },
    min: {
      type: [String, Number],
      default: undefined
    },
    placeholder: {
      default: 'Enter a value',
      type: String
    },
    disabled: {
      default: false,
      type: Boolean
    },
    debounceDelay: {
      default: 350,
      type: Number
    },
    icon: {
      type: String,
      default: undefined
    },
    clearable: {
      type: Boolean
    },
    autocomplete: {
      type: String,
      default: undefined
    },
    size: {
      default: 'medium',
      type: String,
      validator(val) {
        return ['small', 'medium', 'large', 'xlarge'].includes(val)
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
    borderStyles(): string {
      return this.showBorder ? 'focus:border-vanilla-400 border border-solid border-ink-100' : ''
    }
  },
  methods: {
    updateSelf(name: string): void {
      this.$emit('input', name)
    },
    updateDebounce(value: unknown): void {
      this.$emit('debounceInput', value)
    },
    blurHandler(e: FocusEvent) {
      this.$emit('blur', e)
    },
    focusHandler(e: FocusEvent) {
      this.$emit('focus', e)
    },
    keyupHandler(e: KeyboardEvent) {
      this.$emit('keyup', e)
    },
    keydownHandler(e: KeyboardEvent) {
      this.$emit('keydown', e)
    }
  }
})
</script>
