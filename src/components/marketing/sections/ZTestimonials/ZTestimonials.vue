<template>
  <section class="lg:flex">
    <div class="flex flex-col justify-around relative">
      <span
        class="text-vanilla-100 font-bold text-3xl lg:text-4xl leading-11 lg:leading-12 md:mr-20"
      >
        <slot name="heading"></slot>
      </span>
      <span
        class="z-testimonials__logos flex lg:grid grid-cols-3 mt-6 mb-4 overflow-x-auto flex-nowrap"
      >
        <span
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.customer"
          class="z-testimonials__logo flex-shrink-0 flex items-center mt-8 lg:mt-12 cursor-pointer mr-8 w-24 md:w-auto"
          @click="setCurrentIndexTo(index)"
        >
          <img
            :class="[`${index === currentIndex ? '' : INACTIVE_TESTIMONIAL}`]"
            class="object-contain hover:opacity-100"
            :src="testimonial.image.bnw"
            :alt="testimonial.customer"
          />
        </span>
      </span>
    </div>
    <div class="lg:w-4/6">
      <z-testimonial
        v-for="(testimonial, index) in testimonials"
        :key="testimonial.customer"
        class="bg-ink-300 my-4 lg:my-0"
        :class="[`${index === currentIndex ? VISIBLE_CARD : INVISIBLE_CARD}`]"
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
        <z-icon color="slate" icon="arrow-left" />
        <span class="flex items-center">
          <li
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="h-2 w-2 cursor-pointer rounded-full mx-1"
            :class="[`${index == currentIndex ? 'bg-juniper' : 'bg-ink-100'}`]"
          >
            <button />
          </li>
        </span>
        <z-icon color="slate" icon="arrow-right" />
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import ZTestimonial from '@/components/marketing/ZTestimonial'
import ZIcon from '@/components/ZIcon'

const VISIBLE_CARD = 'block animate-fadeIn'
const INVISIBLE_CARD = 'hidden'
const INACTIVE_TESTIMONIAL = 'opacity-60'

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
      VISIBLE_CARD,
      INVISIBLE_CARD,
      INACTIVE_TESTIMONIAL
    }
  },
  mounted() {
    this.setTestimonialInterval()
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
    showNextTestimonial() {
      this.currentIndex++
      if (this.currentIndex >= this.testimonials.length) {
        this.currentIndex = 0
      }
      this.scrollElementIntoView()
    },
    scrollElementIntoView() {
      const container = document.getElementsByClassName('z-testimonials__logos')[0] as HTMLElement
      const elem = document.getElementsByClassName('z-testimonials__logo')[
        this.currentIndex
      ] as HTMLElement
      container.scrollTo({ left: elem.offsetLeft, behavior: 'smooth' })
    },
    setCurrentIndexTo(index: number) {
      this.currentIndex = index
      this.resetInterval()
    },
    isInViewport(element: Element) {
      const rect = element.getBoundingClientRect()
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    }
  }
})
</script>
