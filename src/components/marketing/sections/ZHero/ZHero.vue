<template>
  <section class="w-full relative text-vanilla-100 text-center">
    <span class="block" ref="z-hero__content">
      <h1
        class="
          block
          text-vanilla-100
          mb-4
          sm:mb-6
          text-2xl
          xs:text-2.5xl
          sm:text-3xl
          lg:text-5xl
          leading-10
          sm:leading-11
          lg:leading-12
          w-auto
          lg:w-4/5
          font-bold
          mx-auto
          sm:px-20
        "
      >
        <slot name="heading"></slot>
      </h1>
      <h2
        class="
          block
          text-sm
          sm:text-lg
          lg:text-lg
          leading-6
          sm:leading-9
          lg:leading-normal
          w-auto
          lg:w-1/2
          font-normal
          text-vanilla-200
          mb-12
          mx-auto
          px-5
          xs:px-12
          sm:px-40
          lg:px-16
        "
      >
        <slot name="subheading"></slot>
      </h2>
      <span class="block">
        <slot name="cta"></slot>
      </span>
    </span>

    <div class="mt-10 lg:-mt-16" ref="z-hero-illustration__content">
      <!-- This div is for scaling from a (a < 1) to b (a < b <= 1) -->
      <div ref="z-hero-illustration__container">
        <!-- This div for rotating on the z-axis from `a`deg (a > 0deg) to `b`deg ( 0deg <= b < a) -->
        <slot name="illustration"></slot>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

const MIN_SCALE = 0.7
const MAX_SCALE_FOR_SMALL_SCREEN = 0.95
const MAX_SCALE_FOR_LARGE_SCREEN = 0.75
const MIN_ROTATION_ANGLE = 0
const MAX_ROTATION_ANGLE = 20

export default Vue.extend({
  name: 'ZHero',
  mounted() {
    this.handleScroll()
    document.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.innerWidth > 833) {
        this.changeOpacity()
      }
      this.scaleIllustration()
      this.rotateIllustration()
    },
    changeOpacity() {
      const heroContent: HTMLElement = this.$refs['z-hero__content'] as HTMLElement
      heroContent.style.opacity = `${this.getOpacity(window.scrollY)}`
    },
    scaleIllustration() {
      const illustrationContent: HTMLElement = this.$refs['z-hero-illustration__content'] as HTMLElement
      illustrationContent.style.transform = `
        translateX(0px)
        scale(${this.getScaleValue(window.scrollY)}) translateZ(0px)`
    },
    rotateIllustration() {
      const illustrationContainer: HTMLElement = this.$refs['z-hero-illustration__container'] as HTMLElement
      illustrationContainer.style.transform = `
        perspective(800px)
        rotateX(${this.getRotationValue(window.scrollY)}deg)
        translateZ(0px)`
    },
    getOpacity(scrollY: number): number {
      const calc = 1 - scrollY / 500
      return calc
    },
    getScaleValue(scrollY: number): number {
      const isLargeScreen = window.innerWidth > 833
      const MAX_SCALE = isLargeScreen ? MAX_SCALE_FOR_LARGE_SCREEN : MAX_SCALE_FOR_SMALL_SCREEN
      const SPEED_CONTROLLER = isLargeScreen ? 0.015 : 0.08
      const calc = MIN_SCALE + (scrollY * SPEED_CONTROLLER) / 100
      return calc < MAX_SCALE ? calc : MAX_SCALE
    },
    getRotationValue(scrollY: number): number {
      const calc = MAX_ROTATION_ANGLE - (scrollY * 0.6) / 10
      return calc > 0 ? calc : MIN_ROTATION_ANGLE
    }
  }
})
</script>
