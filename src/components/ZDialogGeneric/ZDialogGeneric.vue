<template>
  <div @click="close" class="fixed inset-0 flex items-end bg-opacity-50 bg-ink-400 z-dialog-backdrop sm:items-center">
    <transition
      enter-active-class="transition-all duration-100 ease-in-out"
      leave-active-class="transition-all duration-100 ease-in-out"
      enter-class="translate-y-full sm:translate-y-0 sm:scale-95 sm:opacity-0"
      leave-to-class="translate-y-full sm:translate-y-0 sm:scale-105 sm:opacity-0"
    >
      <div
        v-if="showInternal"
        class="mx-auto shadow-md sm:mb-12 rounded-t-lg sm:rounded-md bg-ink-300 transform-gpu w-full sm:w-auto"
      >
        <slot :showInternal="showInternal" :close="close"></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ZDialogGeneric',
  data() {
    return {
      showInternal: false
    }
  },
  mounted() {
    this.showInternal = true
    document.addEventListener('keyup', this.handleKeyup)
  },
  beforeDestroy() {
    document.removeEventListener('keyup', this.handleKeyup)
  },
  methods: {
    close(): void {
      this.showInternal = false
      setTimeout(() => {
        this.$emit('onClose')
      }, 200)
    },
    handleKeyup(e: KeyboardEvent): void {
      if (e.key === 'Escape') {
        this.close()
      }
    }
  }
})
</script>
