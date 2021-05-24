<template>
  <div class="flex flex-row">
    <div class="text-vanilla-400 space-x-4">
      <!--<button @click="decrementActiveIndex"><z-icon size="large" icon="chevron-left"></z-icon></button>-->
      <slot></slot>
      <!--<button @click="incrementActiveIndex"><z-icon size="large" icon="chevron-right"></z-icon></button>-->
    </div>
  </div>
</template>

<script>
import ZIcon from '../../ZIcon/ZIcon.vue'

export default {
  name: 'ZLnguageTabs',
  //components:{ ZIcon },
  props: {
    defaultActive: {
      type: Number,
      default: 0
    },
    active: {
      type: Number,
      default: 0
    }
  },
  data() {
    return { activeIndex: 0 }
  },
  computed: {
    getActiveIndex() {
      // Return the current active tab index
      return this.active >= 0 ? this.active : this.activeIndex
    }
  },
  mounted() {
    this.activeIndex = this.defaultActive
  },
  methods: {
    updateActiveIndex(index) {
      const previous = this.activeIndex
      this.activeIndex = index
      this.$emit('onTabChange', { index, previous })
    },
    decrementActiveIndex() {
      if (this.activeIndex > 0) {
        this.activeIndex -= 2
      }
    },
    incrementActiveIndex() {
      this.activeIndex += 2
    }
  }
}
</script>
