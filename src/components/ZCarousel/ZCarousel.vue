<template>
  <div class="z-carousel__wrapper">
    <div class="z-carousel__container">
      <slot></slot>
    </div>
    <div class="z-carousel__controls" v-show="showControls">
      <button class="z-carousel__control z-carousel__control--left" @click="showPrevSlide">
        <z-icon icon="arrow-left" />
      </button>
      <button class="z-carousel__control z-carousel__control--right" @click="showNextSlide">
        <z-icon icon="arrow-right" />
      </button>
    </div>
    <ul class="z-indicators" v-show="showIndicators" :class="[`z-indicator--${indicatorPosition}`]">
      <li
        v-for="(slide, index) in slides"
        :key="index"
        @click.stop="showSlide(index)"
        :class="['z-indicator', { is_active: index == currentIndex }]"
      >
        <button class="z-indicator__button" />
      </li>
    </ul>
  </div>
</template>

<script>
import ZIcon from '../ZIcon'

export default {
  name: 'ZCarousel',
  components: {
    ZIcon
  },
  props: {
    activeIndex: {
      default: 0,
      type: Number
    },
    indicatorPosition: {
      default: 'left',
      type: String
    },
    showIndicators: {
      default: true,
      type: Boolean
    },
    autoSlide: {
      default: true,
      type: Boolean
    },
    autoTiming: {
      default: '2000',
      type: String
    },
    showControls: {
      default: true,
      type: Boolean
    }
  },
  data() {
    return {
      currentIndex: this.activeIndex || 0,
      autoInterval: null,
      slides: [],
      slideDirection: ''
    }
  },
  computed: {
    slidesLength() {
      return this.slides.length;
    },
    reachedMaxLeft() {
      return (this.currentIndex === 0)
    }
  },
  methods: {
    showNextSlide(){
      this.currentIndex++
      if (this.currentIndex >= this.slidesLength) {
        this.currentIndex = 0
      }
      this.slideDirection = 'slide-right'
    },

    showPrevSlide() {
      this.currentIndex--
      if (this.currentIndex < 0) {
        this.currentIndex = this.slidesLength - 1
      }
      this.slideDirection = 'slide-left'
    },

    showSlide(slideIndex) {
      if (slideIndex > this.currentIndex) this.slideDirection = 'slide-right'
      else this.slideDirection = 'slide-left'
      this.currentIndex = slideIndex
    },

    cancelAutoSlide() {
      clearInterval(this.autoInterval)
    }
  },
  mounted() {
    this.slides = this.$children.filter((child) => child.$options.name === 'ZSlide')
    this.slides.map((slide, index) => {
      slide.index = index;
    })
    if (this.autoSlide) {
      this.autoInterval = setInterval(() => {
        this.showNextSlide()
      }, parseInt(this.autoTiming))
    }
  },
  beforeDestroy() {
    this.cancelAutoSlide()
  }
}
</script>

<style lang="css">
.z-indicators {
  @apply flex absolute mt-4 -ml-2 w-full;
}
.z-indicator {
  @apply h-2 w-2 cursor-pointer rounded-full bg-ink-100 ml-3;
}

.z-indicator.is_active {
  @apply bg-juniper;
}

.z-indicator--left {
  @apply justify-start;
}

.z-indicator--center {
  @apply justify-center;
}

.z-indicator--right {
  @apply justify-end;
}

.z-carousel__wrapper {
  @apply relative h-full;
}

.z-carousel__container {
  @apply relative overflow-hidden h-full z-10;
}

.z-carousel__control {
  @apply absolute h-12 w-12 z-20 -mt-6 flex bg-ink-100 bg-opacity-75 justify-center items-center;
}

.z-carousel__control--left {
  @apply left-0;
  top: 50%;
}

.z-carousel__control--right {
  @apply right-0;
  top: 50%;
}
</style>
