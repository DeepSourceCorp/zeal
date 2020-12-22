<template>
  <transition :name="dir">
    <div class="z-slide" v-show="visible">
      <div class="z-slide__content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'ZSlide'
})
export default class Slide extends Vue {
  private index: number = 0

  get visible(): boolean {
    let $parent: any = this.$parent
    this.index = $parent.slides.indexOf(this)
    return this.index === $parent.currentIndex
  }

  get dir(): string {
    let $parent: any = this.$parent
    return $parent.slideDirection
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
  @apply object-fill w-full h-full;
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
