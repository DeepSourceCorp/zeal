<template>
  <span class="text-vanilla-100">
    <span class="relative inline-block text-left">
      <div
        @mouseover="isIconHovered = true"
        @mouseleave="isIconHovered = false"
        class="relative py-2 h-full"
      >
        <z-button type="link" :class="[`${isActive ? 'bg-ink-300' : ''}`]">
          {{ title }}
        </z-button>
        <span
          class="absolute -ml-2 mt-1 left-1/2 block h-3 w-3 bg-ink-300 transform rotate-45"
          :class="[`${isActive ? 'animate-fadeIn' : 'hidden'}`]"
        ></span>
      </div>
      <div
        v-if="$slots.default"
        :class="[`${isActive ? 'animate-fadeIn' : 'hidden'}`]"
        @mouseover="isDropdownHovered = true"
        @mouseleave="isDropdownHovered = false"
        data-before=""
        class="absolute -left-6 origin-top-right bg-ink-300 min-w-64 rounded-md shadow-lg p-4"
      >
        <slot></slot>
      </div>
    </span>
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
import ZButton from '@/components/ZButton'

export default Vue.extend({
  components: { ZButton },
  name: 'ZNavMenu',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isDropdownHovered: false,
      isIconHovered: false
    }
  },
  computed: {
    isActive(): boolean {
      return this.isDropdownHovered || this.isIconHovered
    }
  },
  methods: {}
})
</script>
