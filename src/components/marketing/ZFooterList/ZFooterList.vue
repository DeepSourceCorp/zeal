<template>
  <ul :class="[X_PADDING]">
    <!-- Accordion -->
    <template v-if="type === TYPES.accordion">
      <span
        v-if="$slots.heading"
        @click="toggleAccordion()"
        class="flex items-center cursor-pointer inline-block hover:opacity-75 select-none font-medium tracking-wider w-full leading-3 py-4 md:pb-8 md:pt-0 uppercase text-sm text-vanilla-400"
      >
        <span class="flex flex-1">
          <slot name="heading"></slot>
        </span>
        <z-icon
          size="medium"
          icon="chevron-right"
          class="transform"
          :class="[accordionHeaderAnimations]"
        ></z-icon>
      </span>
      <span
        class="block overflow-scroll transition-max-height duration-500 ease-in-out"
        :class="[accordionBodyAnimations]"
      >
        <span class="block text-sm md:text-md mx-1" :class="[ARRANGEMENT[arrange].classes]">
          <slot></slot>
        </span>
      </span>
    </template>

    <!-- None -->
    <template v-if="type === TYPES.none">
      <span class="block">
        <li
          v-if="$slots.heading"
          class="leading-3 font-medium tracking-wider py-4 md:pb-8 md:pt-0 uppercase text-sm text-vanilla-400"
        >
          <slot name="heading"></slot>
        </li>
        <span class="text-vanilla-300" :class="[ARRANGEMENT[arrange].classes]">
          <slot></slot>
        </span>
      </span>
    </template>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import ZIcon from '@/components/ZIcon'

const X_PADDING = 'px-6 md:px-4 lg:px-6'

const ARRANGEMENT = {
  vertical: {
    text: 'vertical',
    classes: ''
  },
  horizontal: {
    text: 'horizontal',
    classes: 'flex flex-wrap'
  }
}

const TYPES = {
  accordion: 'accordion',
  none: 'none'
}

export default Vue.extend({
  components: { ZIcon },
  name: 'ZFooterList',
  props: {
    arrange: {
      type: String,
      default: ARRANGEMENT.vertical.text,
      validator: (arrange) => Object.keys(ARRANGEMENT).includes(arrange)
    },
    type: {
      type: String,
      default: TYPES.none,
      validator: (type) => Object.keys(TYPES).includes(type)
    }
  },
  data() {
    return {
      isAccordionOpen: false,
      accordionHeaderAnimations: '',
      TYPES,
      ARRANGEMENT,
      X_PADDING
    }
  },
  computed: {
    accordionBodyAnimations(): string {
      return this.isAccordionOpen ? 'max-h-102' : 'max-h-0'
    }
  },
  methods: {
    toggleAccordion() {
      this.isAccordionOpen = !this.isAccordionOpen
      this.accordionHeaderAnimations = this.isAccordionOpen
        ? 'animate-first-quarter-spin rotate-90'
        : 'animate-reverse-quarter-spin rotate-0'
    }
  }
})
</script>
