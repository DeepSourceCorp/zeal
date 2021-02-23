<template>
  <div
    class="inline-flex items-center space-x-2 rounded-full justify-evenly text-vanilla-100"
    :class="[spacing, `text-${textSize}`, getBaseColor, `bg-${bgColor}`]"
  >
    <z-icon v-if="iconLeft" :icon="iconLeft" :size="size"></z-icon>
    <slot></slot>
    <z-icon v-if="iconRight" :icon="iconRight" :size="size"></z-icon>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ZIcon from '@/components/ZIcon'

export default Vue.extend({
  name: 'ZTag',
  components: {
    ZIcon
  },
  props: {
    state: {
      type: String,
      default: 'default',
      validator: function (value: string): boolean {
        return ['success', 'error', 'warning', 'info', 'default'].includes(value)
      }
    },
    iconLeft: {
      type: String
    },
    iconRight: {
      type: String
    },
    size: {
      type: String,
      default: 'small',
      validator: function (value: string): boolean {
        return ['small', 'large'].includes(value)
      }
    },
    bgColor: {
      default: 'ink-300',
      type: String
    },
    textSize: {
      default: 'sm',
      type: String
    },
    spacing: {
      type: String,
      default: 'py-1 px-4'
    }
  },
  computed: {
    getBaseColor(): string {
      const states: Record<string, string> = {
        success: 'border-2 border-solid border-juniper',
        default: '',
        info: 'border-2 border-solid border-aqua',
        warning: 'border-2 border-solid border-honey',
        error: 'border-2 border-solid border-cherry'
      }
      return states[this.state]
    }
  }
})
</script>
