<template>
  <div class="z-tab-item" :key="Math.random().toString(36).substring(7)">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ZTabItem'
}
</script>
