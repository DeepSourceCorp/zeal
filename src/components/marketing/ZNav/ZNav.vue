<template>
  <nav
    class="sticky top-0 backdrop-blur bg-ink-400 bg-opacity-25 text-vanilla-100 h-16 flex items-center"
  >
    <!-- Container -->
    <div class="container mx-auto flex items-center w-screen">
      <div v-if="$slots.logo" class="h-10">
        <slot name="logo">LOGO</slot>
      </div>
      <div v-if="$slots.menu" class="flex flex-1 items-center justify-center">
        <slot name="menu">Menu Items</slot>
      </div>
      <div v-if="$slots.cta" class="flex items-center">
        <slot name="cta">CTAs</slot>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ZNav',
  props: {},
  data() {
    return {}
  }
})
</script>
