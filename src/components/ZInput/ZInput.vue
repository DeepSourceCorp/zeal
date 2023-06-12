<template>
  <div
    class="flex items-center w-full p-1 space-x-2 rounded-sm outline-none"
    :class="[
      borderStyles,
      `bg-${backgroundColor}`,
      {
        'text-slate cursor-not-allowed': disabled,
        'text-vanilla-400 cursor-not-allowed': readOnly,
        'text-vanilla-300': !disabled && !readOnly,
        'h-6 text-xs space-x-1 leading-loose': size === 'x-small',
        'h-8 text-xs space-x-1 leading-loose': size === 'small',
        'h-10 text-sm space-x-2 leading-8': size === 'medium',
        'h-12 text-base space-x-2.5 leading-9': size === 'large',
        'h-13 text-lg space-x-3 leading-9': ['x-large', 'xlarge'].includes(size),
        'py-0.5 px-1.5': size === 'x-small' && !padding,
        'py-1 px-2': size === 'small' && !padding,
        'py-2 px-3': size === 'medium' && !padding,
        'py-2.5 px-4': size === 'large' && !padding,
        'py-3 px-4': ['x-large', 'xlarge'].includes(size) && !padding,
        'pr-1': $slots.right && !$slots.left && !padding,
        'pl-1': $slots.left && !$slots.right && !padding,
        [padding]: padding
      }
    ]"
  >
    <!-- Any icon/content to the left renders here -->
    <slot name="left"></slot>
    <input
      ref="input"
      v-debounce:[debounceDelay]="updateDebounce"
      class="flex flex-grow w-full overflow-hidden bg-transparent outline-none overflow-ellipsis caret-juniper"
      :class="{
        'cursor-not-allowed': disabled || readOnly
      }"
      :aria-label="label"
      :value="value"
      :name="name"
      :type="type"
      :max="max"
      :maxlength="maxLength"
      :min="min"
      :minlength="minLength"
      :multiple="multiple"
      :required="required"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readOnly"
      :autocomplete="autocomplete"
      @input="updateSelf($event.target.value)"
      @blur="this.blurHandler"
      @focus="this.focusHandler"
      @keydown="this.keydownHandler"
      @keyup="this.keyupHandler"
      @invalid="this.invalidHandler"
    />
    <!-- Any icon/content to the right renders here -->
    <slot name="right">
      <z-icon v-if="clearable" icon="x" size="small" class="cursor-pointer" @click.stop="clearInput" />
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
    value: {
      default: '',
      type: [String, Number]
    },
    label: {
      default: '',
      type: String
    },
    type: {
      default: 'text',
      type: String
    },
    padding: {
      type: String,
      default: undefined
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
    readOnly: {
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
        return ['x-small', 'small', 'medium', 'large', 'x-large'].includes(val)
      }
    },
    backgroundColor: {
      type: String,
      default: 'ink-400'
    },
    showBorder: {
      type: Boolean,
      default: true
    },
    isInvalid: {
      type: Boolean,
      default: false
    },
    errorBorderColor: {
      type: String,
      default: 'cherry'
    },
    maxLength: {
      type: [String, Number],
      default: undefined
    },
    minLength: {
      type: [String, Number],
      default: undefined
    },
    multiple: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    validateOnBlur: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      invalidState: false
    }
  },
  computed: {
    borderStyles(): string {
      if (this.isInvalid || this.invalidState) {
        return `border border-cherry`
      }

      if (this.showBorder) {
        return `focus-within:border-vanilla-400 border border-ink-100`
      }

      return ''
    }
  },
  methods: {
    focus(): void {
      ;(this.$refs.input as HTMLInputElement).focus()
    },
    updateSelf(value: string): void {
      this.$emit('input', value)
    },
    updateDebounce(value: unknown): void {
      this.$emit('debounceInput', value)
    },
    clearInput() {
      this.updateSelf('')
      this.updateDebounce('')
    },
    blurHandler(e: FocusEvent) {
      this.$emit('blur', e)
      if (this.validateOnBlur) {
        const eventTarget = e.target as HTMLInputElement
        this.invalidState = !eventTarget.checkValidity()
      }
    },
    focusHandler(e: FocusEvent) {
      this.$emit('focus', e)
    },
    keyupHandler(e: KeyboardEvent) {
      this.$emit('keyup', e)
    },
    keydownHandler(e: KeyboardEvent) {
      this.$emit('keydown', e)
    },
    invalidHandler(e: Event) {
      if (this.validateOnBlur) {
        this.invalidState = true
      }
      this.$emit('invalid', e)
    }
  }
})
</script>
