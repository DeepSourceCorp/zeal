<template>
  <div v-if="isVisible">
    <!-- Mobile layout -->
    <div
      class="flex md:hidden flex-row justify-between rounded-md bg-opacity-10 px-4 py-2"
      :class="[bgColor, borderClass]"
    >
      <div :class="{ 'space-y-3': $slots.controls || sourceCodeMarkup }">
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
      class="hidden md:block rounded-md bg-opacity-10"
      :class="[bgColor, borderClass, sourceCodeMarkup ? 'px-4 py-2' : '']"
    >
      <div
        class="flex items-center justify-between"
        :class="[sourceCodeMarkup ? '' : 'px-4 py-2']"
        :style="!sourceCodeMarkup && 'min-height: 49px'"
      >
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
      type: String
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
