<template>
  <label class="z-input z-input__checkbox block relative pl-6 mb-1 text-base" 
        :class="[
          `${disabled && `cursor-not-allowed`}`,
          { 'is-disabled': this.disabled !== false }
        ]">
    <input
      type="checkbox"
      :checked="isChecked"
      :value="value"
      @change="updateInput"
      :disabled="this.disabled"
      class="absolute opacity-0 h-0 w-0"
    />
    <span class="z-input__checkbox--checkmark grid place-items-center absolute left-0 h-5 w-5 rounded-sm border border-slate border-solid bg-transparent cursor-pointer top-50"
          :class="[
            `${disabled && `cursor-not-allowed`}`
          ]"></span>
    <span class="z-input__checkbox--text ml-2"
          :class="[
            `${disabled && `text-slate`}`
          ]">
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

<style lang="css" scoped>
/* Create a custom checkbox */
.z-input__checkbox--checkmark {
  transform: translateY(-50%);
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
   
  @apply absolute hidden;
}

/* Show the checkmark when checked */
.z-input__checkbox input:checked ~ .z-input__checkbox--checkmark:after {
  @apply block;
}

/* Style the checkmark/indicator */
.z-input__checkbox .z-input__checkbox--checkmark:after {
  content: "\2713";
  @apply text-vanilla-100 text-center text-lg;
}

/* Styles for Disabled Proeprty */

.z-input__checkbox.is-disabled:hover .z-input__checkbox--checkmark {
  @apply border-slate;
}

.z-input__checkbox.is-disabled input:checked ~ .z-input__checkbox--checkmark {
  @apply border border-solid border-slate bg-slate;
}

.z-input__checkbox.is-disabled input:checked ~ .z-input__checkbox--checkmark:after {
  @apply text-ink-300;
}

</style>
