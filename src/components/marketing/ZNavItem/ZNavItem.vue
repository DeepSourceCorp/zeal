<template>
  <span class="text-vanilla-100">
    <z-button v-if="type === TYPES.button" class="px-4 py-2 hover:bg-ink-300" :to="to" buttonType="secondary">
      <slot></slot>
    </z-button>
    <span
      v-if="type === TYPES.none"
      class="flex items-center cursor-pointer px-4 py-3 bg-ink-300 hover:opacity-75 select-none font-semibold w-full"
    >
      <span class="flex flex-1">
        <slot></slot>
      </span>
    </span>
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
import ZButton from '@/components/ZButton'

const TYPES = {
  button: 'button',
  none: 'none'
}

export default Vue.extend({
  components: { ZButton },
  name: 'ZNavItem',
  props: {
    to: {
      default: '',
      type: String
    },
    type: {
      type: String,
      default: TYPES.none,
      validator: (type) => Object.keys(TYPES).includes(type)
    }
  },
  data() {
    return {
      TYPES
    }
  }
})
</script>
