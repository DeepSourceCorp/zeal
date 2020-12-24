<template>
  <span
    ref="page-label"
    :class="[`${color && `z-gradient--${color}`}`]"
    class="inline-block px-2 text-sm text-vanilla-100 uppercase rounded-sm"
  >
    {{ labelHasClass }}
    <slot>Page Label</slot>
  </span>
</template>

<script lang="ts">
export default {
  name: 'ZPageLabel',
  props: {
    color: {
      type: String,
      default: 'alpha'
    }
  },
  computed: {
    labelHasClass: function(): boolean {
      console.log(this.$refs)
      return true
    }
  }
}
</script>

<style lang="css" scoped>
/* Gradient - Alpha */
.z-gradient--alpha {
  @apply bg-gradient-to-br from-alpha-begin to-alpha-end;
}
</style>
