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
          :class="[`${isDropdownOpen ? 'animate-fadeIn' : 'hidden'}`]"
        ></span>
      </div>
      <div
        v-if="$slots.default"
        :class="[`${isDropdownOpen ? 'animate-fadeIn' : 'hidden'}`]"
        @mouseover="toggleDropdown(true)"
        @mouseleave="toggleDropdown(false)"
        data-before=""
        class="absolute -left-6 origin-top-right bg-ink-300 min-w-64 rounded-md shadow-lg p-4"
      >
        <slot></slot>
      </div>
    </span>

    <!-- Accordion -->
    <span v-if="type === TYPES.accordion">
      <span
        @click="toggleAccordion()"
        class="flex items-center cursor-pointer px-5 py-3 bg-ink-300 inline-block hover:opacity-75 select-none w-full"
      >
        <span class="flex flex-1">
          {{ title }}
        </span>
        <z-icon
          icon="chevron-down"
          class="transform"
          :class="[`${isAccordionOpen ? 'rotate-180' : 'rotate-0'}`, chevronAnimation]"
        ></z-icon>
      </span>
      <span
        class="block bg-ink-300 overflow-scroll transition-max-height duration-500 ease-in-out"
        :class="[openHeightStyle]"
      >
        <span class="border-t border-ink-200 block p-4">
          <slot></slot>
        </span>
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
  dropdown: 'dropdown'
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
      default: TYPES.dropdown,
      validator: type => Object.keys(TYPES).includes(type)
    }
  },
  data() {
    return {
      isAccordionOpen: false,
      isDropdownOpen: false,
      chevronAnimation: '',
      TYPES
    }
  },
  computed: {
    openHeightStyle(): string {
      return this.isAccordionOpen ? 'max-h-64' : 'max-h-0'
    }
  },
  methods: {
    toggleDropdown(show: boolean) {
      this.isDropdownOpen = show
    },
    toggleAccordion() {
      this.isAccordionOpen = !this.isAccordionOpen
      this.chevronAnimation = this.isAccordionOpen
        ? 'animate-first-half-spin'
        : 'animate-reverse-half-spin'
    }
  }
})
</script>
