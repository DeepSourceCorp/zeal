<template>
  <li class="flex items-center pb-3 cursor-pointer hover:text-juniper text-sm">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ZNavListItem'
})
</script>