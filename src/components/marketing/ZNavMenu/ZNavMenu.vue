<template>
  <span class="text-vanilla-100">
    <!-- Dropdown -->
    <span v-if="type === TYPES.dropdown" class="relative inline-block text-left">
      <div
        @mouseover.stop.prevent="toggleDropdown(true)"
        @mouseleave.stop.prevent="toggleDropdown(false)"
        @click.stop.prevent
        class="relative py-3 h-full"
      >
        <z-button class="px-4" type="link" :class="[`${isDropdownOpen ? 'bg-ink-300' : ''}`]">
          {{ title }}
        </z-button>
        <span
          class="absolute -ml-2 mt-1 left-1/2 block w-0 h-0 border-t-0 border-r-8 border-l-8 border-b-8 border-l-transparent border-r-transparent border-b-ink-300"
          :class="[dropdownAnimations]"
        ></span>
      </div>
      <div
        v-if="$slots.default"
        :class="[dropdownAnimations, ARRANGEMENT[arrange].classes]"
        @mouseover="toggleDropdown(true)"
        @mouseleave="toggleDropdown(false)"
        data-before=""
        class="absolute -left-12 origin-top-right bg-ink-300 rounded-md shadow-lg"
      >
        <slot></slot>
      </div>
    </span>

    <!-- Accordion -->
    <template v-if="type === TYPES.accordion">
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
    </template>

    <!-- None -->
    <span v-if="type === TYPES.none" class="block py-4">
      <span class="block font-semibold px-4">{{ title }}</span>
      <span class="block text-sm md:text-md -mb-2 -mx-1">
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

const ARRANGEMENT = {
  vertical: {
    text: 'vertical',
    classes: ''
  },
  horizontal: {
    text: 'horizontal',
    classes: 'flex'
  }
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
    },
    arrange: {
      type: String,
      default: ARRANGEMENT.vertical.text,
      validator: (arrange) => Object.keys(ARRANGEMENT).includes(arrange)
    }
  },
  data() {
    return {
      isAccordionOpen: false,
      isDropdownOpen: false,
      accordionHeaderAnimations: '',
      TYPES,
      ARRANGEMENT
    }
  },
  computed: {
    dropdownAnimations(): string {
      return this.isDropdownOpen ? 'animate-fadeInFast' : 'hidden'
    },
    accordionBodyAnimations(): string {
      return this.isAccordionOpen ? 'max-h-102' : 'max-h-0'
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
