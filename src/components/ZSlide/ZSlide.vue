<template>
  <div
    class="z-slide absolute w-full h-full top-0 left-0 bottom-0 right-0 opacity-0 transition-opacity duration-1000 ease-in-out"
    :class="[`${this.visible && 'opacity-100'}`]"
  >
    <div class="z-slide__content w-full h-full">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZSlide',
  data() {
    return {
      index: 0
    }
  },
  computed: {
    visible() {
      return this.index === this.$parent.currentIndex
    }
  }
}
</script>
