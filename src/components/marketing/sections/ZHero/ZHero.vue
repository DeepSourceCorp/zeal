<template>
  <section class="z-hero__section w-full relative text-vanilla-100 text-center">
    <h1
      class="text-vanilla-100 mb-6 text-3xl lg:text-5xl leading-11 lg:leading-12 w-auto lg:w-4/5 font-bold mx-auto"
    >
      Automate code reviews with static analysis
    </h1>
    <h2
      class="text-lg lg:text-lg leading-9 lg:leading-normal w-auto lg:w-1/2 font-normal text-vanilla-200 mb-12 mx-auto"
    >
      Identify and fix bug risks, anti-patterns, performance issues, and security flaws on every
      commit and pull request.
    </h2>

    <h3 class="text-sm uppercase tracking-widest-lg font-bold mb-6">Integrate with</h3>

    <span>
      <z-button class="bg-github w-40">
        <span class="flex items-center object-fit">
          <z-icon class="text-normal mr-3 -mt-1" size="medium" icon="github"></z-icon>
          GitHub
        </span>
      </z-button>
      <z-button class="bg-gitlab w-40 mx-6">
        <span class="flex items-center object-fit">
          <z-icon class="text-normal mr-3 -mt-1" size="medium" icon="gitlab"></z-icon>
          GitLab
        </span>
      </z-button>
      <z-button class="bg-bitbucket w-40">
        <span class="flex items-center object-fit">
          <z-icon class="text-normal mr-3 -mt-1" size="medium" icon="bitbucket"></z-icon>
          Bitbucket
        </span>
      </z-button>
    </span>

    <div class="video-content absolute">
      <!-- 
      From:
        transform: translateX(-50%) translateY(-80%) scale(0.36) translateZ(0px)
      To:
        transform: translateX(-50%) translateY(-60%) scale(1) translateZ(0px); 
      -->
      <div class="video-container">
        <!-- 
          Only responsible for the rotation.
          From: 
            transform: rotateX(20deg) translateZ(0px)
          To: 
            transform: rotateX(0deg) translateZ(0px); 
        -->
        <div class="video-mask">
          <!-- 
          From:
            transform: scaleX(0.5625) translateZ(0px);
            border-radius: calc(0.01 * 8.77915 * var(--reference)) / calc(0.01 * 4.93827 * var(--reference));

          To:
            transform: none;
            border-radius: calc(0.0183333 * 1 * var(--reference)) / calc(0.0183333 * 1 * var(--reference)); 
          -->
          <!-- <img src='https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80' alt=""> -->
          <video class="video-item" autoplay="" muted="" loop="" playsinline="" preload="metadata">
            <!-- 
            From:
              transform: scaleX(1.77778) translateZ(0px);
            To:
              transform: none; -->
            <source
              src="https://assets.deepsource.io/879e7a0/videos/autofix-workflow.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.z-hero__section {
  padding-bottom: 100vh;
}
</style>

<script lang="ts">
import Vue from 'vue'
import ZButton from '@/components/ZButton'
import ZIcon from '@/components/ZIcon'

const MIN_SCALE = 0.7
const MAX_SCALE = 1
const MIN_Y = 10
const MAX_Y = 20
const MIN_ROTATION_ANGLE = 0
const MAX_ROTATION_ANGLE = 20

export default Vue.extend({
  components: {
    ZButton,
    ZIcon
  },
  name: 'ZHero',
  props: {},
  data() {
    return {}
  },
  mounted() {
    this.handleScroll()
    document.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const heroSection = document.getElementsByClassName('z-hero__section')[0] as HTMLElement
      const videoContainer = document.getElementsByClassName('video-container')[0] as HTMLElement
      const videoContent = document.getElementsByClassName('video-content')[0] as HTMLElement
      const videoMask = document.getElementsByClassName('video-mask')[0]
      // const video = document.getElementsByClassName('video-item')[0] as HTMLElement

      //const heroSectionTop = window.scrollY - heroSection.getBoundingClientRect().top - screen.height
      const scrollY = window.scrollY
      videoContent.style.transform = `
        translateX(0px) 
        translateY(${this.getTranslateYValue(scrollY)}%) 
        scale(${this.getScaleValue(scrollY)}) translateZ(0px)`

      videoContainer.style.transform = `
        perspective(800px) 
        rotateX(${this.getRotationValue(scrollY)}deg) 
        translateZ(0px)`
    },
    getScaleValue(scrollY: number): number {
      const calc = MIN_SCALE + (scrollY * 0.1) / 100
      return calc < MAX_SCALE ? calc : MAX_SCALE
    },
    getTranslateYValue(scrollY: number): number {
      const calc = MAX_Y - (scrollY * 0.5) / 10
      return calc > MIN_Y ? calc : MIN_Y
    },
    getRotationValue(scrollY: number): number {
      const calc = MAX_ROTATION_ANGLE - scrollY / 10
      return calc > 0 ? calc : MIN_ROTATION_ANGLE
    }
  }
})
</script>
