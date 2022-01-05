<template>
  <div
    v-if="isVisible"
    class="flex flex-col px-4 py-2 rounded-md min-h-13 bg-opacity-10"
    :class="[bgColor, borderClass]"
  >
    <div class="inline-flex items-center justify-between">
      <div class="flex-grow text-sm min-h-8" :class="textColor">
        <slot />
      </div>

      <z-icon
        v-if="dismissible"
        icon="x"
        :color="colors[type]"
        size="small"
        class="cursor-pointer"
        @click="isVisible = false"
      />
    </div>

    <div>
      <slot name="code-snippet" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import ZIcon from '../ZIcon/ZIcon.vue'

export default Vue.extend({
  name: 'ZAlert',
  components: {
    ZIcon
  },
  props: {
    type: {
      type: String,
      required: true,
      validator(val) {
        return ['info', 'warning', 'danger'].includes(val)
      }
    },
    dismissible: {
      type: Boolean,
      required: false,
      default: false
    },
    border: {
      type: String,
      required: false,
      validator(val) {
        return ['top', 'right', 'bottom', 'left'].includes(val)
      },
      default: undefined
    }
  },
  data: function () {
    return {
      isVisible: true,
      colors: {
        info: 'robin',
        warning: 'honey',
        danger: 'cherry'
      }
    }
  },
  computed: {
    bgColor(): string {
      const bgColors = {
        info: 'bg-robin',
        warning: 'bg-honey',
        danger: 'bg-cherry'
      }
      return bgColors[this.type]
    },
    borderClass(): string | string[] {
      if (!this.border) {
        return ''
      }
      const borderTypes = {
        top: 'border-t',
        right: 'border-r',
        bottom: 'border-b',
        left: 'border-l'
      }
      const borderColors = {
        info: 'border-robin',
        warning: 'border-honey',
        danger: 'border-cherry'
      }
      return [borderTypes[this.border], borderColors[this.type], 'border-opacity-20']
    },
    textColor(): string {
      const textColors = {
        info: 'text-robin-400',
        warning: 'text-honey-400',
        danger: 'text-cherry-400'
      }
      return textColors[this.type]
    }
  }
})
</script>
