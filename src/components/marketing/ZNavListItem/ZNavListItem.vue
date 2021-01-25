<template>
  <li class="flex items-center px-4 py-2 cursor-pointer hover:text-juniper">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ZNavListItem'
})
</script>
