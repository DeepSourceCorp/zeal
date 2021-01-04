<template>
  <transition :name="dir">
    <div class="z-slide absolute w-full h-full top-0 left-0 bottom-0 right-0" v-show="visible">
      <div class="z-slide__content w-full h-full">
        <slot></slot>
      </div>
    </div>
  </transition>
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
    },
    dir() {
      return this.$parent.slideDirection
    }
  }
}
</script>

<style lang="css">
.z-slide__content img {
  @apply object-fill w-full;
}

.slide-left-enter-active {
  @apply animate-slide-left-enter-active;
}

.slide-left-leave-active {
  @apply animate-slide-left-leave-active;
}

.slide-right-enter-active {
  @apply animate-slide-right-enter-active;
}

.slide-right-leave-active {
  @apply animate-slide-right-leave-active;
}

</style>
