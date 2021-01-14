<template>
  <section class="w-full-screen">
    <div class="text-center text-vanilla-100 text-sm uppercase font-bold tracking-widest mb-8">
      <slot name="heading"></slot>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 grid-row-4 md:grid-rows-2 border-t border-ink-200">
      <span
        v-for="(customer, index) in customers"
        :key="customer.slug"
        class="flex items-center border-b border-ink-200 h-20 md:h-40"
        :class="[`${!isFourthElement(index) ? 'border-r even:border-r-0 md:even:border-r' : ''}`]"
      >
        <img
          :src="customer.image"
          :alt="customer.title"
          :title="customer.title"
          class="mx-auto object-contain h-10 w-24 md:h-auto md:w-auto"
        />
      </span>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

const MAX_CUSTOMERS = 8

export default Vue.extend({
  name: 'ZCustomers',
  props: {
    customers: {
      type: Array,
      required: true,
      validator: arr => arr.length <= MAX_CUSTOMERS
    }
  },
  data() {
    return {}
  },
  methods: {
    isFourthElement(index: number) {
      return (index + 1) % 4 === 0
    }
  }
})
</script>
