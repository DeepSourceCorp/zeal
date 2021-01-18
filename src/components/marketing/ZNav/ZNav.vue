<template>
  <nav
    class="sticky z-1000 top-0 backdrop-blur bg-ink-400 bg-opacity-25 text-vanilla-100 h-16 flex items-center"
  >
    <div class="flex items-center w-screen mx-auto" :class="[`${CONTAINERS[container].classes}`]">
      <div v-if="$slots.logo" class="h-10">
        <slot name="logo"></slot>
      </div>
      <div
        v-if="$slots.menu"
        class="flex flex-1 items-center mx-4"
        :class="[`${MENU_ITEMS_ALIGNMENT[menuItemsAlign].classes}`]"
      >
        <slot name="menu"></slot>
      </div>
      <div v-if="$slots.cta" class="flex items-center">
        <slot name="cta"></slot>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

const CONTAINERS = {
  sm: { text: 'sm', classes: 'max-w-5xl' },
  md: { text: 'md', classes: 'max-w-6xl' },
  lg: { text: 'lg', classes: 'max-w-7xl' }
}

const MENU_ITEMS_ALIGNMENT = {
  left: { text: 'left', classes: 'justify-start' },
  center: { text: 'center', classes: 'justify-center' },
  right: { text: 'right', classes: 'justify-end' }
}

export default Vue.extend({
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
      CONTAINERS,
      MENU_ITEMS_ALIGNMENT
    }
  }
})
</script>
