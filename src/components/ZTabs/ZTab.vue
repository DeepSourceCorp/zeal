<template>
  <button
    role="tab"
    :tabindex="ariaAttrs.tabindex"
    :aria-selected="ariaAttrs.selected"
    v-on:click="clickHandler"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'ZTab',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number
    },
    updateActiveIndex: {
      type: Function
    }
  },
  inject: ['tabs'],
  computed: {
    isActive(): boolean {
      return this.index === this.tabs.activeIndex
    },
    ariaAttrs(): {} {
      return {
        tabindex: this.isActive ? 0 : -1,
        selected: String(this.isActive)
      }
    }
  },
  methods: {
    clickHandler(): void {
      if (!this.disabled) {
        this.updateActiveIndex()
      }
    }
  }
}
</script>
