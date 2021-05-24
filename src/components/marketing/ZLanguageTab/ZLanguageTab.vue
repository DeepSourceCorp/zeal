<template>
  <div class="flex flex-col h-28 text-center">
    <button
      role="tab"
      :aria-selected="selected"
      @click="action && action()"
      class="inline-flex items-center justify-center gap-2 pb-3 px-1 text-sm leading-none outline-none z-nav-item focus:outline-none opacity-50"
      :disabled="disabled"
      :class="{
        'opacity-100': isActive && !disabled
      }"
    >
      <z-icon
        v-if="lang"
        class="w-14 h-14"
        :icon="lang"
        :class="{
          'w-16 h-16': isActive && !disabled
        }"
      ></z-icon>
      <slot></slot>
    </button>
    <span v-if="isActive && !disabled" class="uppercase tracking-widest">{{ lang }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ZIcon from '../../ZIcon/ZIcon.vue'

export default Vue.extend({
  name: 'ZLanguageTab',
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
    lang: {
      type: String,
      default: 'python'
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
