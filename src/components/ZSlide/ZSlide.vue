<template>
  <transition :name="dir">
    <div class="z-slide" v-show="visible">
      <div class="z-slide__content">
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
.z-slide {
  @apply absolute w-full h-full top-0 left-0 bottom-0 right-0;
}
.z-slide__content {
  @apply w-full h-full;
}

.z-slide__content img {
  @apply object-fill w-full;
}

.slide-left-enter-active {
  /* @apply animation-slide-left-enter-active; */
  animation: slide-left-in 0.5s ease-out;
}

.slide-left-leave-active {
  /* @apply animation-slide-left-leave-active; */
  animation: slide-left-out 0.5s ease-out;
}

@keyframes slide-left-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes slide-left-out {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
}

.slide-right-enter-active {
  /* @apply slide-right-enter-active; */
  animation: slide-right-in 0.5s ease-in;
}

.slide-right-leave-active {
  /* @apply slide-right-leave-active; */
  animation: slide-right-out 0.5s ease-in;
}

@keyframes slide-right-out {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}

@keyframes slide-right-in {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
