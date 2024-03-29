<template>
  <section class="lg:flex">
    <div class="flex flex-col justify-around relative">
      <span class="text-vanilla-100 font-bold text-2xl sm:text-3xl leading-snug sm:leading-tight md:mr-20 mx-auto">
        <slot name="heading"></slot>
      </span>
      <!-- prettier-ignore -->
      <span
        class="z-testimonials__logos flex lg:grid grid-cols-3 px-8 sm:px-0 mt-0 md:mt-6 mb-2 overflow-x-hidden flex-nowrap w-full"
      >
        <span
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.customer"
          class="z-testimonials__logo flex-shrink-0 flex items-center mt-8 lg:mt-12 cursor-pointer mr-8 w-24 md:w-auto"
          @click="showTestimonial(index)"
        >
          <img
            :class="[`${index === currentIndex ? LOGO.ACTIVE : LOGO.INACTIVE}`]"
            class="object-contain hover:opacity-100"
            :src="testimonial.image.bnw"
            :alt="testimonial.customer"
          />
        </span>
      </span>
      <span class="flex justify-between -mt-16 w-full lg:hidden pointer-events-none">
        <span class="w-20 bg-gradient-to-r from-ink-400 via-transparent to-transparent h-16"></span>
        <span class="w-40 bg-gradient-to-r from-transparent via-transparent to-ink-400 h-16"></span>
      </span>
    </div>
    <div class="lg:w-4/6">
      <z-testimonial
        v-for="(testimonial, index) in testimonials"
        :key="testimonial.customer"
        class="bg-ink-300 my-4 lg:my-0"
        :class="[`${index === currentIndex ? CARD.ACTIVE : CARD.INACTIVE}`]"
      >
        <template slot="image">
          <img
            class="object-contain h-12 hidden lg:block mb-6"
            :src="testimonial.image.color"
            :alt="testimonial.customer"
          />
        </template>
        <template slot="body">
          {{ testimonial.text }}
        </template>
        <template slot="footer">
          {{ testimonial.author }}
        </template>
      </z-testimonial>

      <ul class="flex mx-auto mt-4 justify-between lg:hidden">
        <span class="cursor-pointer" @click="showPreviousTestimonial()"
          ><z-icon color="slate" icon="arrow-left"
        /></span>
        <span class="flex items-center">
          <li
            v-for="(testimonial, index) in testimonials"
            :key="index"
            @click.stop="showTestimonial(index)"
            class="h-2 w-2 cursor-pointer rounded-full mx-2"
            :class="[`${index == currentIndex ? 'bg-juniper' : 'bg-ink-100'}`]"
          >
            <button />
          </li>
        </span>
        <span class="cursor-pointer" @click="showNextTestimonial()"><z-icon color="slate" icon="arrow-right" /></span>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import ZTestimonial from '@/components/marketing/ZTestimonial'
import ZIcon from '@/components/ZIcon'

const CARD = {
  ACTIVE: 'block animate-fadeInFast',
  INACTIVE: 'hidden'
}
const LOGO = {
  ACTIVE: '',
  INACTIVE: 'opacity-60'
}

const MAX_TESTIMONIALS = 6
const DEFAULT_INTERVAL = 5000

export default Vue.extend({
  name: 'ZTestimonials',
  components: {
    ZTestimonial,
    ZIcon
  },
  props: {
    testimonials: {
      required: true,
      type: Array,
      validator: (arr) => arr.length <= MAX_TESTIMONIALS
    },
    timing: {
      default: DEFAULT_INTERVAL,
      type: Number
    }
  },
  data() {
    return {
      currentIndex: 0,
      interval: 0,
      CARD,
      LOGO
    }
  },
  mounted() {
    this.setTestimonialInterval()
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  methods: {
    setTestimonialInterval() {
      this.interval = setInterval(() => {
        this.showNextTestimonial()
      }, this.timing)
    },
    resetInterval() {
      clearInterval(this.interval)
      this.setTestimonialInterval()
    },
    showTestimonial(index: number) {
      this.currentIndex = index
      this.resetInterval()
      this.scrollActiveTestimonialLogoIntoView()
    },
    showNextTestimonial() {
      this.currentIndex++
      if (this.currentIndex >= this.testimonials.length) {
        this.currentIndex = 0
      }
      this.resetInterval()
      this.scrollActiveTestimonialLogoIntoView()
    },
    showPreviousTestimonial() {
      this.currentIndex--
      if (this.currentIndex < 0) {
        this.currentIndex = this.testimonials.length - 1
      }
      this.resetInterval()
      this.scrollActiveTestimonialLogoIntoView()
    },
    scrollActiveTestimonialLogoIntoView() {
      const logos = document.getElementsByClassName('z-testimonials__logos')[0] as HTMLElement
      const logo = document.getElementsByClassName('z-testimonials__logo')[this.currentIndex] as HTMLElement
      logos.scrollTo({ left: logo.offsetLeft - 30, behavior: 'smooth' })
    }
  }
})
</script>
