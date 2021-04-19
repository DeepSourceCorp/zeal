<template>
  <li class="flex items-center pt-2 pb-1 text-sm whitespace-nowrap">
    <span>{{ INDEX }}</span>
    <span class="mx-1" :class="[`${accentColor && `text-${accentColor}`}`]">—</span>
    <slot></slot>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
import { padNumber } from '../../../helpers/components/utils'

export default Vue.extend({
  name: 'ZContentCardItem',
  props: {
    accentColor: {
      type: String,
      default: 'juniper'
    },
    index: {
      type: Number,
      default: 1,
      validator: (value) => value > 0 && value < 10
    }
  },
  data() {
    return {
      INDEX: padNumber(this.index)
    }
  }
})
</script>
