<template>
  <section class="grid grid-cols-2 gap-20">
    <div class="flex flex-col justify-around relative">
      <span class="text-vanilla-100 font-bold text-4xl leading-12">
        <slot name="heading"></slot>
      </span>
      <span class="grid grid-cols-3 mt-16">
        <span v-for="testimonial in testimonials" :key="testimonial.customer" class="my-4">
          <img class="object-contain" :src="testimonial.image" :alt="testimonial.customer" />
        </span>
      </span>
    </div>
    <div>
      <z-testimonial
        v-for="testimonial in testimonials"
        :key="testimonial.customer"
        class="bg-ink-300"
        :class="[
          `${
            testimonial.customer === activeTestimonial.customer ? ACTIVE_CLASSES : INACTIVE_CLASSES
          }`
        ]"
      >
        <template slot="body">
          <img class="object-contain mb-20" :src="testimonial.image" :alt="testimonial.customer" />
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

const ACTIVE_CLASSES = 'block'
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
    }
  },
  data() {
    return {
      activeTestimonial: {
        customer: 'Qubole'
      } as Testimonial,
      ACTIVE_CLASSES,
      INACTIVE_CLASSES
    }
  }
})
</script>
