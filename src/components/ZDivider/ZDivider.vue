<template>
  <div
    :class="['z-divider', `z-divider--${direction}`]"
    class="relative block h-px w-full my-6 mx-0 bg-ink-100"
  >
    <div class="z-divider--content" v-if="direction !== 'vertical'"><slot></slot></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ZDivider',
  props: {
    direction: {
      default: 'horizontal',
      type: String
    }
  }
}
</script>

<style lang="css" scoped>
.z-divider--vertical {
  @apply inline-block w-px h-4 my-0 mx-2 align-middle;
}
</style>
