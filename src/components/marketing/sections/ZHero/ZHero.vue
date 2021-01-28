<template>
  <section class="hero-container w-full relative">
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
          <video class="video" autoplay="" muted="" loop="" playsinline="" preload="metadata">
            <!-- From:
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
.video-container {
  /* position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 1200px;
  height: 84.375%;
  max-height: 675px;
  perspective: calc(1.3 * var(--reference));
  z-index: 4; */
}
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ZHero',
  props: {},
  data() {
    return {}
  },
  mounted() {
    const videoContent = document.getElementsByClassName('video-content')[0] as HTMLElement
    const videoContainer = document.getElementsByClassName('video-container')[0] as HTMLElement
    const videoMask = document.getElementsByClassName('video-mask')[0]
    const video = document.getElementsByClassName('video')[0]
    videoContent.style.transform = `translateX(0px) translateY(-${window.scrollY -10}%) scale(0.36) translateZ(0px)`

    window.onscroll = () => {
      const scrollY = window.scrollY
      console.log(this.getRotationValue(scrollY))
      videoContent.style.transform = `translateX(0px) translateY(-10%) scale(${this.getScaleValue(scrollY)}) translateZ(0px)`
      videoContainer.style.transform = `perspective(800px) rotateX(${this.getRotationValue(scrollY)}deg) translateZ(0px)`
    }
  },
  methods: {
    getScaleValue(scrollY: number): number {
      if(scrollY/100 < 1) {
        return scrollY/100
      }
      return 1
    },
    getRotationValue(scrollY: number): number {
      if(scrollY/10 < 20) {
        return 20 - scrollY/10
      }
      return 0
    }
  }
})
</script>
