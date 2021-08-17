<template>
  <span
    :class="[`${backgroundColor && `bg-${backgroundColor}`}`, `${textColor && `text-${textColor}`}`]"
    class="inline-block px-2 text-sm uppercase rounded-sm"
  >
    <slot>Page Label</slot>
  </span>
</template>

<script lang="ts">
export default {
  name: 'ZPageLabel',
  props: {
    backgroundColor: {
      default: 'gradient-dawn',
      type: String
    },
    textColor: {
      default: 'vanilla-100',
      type: String
    }
  }
}
</script>
