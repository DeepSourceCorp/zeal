<template>
  <div class="z-card">
    <div class="z-card__header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="z-card__body" v-if="$slots.body">
      <slot name="body"></slot>
    </div>
    <div class="z-card__footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ZCard'
}
</script>

<style lang="css" scoped>
.z-card {
  @apply text-vanilla-100 rounded-md overflow-hidden transition-all shadow;
}
</style>
