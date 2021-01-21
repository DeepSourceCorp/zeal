<template>
  <button
    role="tab"
    :tabindex="ariaAttrs.tabindex"
    :aria-selected="ariaAttrs.selected"
    v-on:click="clickHandler"
    class="inline-flex items-end gap-2 pb-3 mx-3 text-sm leading-none outline-none focus:outline-none"
    v-bind:class="{
      'text-vanilla-100 border-b-2 border-juniper': isActive && !disabled,
      'cursor-pointer': !disabled,
      'cursor-auto': disabled
    }"
  >
    <z-icon
      v-if="icon"
      :icon="icon"
      size="small"
      :color="isActive && !disabled ? 'vanilla-100' : 'vanilla-400'"
    ></z-icon>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import ZIcon from '../ZIcon/ZIcon.vue'

export default Vue.extend({
  name: 'ZTab',
  components: {
    ZIcon
  },
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
    },
    icon: {
      type: String
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
})
</script>
