<template class="flex flex-row my-3">
  <div class="flex flex-row my-3">
    <div class="mr-2">
      <z-toggle v-model="model"></z-toggle>
    </div>
    <div class="space-y-2">
      <h5 class="leading-4">
        <slot name="title"></slot>
      </h5>
      <span class="text-xs" >
        <slot name="description"></slot>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ZToggle from '../../../ZToggle'



export default Vue.extend({
  name: 'ZScrollShowcaseItem',
  components: {
    ZToggle
  },
  props: {
    model: {
      type: Boolean,
      required: true
    }
  }
})
</script>
