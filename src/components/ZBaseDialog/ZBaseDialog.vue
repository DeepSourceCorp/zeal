<template>
  <div class="z-base-dialog fixed inset-0 bg-opacity-75 bg-black px-2 sm:px-0">
    <div class="w-full h-full flex items-center justify-center" @click.stop="close">
      <slot :close="close"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ZBaseDialog',
  methods: {
    close() {
      this.$emit('onClose')
    },
    handleKeyup(e) {
      console.log('hello')
      if (e.key === 'Escape') {
        this.close()
      }
    }
  },
  mounted() {
    document.addEventListener('keyup', this.handleKeyup)
  },
  beforeDestroy() {
    document.removeEventListener('keyup', this.handleKeyup)
  }
}
</script>
