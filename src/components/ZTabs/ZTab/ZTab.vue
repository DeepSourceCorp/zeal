<template>
  <button
    role="tab"
    :aria-selected="selected"
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

<script>
import ZIcon from '@/components/ZIcon'

export default {
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
  computed: {
    activeIndex() {
      const $parent = this.$parent
      return $parent.getActiveIndex
    },
    isActive() {
      return this.index === this.activeIndex
    },
    selected() {
      return String(this.isActive)
    }
  },
  methods: {
    clickHandler() {
      if (!this.disabled) {
        this.updateActiveIndex()
      }
    }
  }
}
</script>
