<template>
  <div class="relative z-menu">
    <button
      v-on:click="toggle"
      v-outside-click="close"
      class="bg-ink-100 text-vanilla-100 p-2 px-4 rounded-lg shadow-sm"
    >
      <slot name="trigger"></slot>
    </button>
    <div
      v-if="isOpen"
      class="absolute left-0 w-64 py-2 mt-2 rounded-sm text-vanilla-200 bg-ink-300"
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
