<template>
  <div
    class="inline-block w-8 h-5 rounded-full cursor-pointer focus:outline-none"
    role="checkbox"
    :aria-checked="value.toString()"
    tabindex="0"
    @click="toggle(!value)"
    @keydown.space.prevent="toggle"
    :class="{
      'cursor-not-allowed': disabled
    }"
  >
    <!-- prettier-ignore -->
    <span
      class="inline-flex rounded-full h-full w-full transition-DEFAULT duration-300 ease-in-out p-0.5 items-center"
      :class="[value ? 'bg-juniper' : 'bg-ink-100', {'bg-opacity-50' : value && disabled}]"
    >
      <!-- prettier-ignore -->
      <span
        class="inline-block w-3.5 h-3.5 transform rounded-full transition-transform ease-in-out duration-300 shadow-grey"
        :class="[disabled ? 'bg-vanilla-400' : 'bg-vanilla-100', value ? 'translate-x-full' : 'translate-x-0']"
      />
    </span>
  </div>
</template>

<script>
export default {
  name: 'ZToggle',
  props: {
    value: {
      type: Boolean,
      required: true
    },
    disabled: {
      type: Boolean
    }
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  methods: {
    toggle(newValue) {
      if (!this.disabled) this.$emit('input', newValue)
    }
  }
}
</script>
