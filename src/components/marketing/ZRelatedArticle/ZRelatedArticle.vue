<template>
  <span class="grid grid-cols-12 py-3">
    <span class="col-span-10 mb-2 block text-vanilla-200 text-lg font-medium leading-9">
      <slot name="heading"></slot>
    </span>
    <span class="flex items-center col-span-10 text-sm font-medium uppercase text-juniper">
      <slot name="link"></slot>
      <z-icon color="juniper" class="ml-1" size="small" icon="arrow-right"></z-icon>
    </span>
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
import ZIcon from '../../ZIcon'

export default Vue.extend({
  name: 'ZRelatedArticle',
  components: {
    ZIcon
  }
})
</script>
