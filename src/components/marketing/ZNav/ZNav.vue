<template>
  <nav
    class="sticky z-1000 top-0 lg:backdrop-blur bg-ink-400 lg:bg-opacity-25 text-vanilla-100 h-16 flex items-center"
  >
    <div class="flex items-center w-screen mx-auto" :class="[`${CONTAINERS[container].classes}`]">
      <div v-if="$slots.logo" class="flex items-center">
        <slot name="logo"></slot>
      </div>
      <span
        class="absolute lg:static lg:flex items-center lg:w-full"
        :class="[`${showHamburderMenu ? '' : 'hidden'}`]"
      >
        <div
          v-if="$slots.menu"
          class="lg:flex flex-1 items-center mx-4"
          :class="[`${MENU_ITEMS_ALIGNMENT[menuItemsAlign].classes}`]"
        >
          <slot name="menu"></slot>
        </div>
        <div v-if="$slots.cta" class="lg:flex items-center">
          <slot name="cta"></slot>
        </div>
      </span>

      <span @click="toggleHamburgerMenu()" class="lg:hidden ml-auto cursor-pointer">
        <z-icon icon="menu"></z-icon>
      </span>
    </div>
  </nav>
</template>

<script lang="ts">
import ZIcon from '@/components/ZIcon/ZIcon.vue'
import Vue from 'vue'

const CONTAINERS = {
  sm: { text: 'sm', classes: 'px-4 lg:px-0 lg:max-w-5xl' },
  md: { text: 'md', classes: 'px-4 lg:px-0 lg:max-w-6xl' },
  lg: { text: 'lg', classes: 'px-4 lg:px-0 lg:max-w-7xl' }
}

const MENU_ITEMS_ALIGNMENT = {
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
      validator: (container) => Object.keys(CONTAINERS).includes(container)
    },
    menuItemsAlign: {
      type: String,
      default: MENU_ITEMS_ALIGNMENT.center.text,
      validator: (align) => Object.keys(MENU_ITEMS_ALIGNMENT).includes(align)
    }
  },
  data() {
    return {
      showHamburderMenu: false,
      CONTAINERS,
      MENU_ITEMS_ALIGNMENT
    }
  },
  methods: {
    toggleHamburgerMenu() {
      this.showHamburderMenu = !this.showHamburderMenu
    }
  }
})
</script>
