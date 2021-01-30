<template>
  <section
    class="z-hero__section w-full relative text-vanilla-100 text-center pb-vh-2/6 sm:pb-vh-3/6 lg:pb-vh-5/6"
  >
    <h1
      class="text-vanilla-100 mb-6 text-3xl lg:text-5xl leading-11 lg:leading-12 w-auto lg:w-4/5 font-bold mx-auto"
    >
      <slot name="heading"></slot>
    </h1>
    <h2
      class="text-lg lg:text-lg leading-9 lg:leading-normal w-auto lg:w-1/2 font-normal text-vanilla-200 mb-12 mx-auto"
    >
      <slot name="subheading"></slot>
    </h2>

    <span>
      <slot name="cta"></slot>
    </span>

    <div class="z-hero-illustration__content absolute">
      <!-- This div is for scaling from a (a < 1) to b (a < b <= 1) -->
      <div class="z-hero-illustration__container">
        <!-- This div for rotating from `a`deg (a > 0deg) to `b`deg ( 0deg <= b < a) -->
        <slot name="illustration"></slot>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

const MIN_SCALE = 0.7
const MAX_SCALE = 0.95
const MIN_Y = -20
const MAX_Y = -10
const MIN_ROTATION_ANGLE = 0
const MAX_ROTATION_ANGLE = 20

export default Vue.extend({
  components: {},
  name: 'ZHero',
  props: {},
  data() {
    return {}
  },
  mounted() {
    this.handleScroll()
    document.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const illustrationContent = document.getElementsByClassName(
        'z-hero-illustration__content'
      )[0] as HTMLElement
      const illustrationContainer = document.getElementsByClassName(
        'z-hero-illustration__container'
      )[0] as HTMLElement

      const scrollY = window.scrollY
      illustrationContent.style.transform = `
        translateX(0px) 
        translateY(${this.getTranslateYValue(scrollY)}%) 
        scale(${this.getScaleValue(scrollY)}) translateZ(0px)`

      illustrationContainer.style.transform = `
        perspective(800px) 
        rotateX(${this.getRotationValue(scrollY)}deg) 
        translateZ(0px)`
    },
    getScaleValue(scrollY: number): number {
      const calc = MIN_SCALE + (scrollY * 0.2) / 100
      return calc < MAX_SCALE ? calc : MAX_SCALE
    },
    getTranslateYValue(scrollY: number): number {
      const calc = MAX_Y - (scrollY * 0.5) / 10
      return calc > MIN_Y ? calc : MIN_Y
    },
    getRotationValue(scrollY: number): number {
      const calc = MAX_ROTATION_ANGLE - (scrollY * 1.5) / 10
      return calc > 0 ? calc : MIN_ROTATION_ANGLE
    }
  }
})
</script>
