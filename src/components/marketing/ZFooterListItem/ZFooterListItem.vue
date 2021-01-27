<template>
  <li
    class="flex items-center py-2 text-sm"
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
