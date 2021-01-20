<template>
  <div class="text-vanilla-100">
    <slot :active="getActiveIndex" :updateActiveIndex="updateActiveIndex"></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ZTabs',
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
    return { currentIndex: 0 }
  },
  provide() {
    // to be injected to child components
    return {
      tabs: this,
      updateActiveIndex: this.updateActiveIndex
    }
  },
  computed: {
    getActiveIndex(): number {
      // Return the current active tab index
      return this.active >= 0 ? this.active : this.currentIndex
    }
  },
  mounted() {
    this.currentIndex = this.defaultActive
  },
  methods: {
    updateActiveIndex(index: number): void {
      console.log('CHANGING TO INDEX: ', index)
      const previous = this.currentIndex
      this.currentIndex = index
      this.$emit('onTabChange', { index, previous })
    }
  }
}
</script>
