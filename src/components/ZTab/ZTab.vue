<template>
  <button
    role="tab"
    :aria-selected="selected"
    @click="action && action()"
    class="inline-flex items-end gap-2 pb-3 px-1 text-sm leading-none outline-none z-nav-item focus:outline-none border-b-2"
    :disabled="disabled"
    :class="{
      'text-vanilla-100 border-juniper': isActive && !disabled,
      'text-vanilla-400 border-transparent hover:border-ink-100': !isActive && !disabled,
      'text-slate cursor-not-allowed border-transparent': disabled
    }"
  >
    <z-icon
      v-if="icon"
      :icon="icon"
      size="small"
      :color="isActive && !disabled ? 'vanilla-100' : 'vanilla-400'"
    ></z-icon>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import ZIcon from '../ZIcon/ZIcon.vue'

export default Vue.extend({
  name: 'ZTab',
  components: {
    ZIcon
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    action: {
      type: Function
    }
  },
  computed: {
    selected(): string {
      return String(this.isActive)
    }
  }
})
</script>
