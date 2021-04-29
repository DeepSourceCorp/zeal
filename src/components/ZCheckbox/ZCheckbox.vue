<template>
  <label
    class="group z-input z-input__checkbox relative pl-6 text-base flex items-center"
    :class="{
      'cursor-not-allowed is-disabled': disabled
    }"
  >
    <input
      type="checkbox"
      :checked="isChecked"
      :value="value"
      :name="name"
      @change="updateInput"
      :disabled="this.disabled"
      class="absolute opacity-0 h-0 w-0"
    />
    <span
      data-before="✓"
      data-content=""
      class="z-input__checkbox--checkmark before:content-before text-transparent text-center sibling-checked:text-vanilla-100 sibling-checked:bg-juniper sibling-checked:border-juniper grid place-items-center absolute left-0 rounded-sm border border-slate border-solid bg-transparent cursor-pointer group-hover:border-juniper"
      :class="{
        [checkBoxSize]: true,
        'cursor-not-allowed group-hover:border-slate sibling-checked:text-ink-300 sibling-checked:border-slate sibling-checked:bg-slate': disabled
      }"
    ></span>
    <span
      v-if="label"
      class="z-input__checkbox--text"
      :class="{ [fontSize]: true, 'text-slate': disabled }"
    >
      {{ label }}
    </span>
  </label>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'ZCheckbox',
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    label: {
      default: '',
      type: String
    },
    name: {
      default: '',
      type: String
    },
    value: {
      default: '',
      type: String
    },
    trueValue: {
      default: true,
      type: Boolean
    },
    falseValue: {
      default: false,
      type: Boolean
    },
    disabled: {
      default: false,
      type: Boolean
    },
    modelValue: {
      default: ''
    },
    size: {
      default: 'base',
      type: String,
      validator: value => {
        return ['small', 'base', 'large'].includes(value)
      }
    }
  },
  computed: {
    isChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value)
      }
      return this.modelValue === this.trueValue
    },
    checkBoxSize() {
      const sizes = {
        small: 'h-4 w-4',
        base: 'h-5 w-5',
        large: 'h-6 w-6'
      }
      return sizes[this.size] || 'h-5 w-5'
    },
    fontSize() {
      const sizes = {
        small: 'text-sm',
        base: 'text-base ml-1',
        large: 'text-lg ml-2'
      }
      return sizes[this.size] || 'text-base ml-2'
    }
  },
  methods: {
    updateInput(event) {
      const isChecked = event.target.checked

      if (this.modelValue instanceof Array) {
        const newValue = [...this.modelValue]

        if (isChecked) {
          newValue.push(this.value)
        } else {
          newValue.splice(newValue.indexOf(this.value), 1)
        }
        this.$emit('change', newValue, event)
      } else {
        this.$emit('change', isChecked ? this.trueValue : this.falseValue, event)
      }
    }
  }
})
</script>
