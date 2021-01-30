<template>
  <div class="z-tab-pane" :key="Math.random().toString(36).substring(7)">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ZTabPane'
}
</script>
