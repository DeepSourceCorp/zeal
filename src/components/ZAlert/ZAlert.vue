<template>
  <div
    v-if="isVisible"
    class="
              flex
              items-center
              justify-between
              rounded-md
              px-4 py-2
              bg-opacity-10
            "
    :class="[bgColor, borderClass]"
    style="min-height: 49px"
  >
    <div class="text-sm" :class="textColor">
      <slot />
    </div>

    <div class="flex items-center space-x-2">
      <div class="flex space-x-2">
        <slot name="controls" />
      </div>

      <div v-if="dismissible">
        <z-icon icon="x" :color="colors[type]" size="small" class="cursor-pointer" @click="isVisible = false" />
      </div>
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
      }
    }
  },
  data: function() {
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
      return `bg-${this.colors[this.type]}`
    },
    borderClass(): string | string[] {
      return this.border ? [`border-${this.border[0]}`, `border-${this.colors[this.type]}`, 'border-opacity-20'] : ''
    },
    textColor(): string {
      return `text-${this.colors[this.type]}-400`
    }
  }
})
</script>
