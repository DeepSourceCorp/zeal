<template>
  <nav class="sticky top-0 backdrop-blur bg-ink-400 text-vanilla-100 h-16">
    <!-- Container -->
    <div class="grid grid-cols-3">
      <div>
        <slot name="logo">LOGO</slot>
      </div>
      <div>
        <slot name="menu">Menu Items</slot>
      </div>
      <div>
        <slot name="cta">CTAs</slot>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ZNav'
})
</script>
