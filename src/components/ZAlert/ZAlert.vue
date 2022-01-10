<template>
  <div
    v-if="isVisible"
    class="px-4 rounded-md bg-opacity-10"
    :class="[bgColor, borderClass, dismissible ? 'py-2' : 'py-4']"
  >
    <div class="flex items-center" :class="{ 'py-px': !dismissible }">
      <div
        ref="text-container"
        class="flex-grow text-sm text-container"
        :class="[textColor, height > 32 ? 'py-2' : 'py-0']"
      >
        <slot />
      </div>

      <z-button
        v-if="dismissible"
        button-type="ghost"
        icon="x"
        :color="colors[type]"
        size="small"
        class="flex-shrink-0 hover:bg-opacity-0 place-self-start"
        @click="isVisible = false"
      />
    </div>

    <slot name="code-snippet" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import ZButton from '../ZButton/ZButton.vue'

export default Vue.extend({
  name: 'ZAlert',
  components: {
    ZButton
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
        return ['top', 'right', 'bottom', 'left', undefined].includes(val)
      },
      default: undefined
    }
  },
  data: function () {
    return {
      isVisible: true,
      height: 0,
      colors: {
        info: 'robin',
        warning: 'honey',
        danger: 'cherry'
      },
      observer: {} as ResizeObserver
    }
  },

  /**
   * Mouted hook for Vue component
   *
   * @returns {void}
   */
  mounted() {
    // Initialize the observer on mount
    this.initObserver()
  },

  /**
   * beforeDestroy hook for Vue component
   *
   * @returns {void}
   */
  beforeDestroy() {
    // Unobserve before destroy
    if (this.observer) {
      this.observer.unobserve(this.$refs['text-container'] as HTMLElement)
    }
  },
  methods: {
    /**
     * Callback function passed to ResizeObserver instance
     *
     * @returns {void}
     */
    onResize() {
      this.height = (this.$refs['text-container'] as HTMLElement).offsetHeight
    },

    /**
     * Initialize observer
     *
     * @returns {void}
     */
    initObserver() {
      const observer = new ResizeObserver(this.onResize)
      observer.observe(this.$refs['text-container'] as HTMLElement)
      this.observer = observer
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

<style scoped>
.text-container::first-line {
  line-height: 1;
}
</style>
