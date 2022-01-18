<template>
  <section class="w-full relative text-vanilla-300 text-center">
    <div ref="z-hero__content" class="flex flex-col space-y-5 sm:space-y-6">
      <!-- prettier-ignore -->
      <h1 class="text-vanilla-100 text-2.5xl sm:text-5xl w-auto font-bold mx-auto max-w-4xl leading-snug sm:leading-12 px-8 sm:px-0">
        <slot name="heading"></slot>
      </h1>
      <!-- prettier-ignore -->
      <h2 class="text-base sm:text-lg leading-normal font-normal text-vanilla-300 px-4 sm:px-0 max-w-3xl mx-auto">
        <slot name="subheading"></slot>
      </h2>
      <div>
        <slot name="cta"></slot>
      </div>
    </div>

    <div class="mt-4 lg:-mt-16" ref="z-hero-illustration__content">
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
  data() {
    return {
      isLargeScreen: false
    }
  },
  mounted() {
    this.handleScroll()
    this.checkForLargeScreen()
    document.addEventListener('scroll', this.handleScroll)
    document.addEventListener('resize', this.checkForLargeScreen)
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.handleScroll)
    document.removeEventListener('resize', this.checkForLargeScreen)
  },
  methods: {
    checkForLargeScreen() {
      this.isLargeScreen = window.innerWidth > 833
    },
    handleScroll() {
      if (window.innerWidth > 833) {
        window.requestAnimationFrame(this.changeOpacity)
      }
      window.requestAnimationFrame(this.scaleIllustration)
      window.requestAnimationFrame(this.rotateIllustration)
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
      
      const MAX_SCALE = this.isLargeScreen ? MAX_SCALE_FOR_LARGE_SCREEN : MAX_SCALE_FOR_SMALL_SCREEN
      const SPEED_CONTROLLER = this.isLargeScreen ? 0.015 : 0.08
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
