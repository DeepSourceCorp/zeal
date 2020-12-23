<template>
  <label class="z-input z-input__checkbox" :class="[{ 'is-disabled': this.disabled !== false }]">
    <input
      type="checkbox"
      :checked="isChecked"
      :value="value"
      @change="updateInput"
      :disabled="this.disabled"
    />
    <span class="z-input__checkbox--checkmark"></span>
    <span class="z-input__checkbox--text">{{ label }}</span>
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

<style lang="css" scoped>
.z-input__checkbox {
  @apply block relative pl-6 mb-1 text-base;
}

/* Hide the browser's default checkbox */
.z-input__checkbox input {
  @apply absolute opacity-0 h-0 w-0;
}

/* Create a custom checkbox */
.z-input__checkbox--checkmark {
  @apply absolute left-0 h-5 w-5 rounded-sm border border-slate border-solid bg-transparent cursor-pointer top-50;
  transform: translateY(-50%);
}

.z-input__checkbox--text {
  @apply ml-2;
}

/* On mouse-over, add a grey background color */
.z-input__checkbox:hover input ~ .z-input__checkbox--checkmark {
  @apply border border-solid border-juniper;
}

/* When the checkbox is checked, add a blue background */
.z-input__checkbox input:checked ~ .z-input__checkbox--checkmark {
  @apply border border-solid border-juniper bg-juniper;
}

/* Create the checkmark/indicator (hidden when not checked) */
.z-input__checkbox--checkmark:after {
  content: '';
  @apply absolute hidden;
}

/* Show the checkmark when checked */
.z-input__checkbox input:checked ~ .z-input__checkbox--checkmark:after {
  @apply block;
}

/* Style the checkmark/indicator */
.z-input__checkbox .z-input__checkbox--checkmark:after {
  @apply top-px left-px-5 w-2 h-3 border-vanilla-100 border-solid border-t-0 border-r-2 border-b-2 border-l-0;
  transform: rotate(45deg);
}

/* Styles for Disabled Proeprty */

.z-input__checkbox.is-disabled:hover .z-input__checkbox--checkmark {
  @apply border-slate;
}

.z-input__checkbox.is-disabled,
.z-input__checkbox.is-disabled .z-input__checkbox--checkmark {
  @apply cursor-not-allowed;
}

.z-input__checkbox.is-disabled input:checked ~ .z-input__checkbox--checkmark {
  @apply border border-solid border-slate bg-slate;
}

.z-input__checkbox.is-disabled input:checked ~ .z-input__checkbox--checkmark:after {
  @apply border-ink-300;
}

.z-input__checkbox.is-disabled .z-input__checkbox--text {
  @apply text-slate;
}
</style>
