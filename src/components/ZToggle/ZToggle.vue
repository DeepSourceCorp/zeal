<template>
  <div
    class="inline-block cursor-pointer w-8 h-5 rounded-full focus:outline-none"
    role="checkbox"
    :aria-checked="value.toString()"
    tabindex="0"
    @click="toggle(!value)"
    @keydown.space.prevent="toggle"
    :class="{
      'cursor-not-allowed': this.disabled
    }"
  >
    <span
      class="inline-block rounded-full h-full w-full transition-DEFAULT duration-300 ease-in-out p-0.5 flex items-center"
      :class="[backgroundStyles]"
    >
      <span
        class="inline-block w-3.5 h-3.5 transform rounded-full transition-transform ease-in-out duration-300 shadow-grey"
        :class="{
          'bg-vanilla-100': !this.disabled,
          'bg-vanilla-400 opacity-50': this.disabled,
          'translate-x-full': this.value,
          'translate-x-0': !this.value
        }"
        :style="indicatorStyles"
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
  computed: {
    backgroundStyles() {
      if (this.disabled) {
        return {
          'bg-ink-100': this.value,
          'bg-slate': !this.value
        }
      }
      return {
        'bg-juniper': this.value,
        'bg-vanilla-200': !this.value
      }
    }
  },
  methods: {
    toggle(newValue) {
      if (!this.disabled) this.$emit('input', newValue)
    }
  }
}
</script>
