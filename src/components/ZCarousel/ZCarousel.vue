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

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ZIcon from '../ZIcon'

@Component({
  name: 'ZCarousel',
  components: {
    ZIcon
  }
})
export default class Carousel extends Vue {
  @Prop({ default: 0 })
  private activeIndex!: number
  @Prop({ default: 'left' })
  private indicatorPosition!: string
  @Prop({ default: true })
  private showIndicators!: boolean
  @Prop({ default: 'true' })
  private autoSlide!: string
  @Prop({ default: '2000' })
  private autoTiming!: string
  @Prop({ default: true })
  private showControls!: boolean

  private currentIndex: number = this.activeIndex || 0
  private autoInterval: any = null
  private slides: Array<any> = []
  private slideDirection: string = ''

  mounted() {
    this.slides = this.$children.filter((child) => child.$options.name === 'ZSlide')
    if (this.autoSlide == 'true') {
      this.autoInterval = setInterval(() => {
        this.showNextSlide()
      }, parseInt(this.autoTiming))
    }
  }

  beforeDestroy() {
    this.cancelAutoSlide()
  }

  get showButtons(): boolean {
    return true
  }
  get slidesLength(): number {
    return this.slides.length
  }

  get reachedMaxLeft(): boolean {
    return this.currentIndex === 0
  }

  public showNextSlide(): void {
    this.currentIndex++
    if (this.currentIndex >= this.slidesLength - 1) {
      this.currentIndex = 0
    }
    this.slideDirection = 'slide-right'
  }

  public showPrevSlide(): void {
    this.currentIndex--
    if (this.currentIndex < 0) {
      this.currentIndex = this.slidesLength - 1
    }
    this.slideDirection = 'slide-left'
  }

  public showSlide(slideIndex: number): void {
    if (slideIndex > this.currentIndex) this.slideDirection = 'slide-right'
    else this.slideDirection = 'slide-left'
    this.currentIndex = slideIndex
  }

  public cancelAutoSlide(): void {
    clearInterval(this.autoInterval)
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
  @apply relative;
}

.z-carousel__container {
  @apply relative overflow-hidden h-64 z-10;
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
