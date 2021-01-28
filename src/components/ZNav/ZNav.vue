<template>
  <div class="z-nav gap-3 overflow-auto flex flex-nowrap">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ZTabList'
})
</script>
