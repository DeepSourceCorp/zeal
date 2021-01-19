<template>
  <nav
    class="sticky z-1000 top-0 lg:backdrop-blur bg-ink-400 lg:bg-opacity-25 text-vanilla-100 h-16 flex items-center"
  >
    <div class="flex items-center w-screen mx-auto" :class="[`${CONTAINERS[container].classes}`]">
      <div v-if="$slots.brand" class="flex items-center">
        <slot name="brand"></slot>
      </div>
      <span class="lg:static hidden lg:flex items-center lg:w-full">
        <div
          v-if="$slots['desktop-menu']"
          class="lg:flex flex-1 items-center mx-4"
          :class="[`${MENU_ITEMS_ALIGNMENT[menuItemsAlign].classes}`]"
        >
          <slot name="desktop-menu"></slot>
        </div>
        <div v-if="$slots['desktop-cta']" class="lg:flex items-center">
          <slot name="desktop-cta"></slot>
        </div>
      </span>
      <span @click="toggleHamburgerMenu()" class="lg:hidden ml-auto cursor-pointer">
        <z-icon icon="menu"></z-icon>
      </span>
    </div>
    <aside
      class="lg:hidden bg-ink-400 transform top-0 right-0 w-full fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="[`${isHamburgerMenuVisible ? 'translate-x-0' : 'translate-x-full'}`]"
    >
      <span class="flex items-center justify-end px-4 h-16 border-b">
        <span @click="toggleHamburgerMenu()" class="cursor-pointer">
          <z-icon icon="x"></z-icon>
        </span>
      </span>
      <div
        v-if="$slots['mobile-menu']"
        class="lg:flex flex-1 items-center mx-4"
        :class="[`${MENU_ITEMS_ALIGNMENT[menuItemsAlign].classes}`]"
      >
        <slot name="mobile-menu"></slot>
      </div>
      <div v-if="$slots['mobile-cta']" class="lg:flex items-center">
        <slot name="mobile-cta"></slot>
      </div>
    </aside>
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
      isHamburgerMenuVisible: false,
      CONTAINERS,
      MENU_ITEMS_ALIGNMENT
    }
  },
  methods: {
    toggleHamburgerMenu() {
      this.isHamburgerMenuVisible = !this.isHamburgerMenuVisible
    }
  }
})
</script>
