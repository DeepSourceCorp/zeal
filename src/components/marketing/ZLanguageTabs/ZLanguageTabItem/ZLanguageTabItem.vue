<template>
  <z-language-tab
    class="z-tab-item"
    :lang="lang"
    :action="clickHandler"
    :isActive="isActive"
    :disabled="disabled"
  >
    <slot></slot>
  </z-language-tab>
</template>

<script>
import ZLanguageTab from '@/components/marketing/ZLanguageTab'

export default {
  name: 'ZLanguageTabItem',
  components: {
    ZLanguageTab
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
    lang: {
      type: String,
      default: 'python'
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
