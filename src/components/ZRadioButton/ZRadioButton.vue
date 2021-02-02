<template>
  <label
    class="z-radio-button text-vanilla-100 flex items-center border-ink-200 last:border-r"
    :class="`${(isDisabled && 'cursor-not-allowed') || 'cursor-pointer'}`"
    @click="updateInput"
  >
    <span
      class="z-radio--inner font-medium text-sm relative cursor-pointer py-2 px-3 inline-block box-border border border-solid border-r-0 border-ink-200"
      :class="{
        'bg-ink-200 text-vanilla-100': isChecked,
        'bg-transparent text-vanilla-400': !isChecked
      }"
    >
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
    <input
      type="radio"
      :checked="isChecked"
      :value="value"
      @change="updateInput"
      :disabled="isDisabled"
      class="opacity-0 absolute h-0 w-0"
    />
  </label>
</template>

<script>
export default {
  name: 'ZRadioButton',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    modelData() {
      const $parent = this.$parent
      return ($parent && $parent.modelValue) || this.modelValue
    },
    isChecked() {
      return this.modelData === this.value
    },
    isDisabled() {
      const $parent = this.$parent
      return ($parent && $parent.disabled) || this.disabled
    }
  },
  methods: {
    updateInput() {
      const $parent = this.$parent
      $parent.value = this.value
    }
  }
}
</script>
