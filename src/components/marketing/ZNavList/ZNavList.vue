<template>
  <ul :class="[SLOT_PADDING]">
    <li v-if="$slots.heading" class="px-4 pt-2 pb-4 uppercase text-sm text-vanilla-400">
      <slot name="heading"></slot>
    </li>
    <span :class="[ARRANGEMENT[arrange].classes]">
      <slot></slot>
    </span>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

const SLOT_PADDING = 'p-2'

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
  name: 'ZNavList',
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
