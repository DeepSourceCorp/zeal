<template>
  <span class="text-vanilla-100">
    <span class="relative inline-block text-left">
      <z-button
        @mouseover="isDropdownOpen = true"
        @mouseleave="isDropdownOpen = false"
        type="link"
        class="hover:bg-ink-300"
      >
        Options
      </z-button>

      <!--
      Dropdown panel, show/hide based on dropdown state.

      Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95"
    -->
      <div
        :class="[
          'before:content-before before:left-8 before:-top-2',
          'before:border-t-0 before:border-r-8 before:border-l-8 before:border-b-8',
          'before:border-l-transparent before:border-r-transparent before:border-b-ink-300',
          `${isDropdownOpen ? '' : 'hidden'}`
        ]"
        data-before=""
        class="origin-top-right bg-ink-300 absolute left-0 mt-2 w-56 rounded-md shadow-lg"
      >
        <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
            >Account settings</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
            >Support</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
            >License</a
          >
        </div>
      </div>
    </span>
  </span>
</template>

<style lang="css" scoped>
.temp:after {
  position: absolute;
  left: 20%;
  top: -10px;
  content: '';
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #000000;
}
</style>

<script lang="ts">
import Vue from 'vue'
import ZButton from '@/components/ZButton'

export default Vue.extend({
  components: { ZButton },
  name: 'ZNavMenu',
  props: {},
  data() {
    return {
      isDropdownOpen: false
    }
  },
  methods: {}
})
</script>
