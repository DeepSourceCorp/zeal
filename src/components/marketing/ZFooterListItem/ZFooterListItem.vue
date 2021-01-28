<template>
  <li
    class="flex items-center pt-2 pb-1 text-sm whitespace-nowrap"
    :class="[`${hoverColor && `hover:text-${hoverColor}`}`, `${cursorPointer && 'cursor-pointer'}`]"
  >
    <slot></slot>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ZNavListItem',
  props: {
    hoverColor: {
      type: String,
      default: 'juniper'
    },
    cursorPointer: {
      type: Boolean,
      default: true
    }
  }
})
</script>
