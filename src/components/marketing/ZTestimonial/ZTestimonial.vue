<template>
  <div
    class="rounded-xl overflow-hidden transition-all shadow flex flex-col h-full p-4"
  >
    <div class="text-vanilla-100 flex-1 mb-6 pr-2" v-if="$slots.body">
      <slot name="body"> </slot>
    </div>
    <div class="text-vanilla-400 text-sm" v-if="$slots.footer">
      <slot name="footer"> </slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ZScrollSpy',
  props: {
  },
  data() {
    return {}
  }
})
</script>
