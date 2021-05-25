<template>
  <div
    @click="close"
    class="fixed inset-0 flex items-end bg-opacity-50 bg-ink-400 z-modal-backdrop sm:items-center"
  >
    <transition
      enter-active-class="transition-all duration-150 ease-in-out"
      leave-active-class="transition-all duration-150 ease-in-out"
      enter-class="scale-95 opacity-0"
      leave-to-class="scale-105 opacity-0"
    >
      <div
        v-if="showInternal"
        class="mx-auto shadow-md sm:mb-12 sm:rounded-md bg-ink-300 transform-gpu"
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
