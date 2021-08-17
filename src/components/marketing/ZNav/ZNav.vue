<template>
  <nav
    class="z-1000 sticky flex items-center bg-ink-400 text-vanilla-100 top-0 border-b border-ink-200 h-16"
    :class="[
      `${isScrolling || isUserOnTop ? 'lg:backdrop-blur lg:bg-opacity-25' : ''}`,
      `${isUserOnTop && 'lg:border-0'}`
    ]"
  >
    <div class="flex items-center w-screen lg:mx-auto px-4" :class="[`${CONTAINERS[container].classes}`]">
      <!-- Brand -->
      <div v-if="$slots.brand" class="flex items-center">
        <slot name="brand"></slot>
      </div>

      <!-- Desktop Menu and CTA -->
      <span class="hidden lg:flex items-center w-full">
        <div
          v-if="$slots['desktop-menu']"
          class="flex flex-1 items-center mx-4"
          :class="[`${MENU_ALIGNMENT[menuAlign].classes}`]"
        >
          <span :class="[`${hideMenuOnScroll && !isUserOnTop ? 'hidden' : ''}`]">
            <slot name="desktop-menu"></slot>
          </span>
        </div>
        <div v-if="$slots['desktop-cta']" class="flex items-center">
          <slot name="desktop-cta"></slot>
        </div>
      </span>

      <!-- Hamburger Button -->
      <span @click="toggleDrawer()" class="lg:hidden ml-auto cursor-pointer">
        <z-icon size="medium" icon="menu"></z-icon>
      </span>
    </div>

    <!-- Mobile Drawer Menu -->
    <!-- prettier-ignore -->
    <aside
      class="fixed lg:hidden bg-ink-300 transform top-0 right-0 w-full h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="[`${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`]"
    >
      <!-- Cross Button -->
      <span class="flex items-center justify-end border-b border-ink-200 h-16 px-4">
        <span @click="toggleDrawer()" class="cursor-pointer">
          <z-icon size="medium" icon="x"></z-icon>
        </span>
      </span>

      <!-- Menu -->
      <div v-if="$slots['mobile-menu']" class="border-b border-ink-200">
        <slot name="mobile-menu"></slot>
      </div>

      <!-- CTA -->
      <div v-if="$slots['mobile-cta']" class="flex flex-col px-4 py-3">
        <slot name="mobile-cta"></slot>
      </div>
    </aside>
  </nav>
</template>

<script lang="ts">
import ZIcon from '@/components/ZIcon/ZIcon.vue'
import Vue from 'vue'

const CONTAINERS = {
  sm: { text: 'sm', classes: 'lg:max-w-5xl' },
  md: { text: 'md', classes: 'lg:max-w-6xl' },
  lg: { text: 'lg', classes: 'lg:max-w-7xl' }
}

const MENU_ALIGNMENT = {
  left: { text: 'left', classes: 'justify-start' },
  center: { text: 'center', classes: 'justify-center' },
  right: { text: 'right', classes: 'justify-end' }
}

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
    },
    hideMenuOnScroll: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isDrawerOpen: false,
      isScrolling: false,
      isUserOnTop: true,
      scrollTimer: 0,
      CONTAINERS,
      MENU_ALIGNMENT
    }
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.handleScroll)
  },
  watch: {
    isScrolling() {
      this.scrollTimer = setTimeout(() => {
        this.isScrolling = false
      }, 1500)
    }
  },
  methods: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen
    },
    handleScroll() {
      this.isScrolling = true
      this.isUserOnTop = Boolean(!(window.scrollY > 50))
    }
  }
})
</script>
