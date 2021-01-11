<template>
  <div
    class="rounded-xl overflow-hidden transition-all shadow flex flex-col h-full px-10 py-8"
  >
    <div class="text-vanilla-100 text-xl flex-1 mb-6 pr-2" v-if="$slots.body">
      <slot name="body"> </slot>
    </div>
    <div class="text-vanilla-400 text-lg" v-if="$slots.footer">
      <slot name="footer"> </slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ZTestimonial',
  props: {
  },
  data() {
    return {}
  }
})
</script>
