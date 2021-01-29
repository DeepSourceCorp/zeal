<template>
  <z-tab
    class="z-tab-item"
    :icon="icon"
    :action="clickHandler"
    :isActive="isActive"
    :disabled="disabled"
  >
    <slot></slot>
  </z-tab>
</template>

<script>
import ZTab from '@/components/ZTab'

export default {
  name: 'ZTabItem',
  components: {
    ZTab
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
