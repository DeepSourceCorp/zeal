<template>
  <div class="relative z-menu">
    <button v-on:click="toggle" v-outside-click="close" class="outline-none focus:outline-none">
      <slot name="trigger"></slot>
    </button>
    <div
      v-if="isOpen"
      class="absolute left-0 w-64 py-2 mt-2 rounded-sm text-vanilla-200 bg-ink-200"
    >
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import outsideClickDirective from '../../directives/outside-click'

Vue.directive('outside-click', outsideClickDirective)

export default Vue.extend({
  name: 'ZMenu',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle(): void {
      this.isOpen = !this.isOpen
    },
    close(): void {
      this.isOpen = false
    }
  }
  // mounted() {
  //   document.addEventListener('click', (): void => {
  //     this.isOpen = false
  //   })
  // },
  // beforeDestroy() {
  //   document.removeEventListener('click', (): void => {
  //     this.isOpen = false
  //   })
  // }
})
</script>
