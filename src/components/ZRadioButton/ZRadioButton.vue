<template>
  <!-- prettier-ignore -->
  <label
    class="flex items-center z-radio-button border-slate-400 last:border-r border border-r-0 first:rounded-l-sm last:rounded-r-sm"
    :class="`${(isDisabled && 'cursor-not-allowed') || 'cursor-pointer'}`"
    @click="updateInput"
  >
    <span
      class="box-border relative inline-block text-sm font-medium cursor-pointer z-radio--inner "
      :class="[isChecked ? 'bg-ink-200 text-vanilla-100' : 'bg-transparent text-vanilla-400', spacing]"
    >
      <slot>{{ label }}</slot>
    </span>
    <input
      type="radio"
      :checked="isChecked"
      :value="value"
      @change="updateInput"
      :disabled="isDisabled"
      class="absolute w-0 h-0 opacity-0"
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
      type: String
    },
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    spacing: {
      type: String,
      default: 'px-3 py-2'
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
