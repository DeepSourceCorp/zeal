<template>
  <ul :class="[SLOT_PADDING]">
    <li v-if="$slots.heading" class="leading-3 font-semibold pb-8 uppercase text-sm text-vanilla-400">
      <slot name="heading"></slot>
    </li>
    <span class="text-vanilla-300" :class="[ARRANGEMENT[arrange].classes]">
      <slot></slot>
    </span>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
const SLOT_PADDING = 'px-6'
const ARRANGEMENT = {
  vertical: {
    text: 'vertical',
    classes: ''
  },
  horizontal: {
    text: 'horizontal',
    classes: 'flex flex-wrap'
  }
}
export default Vue.extend({
  name: 'ZFooterList',
  data() {
    return {
      ARRANGEMENT,
      SLOT_PADDING
    }
  },
  props: {
    arrange: {
      type: String,
      default: ARRANGEMENT.vertical.text,
      validator: (arrange) => Object.keys(ARRANGEMENT).includes(arrange)
    }
  }
})
</script>