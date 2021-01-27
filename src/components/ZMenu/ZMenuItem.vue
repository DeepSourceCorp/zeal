<template>
  <div
    class="z-menu-item flex items-center gap-2 px-3 py-3 hover:bg-ink-100 leading-none outline-none focus:outline-none"
  >
    <z-icon v-if="icon" :icon="icon" size="small" color="vanilla-100"></z-icon>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import ZIcon from '../ZIcon/ZIcon.vue'

export default {
  name: 'ZMenuItem',
  components: {
    ZIcon
  },
  props: {
    icon: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    action: {
      type: Function
    }
  }
}
</script>
