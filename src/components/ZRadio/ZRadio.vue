<template>
  <label
    class="z-radio text-vanilla-100 flex items-center"
    :class="isDisabled || isReadOnly ? 'cursor-not-allowed' : 'cursor-pointer'"
    @click="updateInput"
  >
    <span
      class="z-radio--inner rounded-full w-4 h-4 relative cursor-pointer inline-block box-border border-solid border-2"
      :class="{
        'border-slate bg-slate': isDisabled && isChecked,
        'border-juniper bg-juniper': !isDisabled && isChecked,
        'border-slate bg-transparent': !isChecked,
        'cursor-not-allowed hover:border-slate': isDisabled || isReadOnly,
        'cursor-pointer hover:border-juniper': !isDisabled,
        'opacity-80': isReadOnly
      }"
    >
      <span
        v-if="isChecked"
        class="w-2 h-2 rounded-full absolute left-50 top-50 transform -translate-x-1/2 -translate-y-1/2"
        :class="isDisabled ? 'bg-vanilla-400' : 'bg-vanilla-100'"
      >
      </span>
    </span>
    <input
      type="radio"
      :checked="isChecked"
      :value="value"
      @change="updateInput"
      :disabled="isDisabled || isReadOnly"
      class="opacity-0 absolute h-0 w-0"
    />
    <span
      class="label ml-2"
      :class="{
        'text-slate': isDisabled,
        'text-vanilla-300': isReadOnly,
        'cursor-not-allowed': isDisabled || isReadOnly,
        'cursor-pointer': !isDisabled && !isReadOnly
      }"
    >
      {{ label }}
    </span>
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
    },
    readOnly: {
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
    },
    isReadOnly() {
      const $parent = this.$parent
      return ($parent && $parent.readOnly) || this.readOnly
    }
  },
  methods: {
    updateInput() {
      const $parent = this.$parent
      if (!this.isDisabled && !this.isReadOnly) {
        $parent.value = this.value
      }
    }
  }
}
</script>
