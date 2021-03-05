<template>
  <div>
    <span
      class="inline-block relative cursor-pointer w-10 h-5 rounded-full focus:outline-none"
      role="checkbox"
      :aria-checked="value.toString()"
      tabindex="0"
      @click="toggle"
      @keydown.space.prevent="toggle"
      :class="{
        'cursor-not-allowed': this.disabled
      }"
    >
      <span
        class="inline-block rounded-full h-full w-full transition-DEFAULT duration-300 ease-in-out"
        :class="[backgroundStyles]"
      />
      <span
        class="absolute w-4 h-4 left-0.5 top-0.5 transform rounded-full transition-transform ease-in-out duration-300 shadow-grey"
        :class="{
          'bg-vanilla-100': !this.disabled,
          'bg-vanilla-400': this.disabled,
          'translate-x-5': this.value,
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
    toggle() {
      if (!this.disabled) this.$emit('input', !this.value)
    }
  }
}
</script>
