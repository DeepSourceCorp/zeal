<template>
  <div :key="Math.random().toString(36).substring(7)">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ZTabItem'
}
</script>
