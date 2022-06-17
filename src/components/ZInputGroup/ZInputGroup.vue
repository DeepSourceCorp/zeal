<template>
  <div class="flex">
    <span
      class="flex items-center px-2 rounded-tl-sm rounded-bl-sm outline-none whitespace-nowrap"
      :class="[addonBgColor, addonClasses]"
    >
      <slot name="addon">
        {{ prefix }}
      </slot>
    </span>
    <z-input v-bind="$attrs" class="border-l-0 rounded-tl-none rounded-bl-none" @on="$listeners" />
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
  },
  computed: {
    addonClasses(): string {
      const classMap = {
        'x-small': 'h-6 text-xs leading-loose',
        small: 'h-8 text-xs leading-loose',
        medium: 'h-10 text-sm leading-8',
        large: 'h-12 text-base leading-9',
        'x-large': 'h-13 text-lg leading-9',
        xlarge: 'h-13 text-lg leading-9'
      }

      return classMap[this.$attrs.size || 'medium']
    }
  }
})
</script>
