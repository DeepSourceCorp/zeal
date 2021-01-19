<template>
  <nav
    class="z-1000 sticky flex items-center bg-ink-400 lg:bg-opacity-25 text-vanilla-100 top-0 border-b lg:backdrop-blur h-16"
    :class="[`${yScrollValue > MAX_Y_SCROLL_VALUE ? 'border-slate' : 'lg:border-0'}`]"
  >
    <div
      class="flex items-center w-screen lg:mx-auto"
      :class="[`${CONTAINERS[container].classes}`]"
    >
      <!-- Brand -->
      <div v-if="$slots.brand" class="flex items-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-auto h-full">
        <slot name="brand"></slot>
      </div>

      <!-- Desktop Menu and CTA -->
      <span class="hidden lg:static lg:flex items-center lg:w-full">
        <div
          v-if="$slots['desktop-menu']"
          class="lg:flex flex-1 items-center mx-4"
          :class="[`${MENU_ALIGNMENT[menuAlign].classes}`]"
        >
          <slot name="desktop-menu"></slot>
        </div>
        <div v-if="$slots['desktop-cta']" class="lg:flex items-center">
          <slot name="desktop-cta"></slot>
        </div>
      </span>

      <!-- Hamburger Button -->
      <span @click="toggleDrawer()" class="lg:hidden ml-auto cursor-pointer">
        <z-icon icon="menu"></z-icon>
      </span>
    </div>

    <!-- Mobile Drawer Menu -->
    <aside
      class="fixed lg:hidden bg-ink-300 transform top-0 right-0 w-full h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="[`${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`]"
    >
      <!-- Cross Button -->
      <span class="flex items-center justify-end border-b border-ink-200 h-16 px-4">
        <span @click="toggleDrawer()" class="cursor-pointer">
          <z-icon icon="x"></z-icon>
        </span>
      </span>

      <!-- Menu -->
      <div v-if="$slots['mobile-menu']" class="border-b border-ink-200 p-4">
        <slot name="mobile-menu"></slot>
      </div>

      <!-- CTA -->
      <div v-if="$slots['mobile-cta']" class="flex flex-col p-4">
        <slot name="mobile-cta"></slot>
      </div>
    </aside>
  </nav>
</template>

<script lang="ts">
import ZIcon from '@/components/ZIcon/ZIcon.vue'
import Vue from 'vue'

const CONTAINERS = {
  sm: { text: 'sm', classes: 'px-4 lg:max-w-5xl' },
  md: { text: 'md', classes: 'px-4 lg:max-w-6xl' },
  lg: { text: 'lg', classes: 'px-4 lg:max-w-7xl' }
}

const MENU_ALIGNMENT = {
  left: { text: 'left', classes: 'justify-start' },
  center: { text: 'center', classes: 'justify-center' },
  right: { text: 'right', classes: 'justify-end' }
}

const MAX_Y_SCROLL_VALUE = 50

export default Vue.extend({
  components: { ZIcon },
  name: 'ZNav',
  props: {
    container: {
      type: String,
      default: CONTAINERS.md.text,
      validator: (size) => Object.keys(CONTAINERS).includes(size)
    },
    menuAlign: {
      type: String,
      default: MENU_ALIGNMENT.center.text,
      validator: (alignment) => Object.keys(MENU_ALIGNMENT).includes(alignment)
    }
  },
  data() {
    return {
      isDrawerOpen: false,
      yScrollValue: 0,
      CONTAINERS,
      MENU_ALIGNMENT,
      MAX_Y_SCROLL_VALUE
    }
  },
  mounted() {
    window.onscroll = () => {
      this.yScrollValue = window.scrollY
    }
  },
  methods: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen
    }
  }
})
</script>
