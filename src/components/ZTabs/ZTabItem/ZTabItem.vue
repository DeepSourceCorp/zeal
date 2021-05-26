<template>
  <z-tab
    class="z-tab-item"
    :icon="icon"
    :action="clickHandler"
    :isActive="isActive"
    :disabled="disabled"
    :removeIndicatorStyles="removeIndicatorStyles"
  >
    <slot :isActive="isActive"></slot>
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
    },
    removeIndicatorStyles: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    activeIndex() {
      return this.$parent.getActiveIndex
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
