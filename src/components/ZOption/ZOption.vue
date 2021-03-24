<template>
  <div
    class="z-option p-2 cursor-pointer text-vanilla-300 hover:bg-ink-200 text-xs"
    :class="selected && 'is-selected bg-ink-200'"
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
    }
  },
  computed: {
    selected(): boolean {
      const $parent = this.$parent as ZSelectT
      return this.value === $parent.selectedOpt
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
