<template>
  <div class="flex items-center outline-none relative">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ZInputAddon'
})
</script>
