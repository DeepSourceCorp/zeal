<template>
  <div
    class="flex items-center w-full rounded-sm outline-none space-x-2 p-1"
    :class="[
      borderStyles,
      `bg-${backgroundColor}`,
      {
        'text-slate cursor-not-allowed': disabled,
        'text-vanilla-300': !disabled,
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
      v-debounce:[debounceDelay]="updateDebounce"
      class="overflow-ellipsis overflow-hidden w-full caret-juniper flex flex-grow outline-none bg-transparent"
      :class="{
        'cursor-not-allowed': disabled
      }"
      :aria-label="label"
      :value="name"
      :type="type"
      :max="max"
      :maxlength="maxLength"
      :min="min"
      :minlength="minLength"
      :multiple="multiple"
      :required="required"
      :placeholder="placeholder"
      :disabled="disabled"
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
      <z-icon v-if="clearable" icon="x" size="small" class="cursor-pointer" @click.stop="updateSelf('')"> </z-icon>
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
    }
  },
  model: {
    prop: 'name',
    event: 'input'
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
    updateSelf(newValue: string): void {
      this.$emit('input', newValue)
    },
    updateDebounce(value: unknown): void {
      this.$emit('debounceInput', value)
    },
    blurHandler(e: FocusEvent) {
      this.$emit('blur', e)
      const eventTarget = e.target as HTMLInputElement
      if (!eventTarget.checkValidity()) {
        this.invalidSate = true
      } else {
        this.invalidSate = false
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
      this.invalidState = true
      this.$emit('invalid', e)
    }
  }
})
</script>
