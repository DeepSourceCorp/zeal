<template>
  <label
    class="z-radio text-vanilla-100 flex items-center"
    :class="`${(isDisabled && 'cursor-not-allowed') || 'cursor-pointer'}`"
    @click="updateInput"
  >
    <span
      class="z-radio--inner rounded-full w-4 h-4 relative cursor-pointer inline-block box-border border-solid border-2"
      :class="[
        `${
          (isChecked && ((isDisabled && 'border-slate bg-slate') || 'border-juniper bg-juniper')) ||
          'border-slate bg-transparent'
        }`,
        `${(isDisabled && 'cursor-not-allowed hover:border-slate') || 'cursor-pointer hover:border-juniper'}`
      ]"
    >
      <span
        v-if="isChecked"
        class="w-2 h-2 rounded-full absolute left-50 top-50 transform -translate-x-1/2 -translate-y-1/2"
        :class="`${(isDisabled && 'bg-vanilla-400') || 'bg-vanilla-100'}`"
      >
      </span>
    </span>
    <input
      type="radio"
      :checked="isChecked"
      :value="value"
      @change="updateInput"
      :disabled="isDisabled"
      class="opacity-0 absolute h-0 w-0"
    />
    <span class="label ml-2" :class="(isDisabled && 'cursor-not-allowed text-slate') || 'cursor-pointer'">{{
      label
    }}</span>
  </label>
</template>

<script>
export default {
  name: 'ZRadio',
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
