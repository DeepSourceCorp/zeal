<template>
  <div
    class="z-option p-2 cursor-pointer text-vanilla-300 hover:bg-ink-200"
    :class="[selected && 'is-selected bg-ink-200', textSizeClass]"
    @click.stop="selectOption()"
  >
    <slot v-if="$slots.default"></slot>
    <template v-else>{{ label || value }}</template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface ZSelectT extends Vue {
  selectedOpt: string | number
  selectedOptLabel: string | number
  open: boolean
}

export default Vue.extend({
  name: 'ZOption',
  props: {
    label: {
      type: String
    },
    value: {
      type: String || Number
    },
    textSize: {
      type: String,
      default: 'text-xs'
    }
  },
  computed: {
    selected(): boolean {
      const $parent = this.$parent as ZSelectT
      return this.value === $parent.selectedOpt
    },
    textSizeClass(): string {
      const validTextSizes = ['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl']
      return validTextSizes.includes(this.textSize) ? this.textSize : 'text-xs'
    }
  },
  methods: {
    selectOption(): void {
      const $parent = this.$parent as ZSelectT
      $parent.selectedOpt = this.value
      $parent.selectedOptLabel = this.label || this.value
      $parent.open = false
    }
  }
})
</script>
