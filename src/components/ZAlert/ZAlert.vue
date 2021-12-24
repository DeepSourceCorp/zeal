<template>
  <div v-if="isVisible">
    <!-- Mobile layout -->
    <div
      class="flex flex-row justify-between px-4 py-2 rounded-md md:hidden bg-opacity-10"
      :class="[bgColor, borderClass, { 'min-h-13 items-center': !hasMultipleElements }]"
    >
      <div :class="{ 'space-y-3': hasMultipleElements }">
        <p class="text-sm" :class="textColor">
          <slot />
        </p>

        <div v-if="sourceCodeMarkup">
          <z-code :content="sourceCodeMarkup" />
        </div>

        <div>
          <slot name="controls" />
        </div>
      </div>

      <div v-if="dismissible">
        <z-icon icon="x" :color="colors[type]" size="small" class="cursor-pointer" @click="isVisible = false" />
      </div>
    </div>

    <!-- Medium screens and above -->
    <div
      class="hidden rounded-md md:block bg-opacity-10"
      :class="[bgColor, borderClass, sourceCodeMarkup ? 'px-4 py-2' : '']"
    >
      <div class="flex items-center justify-between" :class="{ 'px-4 py-2 min-h-13': !sourceCodeMarkup }">
        <p class="text-sm" :class="textColor">
          <slot />
        </p>

        <div class="flex items-center space-x-2">
          <div class="inline-flex space-x-2">
            <slot name="controls" />
          </div>

          <div v-if="dismissible">
            <z-icon icon="x" :color="colors[type]" size="small" class="cursor-pointer" @click="isVisible = false" />
          </div>
        </div>
      </div>

      <div v-if="sourceCodeMarkup">
        <z-code :content="sourceCodeMarkup" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import ZIcon from '../ZIcon/ZIcon.vue'
import ZCode from '../ZCode/ZCode.vue'

export default Vue.extend({
  name: 'ZAlert',
  components: {
    ZIcon,
    ZCode
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
    },
    sourceCodeMarkup: {
      type: String,
      required: false,
      default: undefined
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
    },
    // Apply classes conditionally based on the existence of multiple elements on smaller screens
    hasMultipleElements(): boolean {
      return Boolean(this.$slots.controls || this.sourceCodeMarkup)
    }
  }
})
</script>
