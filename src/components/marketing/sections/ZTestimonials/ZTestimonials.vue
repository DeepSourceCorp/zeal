<template>
  <section class="flex">
    <div class="flex flex-col justify-around relative">
      <span class="text-vanilla-100 font-bold text-4xl leading-12 mr-20">
        <slot name="heading"></slot>
      </span>
      <span class="grid grid-cols-3 mt-6 mb-4">
        <span
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.customer"
          class="flex items-center mt-12 cursor-pointer"
          @click="setCurrentIndexTo(index)"
        >
          <img
            :class="[`${index === currentIndex ? '' : 'opacity-60'}`]"
            class="object-contain"
            :src="testimonial.image.bnw"
            :alt="testimonial.customer"
          />
        </span>
      </span>
    </div>
    <div class="w-4/6">
      <z-testimonial
        v-for="(testimonial, index) in testimonials"
        :key="testimonial.customer"
        class="bg-ink-300"
        :class="[`${index === currentIndex ? ACTIVE_CLASSES : INACTIVE_CLASSES}`]"
      >
        <template slot="image">
          <img class="object-contain h-12" :src="testimonial.image.color" :alt="testimonial.customer" />
        </template>
        <template slot="body">
          {{ testimonial.text }}
        </template>
        <template slot="footer">
          {{ testimonial.author }}
        </template>
      </z-testimonial>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import ZTestimonial from '@/components/marketing/ZTestimonial'

interface Testimonial {
  customer: string
  text: string
  author: string
  image: string
  url: string
}

const ACTIVE_CLASSES = 'block animate-fadeIn'
const INACTIVE_CLASSES = 'hidden'

export default Vue.extend({
  name: 'ZTestimonials',
  components: {
    ZTestimonial
  },
  props: {
    testimonials: {
      required: true,
      type: Array
    },
    timing: {
      default: 5000,
      type: Number
    }
  },
  data() {
    return {
      currentIndex: 0,
      interval: 0,
      ACTIVE_CLASSES,
      INACTIVE_CLASSES
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
    },
    setCurrentIndexTo(index: number) {
      this.currentIndex = index
      this.resetInterval()
    }
  }
})
</script>
