<template>
  <footer
    class="w-screen flex flex-col justify-between bg-transparent text-vanilla-100 border-t border-slate min-h-102 pb-10 pt-20"
  >
    <div
      class="md:flex items-start w-screen lg:mx-auto"
      :class="[`${CONTAINERS[container].classes}`]"
    >
      <!-- Brand -->
      <div v-if="$slots.brand" :class="[X_PADDING]">
        <slot name="brand"></slot>
      </div>

      <span class="hidden md:flex items-start w-full">
        <div
          v-if="$slots['desktop-menu']"
          class="flex flex-1 flex-nowrap md:flex-wrap lg:flex-nowrap items-start mx-4"
        >
          <slot name="desktop-menu"></slot>
        </div>
        <div
          v-if="$slots['desktop-extras']"
          class="flex items-start flex-wrap"
          :class="[X_PADDING]"
        >
          <slot name="desktop-extras"></slot>
        </div>
      </span>

      <span class="block md:hidden w-full">
        <div v-if="$slots['mobile-menu']" class="block">
          <slot name="mobile-menu"></slot>
        </div>
        <div v-if="$slots['mobile-extras']" :class="[X_PADDING]">
          <slot name="mobile-extras"></slot>
        </div>
      </span>
    </div>
    <div
      class="flex flex-col-reverse md:flex-row items-center justify-between w-screen md:mx-auto text-vanilla-400 text-sm"
      :class="[`${CONTAINERS[container].classes}`, X_PADDING]"
    >
      <div v-if="$slots.copyright">
        <slot name="copyright"></slot>
      </div>
      <div v-if="$slots['company']">
        <slot name="company"></slot>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

const X_PADDING = 'px-6 md:px-4 lg:px-6'
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
      CONTAINERS,
      X_PADDING
    }
  }
})
</script>
