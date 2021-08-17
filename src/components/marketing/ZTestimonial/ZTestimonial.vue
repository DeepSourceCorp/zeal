<template>
  <div
    class="
      rounded-sm
      md:rounded-md
      overflow-hidden
      transition-all
      shadow
      flex flex-col
      justify-around
      h-full
      px-5
      py-4
      md:px-10 md:py-8
    "
  >
    <div class="flex-1" v-if="$slots.image">
      <slot name="image"> </slot>
    </div>
    <span class="flex-1">
      <div class="text-vanilla-100 text-md md:text-xl mb-6 pr-2" v-if="$slots.body">
        <slot name="body"> </slot>
      </div>
      <div class="text-vanilla-400 text-md md:text-lg" v-if="$slots.footer">
        <slot name="footer"> </slot>
      </div>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ZTestimonial'
})
</script>
