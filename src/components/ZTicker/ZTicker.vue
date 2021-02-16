<template>
  <div class="z-indicator flex items-center">
    <z-icon icon="ticker"></z-icon>
    <slot name="content"></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ZIcon from '@/components/ZIcon/ZIcon.vue'

export default Vue.extend({
  name: 'ZTicker',
  components: {
    ZIcon 
  },
  props: {
    value: {
        type: [String, Number],
        default: 100
    },
    type: {
        type: String,
        default: 'increase'
    }
  }
  
})
</script>
