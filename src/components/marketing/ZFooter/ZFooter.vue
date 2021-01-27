<template>
  <footer
    class="absolute bottom-0 w-screen flex flex-col justify-between bg-transparent text-vanilla-100 border-t border-slate min-h-102 py-10"
  >
    <div
      class="flex items-start w-screen lg:mx-auto px-4"
      :class="[`${CONTAINERS[container].classes}`]"
    >
      <!-- Brand -->
      <div v-if="$slots.brand" class="flex w-20">
        <slot name="brand"></slot>
      </div>

      <span class="hidden lg:flex items-start w-full">
        <div v-if="$slots['desktop-menu']" class="flex flex-1 items-start mx-4">
          <slot name="desktop-menu"></slot>
        </div>
        <div v-if="$slots['desktop-cta']" class="flex items-start justify-end">
          <slot name="desktop-cta"></slot>
        </div>
      </span>

      <span class="block lg:hidden w-full">
        <div v-if="$slots['mobile-menu']" class="block border-b border-ink-200">
          <slot name="mobile-menu"></slot>
        </div>
        <div v-if="$slots['mobile-cta']" class="flex flex-col px-4 py-3">
          <slot name="mobile-cta"></slot>
        </div>
      </span>
    </div>
    <div
      class="flex items-center justify-between w-screen lg:mx-auto px-4 text-vanilla-400 text-sm"
      :class="[`${CONTAINERS[container].classes}`]"
    >
      <div v-if="$slots.copyright">
        <slot name="copyright"></slot>
      </div>
      <div v-if="$slots['additional-info']">
        <slot name="additional-info"></slot>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
const CONTAINERS = {
  sm: { text: 'sm', classes: 'lg:max-w-5xl' },
  md: { text: 'md', classes: 'lg:max-w-6xl' },
  lg: { text: 'lg', classes: 'lg:max-w-7xl' }
}

export default Vue.extend({
  components: {},
  name: 'ZFooter',
  props: {
    container: {
      type: String,
      default: CONTAINERS.md.text,
      validator: (size) => Object.keys(CONTAINERS).includes(size)
    }
  },
  data() {
    return {
      CONTAINERS
    }
  }
})
</script>
