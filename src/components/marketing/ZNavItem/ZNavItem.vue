<template>
  <z-button class="px-6 hover:bg-ink-300" :to="to" type="link">
    <slot></slot>
  </z-button>
</template>

<script lang="ts">
import Vue from 'vue'
import ZButton from '@/components/ZButton'

export default Vue.extend({
  components: { ZButton },
  name: 'ZNavItem',
  props: {
    to: {
      default: '',
      type: String
    }
  }
})
</script>
