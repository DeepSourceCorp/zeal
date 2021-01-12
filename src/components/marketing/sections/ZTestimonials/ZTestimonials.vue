<template>
  <section class="grid grid-cols-12 gap-20">
    <div class="col-span-6">
      <span class="text-vanilla-100 font-bold text-4xl leading-12">
        <slot name="heading"></slot>
      </span>
      <span class="grid grid-cols-12">
        <span v-for="testimonial in testimonials" :key="testimonial.customer" class="col-span-2">
          <img class="h-8 w-auto" :src="testimonial.image" :alt="testimonial.customer" />
        </span>
      </span>
    </div>
    <div class="col-span-6">
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
          <img class="h-8 w-auto" :src="testimonial.image" :alt="testimonial.customer" />
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
  },
  methods: {}
})
</script>
