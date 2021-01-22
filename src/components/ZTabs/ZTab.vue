<template>
  <button
    role="tab"
    :tabindex="ariaAttrs.tabindex"
    :aria-selected="ariaAttrs.selected"
    @click="clickHandler"
    class="inline-flex items-end gap-2 pb-3 mx-3 text-sm leading-none outline-none z-tab focus:outline-none border-b-2"
    :disabled="disabled"
   :class="{
      'text-vanilla-100 border-juniper': isActive && !disabled,
      'border-transparent': !isActive,
      'cursor-auto border-transparent': disabled
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
