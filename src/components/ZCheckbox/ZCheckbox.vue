<template>
  <label
    class="group z-input z-input__checkbox block relative pl-6 mb-1 text-base flex items-center"
    :class="[`${disabled && `cursor-not-allowed`}`, { 'is-disabled': this.disabled !== false }]"
  >
    <input
      type="checkbox"
      :checked="isChecked"
      :value="value"
      @change="updateInput"
      :disabled="this.disabled"
      class="absolute opacity-0 h-0 w-0"
    />
    <span
      data-before="✓"
      data-content=""
      class="z-input__checkbox--checkmark before:content-before text-vanilla-100 text-center text-lg sibling-checked:bg-juniper sibling-checked:border-juniper grid place-items-center absolute left-0 h-5 w-5 rounded-sm border border-slate border-solid bg-transparent cursor-pointer group-hover:border-juniper"
      :class="[
        `${
          disabled &&
          `cursor-not-allowed group-hover:border-slate sibling-checked:text-ink-300 sibling-checked:border-slate sibling-checked:bg-slate`
        }`
      ]"
    ></span>
    <span class="z-input__checkbox--text ml-2" :class="[`${disabled && `text-slate`}`]">
      {{ label }}
    </span>
  </label>
</template>
<script>
export default {
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
    }
  },
  computed: {
    isChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value)
      }
      return this.modelValue === this.trueValue
    }
  },
  methods: {
    updateInput(event) {
      let isChecked = event.target.checked

      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue]

        if (isChecked) {
          newValue.push(this.value)
        } else {
          newValue.splice(newValue.indexOf(this.value), 1)
        }
        this.$emit('change', newValue)
      } else {
        this.$emit('change', isChecked ? this.trueValue : this.falseValue)
      }
    }
  }
}
</script>
