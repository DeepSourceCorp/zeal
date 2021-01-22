<template>
  <span class="text-vanilla-100">
    <!-- Dropdown -->
    <span v-if="type === TYPES.dropdown" class="relative inline-block text-left">
      <div
        @mouseover.stop.prevent="toggleDropdown(true)"
        @mouseleave.stop.prevent="toggleDropdown(false)"
        @click.stop.prevent
        class="relative py-2 h-full"
      >
        <z-button type="link" :class="[`${isDropdownOpen ? 'bg-ink-300' : ''}`]">
          {{ title }}
        </z-button>
        <span
          class="absolute -ml-2 mt-1 left-1/2 block h-3 w-3 bg-ink-300 transform rotate-45"
          :class="[dropdownAnimations]"
        ></span>
      </div>
      <div
        v-if="$slots.default"
        :class="[dropdownAnimations]"
        @mouseover="toggleDropdown(true)"
        @mouseleave="toggleDropdown(false)"
        data-before=""
        class="absolute -left-6 origin-top-right bg-ink-300 min-w-64 rounded-md shadow-lg"
      >
        <slot></slot>
      </div>
    </span>

    <!-- Accordion -->
    <span v-if="type === TYPES.accordion">
      <span
        @click="toggleAccordion()"
        class="flex items-center cursor-pointer px-4 py-3 bg-ink-300 inline-block hover:opacity-75 select-none font-semibold w-full"
      >
        <span class="flex flex-1">{{ title }}</span>
        <z-icon icon="chevron-down" class="transform" :class="[accordionHeaderAnimations]"></z-icon>
      </span>
      <span
        class="block bg-ink-300 overflow-scroll transition-max-height duration-500 ease-in-out"
        :class="[accordionBodyAnimations]"
      >
        <span class="border-t border-ink-200 block text-sm md:text-md">
          <slot></slot>
        </span>
      </span>
    </span>

    <!-- None -->
    <span v-if="type === TYPES.none">
      <span class="inline-block font-semibold">{{ title }}</span>
      <span class="block text-sm md:text-md">
        <slot></slot>
      </span>
    </span>
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
import ZButton from '@/components/ZButton'
import ZIcon from '@/components/ZIcon'

const TYPES = {
  accordion: 'accordion',
  dropdown: 'dropdown',
  none: 'none'
}

export default Vue.extend({
  components: { ZButton, ZIcon },
  name: 'ZNavMenu',
  props: {
    title: {
      type: String,
      required: true
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
      isDropdownOpen: false,
      accordionHeaderAnimations: '',
      TYPES
    }
  },
  computed: {
    dropdownAnimations(): string {
      return this.isDropdownOpen ? 'animate-fadeIn' : 'hidden'
    },
    accordionBodyAnimations(): string {
      return this.isAccordionOpen ? 'max-h-64' : 'max-h-0'
    }
  },
  methods: {
    toggleDropdown(show: boolean) {
      this.isDropdownOpen = show
    },
    toggleAccordion() {
      this.isAccordionOpen = !this.isAccordionOpen
      this.accordionHeaderAnimations = this.isAccordionOpen
        ? 'animate-first-half-spin rotate-180'
        : 'animate-reverse-half-spin rotate-0'
    }
  }
})
</script>
