<template>
  <div class="flex">
    <div class="relative flex items-center p-2 rounded-tl-sm rounded-bl-sm outline-none" :class="addonBgColor">
      <slot name="addon">
        {{ prefix }}
      </slot>
    </div>
    <z-input v-bind="$attrs" class="rounded-tl-none rounded-bl-none" @on="$listeners" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import ZInput from '../ZInput'

export default Vue.extend({
  name: 'ZInputGroup',
  components: {
    ZInput
  },
  props: {
    prefix: {
      type: String,
      default: ''
    },
    addonBgColor: {
      type: String,
      default: 'bg-ink-200'
    }
  }
})
</script>
