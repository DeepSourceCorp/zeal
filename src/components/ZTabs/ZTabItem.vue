<template>
  <div
    :key="
      Math.random()
        .toString(36)
        .substring(7)
    "
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ZTabItem'
})
</script>
